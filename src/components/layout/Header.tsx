import { useEffect,useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { Bookmark,Compass,Home,Search,UserRound,Menu,X } from 'lucide-react';
const links=[{to:'/',label:'Home',icon:Home},{to:'/discover',label:'Discover',icon:Compass},{to:'/watchlist',label:'Watchlist',icon:Bookmark}];
export function Header(){
 const location=useLocation();const navigate=useNavigate();const [scrolled,setScrolled]=useState(false);const [mobileOpen,setMobileOpen]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>36);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
 return <header className={'sticky top-0 z-50 border-b border-transparent transition '+(scrolled?'border-black/5 bg-[color-mix(in_srgb,var(--bg)_86%,transparent)]/90 backdrop-blur-xl':'bg-transparent')}>
  <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
   <Link to="/" className="mr-2 flex items-center gap-2 font-black tracking-[-.05em]"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--text)] text-xs text-[var(--bg)]">NF</span><span>Netfinder</span></Link>
   <nav className="hidden items-center gap-1 md:flex">{links.map(({to,label,icon:Icon})=><Link key={to} to={to} className={'rounded-full px-4 py-2 text-sm font-medium transition '+(location.pathname===to?'bg-[var(--surface-2)] text-[var(--text)]':'text-[var(--muted)] hover:text-[var(--text)]')}><span className="inline-flex items-center gap-2"><Icon size={16}/>{label}</span></Link>)}<Link to="/genre/1" className={'rounded-full px-4 py-2 text-sm font-medium '+(location.pathname.startsWith('/genre')?'bg-[var(--surface-2)] text-[var(--text)]':'text-[var(--muted)] hover:text-[var(--text)]')}>Genres</Link></nav>
   <div className="ml-auto flex items-center gap-2"><button onClick={()=>navigate('/search')} className="grid h-10 w-10 place-items-center rounded-full text-[var(--muted)] hover:bg-[var(--surface-2)]" aria-label="Search"><Search size={19}/></button><button onClick={()=>navigate('/profile')} className="hidden h-10 w-10 place-items-center rounded-full text-[var(--muted)] hover:bg-[var(--surface-2)] sm:grid" aria-label="Profile"><UserRound size={19}/></button><button onClick={()=>setMobileOpen(v=>!v)} className="grid h-10 w-10 place-items-center rounded-full text-[var(--muted)] hover:bg-[var(--surface-2)] md:hidden" aria-label="Menu">{mobileOpen?<X size={19}/>:<Menu size={19}/>}</button></div>
  </div>
  {mobileOpen&&<div className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-3 md:hidden">{[...links,{to:'/profile',label:'Profile',icon:UserRound}].map(({to,label,icon:Icon})=><Link key={to} to={to} onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium"><Icon size={18}/>{label}</Link>)}</div>}
 </header>
}
