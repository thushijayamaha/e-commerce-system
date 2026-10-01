'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ProductCard = ({ product }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'
    const reduceMotion = useReducedMotion()

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <motion.div
            className='mx-auto w-full max-w-[18rem]'
            whileHover={reduceMotion ? undefined : { y: -5, rotateX: 2, rotateY: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            style={{ transformStyle: 'preserve-3d', perspective: 900 }}
        >
            <Link href={`/product/${product.id}`} className='group block rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200'>
                <div className='relative aspect-square overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-[#f4f5ed] to-[#eeeff3] p-5 shadow-sm transition duration-300 group-hover:shadow-[0_18px_40px_-26px_rgba(55,35,100,0.45)]'>
                    <Image width={500} height={500} className='h-full w-full object-contain transition duration-500 group-hover:scale-[1.06]' src={product.images[0]} alt={product.name} />
                    {product.mrp > product.price && (
                        <span className='absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-violet-700 shadow-sm'>
                            -{Math.round((product.mrp - product.price) / product.mrp * 100)}%
                        </span>
                    )}
                </div>
                <div className='flex items-start justify-between gap-3 px-1 pt-3'>
                    <div className='min-w-0'>
                        <p className='truncate text-xs font-medium uppercase tracking-wide text-slate-400'>{product.category}</p>
                        <p className='mt-1 truncate text-sm font-semibold text-slate-800 transition-colors group-hover:text-violet-700'>{product.name}</p>
                        <div className='mt-1 flex items-center gap-0.5'>
                            {Array(5).fill('').map((_, index) => (
                                <StarIcon key={index} size={13} className='text-transparent' fill={rating >= index + 1 ? "#89a932" : "#D1D5DB"} />
                            ))}
                            <span className='ml-1 text-xs text-slate-400'>({product.rating.length})</span>
                        </div>
                    </div>
                    <div className='shrink-0 text-right'>
                        <p className='text-sm font-semibold text-[#173c34]'>{currency}{product.price}</p>
                        {product.mrp > product.price && <p className='text-xs text-slate-400 line-through'>{currency}{product.mrp}</p>}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default ProductCard