/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      logo: ['Carter One'],
      load: ['Bebas Neue'],
    },

    extend: {
      width: {
        wfit: '250px',
        maxNav: '11.5%',
        maxPage: '88.5%',
        xxxl: '10em',
        xxl: '9em',
        82: '21rem',
      },
      height: {
        hfit: '250px',
      },
      rotate: {
        135: '135deg',
        225: '225deg',
        270: '270deg',
        315: '315deg',
        360: '360deg',
        350: '340deg',
      },
      boxShadow: {
        roseShadow: '0 0 30px #e11d48',
        socialShadow: '0 5px 45px rgba(0,0,0,0.1)',
        themeBtnShadow:
          '-5px -5px 20px rgba(255,255,255,0.1), 5px 5px 10px rgba(0,0,0,1),inset -2px -2px 5px rgba(255,255,255,0.1),inset 2px 2px 5px rgba(0,0,0,0.5), 0 0 0 2px #1f1f1f',
        themeBfShadow: '0 0 0 1px #232323',
        themeAfShadow: '0 0 5px #e11d48, 0 0 15px #e11d48, 0 0 30px #e11d48',
      },
      borderWidth: {
        iconW: '1px',
      },
      borderColor: {
        iconC: 'rgba(255,255,255,0.4)',
        iconRB: 'rgba(255,255,255,0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundColor: {
        socialCol: 'rgba(255,255,255,0.5)',
        loader: 'rgb(39 42 45) ',
      },
      textColor: {
        label: '#8f8f8f',
      },
      scale: {
        98: '0.98',
        96: '0.96',
      },
      skew: {
        45: '45deg',
      },
      borderRadius: {
        custom35: '20px',
      },
      zIndex: {
        max: '9999',
        load: '9998',
        neg: '-1',
      },
      margin: {
        sm: '2px',
        negLetter: '-0.05em',
      },
      inset: {
        xs: '2px',
      },
      transform: {
        imgD: 'translate(-50%,-50%) scale-0',
        imgH: 'translate(-50%,-50%) scale-1',
      },
      aspectRatio: {
        spacer1: '500/300',
        mdspacer1: '320/300',
        spacer2: '230/300',
        mdspacer2: '630/800',
        smspacer2: '180/500',
        secspacer1: '960/300',
      },
      backgroundImage: {
        spacer1: 'url(/homespacer.svg)',
        spacer2: 'url(/steps3.svg)',
        secspacer1: 'url(/sectionspacer1.svg)',
        secspacer2: 'url(/sectionspacer2.svg)',
        map: 'url(./components/assets/grimg.png)',
        homemap: 'url(./components/assets/homemap.png)',
        contactspacer: 'url(/contactspacer.svg)',
      },
      backgroundPosition: {
        'top-4': 'top right -10rem',
      },
      screens: {
        lmg: '1024px',
        textlg: '1380px',
        ...defaultTheme.screens,
      },
      animation: {
        'bounce-slow': 'bounce 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
