/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // IBM Condensed
        "ibm-condensed-bold": ["IBMCondensedBold", "sans-serif"],
        "ibm-condensed-extralight": ["IBMCondensedExtralight","sans-serif"],
        "ibm-condensed-light": ["IBMCondensedLight","sans-serif"],
        "ibm-condensed-medium": ["IBMCondensedMedium","sans-serif"],
        "ibm-condensed-regular": ["IBMCondensedRegular","sans-serif"],
        "ibm-condensed-semibold": ["IBMCondensedSemibold","sans-serif"],
        "ibm-condensed-thin": ["IBMCondensedThin","sans-serif"],
        // IBM Devanagari
        "ibm-devanagari-bold": ["IBMDevanagariBold", "sans-serif"],
        "ibm-devanagari-extralight": ["IBMDevanagariExtralight","sans-serif"],
        "ibm-devanagari-light": ["IBMDevanagariLight","sans-serif"],
        "ibm-devanagari-medium": ["IBMDevanagariMedium","sans-serif"],
        "ibm-devanagari-regular": ["IBMDevanagariRegular","sans-serif"],
        "ibm-devanagari-semibold": ["IBMDevanagariSemibold","sans-serif"],
        "ibm-devanagari-thin": ["IBMDevanagariThin","sans-serif"],
        // IBM Italic
        "ibm-italic-bold": ["IBMItalicBold", "sans-serif"],
        "ibm-italic-condensed": ["IBMItalicCondensed","sans-serif"],
        "ibm-italic-extralight": ["IBMItalicExtralight","sans-serif"],
        "ibm-italic-light": ["IBMItalicLight","sans-serif"],
        "ibm-italic-medium": ["IBMItalicMedium","sans-serif"],
        "ibm-italic-semibold": ["IBMItalicSemibold","sans-serif"],
        "ibm-italic-thin": ["IBMItalicThin","sans-serif"],
      }
    },
  },
  plugins: [],
}
