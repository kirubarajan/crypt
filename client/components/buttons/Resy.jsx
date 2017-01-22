import React from 'react';

class Resy extends React.Component {

  componentDidMount() {

    window.ButtonWebConfig = {
      applicationId: 'app-32b9b50e3e93b5ed'
    };
    (function(u,s,e,b,t,n){
      u['__bttnio']=b;u[b]=u[b]||function(){(u[b].q=u[b].q||[]).push(arguments)};t=s.createElement(e);n=s.getElementsByTagName(e)[0];t.async=1;t.src='https://web.btncdn.com/v1/button.js';n.parentNode.insertBefore(t,n)
    })(window, document, 'script', 'bttnio');

  }

  render() {

    return (

      <div data-bttnio-id="btn-73682f4177919421"
           data-bttnio-context='{ "user_location": { "latitude": 25.782324, "longitude": -80.2310801 } }'></div>

    )

  }

}

export default Resy;
