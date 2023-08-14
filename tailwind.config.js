/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'screen': "var(--screen-bg)",
        'main': "var(--main-bg)",
        'keypad': "var(--keypad-bg)",
        'key': "var(--key-bg)",
        "key-shadow": "var(--key-shadow)",
        "equal-key-background": "var(--equal-key-bg)",
        "equal-key-shadow": "var(--equal-key-shadow)",
        "func-key-background": "var(--func-key-bg)",
        "func-key-shadow": "var(--func-key-shadow)",
        "dark": "var(--dark--text-color)",
        "white": "var(--white-text-color)",
        "light-yellow": "var(--light-yellow-text-color)",
      },
    },
  },
  plugins: [require("daisyui")],
};

