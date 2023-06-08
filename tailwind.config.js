const tailwindColors = require("tailwindcss/colors");
const colorSafeList = []

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"]

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const pallette = tailwindColors[colorName]

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`)
        colorSafeList.push(`bg-${colorName}-${shade}`)
      }
    })
  }
}

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  safelist: colorSafeList,
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        1000: "1000ms",
        2000: "2000ms",
        4000: "4000ms",
      },
      colors: tailwindColors
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
};


// const tailwindColors = require("tailwindcss/colors")
// const colorSafeList = []

// // Skip these to avoid a load of deprecated warnings when tailwind starts up
// const deprecated = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"]

// for (const colorName in tailwindColors) {
//   if (deprecated.includes(colorName)) {
//     continue
//   }

//   const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

//   const pallette = tailwindColors[colorName]

//   if (typeof pallette === "object") {
//     shades.forEach((shade) => {
//       if (shade in pallette) {
//         colorSafeList.push(`text-${colorName}-${shade}`)
//         colorSafeList.push(`bg-${colorName}-${shade}`)
//       }
//     })
//   }
// }

// // tailwind.config.js
// module.exports = {
//   safelist: colorSafeList,
//   // content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
//   mode: "jit",
//   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: tailwindColors,
//     },
//   },
//   plugins: [],
// }
