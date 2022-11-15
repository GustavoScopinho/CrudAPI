import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UsuarioContext'
import './App.css'
import { Home } from './pages/Home/Home'
import { GetUserProvider } from './context/getContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <GetUserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </GetUserProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
