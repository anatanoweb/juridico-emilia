/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Antigravity Palette
                void: {
                    900: '#000000', // Absolute Void
                    950: '#050505', // Deep Space
                },
                navy: {
                    800: '#0a0f18', // Technical Dark
                    900: '#05080f', // Deep Navy
                },
                amber: {
                    400: '#FFD028', // Signal Amber (High Vis)
                    500: '#F5B700', // Warning/Action
                },
                tech: {
                    100: '#E0E7FF', // Cold White
                    500: '#6366F1', // Indigo Laser
                    900: '#1E1B4B', // Deep Indigo
                },
                // Functional semantic aliases
                surface: '#05080f',
                'surface-highlight': '#0a0f18',
                justice: {
                    950: '#05080f', // Deep Navy / Surface
                    gold: '#FFD028', // Amber 400 alias
                },
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'], // For technical data
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1e293b1a 1px, transparent 1px), linear-gradient(to bottom, #1e293b1a 1px, transparent 1px)",
                'glow-radial': "radial-gradient(circle at center, var(--tw-gradient-stops))",
            },
            borderRadius: {
                'jeimas': '24px', // Custom curvature
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                    '50%': { opacity: 0.8, transform: 'scale(1.5)' },
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scan 4s linear infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
