export const MenuStyles = {
    section: "px-8 py-16 pt-36",
    sectionBg: { background: "linear-gradient(135deg, #0f0500 0%, #1a0800 30%, #2d1200 60%, #0a0300 100%)" },

    header: "text-center max-w-xl mx-auto mb-12 animate-fade-up delay-1",
    label: "text-[#c8822a] text-xs tracking-widest font-mono uppercase border-b-2 border-[#c8822a] pb-1 mb-4 inline-block drop-shadow-sm hover:brightness-125 transition-all duration-200",
    title: "text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 text-3xl font-bold mb-4 drop-shadow-lg",
    description: "text-[#8a9e94] text-sm leading-relaxed",

    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-up delay-2",

    card: "bg-[#111e17] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(200,130,42,0.25)] hover:border hover:border-orange-500/30 group",
    cardImageWrapper: "w-full aspect-[4/3] overflow-hidden",
    cardImage: "w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110",
    cardBody: "p-5",
    cardName: "text-white text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-orange-300",
    cardMeta: "text-[#8a9e94] text-xs mb-4",

    pricing: "flex items-center gap-3 mb-5",
    price: "text-[#c8822a] text-lg font-bold drop-shadow-sm transition-colors duration-300 group-hover:text-orange-400",
    oldPrice: "text-[#6b7f74] text-sm line-through",

    button: "bg-[#c8822a] hover:bg-[#e09a38] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/40 active:scale-95 text-white text-sm font-semibold px-6 py-2 rounded transition-all duration-300",
    buttonLogin: "hidden md:block rounded-full bg-transparent border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:scale-105 hover:-translate-y-1 cursor-pointer mt-4 mx-auto",
}
