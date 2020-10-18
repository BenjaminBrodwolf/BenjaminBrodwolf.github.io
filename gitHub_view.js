const displayRepos = myRepos => {
    let repos = ""
    myRepos.forEach(e => {
        repos += `
          <div class="repo">
            <img src="${e.image}" alt="${e.name}">
            <h5>${e.name}</h5>
            <p>${e.description}</p>
            <p>${e.homepage}</p>
            <p>${e.github_url}</p>
            <p>${e.languages.join(", ")}</p>
          </div>
          `
    })
    view.innerHTML = repos;
}

const start = async () => {
    const myRepos = await (await fetch("./myGitHubs.json")).json()
    console.log(myRepos)
    displayRepos(myRepos)
}


// [{
//     "name": "CryptoSnake",
//     "full_name": "BenjaminBrodwolf/CryptoSnake",
//     "image": "https://raw.githubusercontent.com/BenjaminBrodwolf/CryptoSnake/master/repoImage.png",
//     "homepage": "",
//     "github_url": "https://github.com/BenjaminBrodwolf/CryptoSnake",
//     "languages": ["JavaScript", "CSS", "HTML"],
//     "description": "Blockchain-Basierte Web-Applikation"
// }, {
//     "name": "IoT-Terrarium-Monitoring-Control-System",
//     "full_name": "BenjaminBrodwolf/IoT-Terrarium-Monitoring-Control-System",
//     "image": "https://raw.githubusercontent.com/BenjaminBrodwolf/IoT-Terrarium-Monitoring-Control-System/master/repoImage.png",
//     "homepage": "https://fhnw-iot-5ibb1.github.io/fhnw-iot-project-Terrarium-Monitoring-Control-System/TerrariumWebApp.html",
//     "github_url": "https://github.com/BenjaminBrodwolf/IoT-Terrarium-Monitoring-Control-System",
//     "languages": ["C++", "HTML"],
//     "description": "IoT Terrarium - Monitoring and Control System "
// }, {
//     "name": "IVIS_Switzerland",
//     "full_name": "BenjaminBrodwolf/IVIS_Switzerland",
//     "image": "https://raw.githubusercontent.com/BenjaminBrodwolf/IVIS_Switzerland/master/repoImage.png",
//     "homepage": "https://benjaminbrodwolf.github.io/IVIS_Switzerland/index.html",
//     "github_url": "https://github.com/BenjaminBrodwolf/IVIS_Switzerland",
//     "languages": ["JavaScript", "CSS", "HTML"],
//     "description": "Interactive data Visualization of Switzerland"
// }]