export const Tela500Styles = {

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

    title: "text-6xl font-bold mb-4",

    message: "text-xl mb-6",

    subtitle: "text-lg text-gray-300 font-bold",

    button: `
        mt-6 px-6 py-3
        bg-gradient-to-r from-blue-600 to-blue-500
        text-white font-semibold rounded-lg
        shadow-md
        transition-colors duration-300
        hover:from-blue-500 hover:to-blue-400
    `,
}
