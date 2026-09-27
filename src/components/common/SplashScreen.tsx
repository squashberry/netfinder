import { useEffect,useState } from 'react';
export function SplashScreen({onDone}:{onDone:()=>void}){
 const [progress,setProgress]=useState(0);
 useEffect(()=>{const start=performance.now();let frame=0;const tick=(now:number)=>{const p=Math.min(100,((now-start)/650)*100);setProgress(p);if(p<100)frame=requestAnimationFrame(tick);else onDone()};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[onDone]);
 return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#09090b] text-white"><div className="w-full max-w-sm px-8 text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-[1.8rem] border border-white/10 bg-white text-2xl font-black tracking-[-.08em] text-black">NF</div><h1 className="mt-6 text-2xl font-bold tracking-[-.04em]">NETFINDER</h1><p className="mt-2 text-sm text-white/45">Find something worth watching.</p><div className="mx-auto mt-8 h-1 w-52 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-white transition-[width] duration-100" style={{width:progress+'%'}}/></div></div></div>
}
