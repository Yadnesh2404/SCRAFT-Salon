import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./index.html",
	],
	safelist: [
		// Animation classes that must be preserved
		'animate-float',
		'animate-shimmer',
		'animate-fade-in',
		'animate-gold-glow',
		'animate-luxury-pulse',
		'animate-pulse',
		'animate-bounce',
		'animate-ping',
		'animate-spin',
		// Transition classes
		'transition-all',
		'transition-opacity',
		'transition-transform',
		'transition-colors',
		'transition-shadow',
		// Duration classes
		'duration-300',
		'duration-500',
		'duration-700',
		'duration-1000',
		// Easing classes
		'ease-out',
		'ease-in-out',
		'ease-linear',
		// Transform classes
		'translate-y-0',
		'translate-y-20',
		'translate-y-16',
		'translate-y-10',
		'translate-x-0',
		'scale-100',
		'scale-75',
		'scale-95',
		'scale-105',
		'scale-110',
		// Opacity classes
		'opacity-0',
		'opacity-100',
		// Animation keyframes that must be preserved
		'@keyframes float',
		'@keyframes shimmer',
		'@keyframes fadeIn',
		'@keyframes goldGlow',
		'@keyframes luxuryPulse',
		// Custom animation classes
		'bg-texture-luxury',
		'bg-texture-elegant',
		'hover-luxury',
		'hover-gold',
		'btn-luxury',
		'btn-outline-luxury',
		'card-luxury',
		'card-premium',
		'shadow-elegant',
		'shadow-premium',
		'shadow-luxury',
		'shadow-gold',
		'bg-gradient-luxury',
		'bg-gradient-champagne',
		'bg-gradient-ivory',
		'bg-gradient-gold',
		'bg-gradient-shimmer',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Additional luxury colors
				gold: {
					50: '#fefce8',
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#eab308',
					600: '#ca8a04',
					700: '#a16207',
					800: '#854d0e',
					900: '#713f12',
					950: '#422006',
				},
				champagne: {
					50: '#fefefe',
					100: '#fdfdfd',
					200: '#fafafa',
					300: '#f5f5f5',
					400: '#f0f0f0',
					500: '#e5e5e5',
					600: '#d4d4d4',
					700: '#a3a3a3',
					800: '#737373',
					900: '#525252',
					950: '#262626',
				},
				ivory: {
					50: '#fefefe',
					100: '#fefefe',
					200: '#fdfdfd',
					300: '#fafafa',
					400: '#f5f5f5',
					500: '#f0f0f0',
					600: '#e5e5e5',
					700: '#d4d4d4',
					800: '#a3a3a3',
					900: '#737373',
					950: '#525252',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(43 74% 49% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(43 74% 49% / 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-gold': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsl(43 74% 49% / 0.7)' },
					'50%': { boxShadow: '0 0 0 20px hsl(43 74% 49% / 0)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				// Add the missing keyframes from your CSS
				'fadeIn': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'goldGlow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(217 155 55 / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(217 155 55 / 0.6)' }
				},
				'luxuryPulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.05)', opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gold': 'pulse-gold 2s infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				// Add the missing animations
				'fadeIn': 'fadeIn 0.8s ease-out forwards',
				'goldGlow': 'goldGlow 3s ease-in-out infinite',
				'luxuryPulse': 'luxuryPulse 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-luxury': 'linear-gradient(135deg, hsl(43 74% 49% / 0.1) 0%, hsl(38 69% 59% / 0.1) 100%)',
				'gradient-champagne': 'linear-gradient(135deg, hsl(45 25% 97%) 0%, hsl(43 20% 94%) 100%)',
				'gradient-ivory': 'linear-gradient(135deg, hsl(45 25% 98%) 0%, hsl(43 20% 96%) 100%)',
			},
			boxShadow: {
				'gold': '0 10px 40px hsl(217 155 55 / 0.15)',
				'elegant': '0 4px 20px hsl(0 0% 0% / 0.08)',
				'premium': '0 8px 30px hsl(0 0% 0% / 0.12)',
				'luxury': '0 20px 60px hsl(217 155 55 / 0.15)',
				'gold-glow': '0 0 30px hsl(43 74% 49% / 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
