'use client'
import { PackageIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";

const Navbar = () => {

    const {user}= useUser()

    const {openSignIn} = useClerk()

    const router = useRouter();

    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="sticky top-0 z-50 border-b border-white/70 bg-[#f8f7f2]/85 shadow-[0_8px_28px_-24px_rgba(35,25,60,0.65)] backdrop-blur-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex min-h-[70px] items-center justify-between gap-3">
                    <Link href="/" className="relative shrink-0 text-2xl font-semibold text-slate-800 sm:text-3xl">
                        <span className="text-violet-600">shop</span>NOW<span className="text-fuchsia-500">.</span>
                        <span className="absolute -right-8 -top-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-2.5 py-0.5 text-[9px] font-semibold text-white shadow-sm">plus</span>
                    </Link>

                    <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 xl:flex">
                        <Link href="/" className="transition-colors hover:text-violet-700">Home</Link>
                        <Link href="/shop" className="transition-colors hover:text-violet-700">Shop</Link>
                        <Link href="/" className="transition-colors hover:text-violet-700">About</Link>
                        <Link href="/" className="transition-colors hover:text-violet-700">Contact</Link>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <form onSubmit={handleSearch} className="hidden w-52 items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2.5 text-sm shadow-sm transition focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100/70 xl:flex 2xl:w-60">
                            <Search size={17} className="shrink-0 text-slate-400" />
                            <input className="w-full bg-transparent outline-none placeholder:text-slate-400" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" aria-label={`Cart, ${cartCount} items`} className="relative flex h-10 items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700 hover:shadow-md">
                            <ShoppingCart size={18} />
                            <span className="hidden text-sm font-medium sm:inline">Cart</span>
                            <span className="absolute -right-1.5 -top-1.5 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-semibold text-white">{cartCount}</span>
                        </Link>

                        {!user ? (
                            <button onClick={openSignIn} className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200/70 transition hover:-translate-y-0.5 hover:shadow-lg sm:px-6">
                                Login
                            </button>
                        ) : (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        labelIcon={<PackageIcon size={16} />}
                                        label="My orders"
                                        onClick={() => router.push('/orders')}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3 pb-3 xl:hidden">
                    <div className="hidden items-center gap-4 text-sm font-medium text-slate-600 sm:flex">
                        <Link href="/" className="transition-colors hover:text-violet-700">Home</Link>
                        <Link href="/shop" className="transition-colors hover:text-violet-700">Shop</Link>
                    </div>
                    <form onSubmit={handleSearch} className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-3 py-2 text-sm shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100/70">
                        <Search size={17} className="shrink-0 text-slate-400" />
                        <input className="w-full min-w-0 bg-transparent outline-none placeholder:text-slate-400" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar