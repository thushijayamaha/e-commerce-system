'use client'
import { useEffect, useState } from "react"
import Loading from "../Loading"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import SellerNavbar from "./StoreNavbar"
import SellerSidebar from "./StoreSidebar"
import { dummyStoreData } from "@/assets/assets"

const StoreLayout = ({ children }) => {


    const [isSeller, setIsSeller] = useState(false)
    const [loading, setLoading] = useState(true)
    const [storeInfo, setStoreInfo] = useState(null)

    const fetchIsSeller = async () => {
        setIsSeller(true)
        setStoreInfo(dummyStoreData)
        setLoading(false)
    }

    useEffect(() => {
        fetchIsSeller()
    }, [])

    return loading ? (
        <Loading />
    ) : isSeller ? (
        <div className="flex h-dvh min-h-screen flex-col bg-[#f7f7f2]">
            <SellerNavbar />
            <div className="flex min-h-0 flex-1 items-start overflow-y-auto no-scrollbar">
                <SellerSidebar storeInfo={storeInfo} />
                <div className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-5 lg:px-10 lg:py-10">
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-2xl sm:text-4xl font-semibold text-slate-400">You are not authorized to access this page</h1>
            <Link href="/" className="bg-slate-700 text-white flex items-center gap-2 mt-8 p-2 px-6 max-sm:text-sm rounded-full">
                Go to home <ArrowRightIcon size={18} />
            </Link>
        </div>
    )
}

export default StoreLayout