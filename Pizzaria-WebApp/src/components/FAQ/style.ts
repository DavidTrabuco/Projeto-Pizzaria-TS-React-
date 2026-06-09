export const FAQStyle = {

    fab: `
        fixed bottom-6 right-6 z-50
        w-14 h-14
        bg-gradient-to-br from-orange-500 to-red-600
        text-white text-2xl font-bold
        rounded-full shadow-xl shadow-orange-900/50
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300
        hover:scale-110 hover:shadow-orange-500/60
        active:scale-95
    `,

    painel: `
        fixed bottom-24 right-6 z-50
        w-80 max-h-[70vh]
        bg-zinc-900 border border-white/10
        rounded-2xl shadow-2xl shadow-black/60
        overflow-y-auto
        flex flex-col
    `,

    painelHeader: `
        px-5 py-4
        border-b border-white/10
        flex justify-between items-center
    `,

    painelTitulo: `
        text-white font-bold text-[15px] tracking-wide
    `,

    painelFechar: `
        text-gray-400 hover:text-white text-lg
        cursor-pointer transition-colors duration-200
    `,

    item: `
        border-b border-white/5
        px-5 py-3
        cursor-pointer
        transition-colors duration-200
        hover:bg-white/5
    `,

    pergunta: `
        text-gray-200 text-[13px] font-semibold
        flex justify-between items-center gap-2
    `,

    seta: `
        text-orange-400 text-[11px] transition-transform duration-200
    `,

    resposta: `
        text-gray-400 text-[13px] mt-2 leading-relaxed
    `,
};
