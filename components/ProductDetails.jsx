'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { StarIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product }) => {

    const productId = product.id;
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';

    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const router = useRouter()

    const [mainImage, setMainImage] = useState(product.images[0]);

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }))
    }

    const averageRating = product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length;
    
    return (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div className="grid gap-4 sm:grid-cols-[76px_minmax(0,1fr)]">
                <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">
                    {product.images.map((image, index) => (
                        <button key={index} type="button" onClick={() => setMainImage(image)} aria-label={`View ${product.name} image ${index + 1}`} className={`flex size-[4.5rem] shrink-0 items-center justify-center rounded-xl border bg-white p-2 transition hover:border-violet-300 hover:shadow-sm ${mainImage === image ? 'border-violet-400 ring-2 ring-violet-100' : 'border-slate-200'}`}>
                            <Image src={image} className="h-full w-full object-contain transition duration-300 hover:scale-105" alt="" width={80} height={80} />
                        </button>
                    ))}
                </div>
                <div className="order-1 flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-[#f4f5ed] to-[#eeeff3] p-6 sm:order-2">
                    <Image src={mainImage} alt={product.name} width={640} height={640} className="h-full w-full object-contain transition duration-500 hover:scale-[1.04]" priority />
                </div>
            </div>
            <div className="flex-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">{product.category}</p>
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">{product.name}</h1>
                <div className='flex items-center mt-2'>
                    {Array(5).fill('').map((_, index) => (
                        <StarIcon key={index} size={14} className='text-transparent mt-0.5' fill={averageRating >= index + 1 ? "#00C950" : "#D1D5DB"} />
                    ))}
                    <p className="text-sm ml-3 text-slate-500">{product.rating.length} Reviews</p>
                </div>
                <div className="my-6 flex flex-wrap items-center gap-3 text-2xl font-semibold text-[#173c34]">
                    <p>{currency}{product.price}</p>
                    <p className="text-lg font-normal text-slate-400 line-through">{currency}{product.mrp}</p>
                    {product.mrp > product.price && <span className="rounded-full bg-[#edf3d5] px-3 py-1 text-xs font-semibold text-[#536b1d]">Save {((product.mrp - product.price) / product.mrp * 100).toFixed(0)}%</span>}
                </div>
                <div className="flex items-end gap-5 mt-10">
                    {
                        cart[productId] && (
                            <div className="flex flex-col gap-3">
                                <p className="text-lg text-slate-800 font-semibold">Quantity</p>
                                <Counter productId={productId} />
                            </div>
                        )
                    }
                    <button onClick={() => !cart[productId] ? addToCartHandler() : router.push('/cart')} className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200/60 transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95">
                        {!cart[productId] ? 'Add to Cart' : 'View Cart'}
                    </button>
                </div>
                <hr className="my-6 border-slate-200" />
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                    <p className="flex gap-3"> <EarthIcon className="text-slate-400" /> Free shipping worldwide </p>
                    <p className="flex gap-3"> <CreditCardIcon className="text-slate-400" /> 100% Secured Payment </p>
                    <p className="flex gap-3"> <UserIcon className="text-slate-400" /> Trusted by top brands </p>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails