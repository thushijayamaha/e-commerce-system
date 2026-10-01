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
        <nav className="relative border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-sm">
            <div className="mx-6">
                <div className="mx-auto flex max-w-7xl items-center justify-between py-4 transition-all">

                    <Link href="/" className="relative text-4xl font-semibold text-slate-800">
                        <span className="text-violet-600">shop</span>NOW<span className="text-fuchsia-500 text-5xl leading-0">.</span>
                        <p className="absolute -top-1 -right-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-0.5 text-[10px] font-semibold text-white shadow-md">
                            plus
                        </p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-4 text-slate-600 sm:flex lg:gap-8">
                        <Link href="/" className="transition hover:text-violet-600">Home</Link>
                        <Link href="/shop" className="transition hover:text-violet-600">Shop</Link>
                        <Link href="/" className="transition hover:text-violet-600">About</Link>
                        <Link href="/" className="transition hover:text-violet-600">Contact</Link>

                        <form onSubmit={handleSearch} className="hidden w-xs items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm xl:flex">
                            <Search size={18} className="text-slate-500" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-500" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-violet-50 hover:text-violet-600">
                            <ShoppingCart size={18} />
                            Cart
                            <span className="absolute -top-1 left-3 flex size-3.5 items-center justify-center rounded-full bg-slate-800 text-[8px] font-semibold text-white">{cartCount}</span>
                        </Link>

                        {!user ? (
                            <button onClick={openSignIn} className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-2 text-white shadow-lg shadow-violet-200 transition hover:scale-[1.02]">
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

                    {/* Mobile User Button  */}
                    <div className="sm:hidden">
                        {user ? (
                            <div>
                                <UserButton>
                                    <UserButton.MenuItems>
                                        <UserButton.Action
                                            labelIcon={<ShoppingCart size={16} />}
                                            label="Cart"
                                            onClick={() => router.push('/cart')}
                                        />
                                    </UserButton.MenuItems>
                                </UserButton>
                            </div>
                        ) : (
                            <button onClick={openSignIn} className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-1.5 text-sm text-white shadow-lg transition hover:scale-[1.02]">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar