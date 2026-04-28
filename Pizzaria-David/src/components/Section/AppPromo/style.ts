export const AppPromotionStyles = {
    section: "flex flex-col lg:flex-row items-center px-10 py-16 pt-36 gap-16 min-h-screen",
    sectionBg: { background: "linear-gradient(135deg, #0f0500 0%, #1a0800 30%, #2d1200 60%, #0a0300 100%)" },

    left: "flex flex-col w-full lg:w-1/2 animate-fade-up delay-1",
    badge: "text-[#f5c518] text-xs tracking-widest font-mono uppercase mb-4 animate-pulse drop-shadow-md",
    title: "text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200 text-4xl lg:text-5xl font-bold leading-tight mb-5 drop-shadow-lg",
    description: "text-[#a0a0a0] text-sm leading-relaxed mb-6",

    list: "flex flex-col gap-2 mb-6",
    listItem: "flex items-center gap-2 text-[#cccccc] text-sm transition-colors duration-200 hover:text-white",
    listIcon: "text-[#f5c518] drop-shadow-sm",

    cta: "text-[#a0a0a0] text-sm mb-5",

    buttons: "flex gap-4",
    btn: "flex items-center gap-3 bg-[#111111] border border-[#333333] hover:border-[#f5c518] hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20 text-white px-5 py-3 rounded-xl transition-all duration-300 active:scale-95",
    btnLabel: "flex flex-col leading-none",
    btnSub: "text-[10px] text-[#a0a0a0] font-normal",
    btnName: "text-sm font-bold",

    right: "flex justify-center lg:justify-end w-full lg:w-1/3 animate-fade-up delay-3",
    image: "w-64 lg:w-80 rounded-3xl shadow-2xl object-cover ring-1 ring-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,197,24,0.2)]",
}
