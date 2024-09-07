import React, { useEffect } from 'react';
import LandingPage from './LandingPage';

function App() {

  useEffect(() => {
    // Create a script element for Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // Ensure the Calendly script is loaded before accessing Calendly object
      document.getElementById('schedule-link').addEventListener('click', (e) => {
        e.preventDefault();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/ourapp-support/enterprise-license?primary_color=4f46e5'
          });
        }
      });
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;