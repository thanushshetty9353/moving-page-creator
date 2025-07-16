import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			'float': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-20px)' }
			},
			'neonGlow': {
				'0%': { 
					boxShadow: '0 0 20px hsl(323 89% 68% / 0.5), 0 0 40px hsl(323 89% 68% / 0.3)',
					transform: 'scale(1)'
				},
				'100%': { 
					boxShadow: '0 0 40px hsl(323 89% 68% / 0.8), 0 0 80px hsl(323 89% 68% / 0.4)',
					transform: 'scale(1.02)'
				}
			},
			'pulseNeon': {
				'0%, 100%': { 
					boxShadow: '0 0 20px hsl(323 89% 68% / 0.3), 0 0 40px hsl(199 89% 68% / 0.2)' 
				},
				'50%': { 
					boxShadow: '0 0 40px hsl(323 89% 68% / 0.6), 0 0 80px hsl(199 89% 68% / 0.4)' 
				}
			},
			'rainbow': {
				'0%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' },
				'100%': { backgroundPosition: '0% 50%' }
			},
			'moveGradient': {
				'0%': { backgroundPosition: '0% 0%' },
				'50%': { backgroundPosition: '100% 100%' },
				'100%': { backgroundPosition: '0% 0%' }
			},
			'borderGlow': {
				'0%': { 
					boxShadow: '0 0 20px hsl(323 89% 68% / 0.5), inset 0 0 20px hsl(323 89% 68% / 0.1)' 
				},
				'100%': { 
					boxShadow: '0 0 40px hsl(199 89% 68% / 0.8), inset 0 0 40px hsl(199 89% 68% / 0.2)' 
				}
			},
			'slideUp': {
				'0%': { 
					opacity: '0',
					transform: 'translateY(50px)'
				},
				'100%': { 
					opacity: '1',
					transform: 'translateY(0)'
				}
			},
			'fadeIn': {
				'0%': { 
					opacity: '0',
					transform: 'translateY(20px)'
				},
				'100%': { 
					opacity: '1',
					transform: 'translateY(0)'
				}
			},
			'scaleIn': {
				'0%': { 
					opacity: '0',
					transform: 'scale(0.9)'
				},
				'100%': { 
					opacity: '1',
					transform: 'scale(1)'
				}
			},
			'floatParticles': {
				'0%': { transform: 'translateY(0px) rotate(0deg)' },
				'100%': { transform: 'translateY(-100vh) rotate(360deg)' }
			},
			'wiggle': {
				'0%, 100%': { transform: 'rotate(-3deg)' },
				'50%': { transform: 'rotate(3deg)' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'float': 'float 6s ease-in-out infinite',
			'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
			'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
			'rainbow': 'rainbow 3s linear infinite',
			'move-gradient': 'moveGradient 4s ease infinite',
			'border-glow': 'borderGlow 2s ease-in-out infinite alternate',
			'slide-up': 'slideUp 0.8s ease-out forwards',
			'fade-in': 'fadeIn 0.6s ease-out forwards',
			'scale-in': 'scaleIn 0.5s ease-out forwards',
			'float-particles': 'floatParticles 20s linear infinite',
			'wiggle': 'wiggle 1s ease-in-out infinite'
		}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
