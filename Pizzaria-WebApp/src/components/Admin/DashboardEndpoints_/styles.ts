export const AdminDashboardStyles = {
    container: "w-full p-6 space-y-6",

    header: "flex items-center justify-between mb-6",
    headerTitle: "text-base font-semibold text-white",
    inviteTopBtn: "flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 text-white text-sm rounded-xl hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-pointer",

    usersList: "space-y-3",
    userCard: "flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all",

    avatar: "w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 select-none",
    avatarDefault: "bg-orange-900/50 text-orange-300",

    userInfo: "flex-1 min-w-0",
    userName: "text-sm font-semibold text-white truncate",
    userEmail: "text-xs text-gray-400 mt-0.5 truncate",

    userActions: "flex items-center gap-3 flex-shrink-0",

    editBtn: "px-4 py-1.5 bg-transparent border border-gray-700 text-white text-sm rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all cursor-pointer",

    inviteSection: "bg-gray-900 border border-gray-800 rounded-xl p-5",
    editSection: "bg-gray-900/60 border border-gray-800 border-t-0 rounded-b-xl px-5 py-4",
    inviteTitle: "text-sm font-semibold text-white mb-4",
    inviteForm: "flex gap-3 flex-wrap",
    inviteInput: "flex-1 min-w-48 bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-2.5 placeholder-gray-500 focus:outline-none focus:border-orange-500/60 transition-all",
    inviteSelect: "bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-3 py-2.5 cursor-pointer focus:outline-none focus:border-orange-500/60 transition-all",
    inviteSubmitBtn: "px-4 py-2.5 bg-gray-800 border border-gray-700 text-white text-sm rounded-xl hover:border-orange-500/50 hover:text-orange-400 transition-all whitespace-nowrap cursor-pointer",
    cancelBtn: "px-4 py-1.5 bg-transparent border border-red-800/40 text-red-400 text-sm rounded-lg hover:border-red-600/60 transition-all cursor-pointer",
}

export const CardapioDashboardStyles = {
    container: "w-full p-6 space-y-6",
    header: "flex items-center justify-between mb-6",
    headerTitle: "text-base font-semibold text-white",
    addBtn: "flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 text-white text-sm rounded-xl hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-pointer",

    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
    card: "bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-3 hover:border-gray-700 transition-all",
    cardName: "text-sm font-semibold text-white",
    cardDesc: "text-xs text-gray-400",
    cardPrice: "text-sm font-bold text-orange-400",
    cardActions: "flex gap-2 mt-auto",
    editBtn: "flex-1 py-1.5 bg-transparent border border-gray-700 text-white text-xs rounded-lg hover:border-gray-500 transition-all cursor-pointer",
    deleteBtn: "flex-1 py-1.5 bg-transparent border border-red-800/40 text-red-400 text-xs rounded-lg hover:border-red-600/60 transition-all cursor-pointer",
}

export const PedidosDashboardStyles = {
    container: "w-full p-6 space-y-6",

    // cards de métricas
    cardsGrid: "grid grid-cols-2 lg:grid-cols-4 gap-3",
    metricCard: "bg-gray-900 border border-gray-800 rounded-xl p-4",
    metricCardHeader: "flex items-center gap-2 text-gray-400 text-xs mb-2",
    metricValue: "text-3xl font-bold text-white",

    // barra de filtro
    filterBar: "flex items-center justify-between gap-3 flex-wrap",
    filterTitle: "text-base font-semibold text-white",
    filterRight: "flex items-center gap-2",
    filterSelect: "bg-gray-900 border border-gray-700 text-white text-sm rounded-xl px-3 py-2 cursor-pointer focus:outline-none focus:border-orange-500/60 transition-all",
    refreshBtn: "flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 text-white text-sm rounded-xl hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-pointer",

    // tabela
    tableWrapper: "border border-gray-800 rounded-xl overflow-hidden",
    table: "w-full text-sm",
    tableTh: "bg-gray-900 px-4 py-3 text-left text-gray-500 text-xs font-semibold uppercase tracking-wide border-b border-gray-800",
    tableTd: "px-4 py-3 text-gray-300 text-sm border-b border-gray-800/50",
    tableRow: "hover:bg-gray-900/50 transition-all",
    emptyRow: "px-4 py-10 text-center text-gray-500 text-sm",

    // badges de status
    badgePendente:      "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-900/50 text-amber-400 border border-amber-800/40",
    badgeConfirmado:    "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-900/50 text-blue-400 border border-blue-800/40",
    badgeEmPreparo:     "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-900/50 text-indigo-400 border border-indigo-800/40",
    badgeSaioEntrega:   "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-900/50 text-orange-400 border border-orange-800/40",
    badgeEntregue:      "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-green-900/50 text-green-400 border border-green-800/40",
}

