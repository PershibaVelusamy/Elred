import React from 'react'
import { Container, Row, Col, Badge, Stack, Image, Card } from 'react-bootstrap'
import { Rating } from './Rating'
import { resume } from '../../assets/index'
import {Alercompt} from './alert'
export const BioDisplay = (props) => {
  const { openBio, BioData, openSkill, DisplayData, selectRate,deletefile,openAlert,closeAlert } = props;

  return (
    <>  

    <div className='container'>
   

      {/* /***Start***/}
      {/* <Row>
        <Col sm={12} className='header'>
          <h6><span><i onClick={openBio} class="bi bi-pencil-fill"></i></span> Back</h6>
        </Col>
      </Row> */}

      <Row>
        <Col sm={12} className='title'>
          <h6> About Me</h6>
          <i onClick={openBio} class="bi bi-pencil-fill"></i>
        </Col>
        <Col sm={12} className='aboutinfo'>
        <p>{BioData.bio !== "" ? BioData.bio : "No about me added yet"}</p>

        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={12} onClick={openBio} className='title'>
          <h6>Blood Group</h6>
          <p>
            {BioData.bloodGroup !== "" ? BioData.bloodGroup : 'Select Blood Group'}
            
          </p>
        </Col>
        {BioData.resumeFile!==""&& <p className='resumedet'>Resume</p>}
        <Col sm={12} className='resumeupload'>
    
          {/* <img src='../logo192.png'> */}
          <div className='resumeinfo'>
           
            <p className='resumedet'>
              
              <span>
              
           { BioData.resumeFile===""&&  <i onClick={openBio} class=" bi-file-earmark-pdf-filll"></i>}
              
              </span > 
              <span className='spanword'>
              {BioData.resumeFile!==""?BioData.resumeFile.name:"Resume"}
              </span>
             
             {BioData.resumeFile!==""&& <i onClick={()=>openAlert()} class="bi bi-trash deleteicon"></i>  } 
              </p>
            <i onClick={openBio} class="bi bi-pencil-fill"></i>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={12} className='title'>
          <h6>Skill</h6>
          <p><i onClick={openSkill} class="bi bi-pencil-fill"></i></p>
        </Col>
        <Col sm={12}>
          <div className='skillinfo'>
           {BioData.skills.length>0? <h6>i am incredible these skills/professionally great at</h6>:<h6>No soft skills added yet.</h6>}
            <div className='skillbtn'>
            {BioData.skills.map((skill) => {
            return <>

              <button>{skill}</button>
            </>
          })}
              {/* <button>Photoshop</button>
              <button>Sketch</button>
              <button>illustrator</button>
              <button>Figma</button> */}
            </div>
          </div>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col sm={12} className='title'>
          <h6>Hobbies</h6>
          <p><i onClick={openSkill} class="bi bi-pencil-fill"></i></p>
        </Col>
        <Col sm={12}>
          <div className='skillinfo'>
           {BioData.hobbies.length>0? <h6>   Hobbies I am passionate about</h6>:
           <h6>
           No hobbies added yet  
           </h6>
           }
            <div className='skillbtn'>
            {BioData.hobbies.map((skill) => {
            return <>

              <button>{skill}</button>
            </>
          })}
            </div>
          </div>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col sm={12} className='title'>
          <h6>Subjects</h6>
          <p><i onClick={openSkill} class="bi bi-pencil-fill"></i></p>
        </Col>
        <Col sm={12}>
          <div className='skillinfo'>
           {BioData.subjects.length>0? <h6>My favourite subjects are</h6>:
           <h6>No Subjects added yet</h6>
           }
            <div className='skillbtn'>
            {BioData.subjects.map((skill) => {
            return <>

              <button>{skill}</button>
            </>
          })}
            </div>
          </div>
        </Col>
        <hr />
      </Row>
    
       
       
 
 {/* <p>
 <i class="bi bi-star-fill"></i>
  </p> */}
 



      




      {/* /***End***/}


{/* 
      <Row>
        <Col sm={6}>
          <h6> About Me</h6>
        </Col>
        <Col>

          <i onClick={openBio} class="bi bi-pencil-fill"></i>
        </Col>

        <p>{BioData.bio !== "" ? BioData.bio : "No about me added yet"}</p>

      </Row>
      <Row>
        <Col>
          <h6>Blood group</h6>
        </Col>
        <Col>
          <p>
            {BioData.bloodGroup !== "" ? BioData.bloodGroup : 'Select Blood Group'}
          </p>
        </Col>
      </Row>

      {BioData.resumeFile === "" ? <Row>
        <Col>
          <Image src={resume} rounded />
        </Col>
        <Col>
          <h6>

            Resume
          </h6>
        </Col>
        <Col>
          <i onClick={openBio} class="bi bi-arrow-right-circle"></i>
        </Col>

      </Row> :
        <Row>
          <Card style={{ width: '18rem', height: '155px' }}>
            <Card.Img style={{ height: "100px" }} variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text style={{ padding: "2px" }}>{BioData.resumeFile.name}</Card.Text>
            </Card.Body>
          </Card>
        </Row>

      }


      <Row>

        <Col>
          <h6 >Skills</h6>
        </Col>
        <Col>

          <i onClick={openSkill} class="bi bi-pencil-fill"></i>
        </Col>


        <Stack direction="horizontal" gap={2}>
          {BioData.skills.map((skill) => {
            return <>

              <Badge bg="primary">{skill}</Badge>
            </>
          })}
        </Stack>
      </Row>




      <Row>

        <Col>
          <h6 >Hobbies</h6>
        </Col>
        <Col>

          <i onClick={openSkill} class="bi bi-pencil-fill"></i>
        </Col>


        <Stack direction="horizontal" gap={2}>
          {BioData.hobbies.map((skill) => {
            return <>
              <Badge bg="primary">{skill}</Badge>
            </>
          })}
        </Stack>
      </Row>


      <Row>

        <Col>
          <h6>Subjects</h6>
        </Col>
        <Col>

          <i onClick={openSkill} class="bi bi-pencil-fill"></i>
        </Col>

        <Stack direction="horizontal" gap={2}>

          {BioData.subjects.map((skill) => {
            return <>
              <Badge bg="primary">{skill}</Badge>
            </>
          })}
        </Stack>
      </Row>

      <Row>

        <Col>
          <i class="bi bi-star-fill"></i>
          <h2>Ratings</h2>
          <Rating DisplayData={DisplayData} selectRate={selectRate} />
        </Col>
      </Row> */}

    </div>

    <div>

<Rating DisplayData={DisplayData} selectRate={selectRate} />
    </div>

    </>
  )


}
