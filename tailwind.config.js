/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chestnut: {
          50: "#fafaf7",
          100: "#f6efe4",
          200: "#edd8c7",
          300: "#d6b29a",
          400: "#bd886d",
          500: "#a2674a",
          600: "#864c34",
          700: "#673929",
          800: "#47281e",
          900: "#2d1913",
        },
        olive: {
          50: "#f9f9f6",
          100: "#f3efe5",
          200: "#e4dbc9",
          300: "#c5b89c",
          400: "#9e906e",
          500: "#7f704a",
          600: "#675635",
          700: "#50412a",
          800: "#372d1f",
          900: "#231c15",
        },
        gray: {
          50: "#f7f8f6",
          100: "#edefec",
          200: "#d8ddd7",
          300: "#b0bcb0",
          400: "#7f9685",
          500: "#627760",
          600: "#505c48",
          700: "#3f4638",
          800: "#2c3029",
          900: "#1c1e1c",
        },
        gray: {
          50: "#f6f8f7",
          100: "#eaefef",
          200: "#d1dede",
          300: "#a6bdbb",
          400: "#729893",
          500: "#57796f",
          600: "#475e55",
          700: "#394742",
          800: "#28312f",
          900: "#1a1f20",
        },
        gray: {
          50: "#f7f8f7",
          100: "#eaeff2",
          200: "#d1dde4",
          300: "#a8bcc5",
          400: "#7796a1",
          500: "#5c7680",
          600: "#4b5b64",
          700: "#3c454d",
          800: "#2a2f37",
          900: "#1a1e24",
        },
        cyan: {
          50: "#f7f8f8",
          100: "#eaeff5",
          200: "#d1dcea",
          300: "#a8bad0",
          400: "#7b94b2",
          500: "#607395",
          600: "#4f5879",
          700: "#3e425d",
          800: "#2b2e41",
          900: "#1b1d2a",
        },
        cyan: {
          50: "#f7f9f8",
          100: "#ebeff6",
          200: "#d5daec",
          300: "#aeb8d4",
          400: "#8591b7",
          500: "#6a709c",
          600: "#575480",
          700: "#434063",
          800: "#2f2c45",
          900: "#1d1c2b",
        },
        gray: {
          50: "#f8f9f9",
          100: "#edeff5",
          200: "#d9daea",
          300: "#b5b6d1",
          400: "#8f8fb3",
          500: "#736d98",
          600: "#5e527b",
          700: "#493e5e",
          800: "#322b41",
          900: "#1f1b29",
        },
        gray: {
          50: "#f9f9f8",
          100: "#f2eff1",
          200: "#e3d8e3",
          300: "#c5b4c3",
          400: "#a68ba0",
          500: "#8a697f",
          600: "#714e63",
          700: "#573b4b",
          800: "#3c2934",
          900: "#251a20",
        },
        beaver: {
          50: "#fafaf8",
          100: "#f5efec",
          200: "#ead7d7",
          300: "#d1b1b1",
          400: "#b88788",
          500: "#9e6665",
          600: "#824b4a",
          700: "#633838",
          800: "#452728",
          900: "#2b1919",
        },
      },
    },
    fontFamily: {
      header: ["Aqua Grotesque", "Helvetica Neue", "Helvetica"],
      number: ["serif", "Helvetica Neue", "Helvetica"],
      // 'couture': ["Raleway", "Helvetica Neue", "Helvetica"],
      title: ["Austen"],
      bodyy: ["Klein Trial"],
      body: ["Mada"],
    },
  },
  plugins: [],
}
