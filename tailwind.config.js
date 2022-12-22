/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        xsm: "0px 0px 12px #aaa, -0px -0px 12px #fff",
      },
      animation: {
        loading: "loading 500ms linear 0ms infinite",
        grow: "grow 500ms linear 0ms infinite",
      },
      keyframes: {
        loading: {
          from: {
            transform: "translateX(0px)",
          },
          to: {
            transform: "translateX(45px)",
          },
        },
      },
      grow: {
        from: {
          transform: "scale(0, 0)",
          opacity: 0,
        },
        to: {
          transform: "scale(1, 1)",
          opacity: 1,
        },
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
