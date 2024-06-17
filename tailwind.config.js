/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "monospace"],
    },
    extend: {
      colors: {
        "green-light": "#c1d72f",
        "green-dark": "#323232",
        "green-form": "#d8e57b",
        "red-light": "#cf6679",
        "custom-black": "#231f20",
        "black-light": "#00000090",
      },
      gridTemplateColumns: {
        title: "max-content 1fr",
        dynamic: "repeat(Auto-fill, 256px)",
      },
      boxShadow: {
        button: "0px 2px 10px -2px",
        header: "0 0px 10px 0 hsl(220, 14%, 75%)",
        "hover-card": "0px 2px 10px 1px #f7f7f6",
        card: "0px 4px 10px 0px #e6e6e6",
      },
    },
  },
  plugins: [],
};
