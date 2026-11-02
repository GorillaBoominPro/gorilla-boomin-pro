/* SIGNAL DJ continuous bidirectional vinyl scratch processor (experimental).
   Receives a decoded audio buffer and a time-varying signed playback rate.
   Outputs the real track with interpolation and smoothed motor motion. */
class SignalScratchProcessor extends AudioWorkletProcessor {
 constructor(){
  super();this.channels=[];this.sourceRate=sampleRate;this.position=0;this.rate=0;this.target=0;this.level=0;this.enabled=false;this.lastMotion=0;this.requestedPosition=0;this.spinning=false;this.decay=.99975;
  this.port.onmessage=({data:m})=>{
   if(m.type==='buffer'){this.channels=m.channels;this.sourceRate=m.rate||sampleRate;}
   if(m.type==='start'){this.position=m.position*this.sourceRate;this.requestedPosition=this.position;this.rate=0;this.target=0;this.level=0;this.enabled=true;this.lastMotion=currentTime;this.spinning=false;}
   if(m.type==='move'){this.lastMotion=currentTime;this.target=Math.max(-8,Math.min(8,m.rate));if(Number.isFinite(m.position))this.requestedPosition=Math.max(0,Math.min(this.length-1,m.position*this.sourceRate));}
   if(m.type==='release'){this.spinning=Math.abs(this.rate)>1.2;this.decay=.99978;if(!this.spinning){this.enabled=false;this.target=0;this.port.postMessage({type:'released',position:this.position/this.sourceRate});}}
   if(m.type==='stop'){this.target=0;this.enabled=false;this.spinning=false;}
  };
 }
 get length(){return this.channels[0]?.length||0}
 process(inputs,outputs){
  const out=outputs[0];if(!out?.length)return true;
  const len=this.length,ratio=this.sourceRate/sampleRate;if(this.enabled&&!this.spinning&&currentTime-this.lastMotion>.09)this.target=0;
  for(let i=0;i<out[0].length;i++){
   if(this.spinning){this.rate*=this.decay;if(Math.abs(this.rate)<.035){this.spinning=false;this.enabled=false;this.target=0;this.port.postMessage({type:'released',position:this.position/this.sourceRate});}}else this.rate+=(this.target-this.rate)*.04;
   this.level+=(this.enabled?1-this.level:-this.level)*.025;
   if(len>1){
    const pos=Math.max(0,Math.min(len-1.001,this.position));
    const ix=Math.floor(pos),frac=pos-ix;
    for(let ch=0;ch<out.length;ch++){const a=this.channels[Math.min(ch,this.channels.length-1)];out[ch][i]=((a[ix]||0)*(1-frac)+(a[ix+1]||0)*frac)*this.level;}
    /* Never jump the read head on each mousemove: that causes click discontinuities. */
    const error=this.requestedPosition-this.position;
    const correction=this.spinning?0:Math.max(-.12,Math.min(.12,error/(sampleRate*.25)));
    this.position=Math.max(0,Math.min(len-1,this.position+(this.rate+correction)*ratio));
   }else for(let ch=0;ch<out.length;ch++)out[ch][i]=0;
  }
  return true;
 }
}
registerProcessor('signal-scratch-processor',SignalScratchProcessor);
