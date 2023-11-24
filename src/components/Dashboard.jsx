import AxiosService from '../common/ApiService'
import { useEffect,useState } from "react"
import useLogout from '../hooks/useLogout'
import { toast } from 'react-toastify'
import Table from 'react-bootstrap/Table';


function Dashboard() {
  let [data,setData] = useState([])
  console.log(data)
  console.log(data.users)
  let logout = useLogout() 

  let getUsers = async()=>{
    try {
        let res = await AxiosService.get(`/user`)

        console.log(res)
        
        if(res.status===200)
        {
          setData(res.data.users)
          
        }
    } catch (error) {
        if(error.response.status === 400)
        {
          toast.error(error.response.data.message)
          logout()
        }
        else
        {
          toast.error("Error Occoured! Please try after some time")
        }
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <>
    <div className=" container mx-5">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {
            data.map((e,i)=>{
              return <tr key = {e._id}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td>{e.status?"Active":"Inactive"}</td>
              </tr>
            })
          }
      </tbody>
    </Table>
    </div>
   
    </>
  )
}

export default Dashboard