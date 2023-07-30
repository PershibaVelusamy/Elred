import React from 'react'
import { Container, Row, Col, Badge, Stack, Image ,Card} from 'react-bootstrap'
import { Rating } from './Rating'
import { resume } from '../../assets/index'
export const BioDisplay = (props) => {
  const { openBio, BioData, openSkill, DisplayData, selectRate } = props;

  return (
    <Container className='container'>
      <Row>
        <Col sm={12} className='header'>
          <h6 >About Me</h6>
        </Col>
        <Col>

          <i onClick={openBio} className="bi bi-pencil-fill"></i>
        </Col>

        <p>{BioData.bio !== "" ? BioData.bio : "No about me added yet"}</p>

      </Row>
      <Row onClick={openBio} >
        <Col>
          <h6>Blood group</h6>
        </Col>
        <Col>
          <p>
            {BioData.bloodGroup !== "" ? BioData.bloodGroup : 'Select Blood Group'}
          </p>
        </Col>
      </Row>

    {BioData.resumeFile===""?  <Row>
       
        <Col>
          <h6>

            Resume
          </h6>
        </Col>
        <Col>
          <i onClick={openBio} className="bi bi-arrow-right-circle"></i>
        </Col>

      </Row>:
      <Row>
  <Card style={{ width: '18rem', height:'155px' }}>
       <Card.Img style={{height:"100px"}} variant="top" src="holder.js/100px180"  />
       <Card.Body>
         <Card.Text style={{padding:"2px"}}>{BioData.resumeFile.name}</Card.Text>
       </Card.Body>
     </Card>
      </Row>
     
      }


      <Row>

        <Col>
          <h6 >Skills</h6>
        </Col>
        <Col>
          <i onClick={openSkill} className="bi bi-pencil-fill"></i>
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

          <i onClick={openSkill} className="bi bi-pencil-fill"></i>
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

          <i onClick={openSkill} className="bi bi-pencil-fill"></i>
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
          <i className="bi bi-star-fill"></i>
          <h2>Ratings</h2>
          <Rating DisplayData={DisplayData} selectRate={selectRate} />
        </Col>
      </Row>

    </Container>
  )


}
