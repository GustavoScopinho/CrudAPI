import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UsuarioContext'
import './App.css'
import { Home } from './pages/Home/Home'
import { GetUserProvider } from './context/getContext'
import { PutContextProvider } from './context/putContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <GetUserProvider>
            <PutContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </PutContextProvider>
          </GetUserProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
