/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      IranSansX_Black: ["IranSansX-black", "sans-serif"],
      IranSansX_Bold: ["IranSansX-Bold", "sans-serif"],
      IranSansX_Exterabold: ["IranSansX-Exterabold", "sans-serif"],
      IranSansX_Medium: ["IranSansX-Medium", "sans-serif"],
      IranSansX_light: ["IranSansX-light", "sans-serif"],
      IranSansX_Regular: ["IranSansX-Regular", "sans-serif"],
      IranSansX_FaNum: ["IranSansx-FaNum", "sans-serif"]
    }
  },
  plugins: [],
}