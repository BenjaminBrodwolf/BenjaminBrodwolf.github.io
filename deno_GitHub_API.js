const myGitHubReposUrl = "https://api.github.com/users/BenjaminBrodwolf/repos"
const mattWolfGitHubReposUrl = "https://api.github.com/users/mattwolf-corporation/repos"

const fetchGH = async url => {
    try {
        const response = await fetch(url
            ,
            {
                headers: {
                    "Authorization": "793bdb44ad75dd618f8ea84660034dadddffc9ce"
                }
            }
        )
        return await response.json()
    } catch (error){
        console.error("GitHub Repo Fetch failed " + error)
    }
}

const loadGitHubRepo = async url => {

    const result = await fetchGH(url) //await (await fetch(url)).json() //await getJsonData(url)

    let notForkedRepos = result.filter(e => e.fork == false)

    let myRepos = []
    for (const repo of notForkedRepos) {
        const contentsUrl = repo.contents_url.replace("{+path}", "")
        const repoContents = await fetchGH(contentsUrl) // await (await fetch(contentsUrl)).json() //await getJsonData(contents)

        const repoImage = repoContents.find(items => items.name === "repoImage.png")
        if (repoImage) {
            const languages = Object.keys(await fetchGH(repo.languages_url))
            myRepos.push({
                "name": repo.name,
                "full_name": repo.full_name,
                "image": repoImage.download_url,
                "homepage": repo.homepage,
                "github_url": repo.html_url,
                "languages": languages,
                "description": repo.description
            })
        }
    }

    return myRepos
}

const myRepos = await loadGitHubRepo(myGitHubReposUrl)
const ip5 = await loadGitHubRepo(mattWolfGitHubReposUrl)

const allRepos = [...myRepos, ...ip5]


console.log(allRepos)
await Deno.writeTextFile("myGitHubs.json", JSON.stringify(allRepos))
    .then(() => console.log("GitHub Json-File is written"))