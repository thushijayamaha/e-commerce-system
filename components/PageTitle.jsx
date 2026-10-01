'use client'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

const PageTitle = ({ heading, text, path = "/", linkText }) => {
    return (
        <div className="my-7 flex flex-wrap items-end justify-between gap-3 border-b border-slate-200/80 pb-5">
            <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-600">shopNOW</p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{heading}</h2>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
            </div>
            <Link href={path} className="flex shrink-0 items-center gap-1 text-sm font-semibold text-violet-600 transition hover:gap-2">
                    {linkText} <ArrowRightIcon size={14} />
            </Link>
        </div>
    )
}

export default PageTitle