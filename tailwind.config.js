/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Exact tokens pulled from the live Mivora site
        lime: "#7EEA57", // primary accent (rgb 126,234,87)
        ink: "#212121", // dark surface (rgb 33,33,33)
        "ink-2": "#282828", // card surface on dark (rgb 40,40,40)
        "ink-3": "#050810", // near-black
        cream: "#F2F2F2", // page background (rgb 242,242,242)
        "cream-2": "#EBEBEB",
        "gray-body": "#636363", // body copy (rgb 99,99,99)
        "gray-mute": "#7B7B7B",
        "gray-line": "#BEBEBE",
      },
      fontFamily: {
        display: ['"Instrument Sans"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
        geist: ['"Geist"', "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        pill: "50px",
      },
      transitionTimingFunction: {
        framer: "cubic-bezier(0.44, 0, 0.56, 1)",
      },
    },
  },
  plugins: [],
};
