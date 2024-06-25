import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      portrait:
        "url('https://res.cloudinary.com/filemancentral/image/upload/v1719074160/portfolio/personal-website/about-me/face_iir6go.jpg')",
    },
    fontFamily: {
      roboto: ["rob"],
    },
    colors: {
      pink: "#F59097",
      yellow: "#ebb436",
      "light-gray": "#ebe1d8",
      "light-blue": "#add8e6",
      "dark-orange": "#eb6134",
      "dark-blue": "#1d8ebf",
    },
  },
  plugins: [],
};
export default config;
