module.exports = {
  content: ['./src/screens/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          medium: '#057659',
          darker: '#025A44',
        },
        secondary: {
          white: '#FFFFFF',
          lighGray: '#C9C9C9',
          gray: '#A4A4A4',
          graybolder: '#585858',
          grayboldest: '#303030',
          rose: '#EA7B7B',
        },
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
