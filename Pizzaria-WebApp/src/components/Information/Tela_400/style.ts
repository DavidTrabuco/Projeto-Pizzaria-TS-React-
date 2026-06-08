export const Tela400Styles = {

    grid: `
        flex flex-col items-center justify-center
        w-full h-screen
        bg-gradient-to-br from-gray-900 to-black
    `,

    card: `
        bg-gradient-to-bl from-gray-850 to-black
        p-10 rounded-2xl
        shadow-lg shadow-black/60
        text-center
        animate-fade-in
    `,

    title: "text-6xl font-bold text-white mb-4",

    message: "text-xl text-gray-300 mb-6",

    subtitle: "text-lg text-gray-400 font-bold mb-6",

    button: `
        mt-6 px-8 py-3
        bg-gradient-to-r from-blue-500 to-blue-700
        text-white font-bold rounded-lg
        shadow-lg shadow-blue-500/30
        transition-all duration-200
        hover:from-blue-600 hover:to-blue-800
    `,
}
