const myGitHubReposUrl = "https://api.github.com/users/BenjaminBrodwolf/repos"
const mattWolfGitHubReposUrl = "https://api.github.com/users/mattwolf-corporation/repos"



// const getJsonData = async url => {
//     const response = (await fetch(url)).json()
//     return await response.json()
// }

const loadGitHubRepo = async url =>{
    const result = await (await fetch(url)).json() //await getJsonData(url)

    let notForkedRepos = result.filter(e => e.fork == false)
    console.log(notForkedRepos)

    let myRepos = []
    for (const repo of notForkedRepos) {
        const contentsUrl = repo.contents_url.replace("{+path}", "")

        const repoContents = await (await fetch(contentsUrl)).json() //await getJsonData(contents)

        const repoImage = repoContents.find(items => items.name === "repoImage.png")
        if (  repoImage ){

            console.log(repo)
            console.log(repoImage)

            const languages = Object.keys( await (await fetch(repo.languages_url)).json() )
            console.log(languages)
            myRepos.push({
               "name": repo.name,
               "full_name": repo.full_name,
                "image": repoImage.download_url,
                "homepage": repo.homepage,
                "github_url": repo.html_url,
                "languages": languages.join(", "),
                "description": repo.description
            })
        }
    }

    console.log(myRepos)

    return myRepos
}

const displayRepos = async () =>{

    const myRepos = await loadGitHubRepo( myGitHubReposUrl )
    const ip5 = await loadGitHubRepo( mattWolfGitHubReposUrl )

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
            <p>${e.language}</p>
        `
    })
    view.innerHTML = repos;

}

