const roadmapData = {
    "B.Tech(Core)": {
      "Semester I": {
        TechnicalSubjects: [
          {
            name: "Programming for Problem Solving (with Python)",
            resources: [
              { type: "Website", title: "Official Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
              { type: "YouTube", title: "Python Tutorial for Beginners", url: "https://www.youtube.com/watch?v=8DvywoWv6fI" },
              { type: "Practice", title: "Python Exercises", url: "https://www.w3resource.com/python-exercises/" }
            ]
          },
          {
            name: "Computational Tools and Career Foundations",
            resources: [
              { type: "Website", title: "Coursera - Career Foundations", url: "https://www.coursera.org/browse/career-development" }
            ]
          }
        ],
        Certifications: [
          {
            name: "IBM Data Analysis with Python Certification Course",
            resources: [
              { type: "Website", title: "IBM Training", url: "https://www.ibm.com/training/" }
            ]
          }
        ],
        Projects: [
          {
            name: "Develop a simple web app using Python.",
            resources: [
              { type: "Website", title: "Flask Tutorial", url: "https://flask.palletsprojects.com/en/2.3.x/tutorial/" },
              { type: "Website", title: "HTML Tutorial", url: "https://www.w3schools.com/html/" },
              { type: "Website", title: "CSS Tutorial", url: "https://www.w3schools.com/css/" }
            ]
          }
        ],
        ExtraSkills: [
          {
            name: "Version Control (Git)",
            resources: [
              { type: "Website", title: "Git Documentation", url: "https://git-scm.com/doc" }
            ]
          },
          {
            name: "Front-end Basics (HTML, CSS)",
            resources: [
              { type: "Website", title: "FreeCodeCamp - Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" }
            ]
          }
        ]
      }
    }
  };
  
  const tabsContainer = document.getElementById("tabs");
  const contentContainer = document.getElementById("content");
  
  const course = "B.Tech(Core)";
  const semesters = Object.keys(roadmapData[course]);
  
  // Create Tabs
  semesters.forEach((sem, index) => {
    const btn = document.createElement("button");
    btn.textContent = sem;
    btn.onclick = () => renderSemester(sem, btn);
    if (index === 0) btn.classList.add("active");
    tabsContainer.appendChild(btn);
  });
  
  // Render Content
  function renderSemester(sem, btn) {
    document.querySelectorAll("#tabs button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  
    const data = roadmapData[course][sem];
    contentContainer.innerHTML = "";
  
    for (const [section, items] of Object.entries(data)) {
      const card = document.createElement("div");
      card.className = "card";
  
      const title = document.createElement("h2");
      title.textContent = section.replace(/([A-Z])/g, " $1").trim();
      card.appendChild(title);
  
      items.forEach((item) => {
        const itemName = document.createElement("p");
        itemName.innerHTML = `<strong>${item.name}</strong>`;
        card.appendChild(itemName);
  
        if (item.resources && item.resources.length > 0) {
          const ul = document.createElement("ul");
          item.resources.forEach((res) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${res.url}" target="_blank">[${res.type}] ${res.title}</a>`;
            ul.appendChild(li);
          });
          card.appendChild(ul);
        }
      });
  
      contentContainer.appendChild(card);
    }
  }
  
  // Initial render
  renderSemester(semesters[0], tabsContainer.querySelector("button"));
  
