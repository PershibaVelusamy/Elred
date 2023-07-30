import axios from 'axios';
import {skillurl,hobbiesurl,subjecturl,ethicalHackingUrl,virtualMeet}from './apiConstance'

export const apiCal=(url)=>{

    return  axios.get(url).then((response)=>{
     return response;
    })
}

export const getPersonalSkills=()=>{

       return apiCal(skillurl).then((skilldata)=>{
            console.log(skilldata)
            return skilldata.data.result[0].skills
        })
       
  
}

export const Hobbies=()=>{
  
return apiCal(hobbiesurl).then((skilldata)=>{
            
    return  skilldata.data.result[0].hobbies

})

}
export const subjects=()=>{
    
return apiCal(subjecturl).then((skilldata)=>{
            
    return  skilldata.data.result[0].subjects
})  

}
export const ethicalCodeRating=()=>{
  
return apiCal(ethicalHackingUrl).then((skilldata)=>{
            
    return  skilldata.data.result
})  
}
export const vrtualMeetrate=()=>{


return apiCal(virtualMeet).then((skilldata)=>{
            
    return  skilldata.data.result
})  
  
}

