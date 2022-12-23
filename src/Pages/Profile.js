import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
    const {id}=useParams()
    const[user,setUsers]=useState({})
    useEffect(() => {
        axios
.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>setUsers(res.data[0]))
.catch((err)=>console.log(err));
      
    }, )
    
  return (
    <div>
        <h1>my profile</h1>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <img src='https://www.bing.com/th?id=OIP.VNkoI19GPy5Cm9MTlFHO8wHaE8&w=146&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'/>
        
        <Card.Title>{user.name}</Card.Title>
        <Card.Title>{user.email}</Card.Title>
      <Link to={`/users`}>go back</Link>
        <Button variant="primary">

        </Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Profile