// defining variables
let totalProjects;
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
    // console.log(title, shortDes, image, description);
})
