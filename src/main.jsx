import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Poppins', 'system-ui', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
