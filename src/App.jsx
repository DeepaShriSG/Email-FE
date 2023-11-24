import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgetPassword from './components/ForgetPassword'
import ProtectedRoute from "./common/ProtectedRoute";
import ResetPassword from "./components/ResetPassword";

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/dashboard" element={<>  
      <Header/>
      <ProtectedRoute>
      <Dashboard/>
      </ProtectedRoute>
      </>} />
      <Route path="/" element = {<Login/> }/>
      <Route path="/forgetpassword" element = {<ForgetPassword/> }/>
      <Route path="/resetpassword" element = {
        <ProtectedRoute>
        <ResetPassword/> 
        </ProtectedRoute>
      }/>
      <Route path="*" element= {<Navigate to="/" />}/>
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
