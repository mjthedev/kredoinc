import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import React from 'react';






function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
