import type { HistoryEntry, WatchlistEntry } from '../types';

const WATCHLIST_KEY='netfinder.watchlist.v1';
const HISTORY_KEY='netfinder.history.v1';
const RECENT_SEARCHES_KEY='netfinder.recent-searches.v1';
const SETTINGS_KEY='netfinder.settings.v1';

function read<T>(key:string,fallback:T):T { try { const raw=localStorage.getItem(key); return raw ? JSON.parse(raw) as T : fallback; } catch { return fallback; } }
function write<T>(key:string,value:T){ try{localStorage.setItem(key,JSON.stringify(value));}catch{} }

export const storage = {
  getWatchlist:()=>read<WatchlistEntry[]>(WATCHLIST_KEY,[]),
  setWatchlist:(v:WatchlistEntry[])=>write(WATCHLIST_KEY,v),
  getHistory:()=>read<HistoryEntry[]>(HISTORY_KEY,[]),
  setHistory:(v:HistoryEntry[])=>write(HISTORY_KEY,v),
  getRecentSearches:()=>read<string[]>(RECENT_SEARCHES_KEY,[]),
  setRecentSearches:(v:string[])=>write(RECENT_SEARCHES_KEY,v),
  getSettings:()=>read(SETTINGS_KEY,{darkMode:true,autoPlayTrailers:false,dataSaver:false,language:'English'} as {darkMode:boolean;autoPlayTrailers:boolean;dataSaver:boolean;language:string}),
  setSettings:(v:{darkMode:boolean;autoPlayTrailers:boolean;dataSaver:boolean;language:string})=>write(SETTINGS_KEY,v)
};
