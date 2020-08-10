const { Octokit } = require("@octokit/action");


const octokit = new Octokit();

console.log("Action: Update Repo Start");

octokit.repos
    .listForOrg({
        org: "octokit",
        type: "public",
    })
    .then(({ data }) => {
        console.log(data)
    });


// const myGitHubReposUrl = "https://api.github.com/users/BenjaminBrodwolf/repos"
// const mattWolfGitHubReposUrl = "https://api.github.com/users/mattwolf-corporation/repos"
//
//
// const fetchGH = async url => {
//     const response = await fetch(url, {
//         headers: {
//             "Authorization": "b1f0d841a492c3485584e062a56cf250e2121390"
//         }
//     })
//     return await response.json()
// }
//
// const loadGitHubRepo = async url => {
//     const result = await fetchGH(url) //await (await fetch(url)).json() //await getJsonData(url)
//
//     let notForkedRepos = result.filter(e => e.fork == false)
//     console.log(notForkedRepos)
//
//     let myRepos = []
//     for (const repo of notForkedRepos) {
//         const contentsUrl = repo.contents_url.replace("{+path}", "")
//
//         const repoContents = await fetchGH(contentsUrl) // await (await fetch(contentsUrl)).json() //await getJsonData(contents)
//
//         const repoImage = repoContents.find(items => items.name === "repoImage.png")
//         if (repoImage) {
//
//             console.log(repo)
//             console.log(repoImage)
//
//             const languages = Object.keys(await fetchGH(repo.languages_url))
//             console.log(languages)
//             myRepos.push({
//                 "name": repo.name,
//                 "full_name": repo.full_name,
//                 "image": repoImage.download_url,
//                 "homepage": repo.homepage,
//                 "github_url": repo.html_url,
//                 "languages": languages,
//                 "description": repo.description
//             })
//
//             console.log(JSON.stringify(myRepos))
//         }
//     }
//
//     console.log(myRepos)
//
//     return myRepos
// }
//
// const writeReposToFile = async () => {
//
//     const myRepos = await loadGitHubRepo(myGitHubReposUrl)
//     const ip5 = await loadGitHubRepo(mattWolfGitHubReposUrl)
//
//     const allRepos = [...myRepos, ...ip5]
//     console.log(allRepos)
//     //name, languages,
//
//     const jsonRepos = JSON.stringify(allRepos)
//     console.log(jsonRepos)
// }
//
// writeReposToFile();
