module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#FFEDD5",

          "neutral": "#FFEDD5",

          "base-100": "#FFEDD5",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#DF7E07",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}