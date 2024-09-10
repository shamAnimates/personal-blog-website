import { useState } from 'react'
import './App.css'
import './index.css'

import NavigationMenu from './components/navigation'
import Header from './components/header'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Portfolio from './components/Portfolio'


function App() {
  const [darkMode, setDarkMode] = useState(0);
  const [view, setView] = useState(1);

  function switchTheme(){
    setDarkMode(~darkMode);
    //baad me krunga bc dimag ka bhosda ho gya
    console.log('current mode: '  + darkMode);
  }

  function openHome(){
    setView(1);
  }

  function openContacts(){
    setView(2);
  }

  function openPortfolio(){
    setView(3);
  }


  return (
    <div>
    <Header />
    <NavigationMenu switchTheme={switchTheme} openHome={openHome} openContacts={openContacts} openPortfolio={openPortfolio}/>

    {view === 1 ? (
        <Home />
      ) : view == 2 ? (
        <Contacts />
      ) : (
        <Portfolio />
      )}
    </div>
  )
}

export default App;
