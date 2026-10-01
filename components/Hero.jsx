'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='group relative flex flex-1 flex-col overflow-hidden rounded-[28px] bg-[#173c34] shadow-[0_25px_70px_-35px_rgba(23,60,52,0.65)] xl:min-h-100'>
                    <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,transparent_48%,rgba(255,255,255,0.035)_48.2%,rgba(255,255,255,0.035)_49%,transparent_49.2%)]' />
                    <div className='home-enter relative z-10 p-6 sm:p-14'>
                        <div className='inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-2 py-1 pr-4 text-xs text-white/90 backdrop-blur-sm sm:text-sm'>
                            <span className='rounded-full bg-[#cbe170] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#173c34]'>JUST IN</span> Free shipping on orders above $50 <ChevronRightIcon className='transition-all group-hover:translate-x-1' size={16} />
                        </div>
                        <p className='mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4e77d]'>Tech, thoughtfully chosen</p>
                        <h2 className='my-3 max-w-xs text-3xl font-semibold leading-[1.12] text-[#f8f7f0] sm:max-w-md sm:text-5xl'>
                            Gadgets you&apos;ll love. Prices you&apos;ll trust.
                        </h2>
                        <div className='mt-5 text-sm font-medium text-white/75 sm:mt-7'>
                            <p>Thoughtful finds from</p>
                            <p className='text-3xl font-semibold text-white'>{currency}4.90</p>
                        </div>
                        <Link href='/shop' className='mt-7 inline-flex items-center gap-3 rounded-full bg-[#cbe170] px-6 py-3 text-sm font-semibold text-[#173c34] transition hover:bg-[#d9ed89] active:scale-95 sm:mt-9'>Shop collection <ArrowRightIcon size={17} /></Link>
                    </div>
                    <Image className='home-product-3d relative z-0 -mt-2 w-full sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:max-w-sm md:right-8' src={assets.product_img4} alt="White over-ear headphones" />
                </div>
                <div className='home-enter-late flex w-full flex-col gap-5 text-sm text-[#383a32] md:flex-row xl:max-w-sm xl:flex-col'>
                    <Link href='/shop' className='group flex flex-1 items-center justify-between overflow-hidden rounded-[18px] bg-[#f0c5a8] p-6 px-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                        <div>
                            <p className='max-w-40 text-3xl font-semibold leading-tight text-[#302d28]'>Best<br />products</p>
                            <p className='mt-4 flex items-center gap-1 font-medium'>Explore <ArrowRightIcon className='transition-all group-hover:translate-x-1' size={18} /></p>
                        </div>
                        <Image className='home-float w-35' src={assets.hero_product_img1} alt="" />
                    </Link>
                    <Link href='/shop' className='group flex flex-1 items-center justify-between overflow-hidden rounded-[18px] bg-[#d5dfaa] p-6 px-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                        <div>
                            <p className='max-w-40 text-3xl font-semibold leading-tight text-[#302d28]'>20%<br />discounts</p>
                            <p className='mt-4 flex items-center gap-1 font-medium'>Shop deals <ArrowRightIcon className='transition-all group-hover:translate-x-1' size={18} /></p>
                        </div>
                        <Image className='home-float w-35 [animation-delay:600ms]' src={assets.hero_product_img2} alt="" />
                    </Link>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero