import type { ReactNode } from 'react';
export function EmptyState({title,description,action}:{title:string;description:string;action?:ReactNode}){
return <div className="grid min-h-[35vh] place-items-center py-16 text-center"><div className="max-w-md px-6"><div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface-2)] text-[var(--muted)]">✦</div><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>{action&&<div className="mt-6">{action}</div>}</div></div>
}
