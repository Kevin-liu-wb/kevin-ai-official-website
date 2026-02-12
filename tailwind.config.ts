import type { Config } from "tailwindcss";  
  
const config: Config = {  
  content: [  
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  
  ],  
  theme: {  
    extend: {  
      colors: {  
        background: "var(--background)",  
        foreground: "var(--foreground)",  
        stripe: {  
          purple: '#635BFF',  
          blue: '#00D4FF',  
          pink: '#FF4ECD',  
          dark: '#0A2540',  
          gray: '#425466',  
          light: '#F6F9FC',  
        }  
      },  
      backgroundImage: {  
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',  
        'stripe-hero': 'linear-gradient(135deg, #635BFF 0%, #00D4FF 50%, #FF4ECD 100%)',  
        'stripe-subtle': 'linear-gradient(180deg, #F6F9FC 0%, #FFFFFF 100%)',  
      },  
      animation: {  
        'gradient-x': 'gradient-x 15s ease infinite',  
        'fade-in': 'fade-in 0.5s ease-out',  
        'slide-up': 'slide-up 0.5s ease-out',  
      },  
      keyframes: {  
        'gradient-x': {  
          '0%, 100%': {  
            'background-size': '200% 200%',  
            'background-position': 'left center'  
          },  
          '50%': {  
            'background-size': '200% 200%',  
            'background-position': 'right center'  
          },  
        },  
        'fade-in': {  
          '0%': { opacity: '0' },  
          '100%': { opacity: '1' },  
        },  
        'slide-up': {  
          '0%': { transform: 'translateY(20px)', opacity: '0' },  
          '100%': { transform: 'translateY(0)', opacity: '1' },  
        },  
      },  
    },  
  },  
  plugins: [],  
};  
export default config; 
