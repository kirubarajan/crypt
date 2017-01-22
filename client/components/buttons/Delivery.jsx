import React from 'react';

class Delivery extends React.Component {

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

      <div data-bttnio-id="btn-6e88b2bdf8438dbb"
       data-bttnio-context='{ "user_location": { "latitude": 40.6827, "longitude": -73.9754 }, "subject_location": { "identifiers": { "deliverydotcom": "71562" } } }'></div>
       
    )

  }

}

export default Delivery;
