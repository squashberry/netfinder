import { useEffect,useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppStore } from '../../stores/useAppStore';
import { BottomNav } from './BottomNav';
import { Header } from './Header';
import { InstallPrompt } from '../common/InstallPrompt';
import { OfflineBanner } from '../common/OfflineBanner';
import { Toast } from '../common/Toast';
import { SplashScreen } from '../common/SplashScreen';
export function AppShell(){
 const [splash,setSplash]=useState(true);const settings=useAppStore(s=>s.settings);
 useEffect(()=>{document.documentElement.classList.toggle('light',!settings.darkMode)},[settings.darkMode]);
 return <div className="min-h-svh overflow-x-clip bg-[var(--bg)] text-[var(--text)]">{splash&&<SplashScreen onDone={()=>setSplash(false)}/>}<Header/><main className="mx-auto min-h-[calc(100svh-72px)] max-w-[1400px] px-0 pb-28 sm:px-4 md:pb-12 lg:px-8"><Outlet/></main><BottomNav/><InstallPrompt/><OfflineBanner/><Toast/></div>
}
