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

async function start(){
  // fetchign data from JSON file and using the data
  return await fetch('./../app/data.json')

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
      buttonsList.push(childButton.cloneNode(true));
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
}

async function updateProject() {
  console.log(currentProject);

  title.innerHTML = projectNames[currentProject];
  image.setAttribute('style', 'background-image: url(' + projectImages[currentProject] + ');');
  shortDes.innerHTML = projectDates_Types[currentProject];
  description.innerHTML = projectDescriptions[currentProject];

  deactivateButtons();
  nextProject();
};

async function makeButtons(){
  let buttons = document.querySelectorAll(".positionButton");
  buttons.forEach(mainItem => {
    mainItem.addEventListener('click', () => {
      console.log("button clicked");
      buttons.forEach(otherItems => {
        otherItems.classList.remove("positionButton--active");
      })
    mainItem.classList.add("positionButton--active");
    currentProject = mainItem.id.slice(-1);
    console.log("id no. =", mainItem.id.slice(-1));
    clearInterval(nextProject);
    updateProject();
    })
  })
}

async function deactivateButtons(){ // should remove active button from all | not working
  for(let k=0; k<totalProjects; k++){
    buttonsList[k].classList.remove("positionButton--active");
    console.log(buttonsList[k]);
  }
}

async function nextProject() {
  if(currentProject >= (totalProjects - 1)) {
      currentProject = 0; //go back to the first project if reached the end
  }
  else currentProject++; //move along by one project

  console.log(currentProject);

  title.innerHTML = projectNames[currentProject];
  image.setAttribute('style', 'background-image: url(' + projectImages[currentProject] + ');');
  shortDes.innerHTML = projectDates_Types[currentProject];
  description.innerHTML = projectDescriptions[currentProject];

  deactivateButtons();
  setTimeout(nextProject, 5000); // will now auto to the next projetc every 5s
};

async function startmain(){
  const start = await this.start();
  makeButtons();
  nextProject();  // calls the 'nextProject' function to start
}

startmain();