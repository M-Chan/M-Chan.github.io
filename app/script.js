// defining variables
let totalProjects;
let currentProject = 0;
let projectNames = [];
let projectImages = [];
let projectDates_Types = [];
let projectDescriptions = [];

const title = document.querySelector(".projectTitle");
const image = document.querySelector("#image");
const shortDes = document.querySelector(".shortDescription");       
const description = document.querySelector(".projectDescription");  

let buttonContainer = document.querySelector("#buttonsContainer");
let childButton = document.createElement("div");
childButton.classList.add("positionButton");
let buttonsList = [];

// fetchign data from JSON file and using the data
fetch('./../app/data.json')

.then((response)=>{
    return response.json();
  })

.then((data)=>{
    console.log(data);
    totalProjects = data.length; // defines 'totalProjetcss' from no. of elements in the JSON file
    // console.log("You have", totalProjects, "projects");

    // adds values to the arrays 'images' and 'description' using data from the fetched JSON file
    for (var i = 0; i < data.length; i++) {
      projectNames.push(data[i].name);
      projectImages.push(data[i].image);
      projectDates_Types.push(data[i].date_type);
      projectDescriptions.push(data[i].description);

      console.log(buttonContainer);
      childButton.id = "Button" + [i];
      buttonContainer.appendChild(childButton.cloneNode(true));
      buttonsList.push(childButton);
    }
    // console.log("project names are", projectNames);
    // console.log("project images are", projectImages);
    // console.log("project dates and types are", projectDates_Types);
    // console.log("project descriptions are", projectDescriptions);

    // sets the first project...
    title.innerHTML = projectNames[0];
    image.setAttribute('style', 'background-image: url(' + projectImages[0] + ');');
    shortDes.innerHTML = projectDates_Types[0];
    description.innerHTML = projectDescriptions[0];
    document.querySelector("#Button0").classList.add("positionButton--active")
    console.log(title, shortDes, image, description, buttonsList);

    currentProject = 0;
})


function nextProject() {
  if(currentProject === (totalProjects - 1)) {
      currentProject = 0; //go back to the first project if reached the end
  }
  else currentProject++; //move along by one project

  console.log(currentProject);

  title.innerHTML = projectNames[currentProject];
  image.setAttribute('style', 'background-image: url(' + projectImages[currentProject] + ');');
  shortDes.innerHTML = projectDates_Types[currentProject];
  description.innerHTML = projectDescriptions[currentProject];

  setTimeout(nextProject, 5000); // will now auto to the next projetc every 5s
};

nextProject(); // calls the 'nextProject' function to start