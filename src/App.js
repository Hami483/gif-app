import React from 'react'
import './App.css';

import Random from './components/random_v1'
import Tag from './components/tag_v1'

function App() {
  return ( <div>
        <h1>Random GIF Application</h1>
        <div className="main-container">
            <Random />
            <Tag />
        </div>
    </div>
  );
}

export default App;
