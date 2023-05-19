import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Main from './containers/Main/Main'
import Layout from './components/UI/Layout/Layout'
import Contacts from './containers/Contacts/Contacts'
import About from './containers/About/About'
import ServicesPage from './containers/ServicesPage/ServicesPage'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={400}>
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="*"
              element={
                <div className="not_page">
                  <p className="not_page_text">Not found!</p>
                </div>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default App
