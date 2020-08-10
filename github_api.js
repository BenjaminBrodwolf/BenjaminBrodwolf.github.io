const myGitHubReposUrl = "https://api.github.com/users/BenjaminBrodwolf/repos"
const mattWolfGitHubReposUrl = "https://api.github.com/users/mattwolf-corporation/repos"


const fetchGH = async url => {
    const response = await fetch(url, {
        headers: {
            "Authorization": "b1f0d841a492c3485584e062a56cf250e2121390"
        }
    })
    return await response.json()
}

const loadGitHubRepo = async url => {
    const result = await fetchGH(url) //await (await fetch(url)).json() //await getJsonData(url)

    let notForkedRepos = result.filter(e => e.fork == false)
    console.log(notForkedRepos)

    let myRepos = []
    for (const repo of notForkedRepos) {
        const contentsUrl = repo.contents_url.replace("{+path}", "")

        const repoContents = await fetchGH(contentsUrl) // await (await fetch(contentsUrl)).json() //await getJsonData(contents)

        const repoImage = repoContents.find(items => items.name === "repoImage.png")
        if (repoImage) {

            console.log(repo)
            console.log(repoImage)

            const languages = Object.keys(await fetchGH(repo.languages_url))
            console.log(languages)
            myRepos.push({
                "name": repo.name,
                "full_name": repo.full_name,
                "image": repoImage.download_url,
                "homepage": repo.homepage,
                "github_url": repo.html_url,
                "languages": languages,
                "description": repo.description
            })

            console.log(JSON.stringify(myRepos))
        }
    }

    console.log(myRepos)

    return myRepos
}

const displayRepos = async () => {

    const myRepos = await loadGitHubRepo(myGitHubReposUrl)
    const ip5 = await loadGitHubRepo(mattWolfGitHubReposUrl)

    const allRepos = [...myRepos, ...ip5]
    console.log(allRepos)
    //name, languages,

    let repos = ""
    allRepos.forEach(e => {
        console.log(e)
        repos += `
            <img src="${e.image}">
            <p>${e.name}</p>
            <p>${e.description}</p>
            <p>${e.homepage}</p>
            <p>${e.github_url}</p>
            <p>${e.languages.join(", ")}</p>
        `
    })
    view.innerHTML = repos;

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