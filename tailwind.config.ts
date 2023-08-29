import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dla-parafii': "url('/church.jpg')",
        'dla-parafian': "url('/catolics.jpg')",
        'poradnik': "url('/rec1.png')",
        'dobre-przyklady': "url('/rec1.png')",
        'audyt-i-dotacje': "url('/rec1.png')",
        'o-programie': "url('/green-energy.jpg')",
        'do-pobrania': "url('/rec2.png')",
        'o-nas': "url('/earth.jpg')",
        'materialy': "url('/notebook2.jpg')"
      },
      backgroundColor: {
        "yellow-light" : "#FFD646",
        green : "#178748",
        blue : "#17A3EB",
        "yellow-dark": "#ecb800",
        red: "#FF1F1F",
        yellow : "#FFC700",
        orange: "#F49651",
        "orange-light": "#F49651",
        turquoise: "#50BDE5",
        'green-light': "#70C26E"
      },
      textColor: {
        green: "#18813F"
      },
      padding:{
        'small': '5px',
        'normal': "10px",
        "big": '20px',
        'extrabig': "30px"
      },
      maxWidth: {
        "normal" : "1200px"
      },
      fontSize: {
        sm : "12px",
        base: "14px",
        lg: "16px",
        xl: "20px",
        '2xl': "24px",
      },
    },
  },
  plugins: [],
}
export default config
