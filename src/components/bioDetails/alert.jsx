import React from 'react'
import {Modal, Button, Container,Row,Col}from 'react-bootstrap'
export const Alercompt=(props)=> {
    const {deletefile,openAlert,closeAlert}=props
  return (

  <Container>
<Row >
    <Col md={12} className='titles'>
    <div

className='model'>

  
    <p className='modelHEading'>Resume Delete popup title  <i onClick={()=>closeAlert()} className="bi bi-x-circle deletecloseIcon"></i></p>
   
<p> <i class="bi bi-trash deleteiconmodel"></i>  </p>
    <p className='modelBody'>Are you sure do you want to delete your resume?</p>


 
  <Button  className={'modelButton'} variant="danger" onClick={() => deletefile()}>Delete</Button>
  

</div>
    </Col>
</Row>

  </Container>

    
  
  
    


  )
}
