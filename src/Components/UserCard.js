import React from 'react'
import { Button, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div style={{margin:"2%"}}>
   <Card style={{ width: '18rem' }}>
        <Card.Img />
      <Card.Body>
      <img src='https://www.bing.com/th?id=OIP.VNkoI19GPy5Cm9MTlFHO8wHaE8&w=146&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'/>
        <Card.Title>{user.name}</Card.Title>/
        <img src='https://www.bing.com/th?id=OIP.qtnQ1E2slYjf6agI682GfQHaFD&w=146&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'/>
        <Card.Title>{user.email}</Card.Title>
      <Link to={(`/user/${user.id}`)}>go check my profile</Link>
        <Button variant="primary">

        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard