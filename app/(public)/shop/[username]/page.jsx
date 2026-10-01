'use client'
import ProductCard from "@/components/ProductCard"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { MailIcon, MapPinIcon } from "lucide-react"
import Loading from "@/components/Loading"
import Image from "next/image"
import { dummyStoreData, productDummyData } from "@/assets/assets"

export default function StoreShop() {

    const { username } = useParams()
    const [products, setProducts] = useState([])
    const [storeInfo, setStoreInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchStoreData = async () => {
        setStoreInfo(dummyStoreData)
        setProducts(productDummyData)
        setLoading(false)
    }

    useEffect(() => {
        fetchStoreData()
    }, [])

    return !loading ? (
        <div className="min-h-[70vh] px-4 sm:px-6">

            {/* Store Info Banner */}
            {storeInfo && (
                <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center gap-6 rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_50px_-42px_rgba(30,30,50,0.5)] sm:p-7 md:flex-row md:p-9">
                    <Image
                        src={storeInfo.logo}
                        alt={storeInfo.name}
                        className="size-28 rounded-2xl border border-slate-200 bg-[#f3f4ee] object-cover sm:size-32"
                        width={200}
                        height={200}
                    />
                    <div className="min-w-0 text-center md:text-left">
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{storeInfo.name}</h1>
                        <p className="text-sm text-slate-600 mt-2 max-w-lg">{storeInfo.description}</p>
                        <div className="text-xs text-slate-500 mt-4 space-y-1"></div>
                        <div className="space-y-2 text-sm text-slate-500">
                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 text-gray-500 mr-2" />
                                <span>{storeInfo.address}</span>
                            </div>
                            <div className="flex items-center">
                                <MailIcon className="w-4 h-4 text-gray-500 mr-2" />
                                <span>{storeInfo.email}</span>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )}

            {/* Products */}
            <div className="mx-auto mb-32 max-w-7xl">
                <h2 className="mt-12 text-2xl font-semibold text-slate-900">Shop <span className="text-violet-600">Products</span></h2>
                <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 xl:gap-x-7">
                    {products.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    ) : <Loading />
}