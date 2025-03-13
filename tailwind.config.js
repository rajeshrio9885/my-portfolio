import tailwindFilters from 'tailwindcss-filters';


export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			typing: {
  				'0%': {
  					width: '0%',
  					visibility: 'hidden'
  				},
  				'100%': {
  					width: '100%'
  				}
  			},
  			blink: {
  				'50%': {
  					borderColor: 'transparent'
  				},
  				'100%': {
  					borderColor: 'white'
  				}
  			}
  		},
  		animation: {
  			typing: 'typing 3s steps(20) infinite alternate, blink .2s infinite'
  		},
  		borderColor: {
			primary: 'rgb(0, 102, 94)',      // Thick (Darker) Teal
			secondary: 'rgb(0, 191, 165)',   // Light Teal
  		},
  		backgroundImage: {
			'hero-pattern': "url('./src/assets/backdrop.jpg')",
			'cosmos': "url('https://r4.wallpaperflare.com/wallpaper/199/471/657/sci-fi-milky-way-earth-from-space-wallpaper-92a1a2601dd6defb8a18e2f510180972.jpg')"
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	fontFamily: {
  		'hero-font': 'Exo',
  		'title-font': 'Days One',
  		'list-font': 'Josefin Sans',
  		'row-font': 'Rowdies'
  	}
  },
  plugins: [
    tailwindFilters,
      require("tailwindcss-animate")
],
}