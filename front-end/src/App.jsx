import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import NavigationMenu from './components/navigation'
import Header from './components/header'
import RecentArticle from './components/recentArticle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <NavigationMenu />
    <RecentArticle />
    </div>
  )
}

export default App;
