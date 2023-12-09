/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */


module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				"tran-left-dest": {
					"0%": { "transform": 'translateX(-100%)' },
					"100%": { "transform": 'translateX(0%)' },
				},
				"tran-right-dest": {
					"0%": { "transform": 'translateX(100%)' },
					"100%": { "transform": 'translateX(0%)' },
				},
				"tran-down-dest": {
					"0%": { "transform": 'translateY(-100%)' },
					"100%": { "transform": 'translateY(0%)' },
				},
				"tran-up-dest": {
					"0%": { "transform": 'translateY(100%)' },
					"100%": { "transform": 'translateY(0%)' },
				},
				"width-trans": {
					"0%": { "border-radius": '70%', "box-shadow": "inset 50px 50px 100px #03421c", },
					"20%": { "border-radius": '60%', "box-shadow": "inset 40px 40px 70px #03421c" },
					"40%": { "border-radius": '70%', "box-shadow": "inset 30px 30px 50px #03421c" },
					"60%": { "border-radius": '80%', "box-shadow": "inset 20px 20px 30px #03421c" },
					"80%": { "border-radius": '60%', "box-shadow": "inset 10px 10px 20px #03421c" },
					"100%": { "border-radius": '50%', "box-shadow": "inset 0px 0px 10px #03421c" },
				}
			},
			animation: {
				"accordion-down": "accordion-down 1s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"trans-left-dest": "tran-left-dest 1s ease-in",
				"tran-right-dest": "tran-right-dest 1s ease-in",
				"tran-down-dest": "tran-down-dest 1s ease-in",
				"tran-up-dest": "tran-up-dest 1s ease-in",
				"trans-width-trans": "width-trans 1s ease-in"

			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
}