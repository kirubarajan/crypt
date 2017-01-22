import React from 'react';

class Jet extends React.Component {

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

      <div data-bttnio-id="btn-7a2f5da2ea9d3df1"
         data-bttnio-context='{ "item": { "identifiers": { "jet": "b07b0650208c4dfabf99277e863d5c51" } } }'></div>
    )

  }

}

export default Jet;
