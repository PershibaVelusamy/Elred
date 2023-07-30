import React from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { BloodGroups } from '../../constants/dropDownCOntacts'
import { resume } from '../../assets';
import {Alercompt} from './alert'

export const BioDetail = (props) => {
  const { sendBioData, BioData, closeBio, selectBloodGroup, uploadHandler, deletefile ,openAlert,closeAlert} = props;


  console.log(BioData, "bioData")
  return (

    <div className='containerbio'>
      <Row>
        <Col className='colum'>
          <h6>Write something about yourself?</h6>
          <textarea
            className='textArea'
            value={BioData?.bio}
            name='Bio'
            maxLength={500}
            onChange={(e) => sendBioData(e.target.value)}
          >
          </textarea>
          <p className='counting'>{`${BioData?.bio.length}/500`}</p>
        </Col>
      
      </Row>




      <Row>

        {BioData.resumeFile !== "" ?
          <Col className='colum' >
            <div className='textAreaINputfile'>
              <p> <i className="bi bi-file-earmark-pdf-fill pdficon"></i>

                <span className='spanword'>{`pdf ${BioData.resumeFile.name}`}</span>
                <i onClick={() => openAlert()} class="bi bi-trash deleteicon"></i>
              </p>

            </div>


            {/* <Card>
            <Card.Body>
             

              <Card.Title>  {BioData.resumeFile.name}</Card.Title>
              <Card.Text>
                pdf
              </Card.Text>

            </Card.Body>
          </Card> */}
          </Col>

          : <Col className='colum'>
            <div className='textAreaINputfile'>
              <input type="file" onChange={(e) => uploadHandler(e)} />
              <i class="bi bi-image imageicon"></i>
              <h6 className='uploadteaxt'>Upload resume</h6>
            </div>


          </Col>}
      </Row>

      {/* <Row>
  <Col  className='colum'>
    <div className='textAreaINputfile'>
    <input type="file" onChange={(e)=>uploadHandler(e)} />
  <i class="bi bi-image imageicon"></i>
  <h6 className='uploadteaxt'>Upload resume</h6>
    </div>
 
  
  </Col>
</Row> */}

      <Row>
        <Col className='colum'>
          <h6>
            Blood Group
          </h6>
          <Form.Select aria-label="Default select" className='selectblood'
            value={BioData.bloodGroup}
            onChange={(value) => selectBloodGroup(value.target.value)}>

            {BloodGroups.map((BloodGroup) => {
              return <>
                <option value={BloodGroup.key} >{BloodGroup.name}</option>
              </>
            })}

          </Form.Select>
        </Col>
      </Row>


      <Row>
        <Col>
          {BioData.bio === "" && BioData.bloodGroup === "" && BioData.resumeFile === "" ?
            <Button
              disabled
              className='savebutton' variant="danger">Save</Button>
            : <Button

              className='savebutton' variant="danger" onClick={() => closeBio()}>Save</Button>}

        </Col>
      </Row>

     {/* {BioData.isopenAlert&& <Alercompt deletefile={deletefile} closeAlert={closeAlert} openAlert={openAlert} isopenalert={BioData.isopenAlert}/>} */}

    </div>




  
  )
}
