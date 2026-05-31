/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050507',
        surface: '#0b0c12',
        panel: '#10131b',
        line: 'rgba(255,255,255,0.08)',
        mist: 'rgba(255,255,255,0.6)',
        purple: {
          400: '#b56cff',
          500: '#9d4dff',
          600: '#7d31ea'
        },
        cyan: {
          400: '#67e8f9',
          500: '#22d3ee'
        },
        green: {
          400: '#6ee7b7',
          500: '#34d399'
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(157,77,255,0.14)',
        halo: '0 0 60px rgba(34,211,238,0.12)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(157,77,255,0.18), transparent 40%), radial-gradient(circle at 20% 20%, rgba(34,211,238,0.08), transparent 24%), radial-gradient(circle at 80% 0%, rgba(52,211,153,0.08), transparent 20%)'
      }
    }
  },
  plugins: []
};
