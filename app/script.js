// defining variables
let totalProjects;
let projectNames = [];
let projectImages = [];
let projectDates_Types = [];
let projectDescriptions = [];


// fetchign data from JSON file and using the data
fetch('./../app/data.json')

.then((response)=>{
    return response.json();
  })

.then((data)=>{
    console.log(data);
    totalProjects = data.length; // defines 'totalProjetcss' from no. of elements in the JSON file
    // console.log("You have", totalProjects, "projects");

      
    // sets the first project...
    // CODE HERE
    
    // adds values to the arrays 'images' and 'description' using data from the fetched JSON file
    for (var i = 0; i < data.length; i++) {
      projectNames.push(data[i].name);
      projectImages.push(data[i].image);
      projectDates_Types.push(data[i].date_type);
      projectDescriptions.push(data[i].description);
    }

    console.log("project names are", projectNames);
    console.log("project images are", projectImages);
    console.log("project dates and types are", projectDates_Types);
    console.log("project descriptions are", projectDescriptions);
})