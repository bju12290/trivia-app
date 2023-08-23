import React from 'react'
import '../src/styles.css'

export default function ModeToggle() {
    const [darkMode, setDarkMode] = React.useState(false);
  
    React.useEffect(() => {
      const body = document.body;
      if (darkMode) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    }, [darkMode]);
  
    const toggleMode = () => {
      setDarkMode(prevMode => !prevMode);
    };
  
    return (
      <div className="mode-toggle">
        <label className="switch">
            <input onClick={toggleMode} type="checkbox" />
        <span className="slider round"></span>
        </label>
      </div>
    );
  }