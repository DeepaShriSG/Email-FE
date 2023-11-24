import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
function Header() {
    let navigate = useNavigate()
    let logout = useLogout()
  return <>

          <div className='my-4 mx-5'>
          <Container>
          <div className='row justify-content-between align-items-center px-3 py-2 bg-primary rounded'>
          <Navbar className='col-4 text-white bold h4 mb-0'>App</Navbar>
          <Nav className="col-4 justify-content-center ">
            <Nav.Link className='text-white' onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Link>
            <Nav.Link className='text-white 'onClick={()=>navigate('/resetpassword')}>ResetPassword</Nav.Link>
          
          </Nav>
          <div className='col-4 text-end h4 mb-0'>
             <Button className = 'bg-white text-black'   onClick={()=>logout()}>Logout</Button>
            </div>
          </div>   
        </Container>
          </div>
        
  </>
}

export default Header