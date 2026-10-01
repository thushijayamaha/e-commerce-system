'use client'
import Link from "next/link"

const AdminNavbar = () => {


    return (
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200/80 bg-white/85 px-4 py-3 text-slate-700 shadow-sm backdrop-blur-xl transition-all sm:px-6 lg:px-12">
            <Link href="/" className="relative shrink-0 text-2xl font-semibold sm:text-3xl">
                <span className="text-green-600">shop</span>NOW<span className="text-green-600 text-5xl leading-0">.</span>
                <p className="absolute text-xs font-semibold -top-1 -right-13 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
                    Admin
                </p>
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, Admin</p>
            </div>
        </div>
    )
}

export default AdminNavbar