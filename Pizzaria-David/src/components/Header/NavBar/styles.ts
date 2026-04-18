export const NavBarStyles = {
    backgroundColor: "bg-red-950/20 backdrop-blur-md w-full fixed top-0 left-0 right-0 z-50",

    default: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-20",

    navCenter: "hidden md:flex items-center gap-8",

    itemMenu: "font-medium text-lg transition-all duration-300 hover:-translate-y-1 inline-block",
    itemTheme: "text-white hover:text-orange-500",

    button: "hidden md:block rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-orange-500/50 hover:shadow-lg cursor-pointer",

    buttonLogin: "hidden md:block rounded-full bg-transparent border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:scale-105 hover:-translate-y-1 cursor-pointer",

    buttonGroup: "flex items-center gap-3",

    NavbarLogo: "h-30 w-auto transition-all duration-300 hover:scale-110 cursor-pointer",

    hamburger: "md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer",
    hamburgerLine: "w-6 h-0.5 bg-white rounded-full transition-all duration-300",

    mobileMenu: "md:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-red-900 border-t border-white/10 px-6 py-6 flex flex-col gap-5 shadow-xl shadow-orange/50",

    mobileLink: "text-orange text-lg font-medium hover:text-orange-400 transition-colors duration-200",

    // itemMenuTheme: combina itemMenu + itemTheme
    itemMenuTheme: "font-medium text-lg transition-all duration-300 hover:-translate-y-1 inline-block text-white hover:text-orange-500",
}
