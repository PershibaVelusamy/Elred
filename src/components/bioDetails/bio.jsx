import React, { useState,useEffect } from 'react'
import { BioDetail } from './bioDetail'
import { BioDisplay } from './bioDisplay'
import { Skills } from './Skills'
import {List} from './List'
import {  ethicalCodeRating, vrtualMeetrate } from '../../constants/apiCalls'
import {Alercompt} from './alert'
export const Bio = () => {
  const [BioData, setBioData] = useState({
    isBio: false,
    isSkills: false,
    bio: "",
    skills: [],
    hobbies: [],
    subjects: [],
    bloodGroup: "",
    Selected:"",
    resumeFile:"",
    isopenAlert:false
  
  })



  const [DisplayData, setDisplayData] = useState({
       
    CodeRating: [],
    Meetrate: []
})

const openAlert=()=>{
  setBioData({...BioData,isopenAlert:true})
}
const closeAlert=()=>{
  setBioData({...BioData,isopenAlert:false})
}

useEffect(() => {

    CallAllSpi()

}, [])



const uploadHandler = (event) => {
  const file = event.target.files[0];
  setBioData({...BioData,resumeFile:file})


  
 
}
const deletefile=()=>{
  setBioData({...BioData,resumeFile:"",isopenAlert:false})
}



const selectRate=(type)=>{
  console.log(type,"Type")
  setBioData({...BioData,Selected:type,isBio:type===""?false:true})
}

const CallAllSpi = async () => {
   
    let CodeRatingrate = []
    let Meetrates = []

   
    await ethicalCodeRating().then((CodeRating) => {
        CodeRatingrate = CodeRating
    })
    await vrtualMeetrate().then((Meetrate) => {
        Meetrates = Meetrate
    })

    setDisplayData({
        ...DisplayData, 
        CodeRating: CodeRatingrate,
        Meetrate: Meetrates
    })

}


  const openBio = () => {
    setBioData({ ...BioData, isBio: !BioData.isBio })
  }

  const openSkill = () => {
    setBioData({ ...BioData, isSkills: true ,isBio:true})
  }

  const closeKill = () => {
    setBioData({ ...BioData, isSkills: false,isBio:false })
  }

  const SetBIoData = (e) => {
    setBioData({
      ...BioData
      , bio: e
    })

  }

  const selectBloodGroup = (e) => {
    console.log(e, "blood")
    setBioData({ ...BioData, bloodGroup: e })
  }

  const selectSkil = (e) => {
    let skillList = BioData.skills
    let index = BioData.skills.findIndex((skill) => skill === e)
    if (index === -1) {
      skillList.push(e)
    } else {
      skillList.splice(index, 1)
    }
    setBioData({ ...BioData, skills: skillList })

  }

  const selectHobbie = (e) => {
    let skillList = BioData.hobbies
    let index = BioData.hobbies.findIndex((skill) => skill === e)
    if (index === -1) {
      skillList.push(e)
    } else {
      skillList.splice(index, 1)
    }
    setBioData({ ...BioData, hobbies: skillList })

  }

  const selectSubject = (e) => {
    let skillList = BioData.subjects
    let index = BioData.subjects.findIndex((skill) => skill === e)
    if (index === -1) {
      skillList.push(e)
    } else {
      skillList.splice(index, 1)
    }
    setBioData({ ...BioData, subjects: skillList })

  }

  console.log(BioData, "BioData")

  return (
<>
<div className='alertmodel'>
{BioData.isopenAlert&& <Alercompt deletefile={deletefile} closeAlert={closeAlert} openAlert={openAlert} isopenalert={BioData.isopenAlert}/>}
</div>
<div  >
      {(BioData.isBio===false)  &&
        <BioDisplay openBio={openBio}
          openSkill={openSkill}
          key={"display"}
          BioData={BioData}
          DisplayData={DisplayData}
          selectRate={selectRate} 
          deletefile={deletefile}
          openAlert={openAlert}
          closeAlert={closeAlert}

          />
      }
      {
       ( BioData.isSkills && BioData.isBio &&BioData.Selected==="")&&
        
        <Skills closeKill={closeKill}
        key="Skill"
          selectSkil={selectSkil}
          selectHobbie={selectHobbie}
          selectSubject={selectSubject}
          BioData={BioData} />
      }

      {( !BioData.isSkills && BioData.isBio&&BioData.Selected==="") && <BioDetail
        sendBioData={SetBIoData}
        key='bio'
        deletefile={deletefile}
        BioData={BioData}
        closeBio={openBio}
        selectBloodGroup={selectBloodGroup}
        uploadHandler={uploadHandler}
        openAlert={openAlert}
        closeAlert={closeAlert}
      />}

{BioData.Selected!=="" &&BioData.isBio&& 
  <List key={"list"} DisplayData={BioData.Selected===1? DisplayData.CodeRating:DisplayData.Meetrate} Selected={BioData.Selected} selectRate={selectRate}/>
}


    </div>
</>

   
  )
}

