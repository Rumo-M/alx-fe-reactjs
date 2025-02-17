import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import React from 'react';
import UserProfile from './UserProfile';


function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

    </div>
  )
}

export default App
