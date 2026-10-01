'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center text-center'>
            <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600'>shopNOW selection</p>
            <h2 className='text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl'>{title}</h2>
            <Link href={href} className='mt-2 flex flex-col items-center gap-3 text-sm text-slate-500 sm:flex-row sm:gap-5'>
                <p className='max-w-lg text-center leading-6'>{description}</p>
                {visibleButton && <span className='flex shrink-0 items-center gap-1 font-semibold text-violet-600 transition hover:gap-2'>View more <ArrowRight size={14} /></span>}
            </Link>
        </div>
    )
}

export default Title