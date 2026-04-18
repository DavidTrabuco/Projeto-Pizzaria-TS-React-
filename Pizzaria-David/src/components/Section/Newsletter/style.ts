export const NewsletterStyles = {
    section: "px-10 py-16 pt-36",
    sectionBg: { background: "linear-gradient(135deg, #0f0500 0%, #1a0800 30%, #2d1200 60%, #0a0300 100%)" },

    header: "text-center mb-10",
    title: "text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200 text-4xl font-bold mb-3 drop-shadow-lg",
    titleUnderline: "w-16 h-1 bg-[#f5c518] mx-auto rounded-full animate-pulse shadow-sm",

    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto",

    card: "flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-300",
    cardImage: "w-full aspect-[4/3] object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110",
    cardDate: "bg-[#f5c518] text-black text-xs font-semibold px-3 py-1 rounded w-fit hover:brightness-110 transition-all duration-200",
    cardTitle: "text-grey-50 text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-yellow-300",

    author: "flex items-center gap-2",
    authorAvatar: "w-8 h-8 rounded-full object-cover",
    authorName: "text-gray-600 text-sm font-medium",

    getInTouch: "mt-14 max-w-5xl mx-auto",
    getInTouchLabel: "rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-rose-700 hover:scale-105 hover:-translate-y-1 hover:shadow-rose-500/50 hover:shadow-lg hover:ring-2 hover:ring-rose-400/40 active:scale-95 cursor-pointer",
}
