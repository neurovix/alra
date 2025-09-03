/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Roboto normal
        roboto: ["RobotoRegular", "sans-serif"],
        "roboto-bold": ["RobotoBold","sans-serif"],
        "roboto-extralight": ["RobotoExtralight","sans-serif"],
        "roboto-light": ["RobotoLight","sans-serif"],
        "roboto-medium": ["RobotoMedium","sans-serif"],
        "roboto-semibold": ["RobotoSemibold","sans-serif"],
        "roboto-thin": ["RobotoThin","sans-serif"],
        // Roboto italic
        "roboto-italic-black": ["RobotoItalicBlack","sans-serif"],
        "roboto-italic-bold": ["RobotoItalicBold","sans-serif"],
        "roboto-italic-extrabold": ["RobotoItalicExtrabold","sans-serif"],
        "roboto-italic-extralight": ["RobotoItalicExtralight","sans-serif"],
        "roboto-italic-regular": ["RobotoItalicRegular","sans-serif"],
        "roboto-italic-light": ["RobotoItalicLight","sans-serif"],
        "roboto-italic-medium": ["RobotoItalicMedium","sans-serif"],
        "roboto-italic-semibold": ["RobotoItalicSemibold","sans-serif"],
        "roboto-italic-thin": ["RobotoItalicThin","sans-serif"],
      }
    },
  },
  plugins: [],
}
