import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textDark: "#1a1a1a",
        textLight: "#ffffff",
        bgDark: "#1a1a1a",
        bgLight: "#ffffff",
        primary: "#044BF1",
        secondary: "#dfdfdf",
        accent: "#17FFC7",
      },
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        default: "450ms",
        navbarIcon: "600ms",
      },
      backgroundImage: {
        "hero": "url('/hero.jpg')",
        "city": "url('/le-mans.png')",
        "radial-gradient": "radial-gradient(20vw 20vw at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent -100%, var(--tw-gradient-to) 150%)",
      },
      boxShadow: {
        navbar: "0 20px 40px 1px rgba(0,0,0,.12), inset 0 -10px 20px -5px rgba(0,0,0,.3), 0 150px 100px -80px rgba(0,0,0,.4), inset 0 1px 4px hsla(0,0%,100%,.6), inset 0 -1px 1px 1px rgba(0,0,0,.2)"
      },
      fontSize: {
        "h2": "clamp(1.25rem, 4vw, 5rem)"
      },
      gridTemplateColumns: {
        "team-lg": "2fr 1fr"
      }
    },
  },
  plugins: [
    function ({ addBase, theme }: any) {
      function extractColorVars (colorObj: any, colorGroup = ''): any {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `--tw-color${colorGroup}` : `--tw-color${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    }
  ],
}
export default config
