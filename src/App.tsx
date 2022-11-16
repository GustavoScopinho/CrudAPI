import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UsuarioContext'
import './App.css'
import { Home } from './pages/Home/Home'
import { GetUserProvider } from './context/getContext'
import { PutContextProvider } from './context/putContext'
import { DelContextProvider } from './context/delContext'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <GetUserProvider>
            <PutContextProvider>
              <DelContextProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </DelContextProvider>
            </PutContextProvider>
          </GetUserProvider>
        </UserProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
