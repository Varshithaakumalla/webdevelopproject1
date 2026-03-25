document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("name").innerText = document.getElementById("inputName").value;
  document.getElementById("email").innerText = document.getElementById("inputEmail").value;
  document.getElementById("phone").innerText = document.getElementById("inputPhone").value;

  document.getElementById("objective").innerText = document.getElementById("inputObjective").value;
  document.getElementById("education").innerText = document.getElementById("inputEducation").value;
  document.getElementById("experience").innerText = document.getElementById("inputExperience").value;

  document.getElementById("skills").innerText = document.getElementById("inputSkills").value;
  document.getElementById("projects").innerText = document.getElementById("inputProjects").value;

  // Strengths list
  let strengths = document.getElementById("inputStrengths").value.split(",");
  let ul = document.getElementById("strengths");
  ul.innerHTML = "";

  strengths.forEach(s => {
    let li = document.createElement("li");
    li.innerText = s.trim();
    ul.appendChild(li);
  });

  document.getElementById("signature").innerText = document.getElementById("inputName").value;

  let today = new Date().toLocaleDateString();
  document.getElementById("date").innerText = "Date: " + today;
});