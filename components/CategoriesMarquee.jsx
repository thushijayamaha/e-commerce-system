import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {

    return (
            <div className="relative mx-auto my-10 w-full max-w-7xl select-none overflow-hidden sm:my-16">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f4f5ed] to-transparent" />
            <div className="flex min-w-[200%] animate-[marqueeScroll_18s_linear_infinite] gap-3 hover:[animation-play-state:paused] sm:animate-[marqueeScroll_40s_linear_infinite]" >
                {[...categories, ...categories, ...categories, ...categories].map((company, index) => (
                    <button key={index} className="rounded-full border border-white bg-white/75 px-5 py-2.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700 hover:shadow-md active:scale-95 sm:text-sm">
                        {company}
                    </button>
                ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f4f5ed] to-transparent md:w-40" />
        </div>
    );
};

export default CategoriesMarquee;