export const BannerStyles = {

    container: `
        fixed bottom-10 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-3xl
        flex items-center gap-4
        bg-neutral-900/95 backdrop-blur-md
        border border-orange-500/40 rounded-lg
        px-5 py-4
        shadow-2xl shadow-black/60
        animate-fade-up
    `,

    iconWrapper: "flex-shrink-0 text-2xl",

    textWrapper: "flex-1 text-white text-sm leading-relaxed",

    title: `
        text-orange-400 font-semibold uppercase tracking-wider
        text-xs mb-1
    `,

    message: "text-neutral-200",

    closeButton: `
        flex-shrink-0
        px-4 py-2
        bg-orange-500 text-white
        text-xs font-bold tracking-widest uppercase
        rounded-sm
        transition-all duration-300
        hover:bg-orange-400 active:scale-95
        cursor-pointer
    `,
}
