import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Badge, Button } from 'react-bootstrap';
import { getPersonalSkills, Hobbies, subjects } from '../../constants/apiCalls'


export const Skills = (props) => {
    const { BioData, closeKill, selectSkil, selectHobbie, selectSubject } = props;

    const [DisplayData, setDisplayData] = useState({
        skills: [],
        hobbies: [],
        subject: [],

    })

    useEffect(() => {

        CallAllSpi()

    }, [])

    const CallAllSpi = async () => {
        let skills = []
        let hobbies = []
        let subjectsdata = []


        await getPersonalSkills().then((skill) => {
            console.log(skill, "skill>>>>")
            skills = skill
        })

        await Hobbies().then((hobbie) => {
            hobbies = hobbie
        })
        await subjects().then((subject) => {
            subjectsdata = subject
        })


        setDisplayData({
            ...DisplayData, skills: skills,
            hobbies: hobbies,
            subject: subjectsdata,

        })

    }

    console.log(DisplayData, "DisplayData")


    return (
        <Container>
            <Row>
                <Col>
                    <h6 style={{ padding: "5px" }} >
                        Skills
                    </h6>
                    <div style={{ padding: "5px", justifyContent: 'space-evenly' }}>
                        {BioData.skills.map((skill) => {
                            return <>
                                <span style={{ padding: "2px" }}>
                                    <Badge bg="primary">{skill}</Badge>
                                </span>

                            </>
                        })}

                    </div>
                    <Col md={2}>
                        <select
                            className='options'
                            
                            value={BioData.skills}
                            onChange={(value) => selectSkil(value.target.value)}>

                            {DisplayData.skills.map((skill) => {
                                return <>
                                    <option className='valueOption' value={skill.value} >
                                        <span className='textovewrap'>
                                        
                                        {skill.value}
                                        </span>
                               
                                        
                                        </option>
                                </>
                            })}




                        </select>
                    </Col>

                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 style={{ padding: "5px" }}>
                        Hobbies
                    </h6>
                    <div style={{ padding: "5px", justifyContent: 'space-evenly' }}>
                        {BioData.hobbies.map((skill) => {
                            return <>
                                <span style={{ padding: "2px" }}>
                                    <Badge bg="primary">{skill}</Badge>
                                </span>
                            </>
                        })}
                    </div>
                    <Col md={2}>
                        <select 
                            className='options'

                            onChange={(value) => selectHobbie(value.target.value)}>


                            {DisplayData.hobbies.map((hobbie) => {
                                return <>
                                    <option className='valueOption' value={hobbie.value} >{hobbie.value}</option>
                                </>
                            })}



                        </select>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 style={{ padding: "5px" }}>
                        My Favourite Subjects
                    </h6>
                    <div style={{ padding: "5px", justifyContent: 'space-evenly' }}>
                        {BioData.subjects.map((skill) => {
                            return <>
                                <span style={{ padding: "2px" }}>
                                    <Badge bg="primary">{skill}</Badge>
                                </span>
                            </>
                        })}
                    </div>
                    <Col md={2}>
                        <select 
                            className='options'

                            onChange={(value) => selectSubject(value.target.value)}>


                            {DisplayData.subject.map((sub) => {
                                return <>
                                    <option className='valueOption' value={sub.value} >{sub.value}</option>
                                </>
                            })}

                        </select>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: "10px" }} >
                    <Button style={{ padding: "5px", width: "100px" }} variant="danger" onClick={() => closeKill()}>Save</Button>
                </Col>
            </Row>

        </Container>
    )
}
