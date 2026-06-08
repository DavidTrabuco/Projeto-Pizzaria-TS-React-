export const FooterStyle = {

    footer: "pt-10 pb-0 mt-auto",
    footerStyle: { background: "linear-gradient(to bottom, #0a0300 0%, #050100 100%)" },

    grid: `
        flex flex-row flex-wrap items-start
        gap-8 max-w-5xl mx-auto px-6
    `,

    bottomBar: "h-1 !bg-yellow-400 mt-8 shadow-[0_0_12px_rgba(250,204,21,0.5)]",

    copyright: "text-center text-xs !text-gray-500 py-4",

    // --- Horários ---
    hourCard: `
        !bg-gradient-to-br from-red-500 to-red-600 !text-white
        rounded-2xl p-6 w-[200px] shrink-0
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40
    `,

    hourBrand: "font-bold text-lg leading-tight !text-white drop-shadow-sm",
    hourSub: "text-xs !text-red-200 mb-4",
    hourSchedule: "text-sm !text-white mb-1",
    hourClosed: "text-sm underline font-semibold !text-white mb-4",
    hourRating: "text-xs mt-4 font-semibold !text-white",

    // --- Colunas de links ---
    colWrapper: "w-[150px] shrink-0",

    colTitle: `
        font-bold text-base mb-3
        border-b-2 !border-red-500 pb-1 inline-block
        !text-gray-50 drop-shadow-sm
    `,

    colList: "space-y-2 mt-2 list-none p-0 m-0",

    colItem: `
        flex items-center gap-1
        text-sm !text-gray-600
        cursor-pointer
        transition-colors duration-200 hover:!text-gray-300
    `,

    colArrow: "!text-red-400 text-xs",

    colLink: `
        !text-gray-600 no-underline
        hover:!text-orange-400 hover:translate-x-0.5
        transition-all duration-200
    `,

    // --- Newsletter ---
    newsletterWrapper: "w-[220px] shrink-0",

    newsletterTitle: `
        font-bold text-base mb-3
        border-b-2 !border-red-500 pb-1 inline-block
        !text-gray-50 drop-shadow-sm
    `,

    newsletterText: "text-sm !text-gray-50 mb-3",

    newsletterInput: `
        w-full pb-2 mb-4
        !border-0 !border-b-2 !border-gray-300
        !bg-transparent !text-gray-700 placeholder:!text-gray-400
        text-sm
        focus:outline-none focus:!border-orange-400
        transition-all duration-300
    `,

    newsletterBtn: `
        rounded-full
        bg-rose-600 text-white
        px-6 py-2.5
        text-sm font-semibold
        shadow-md
        transition-all duration-300
        hover:bg-rose-700 hover:scale-105 hover:-translate-y-1
        hover:shadow-rose-500/50 hover:shadow-lg
        hover:ring-2 hover:ring-rose-400/40
        active:scale-95 cursor-pointer
    `,
}
