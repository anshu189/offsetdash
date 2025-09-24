/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primarywhite": "var(--primarywhite)",
        "primaryblue": "var(--primaryblue)",
        "textblack": "var(--textblack)",
        "subtext": "var(--subtext)",
        "inputtext": "var(--inputtext)",
        "activelight": "var(--activelight)",
        "activedark": "var(--activedark)",
        "retiredlight": "var(--retiredlight)",
        "retireddark": "var(--retireddark)"
      },
    },
  },
  plugins: [],
}
