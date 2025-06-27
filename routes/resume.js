const express = require('express');
const router = express.Router();
// Creating array for the form
router.post('/generate', (req, res) => {
  const {
    name, app_post, email, phone, linkedin, github, summary, interests, skills,
     duration, cgpa, extra,projects:projectsRaw,
    workExperience, Projects, theme, title, job, company, period, location, details,desc,tech,degree,education 
    } = req.body;

  const skillsArr = skills ? skills.split(',').map(s => s.trim()) : [];
  

const jobArr = req.body['job[]'] || req.body.job || [];
  const companyArr = req.body['company[]'] || req.body.company || [];
  const locationArr = req.body['location[]'] || req.body.location || [];
  const periodArr = req.body['period[]'] || req.body.period || [];
  const detailsArr = req.body['details[]'] || req.body.details || [];

  let workExperienceList = [];
  if (Array.isArray(jobArr)) {
    workExperienceList = jobArr.map((job, idx) => ({
      job: job,
      company: companyArr[idx] || "",
      location: locationArr[idx] || "",
      period: periodArr[idx] || "",
      details: detailsArr[idx] || ""
    }));
  } else if (typeof jobArr === 'string' && jobArr.trim() !== "") {
    workExperienceList = [{
      job: jobArr,
      company: companyArr || "",
      location: locationArr || "",
      period: periodArr || "",
      details: detailsArr || ""
    }];
  }


  let projects = [];

if (Array.isArray(projectsRaw)) {
 
  projects = projectsRaw.flatMap(p => p.split('\n').map(line => line.trim())).filter(p => p);
} else if (typeof projectsRaw === 'string') {
  projects = projectsRaw.split('\n').map(p => p.trim()).filter(p => p);
}


const achievementRaw = req.body['achievement[]'] || req.body.achievement || [];
const descA = req.body['descA[]'] || req.body.descA || [];
const area = req.body['techA[]'] || req.body.techA || [];

let achievements = [];
if (Array.isArray(achievementRaw)) {
  achievements = achievementRaw.map((ach, idx) => ({
    name: ach,
    desc: descA[idx] || "",
    area: area[idx] || ""
  }));
} else if (typeof achievementRaw === 'string' && achievementRaw.trim() !== "") {
  achievements = [{
    name: achievementRaw,
    desc: descA || "",
    area: area || ""
  }];
}


 const degreeArr = req.body['degree[]'] || req.body.degree || [];
  const instituteArr = req.body['education[]'] || req.body.education || [];
  const durationArr = req.body['duration[]'] || req.body.duration || [];
  const cgpaArr = req.body['cgpa[]'] || req.body.cgpa || [];

  let educationList = [];
  if (Array.isArray(degreeArr)) {
    educationList = degreeArr.map((deg, idx) => ({
      degree: deg,
      institute: instituteArr[idx] || "",
      duration: durationArr[idx] || "",
      cgpa: cgpaArr[idx] || ""
    }));
  } else if (typeof degreeArr === 'string' && degreeArr.trim() !== "") {
    educationList = [{
      degree: degreeArr,
      institute: instituteArr || "",
      duration: durationArr || "",
      cgpa: cgpaArr || ""
    }];
  }



  const data = {
    name, app_post, summary, interests,
    skills: skillsArr,
    
    contact: { email, phone, linkedin, github },
    workExperience: workExperienceList,
    
    Projects: projects.map((proj,index) => ({
         name: proj,
         link: "", 
        desc: desc[index],
        tech: tech[index]
    })),

    achievements: achievements,
    education: educationList,

  };

  res.render(`themes/${theme}`, data);
});









module.exports = router;