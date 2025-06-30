


function addWork() {
  const section = document.getElementById("work-section");
  const count = section.querySelectorAll('input[name="job[]"]').length + 1;

  const label = document.createElement("label");
  label.innerText = `Work Experience ${count}`;

  const input1 = document.createElement("input");
  input1.type = "text";
  input1.name = "job[]";
  input1.placeholder = "Position";

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.name = "company[]";
  input2.placeholder = "Company Name";

  const input3 = document.createElement("input");
  input3.type = "text";
  input3.name = "location[]";
  input3.placeholder = "Location";

  const input4 = document.createElement("input");
  input4.type = "text";
  input4.name = "period[]";
  input4.placeholder = "Duration of Work";

  const input5 = document.createElement("input");
  input5.type = "text";
  input5.name = "details[]";
  input5.placeholder = "Detail";
  const br = document.createElement("br");
  const br2 = document.createElement("br");
 
  section.appendChild(br);
  section.appendChild(label);
  section.appendChild(br2);
  section.appendChild(input1);
  section.appendChild(input2);
  section.appendChild(input3);
  section.appendChild(input4);
  section.appendChild(input5);
  
}


function addAchievement() {
  const section = document.getElementById("achievement-section");
  const count = section.querySelectorAll('input[name="achievement[]"]').length + 1;

  const label = document.createElement("label");
  label.innerText = `Achievement ${count}`;

  const input1 = document.createElement("input");
  input1.type = "text";
  input1.name = "achievement[]";
  input1.placeholder = `Achievement ${count}`;

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.name = "area";
  input2.placeholder = "Area of Achievement";

  const input3 = document.createElement("input");
  input3.type = "text";
  input3.name = "descA[]";
  input3.placeholder = "Description";

  section.appendChild(label);
  section.appendChild(document.createElement("br"));
  section.appendChild(input1);
  section.appendChild(input2);
  section.appendChild(input3);
  section.appendChild(document.createElement("br"));
}

  function addProject() {
  const section = document.getElementById("projects-section");
  const count = section.querySelectorAll(".project_heading").length + 1;
  const label = document.createElement("label");
   const br = document.createElement("br");
 const br2 = document.createElement("br");

  label.innerText = `Project ${count}`;
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.name = "projects";
  input1.placeholder = `Project ${count}`;
  input1.class="project_heading";

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.name = "desc";
  input2.placeholder="Description";

  const input3 = document.createElement("input");
  input3.name="tech";
  input3.placeholder="Tech Stack Use"
  section.appendChild(br);
  section.appendChild(label);
  section.appendChild(br2);
  section.appendChild(input1);
  section.appendChild(input2);
  section.appendChild(input3);
 
  
}


function addEducation() {
  const section = document.getElementById("education-section");
  const count = section.querySelectorAll('input[name="degree[]"]').length + 1;
  const br = document.createElement("br");
 const br2 = document.createElement("br");
  const label = document.createElement("label");
  label.innerText = `Education ${count}`;

  const input1 = document.createElement("input");
  input1.type = "text";
  input1.name = "degree[]";
  input1.placeholder = "Degree";

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.name = "education[]";
  input2.placeholder = "Institute Name";

  const input3 = document.createElement("input");
  input3.type = "text";
  input3.name = "duration[]";
  input3.placeholder = "Duration";

  const input4 = document.createElement("input");
  input4.type = "text";
  input4.name = "cgpa[]";
  input4.placeholder = "CGPA";
  
  const input5 = document.createElement("input");
  input5.type = "text";
  input5.name = "branch[]";
  input5.placeholder = "Branch and Specialization";
  section.appendChild(br);
  section.appendChild(label);
  section.appendChild(br2);
  section.appendChild(input1);
  section.appendChild(input2);
  section.appendChild(input5);
  section.appendChild(input3);
  section.appendChild(input4);
  
}

