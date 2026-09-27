import { WifiOff } from 'lucide-react';
import { useEffect,useState } from 'react';
export function OfflineBanner(){
 const [offline,setOffline]=useState(!navigator.onLine);
 useEffect(()=>{const on=()=>setOffline(false);const off=()=>setOffline(true);window.addEventListener('online',on);window.addEventListener('offline',off);return()=>{window.removeEventListener('online',on);window.removeEventListener('offline',off)}},[]);
 if(!offline)return null;
 return <div className="fixed left-1/2 top-[calc(4.25rem+env(safe-area-inset-top))] z-[75] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl border border-amber-200/10 bg-black/85 px-4 py-3 text-white shadow-2xl backdrop-blur-xl"><WifiOff size={17}/><div><p className="text-sm font-semibold">You're offline</p><p className="text-xs text-white/60">Some movie information may not be available until you're connected again.</p></div></div>
}
