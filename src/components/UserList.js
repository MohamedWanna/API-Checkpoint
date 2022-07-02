import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Users from './Users';

const UserList = () => {
    const [loading,setLoading]= useState(true)
    const [users, setUsers] = useState(null)

    useEffect(() =>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[]);
  return (
    <div>
        {loading ? (<Spinner animation="border" variant="primary" />):
        (users && users.map((user)=><Users key={user.id} user={user}/>))}
    </div>
  )
}

export default UserList