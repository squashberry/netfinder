import { ChevronRight } from 'lucide-react';
import type { Movie } from '../../types';
import { MovieCard } from './MovieCard';
import { SkeletonCard } from './Skeletons';
import { useNavigate } from 'react-router-dom';
export function MovieRow({title,items,loading,link}:{title:string;items?:Movie[];loading?:boolean;link?:string}){
 const navigate=useNavigate();
 return <section className="mt-10 sm:mt-12"><div className="mb-4 flex items-center justify-between px-4 sm:px-0"><h2 className="text-lg font-semibold tracking-[-0.03em] sm:text-xl">{title}</h2>{link&&<button className="hidden items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--text)] sm:flex" onClick={()=>navigate(link)}>See all <ChevronRight size={15}/></button>}</div><div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-2 sm:px-0">{loading?Array.from({length:7}).map((_,i)=><SkeletonCard key={i}/>):items?.map(movie=><MovieCard key={movie.id} movie={movie}/>)}</div></section>
}
