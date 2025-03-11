import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Google Analytics
const script1 = document.createElement('script');
script1.async = true;
script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-1YYYDE7H1V';
document.head.appendChild(script1);

const script2 = document.createElement('script');
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-1YYYDE7H1V');
`;
document.head.appendChild(script2);

createApp(App).mount('#app')
