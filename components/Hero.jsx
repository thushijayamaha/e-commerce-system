'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='group relative flex flex-1 flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 shadow-[0_25px_80px_-25px_rgba(109,40,217,0.45)] xl:min-h-100'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_35%)]' />
                    <div className='relative p-5 sm:p-16'>
                        <div className='inline-flex items-center gap-3 rounded-full bg-white/20 px-2 py-1 pr-4 text-xs text-white backdrop-blur-sm sm:text-sm'>
                            <span className='rounded-full bg-slate-950/80 px-3 py-1 text-xs text-white'>NEWS</span> Free Shipping on Orders Above $50! <ChevronRightIcon className='transition-all group-hover:ml-2' size={16} />
                        </div>
                        <h2 className='my-3 max-w-xs text-3xl font-semibold leading-[1.2] text-white sm:max-w-md sm:text-5xl'>
                            Gadgets you'll love. Prices you'll trust.
                        </h2>
                        <div className='mt-4 text-sm font-medium text-white/90 sm:mt-8'>
                            <p>Starts from</p>
                            <p className='text-3xl'>{currency}4.90</p>
                        </div>
                        <button className='mt-4 rounded-full bg-slate-950 px-7 py-2.5 text-sm text-white transition hover:scale-[1.02] hover:bg-slate-800 active:scale-95 sm:mt-10 sm:px-12 sm:py-5'>LEARN MORE</button>
                    </div>
                    <Image className='relative w-full sm:absolute sm:bottom-0 sm:right-0 sm:max-w-sm md:right-10' src={assets.hero_model_img} alt="" />
                </div>
                <div className='flex w-full flex-col gap-5 text-sm text-slate-600 md:flex-row xl:max-w-sm xl:flex-col'>
                    <div className='group flex flex-1 items-center justify-between rounded-[28px] bg-gradient-to-br from-amber-200 to-orange-300 p-6 px-8 shadow-lg'>
                        <div>
                            <p className='max-w-40 text-3xl font-semibold text-slate-800'>Best products</p>
                            <p className='mt-4 flex items-center gap-1'>View more <ArrowRightIcon className='transition-all group-hover:ml-2' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='group flex flex-1 items-center justify-between rounded-[28px] bg-gradient-to-br from-sky-200 to-cyan-300 p-6 px-8 shadow-lg'>
                        <div>
                            <p className='max-w-40 text-3xl font-semibold text-slate-800'>20% discounts</p>
                            <p className='mt-4 flex items-center gap-1'>View more <ArrowRightIcon className='transition-all group-hover:ml-2' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero