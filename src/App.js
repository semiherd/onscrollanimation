import './App.css'
import React from 'react'
import {AppProvider} from './context/AppContext'
import Home from './component/Home'

function App() {

  return (
    <div className="App">
        <AppProvider>
          <Home />
      </AppProvider>
    </div>
  );
}

export default App;
