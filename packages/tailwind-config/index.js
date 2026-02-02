module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Glavna boja brenda (koristimo plavu iz primera)
          brand: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb', // Glavna boja dugmadi
            700: '#1d4ed8', // Hover stanje
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          // Neutralne boje za tekst i pozadine (Slate)
          slate: {
            50: '#f8fafc', // Pozadina stranice
            100: '#f1f5f9',
            200: '#e2e8f0', // Borderi
            300: '#cbd5e1',
            400: '#94a3b8', // Placeholder tekst
            500: '#64748b', // Sekundarni tekst
            600: '#475569',
            700: '#334155',
            800: '#1e293b', // Naslovi
            900: '#0f172a',
          }
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
          'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        }
      },
    },
    plugins: [],
  }