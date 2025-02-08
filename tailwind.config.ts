import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: 'var(--primary)',
  			'primary-dark': 'var(--primary-dark)',
  			secondary: 'var(--secondary)',
  			'secondary-light': 'var(--secondary-light)',
  			accent: 'var(--accent)',
  			background: 'var(--background)',
  			'text-primary': 'var(--text-primary)',
  			'text-secondary': 'var(--text-secondary)'
  		},
  		fontFamily: {
  			lexend: [
  				'var(--font-lexend-deca)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			custom: '0 4px 20px rgba(0, 0, 0, 0.08)'
  		},
  		animation: {
  			scroll: 'scroll 40s linear infinite',
  			'scroll-reverse': 'scroll 40s linear infinite reverse',
  			float: 'float 3s ease-in-out infinite',
  			meteor: 'meteor 5s linear infinite',
  			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite'
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			}
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none">
                <circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle>
              </svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    }
    
  ],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
