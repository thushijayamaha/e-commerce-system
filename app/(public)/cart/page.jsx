'use client'
import Counter from "@/components/Counter";
import OrderSummary from "@/components/OrderSummary";
import PageTitle from "@/components/PageTitle";
import { deleteItemFromCart } from "@/lib/features/cart/cartSlice";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';
    
    const { cartItems } = useSelector(state => state.cart);
    const products = useSelector(state => state.product.list);

    const dispatch = useDispatch();

    const [cartArray, setCartArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDeleteItemFromCart = (productId) => {
        dispatch(deleteItemFromCart({ productId }))
    }

    useEffect(() => {
        if (products.length === 0) return;

        const nextCartArray = [];
        let nextTotalPrice = 0;
        for (const [productId, quantity] of Object.entries(cartItems)) {
            const product = products.find(product => product.id === productId);
            if (product) {
                nextCartArray.push({ ...product, quantity });
                nextTotalPrice += product.price * quantity;
            }
        }

        setCartArray(nextCartArray);
        setTotalPrice(nextTotalPrice);
    }, [cartItems, products]);

    return cartArray.length > 0 ? (
        <div className="min-h-screen px-4 text-slate-800 sm:px-6">

            <div className="mx-auto max-w-7xl py-4">
                {/* Title */}
                <PageTitle heading="My Cart" text="items in your cart" linkText="Add more" />

                <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">

                    <div className="w-full space-y-3 md:hidden">
                        {cartArray.map((item) => (
                            <div key={item.id} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm">
                                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#f2f3ed]">
                                    <Image src={item.images[0]} className="h-14 w-14 object-contain" alt={item.name} width={64} height={64} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-semibold text-slate-800">{item.name}</p>
                                    <p className="text-xs text-slate-500">{item.category} · {currency}{item.price}</p>
                                    <div className="mt-2"><Counter productId={item.id} /></div>
                                </div>
                                <button onClick={() => handleDeleteItemFromCart(item.id)} aria-label={`Remove ${item.name}`} className="rounded-full p-2 text-rose-500 transition hover:bg-rose-50 active:scale-95">
                                    <Trash2Icon size={17} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <table className="hidden w-full max-w-4xl table-auto text-slate-600 md:table">
                        <thead>
                            <tr className="max-sm:text-sm">
                                <th className="text-left">Product</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th className="max-md:hidden">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartArray.map((item, index) => (
                                    <tr key={index} className="border-b border-slate-200/70">
                                        <td className="flex gap-3 py-4">
                                            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#f2f3ed]">
                                                <Image src={item.images[0]} className="h-14 w-14 object-contain" alt={item.name} width={64} height={64} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800">{item.name}</p>
                                                <p className="text-xs text-slate-500">{item.category}</p>
                                                <p>{currency}{item.price}</p>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Counter productId={item.id} />
                                        </td>
                                        <td className="text-center">{currency}{(item.price * item.quantity).toLocaleString()}</td>
                                        <td className="text-center max-md:hidden">
                                                <button onClick={() => handleDeleteItemFromCart(item.id)} aria-label={`Remove ${item.name}`} className="rounded-full p-2.5 text-rose-500 transition-all hover:bg-rose-50 active:scale-95">
                                                <Trash2Icon size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <OrderSummary totalPrice={totalPrice} items={cartArray} />
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-[80vh] mx-6 flex items-center justify-center text-slate-400">
            <h1 className="text-2xl font-semibold sm:text-4xl">Your cart is empty</h1>
        </div>
    )
}