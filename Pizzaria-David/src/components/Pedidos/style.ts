export const OrderStyle = {

    section: "relative min-h-screen bg-gradient-to-br from-red-950 to-black flex items-center justify-center px-6 py-16 overflow-hidden",

    card: "relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60 animate-fade-up delay-1",

    label: "text-orange-400 text-xs tracking-widest font-mono uppercase mb-2 text-center drop-shadow-sm animate-fade-up delay-2",

    title: "text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 text-4xl font-extrabold uppercase tracking-wide text-center mb-2 drop-shadow-lg animate-fade-up delay-3",

    divider: "w-16 h-1 bg-orange-500 mx-auto mb-4 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)] animate-fade-up delay-4",

    subtitle: "text-gray-400 text-sm text-center mb-8 leading-relaxed",

    form: "flex flex-col gap-5",

    inputGroup: "flex flex-col gap-1.5",

    inputLabel: "text-gray-400 text-xs font-semibold tracking-widest uppercase",

    input: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/20 focus:bg-white/10 transition-all duration-300",

    inputReadOnly: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-orange-300 text-sm font-semibold cursor-not-allowed opacity-70",

    button: "w-full mt-2 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-orange-900/40 transition-all duration-300 hover:from-orange-400 hover:to-red-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95 cursor-pointer",

    menuGrid: "flex flex-wrap justify-center gap-3 w-full mb-8",

    menuCard: "flex flex-col cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 hover:border-orange-500 hover:scale-105 w-44",

    menuCardBody: "p-[10px_12px] text-left",

    menuCardName: "text-white text-[13px] font-semibold mb-1",

    menuCardPrice: "text-orange-400 text-[13px] font-bold",

    pageWrapper: "w-full max-w-[720px] mx-auto px-6 py-8 flex flex-col items-center",

    sectionLabel: "text-gray-400 text-[11px] uppercase tracking-[2px] mb-3 mt-6 self-start",

    erroSpan: "text-red-500 text-[13px]",

    itemVazio: "text-gray-500 text-[13px] italic",

    itemLinha: "flex justify-between items-center text-orange-200 text-[14px] py-[6px] border-b border-white/5",

    itemPreco: "text-green-300 font-semibold",

    itemRemover: "bg-transparent border-none text-red-500 cursor-pointer text-[16px]",

    itemActions: "flex items-center gap-[10px]",

    buttonVoltar: "w-full mt-3 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-orange-900/40 transition-all duration-300 hover:from-orange-400 hover:to-red-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95 cursor-pointer",
}

export const OrderConfirmationStyles = {

    header: "text-center mb-6",

    emoji: "text-[48px]",

    mensagem: "text-green-300 font-bold mt-2",

    lista: "flex flex-col gap-3",

    infoBox: "bg-white/5 rounded-xl px-4 py-3",

    infoLabel: "text-gray-400 text-[11px] uppercase tracking-[2px]",

    infoNumero: "text-orange-400 font-bold text-[20px]",

    infoTexto: "text-white font-semibold",

    infoItem: "text-orange-200 text-[14px]",

    infoTotal: "text-white font-semibold",

    infoStatus: "text-yellow-400 font-semibold capitalize",

    buttonVoltar: "w-full mt-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-orange-900/40 transition-all duration-300 hover:from-orange-400 hover:to-red-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95 cursor-pointer",
}

export const PaymentStyles = {
    modal: "relative z-10 w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60",

    form: "flex flex-col gap-5",

    title: "text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 text-3xl font-extrabold uppercase tracking-wide text-center mb-2 drop-shadow-lg",

    label: "text-orange-400 text-xs tracking-widest font-mono uppercase mb-2 text-center drop-shadow-sm",

    divider: "w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]",

    resumoBox: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-2",

    resumoLabel: "text-gray-400 text-[11px] uppercase tracking-[2px] mb-1",

    resumoTotal: "text-orange-400 font-bold text-[22px]",

    resumoItens: "text-orange-200 text-[13px] mt-1",

    separator: "flex items-center gap-3 my-2",

    separatorLine: "flex-1 border-0 border-t border-white/10",

    separatorText: "text-gray-500 text-[12px] whitespace-nowrap",

    creditCardForm: "flex flex-col gap-4",

    inputContainer: "flex flex-col gap-1.5",

    inputLabel: "text-gray-400 text-xs font-semibold tracking-widest uppercase",

    input: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/20 focus:bg-white/10 transition-all duration-300",

    splitRow: "flex gap-3",

    erroSpan: "text-red-500 text-[13px]",

    checkoutButton: "w-full mt-2 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-orange-900/40 transition-all duration-300 hover:from-orange-400 hover:to-red-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0",

    cancelButton: "w-full mt-2 py-3 bg-white/5 border border-white/10 text-gray-300 text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-95 cursor-pointer",
}
