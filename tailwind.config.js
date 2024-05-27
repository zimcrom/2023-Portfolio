/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,tsx}", "./components/**/*.{html,js,tsx}"],
  theme: {
    fontSize: {
      xxs: "0.5rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
    },
    extend: {
      backgroundImage: {
        lightning: "url('/images/backgrounds/lightning.png')",
        "faded-lightning":
          "url('/images/backgrounds/faded-full-lightning.png')",
        "two-swirl": "url('/images/backgrounds/two-swirl.png')",
        "full-swirl": "url('/images/backgrounds/full-swirl.png')",
      },
      colors: {
        lightGray: "#b2b2b2",
        darkGray: "#808080",
      },
      fontFamily: {
        raleway: ["Raleway"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline": {
          "-webkit-text-stroke": "1px black",
        },
        ".text-outline-md": {
          "-webkit-text-stroke": "2px black",
        },
        ".text-outline-lg": {
          "-webkit-text-stroke": "3px black",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
