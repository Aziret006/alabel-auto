import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={400}>
        <Routes location={location}>
          <Route
            path="*"
            element={
              <div className="not_page">
                <p className="not_page_text">Страница не найдена!</p>
              </div>
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