export const ReservasStyles = {
    container: "w-full p-6",

    // layout principal: calendário | lista
    layout: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",

    // ── calendário ────────────────────────────────────────────────────────
    calendarSection: "bg-gray-900/40 rounded-2xl p-5",
    calendarHeader: "flex items-center justify-between mb-5",
    calendarTitle: "text-xl font-bold text-white",
    calendarNav: "flex gap-2",
    calendarNavBtn: "w-9 h-9 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-xl text-white text-lg hover:border-gray-500 transition-all cursor-pointer select-none",

    calendarGrid: "grid grid-cols-7 gap-1.5",
    calendarDayLabel: "text-xs text-gray-500 font-medium text-center py-1",
    calendarDayEmpty: "aspect-square",
    calendarDay: "aspect-square rounded-xl flex flex-col items-start justify-start p-1.5 text-sm font-medium text-gray-400 bg-gray-800/50 border border-gray-800 cursor-default",
    calendarDayHighlighted: "aspect-square rounded-xl flex flex-col items-start justify-start p-1.5 text-sm font-semibold text-orange-500 bg-orange-950/40 border border-orange-900/60 cursor-pointer hover:border-orange-700/80 transition-all",
    calendarDayCount: "text-xs text-orange-400/80 font-normal leading-none mt-auto",

    // ── lista de reservas ────────────────────────────────────────────────
    listSection: "flex flex-col gap-4",
    listHeader: "flex items-center justify-between",
    listTitle: "text-base font-semibold text-white",
    novaBtn: "flex items-center gap-1.5 px-4 py-2 bg-gray-900 border border-gray-700 text-white text-sm rounded-xl hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-pointer",

    list: "space-y-3 max-h-[560px] overflow-y-auto pr-1",

    // card de reserva
    reservaCard: "bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-3 hover:border-gray-700 transition-all",
    reservaCardHeader: "flex items-start justify-between gap-3",
    reservaNome: "text-sm font-bold text-white",
    reservaMeta: "text-xs text-gray-400 mt-0.5",
    reservaActions: "flex gap-2",

    // badges
    badgePendente:   "px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-900/50 text-amber-400 border border-amber-800/40 whitespace-nowrap",
    badgeConfirmada: "px-2.5 py-1 rounded-md text-xs font-semibold bg-green-900/50 text-green-400 border border-green-800/40 whitespace-nowrap",
    badgeCancelada:  "px-2.5 py-1 rounded-md text-xs font-semibold bg-red-900/50 text-red-400 border border-red-800/40 whitespace-nowrap",

    // botões das reservas
    btnConfirmar: "flex-1 py-2 bg-transparent border border-green-700/50 text-green-400 text-xs font-semibold rounded-xl hover:bg-green-900/20 transition-all cursor-pointer",
    btnRecusar:   "flex-1 py-2 bg-transparent border border-red-700/50 text-red-400 text-xs font-semibold rounded-xl hover:bg-red-900/20 transition-all cursor-pointer",
    btnDetalhes:  "flex-1 py-2 bg-transparent border border-gray-700 text-white text-xs font-semibold rounded-xl hover:border-gray-500 transition-all cursor-pointer",
    btnCancelar:  "flex-1 py-2 bg-transparent border border-red-700/50 text-red-400 text-xs font-semibold rounded-xl hover:bg-red-900/20 transition-all cursor-pointer",

    // botões legados (mantidos para compatibilidade)
    cardInfo: "flex-1 min-w-0",
    cardName: "text-sm font-semibold text-white",
    cardMeta: "text-xs text-gray-400 mt-0.5",
    cardActions: "flex items-center gap-2 flex-shrink-0",
    editBtn: "px-3 py-1.5 bg-transparent border border-gray-700 text-white text-xs rounded-lg hover:border-gray-500 transition-all cursor-pointer",
    cancelBtn: "px-3 py-1.5 bg-transparent border border-red-800/40 text-red-400 text-xs rounded-lg hover:border-red-600/60 transition-all cursor-pointer",

    // ── modal ─────────────────────────────────────────────────────────────
    modalOverlay: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4",
    modal: "bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md space-y-4",
    modalTitle: "text-base font-semibold text-white",
    modalGroup: "flex flex-col gap-1",
    modalLabel: "text-xs text-gray-400",
    modalInput: "w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-2.5 placeholder-gray-500 focus:outline-none focus:border-orange-500/60 transition-all",
    modalError: "text-xs text-red-400",
    modalRow: "grid grid-cols-2 gap-3",
    modalActions: "flex gap-3 pt-2",
    modalBtnSubmit: "flex-1 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-xl hover:bg-orange-700 transition-all cursor-pointer disabled:opacity-50",
    modalBtnCancel: "flex-1 py-2.5 bg-transparent border border-gray-700 text-white text-sm rounded-xl hover:border-gray-500 transition-all cursor-pointer",
}
