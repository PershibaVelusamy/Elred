import React from 'react'
import {Container,Row,Col, ListGroup,Image} from 'react-bootstrap'
export const  List=(props)=> {
    const {DisplayData,Selected,selectRate}=props
    console.log(DisplayData,"DisplayData")
  return (

    <div className='container'>
        <Row>
            <Col md={2} >
         <p style={{color:"#C0C0C0"}} className='listP'>
            <span>{DisplayData.length}</span>
            <span >{Selected===1?" Say she has ethical code of conduct":" have met real life/ video call"}</span>
            <i onClick={()=>selectRate("")} className="bi bi-x-circle closeIcon"></i>
         </p>
     

            </Col>
           
        </Row>
        <ListGroup>

{DisplayData.map((data)=>{
return <>
<ListGroup.Item>
    <Row>
<Col style={{flex:'inline' , position:"relative"}}>
    
<Image style={{height:'60px',width:"60px"}} src={data.dpURL} roundedCircle />
</Col>
<Col>
 <h6>
     {`${data.firstname} ${data.lastname}`}
 </h6>
 <p>{data.title[0].value}</p>
 </Col>



      
    </Row>

</ListGroup.Item>

</>
}) }

</ListGroup>
    </div>
  
  )
}
