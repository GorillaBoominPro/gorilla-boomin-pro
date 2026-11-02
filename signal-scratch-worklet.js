/* SIGNAL DJ continuous bidirectional vinyl scratch processor (experimental).
   Receives a decoded audio buffer and a time-varying signed playback rate.
   Outputs the real track with interpolation and smoothed motor motion. */
class SignalScratchProcessor extends AudioWorkletProcessor {
 constructor(){
  super();this.channels=[];this.sourceRate=sampleRate;this.position=0;this.rate=0;this.target=0;this.level=0;this.enabled=false;this.lastMotion=0;
  this.port.onmessage=({data:m})=>{
   if(m.type==='buffer'){this.channels=m.channels;this.sourceRate=m.rate||sampleRate;}
   if(m.type==='start'){this.position=m.position*this.sourceRate;this.rate=0;this.target=0;this.level=0;this.enabled=true;this.lastMotion=currentTime;}
   if(m.type==='move'){this.lastMotion=currentTime;this.target=Math.max(-8,Math.min(8,m.rate));if(Number.isFinite(m.position))this.position=Math.max(0,Math.min(this.length-1,m.position*this.sourceRate));}
   if(m.type==='stop'){this.target=0;this.enabled=false;}
  };
 }
 get length(){return this.channels[0]?.length||0}
 process(inputs,outputs){
  const out=outputs[0];if(!out?.length)return true;
  const len=this.length,ratio=this.sourceRate/sampleRate;if(this.enabled&&currentTime-this.lastMotion>.055)this.target=0;
  for(let i=0;i<out[0].length;i++){
   this.rate+=(this.target-this.rate)*.013;
   this.level+=(this.enabled?1-this.level:-this.level)*.025;
   if(len>1){
    const pos=Math.max(0,Math.min(len-1.001,this.position));
    const ix=Math.floor(pos),frac=pos-ix;
    for(let ch=0;ch<out.length;ch++){const a=this.channels[Math.min(ch,this.channels.length-1)];out[ch][i]=((a[ix]||0)*(1-frac)+(a[ix+1]||0)*frac)*this.level;}
    this.position=Math.max(0,Math.min(len-1,this.position+this.rate*ratio));
   }else for(let ch=0;ch<out.length;ch++)out[ch][i]=0;
  }
  return true;
 }
}
registerProcessor('signal-scratch-processor',SignalScratchProcessor);
