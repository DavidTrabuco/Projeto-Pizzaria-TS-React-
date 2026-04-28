export const DashboardStyle = {
    layout: "flex min-h-screen",

    sidebar: "w-52 bg-gray-900 border-r border-gray-800 flex flex-col",
    sidebarLogo: "px-5 py-5 border-b border-gray-800",
    sidebarLogoLabel: "text-xs text-orange-500 font-medium tracking-widest",
    sidebarLogoTitle: "text-white font-medium text-base mt-1",
    sidebarNav: "flex flex-col mt-4 flex-1",
    sidebarNavItem: "flex items-center gap-3 px-5 py-2 text-sm text-gray-400 cursor-pointer border-l-2 border-transparent hover:bg-gray-800 hover:text-white",
    sidebarNavItemActive: "flex items-center gap-3 px-5 py-2 text-sm text-orange-500 font-medium cursor-pointer border-l-2 border-orange-500 bg-gray-800",
    sidebarBottom: "px-5 py-4 border-t border-gray-800",
    sidebarLogout: "w-full py-3 bg-transparent border border-gray-700 text-gray-400 text-sm font-medium tracking-widest uppercase rounded-lg transition-all duration-300 hover:border-red-500/60 hover:text-red-500 hover:bg-gray-800 active:scale-95 cursor-pointer",

    main: "flex-1 bg-gray-950 p-6",
    mainHeader: "mb-6",
    mainTitle: "text-lg font-medium text-white",
    mainSubtitle: "text-sm text-gray-400 mt-1",

    cardsGrid: "grid grid-cols-3 gap-3 mb-6",
    metricCard: "bg-gray-900 rounded-lg p-4",
    metricLabel: "text-xs text-gray-400 mb-1",
    metricValue: "text-2xl font-medium text-white",
    metricSub: "text-xs text-green-500 mt-1",

    sectionTitle: "text-sm font-medium text-white mb-3",
    tableWrapper: "border border-gray-800 rounded-lg overflow-hidden",
    table: "w-full text-xs",
    tableTh: "bg-gray-900 px-3 py-2 text-left text-gray-400 font-medium border-b border-gray-800",
    tableTd: "px-3 py-2 text-gray-300 border-b border-gray-800",
    badgeGreen: "inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-400",
    badgeAmber: "inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-amber-900 text-amber-400",
}
