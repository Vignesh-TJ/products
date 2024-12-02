import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card() {
    const [product,setProduct]=useState([])
    const getallVideo=async()=>{
        const result=await getAllProductApi()
       setProduct(result.data)
       console.log(product)
      }
  return (

    <>
       <Card onClick={getallVideo} style={{ width: '100%' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title gfhjkl;</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default Card