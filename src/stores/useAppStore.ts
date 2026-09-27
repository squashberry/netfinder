import { create } from 'zustand';
import type { HistoryEntry, Movie, WatchlistEntry } from '../types';
import { storage } from '../lib/storage';

interface AppStore{
  watchlist:WatchlistEntry[]; history:HistoryEntry[]; recentSearches:string[];
  settings:ReturnType<typeof storage.getSettings>;
  toast:{id:number;message:string}|null;
  toggleWatchlist:(movie:Movie)=>void; removeFromWatchlist:(movieId:string)=>void; clearWatchlist:()=>void;
  recordHistory:(movie:Movie)=>void; clearHistory:()=>void;
  addRecentSearch:(query:string)=>void; removeRecentSearch:(query:string)=>void;
  updateSettings:(patch:Partial<AppStore['settings']>)=>void; notify:(message:string)=>void; clearToast:()=>void;
}

export const useAppStore=create<AppStore>((set,get)=>({
  watchlist:storage.getWatchlist(),history:storage.getHistory(),recentSearches:storage.getRecentSearches(),settings:storage.getSettings(),toast:null,
  toggleWatchlist:(movie)=>{
    const existing=get().watchlist.some(x=>x.movieId===movie.id);
    const next=existing?get().watchlist.filter(x=>x.movieId!==movie.id):[{movieId:movie.id,title:movie.title,posterPath:movie.posterPath,mediaType:movie.mediaType??'movie',addedAt:Date.now()},...get().watchlist];
    storage.setWatchlist(next);set({watchlist:next});get().notify(existing?'Removed from Watchlist':'Added to Watchlist');
  },
  removeFromWatchlist:(id)=>{const next=get().watchlist.filter(x=>x.movieId!==id);storage.setWatchlist(next);set({watchlist:next});get().notify('Removed from Watchlist');},
  clearWatchlist:()=>{storage.setWatchlist([]);set({watchlist:[]});},
  recordHistory:(movie)=>{
    const entry={movieId:movie.id,title:movie.title,posterPath:movie.posterPath,mediaType:movie.mediaType??'movie',addedAt:Date.now(),viewedAt:Date.now()};
    const next=[entry,...get().history.filter(x=>x.movieId!==movie.id)].slice(0,30);
    storage.setHistory(next);set({history:next});
  },
  clearHistory:()=>{storage.setHistory([]);set({history:[]});},
  addRecentSearch:(query)=>{const q=query.trim();if(!q)return;const next=[q,...get().recentSearches.filter(x=>x.toLowerCase()!==q.toLowerCase())].slice(0,8);storage.setRecentSearches(next);set({recentSearches:next});},
  removeRecentSearch:(q)=>{const next=get().recentSearches.filter(x=>x!==q);storage.setRecentSearches(next);set({recentSearches:next});},
  updateSettings:(patch)=>{const next={...get().settings,...patch};storage.setSettings(next);set({settings:next});document.documentElement.classList.toggle('light',!next.darkMode);},
  notify:(message)=>{const id=Date.now();set({toast:{id,message}});window.setTimeout(()=>{if(get().toast?.id===id)set({toast:null});},2200);},
  clearToast:()=>set({toast:null})
}));
