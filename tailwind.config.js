/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "screen-bg": "var(--screen-bg)",
        "main-bg": "var(--main-bg)",
        "keypad-bg": "var(--keypad-bg)",
        "key-bg": "var(--key-bg)",
        "equal-key-background": "var(--equal-key-background)",
        "equal-key-shadow": "var(--equal-key-shadow)",
        "func-key-background": "var(--func-key-background)",
        "func-key-shadow": "var(--func-key-shadow)",
        "dark--text-color": "var(--dark--text-color)",
        "white-text-color": "var(--white-text-color)",
        "light-yellow-text-color": "var(--light-yellow-text-color)",
      },
    },
  },
  plugins: [require("daisyui")],
};

