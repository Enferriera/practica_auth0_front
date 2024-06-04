
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import CallbackPage from './components/Auth0/CallbackPage'
import { AuthenticationGuard } from './components/Auth0/AuthenticationGuard'
import AdminPage from './views/AdminPage'
import ClientPage from './views/ClientPage'
import ClientProfilePage from './views/ClientProfilePage'

const App=()=> {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
     <Route
        path="/admin"
        element={<AuthenticationGuard component={AdminPage} />}
      />
      <Route
        path="/cliente"
        element={<AuthenticationGuard component={ClientPage} />}
      />
      <Route
        path="/cliente/perfil"
        element={<AuthenticationGuard component={ClientProfilePage} />}
  />
      <Route path="/callback" element={<CallbackPage />} />
     {/* <Route path="*" element={<ErrorPage />} />*/}
    </Routes>
  </>
  )
}

export default App
