import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProductApi } from '../server/allApi';
import { Card } from 'react-bootstrap';

function Body() {
    const [show, setShow] = useState(false);
    const [productDetails,setProductDetails]=useState({
        imgUrl:"",
      productName:"",
      category:"",
      price:"",
      stock:"",
      description:""
    })
    console.log(productDetails);
    const handleClose = () => {setShow(false) 
      handleCancel()
    }
    const handleShow = () => setShow(true);
    const handleClear=()=>{
      setProductDetails({
        productName:"",
        category:"",
        price:"",
        stock:"",
        description:"",
        imgUrl:""
  
      })
    }
    const upload=async()=>{
      const{productName,category,price,stock,description,imgUrl}=productDetails
     
          const result= await addProductApi({productName,category,price,stock,description,imgUrl})
          
          if(result.status>=200 && result.status<300){
            alert('uploaded sucessfully')
            handleClose()
          }
          
        }
        
        
        
      
  
  return (
  <>  <div className='container'>

    <h1 className='text-center text-white'>Prdouct inventory system</h1>  
      <br />
      <h3>Add product Details <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} /></h3>
      <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Enter product Details</Modal.Title>
</Modal.Header>
<Modal.Body>
    <input type="text" placeholder='product name' value={productDetails.productName} onChange={(e)=>setProductDetails({...productDetails,productName:e.target.value})} className='form-control my-2'/>
    <input type="text" value={productDetails.category} onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})} placeholder='category' className='form-control my-2'/>
    <input type="text" value={productDetails.price} onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})} placeholder='price' className='form-control my-2'/>
    <input type="text" value={productDetails.stock} onChange={(e)=>setProductDetails({...productDetails,stock:e.target.value})} placeholder='stock' className='form-control my-2'/>
    <input type="text" value={productDetails.description} onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})} placeholder='description' className='form-control my-2'/>
    <input type="text" value={productDetails.imgUrl} onChange={(e)=>setProductDetails({...productDetails,imgUrl:e.target.value})} placeholder='description' className='form-control my-2'/>



</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClear}>
      clear
  </Button>
  <Button variant="danger" onClick={upload}>
    Upload
  </Button>
</Modal.Footer>
</Modal>

 <br />
 <Card/>
    </div>
    
    <Card/>
</>
    
  )
}


export default Body