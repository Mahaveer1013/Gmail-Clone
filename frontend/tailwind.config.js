export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}', // Add this for React/TypeScript projects
  ],
  theme: {
    screens: {
      "2xs": "320px",  // Custom extra small
      xs: "425px",  // Custom extra small
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      height: {
        navbar: '64px', // Example
      },
    },
  },
  plugins: [],
}
