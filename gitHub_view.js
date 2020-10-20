const myWorkExperience = [
    {
        "name": "Mermet+Burckhardt AG",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2007 - 2011",
        "location": "Basel",
        "url": "http://www.mermetburckhardt.ch/"
    },
    {
        "name": "Ferrara Architekten AG",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2011 - 2014",
        "location": "Basel",
        "url": "https://www.ferrara-architekten.ch/"
    },
    {
        "name": "SuperdraftStudio GmbH",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2015 - 2016",
        "location": "Basel",
        "url": "https://www.superdraftstudio.ch/"
    },
    {
        "name": "Jeker Architekten SIA AG",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2016 - 2017",
        "location": "Basel",
        "url": "http://www.jekerarchitekten.ch/"
    }
]

const myEducation = [
    {
        "name": "Allgemeine Gewerbeschule Basel",
        "employment": "Ausbildung, Fachzeichner Architektur",
        "dates": "September 2007 - 2011",
        "location": "Basel",
        "url": "https://www.agsbs.ch/"
    },
    {
        "name": "Fachhochschule Nordwestschweiz FHNW",
        "employment": "Bachelor of Applied Science <br> BASc, Informatik Profilierung iCompetence",
        "dates": "September 2017 - 2021",
        "location": "Brugg/Windisch",
        "url": "https://www.fhnw.ch/"
    }
]
const myWebsites = [
    {
        "name": "Hanuman Yoga Studio",
        "description": "Hanuman Yoga in Basel ist zentral gelegen und bietet einen flexiblen Stundenplan mit unterschiedlichen Yogastilen",
        "url": "https://hanumanyoga.ch",
        "logo": "images/hanumanyoga.png",
        "screencapture": "images/screencapture-hanumanyoga.png"
    },
    {
        "name": "My Pleasure! Festival",
        "description": "Ein Festival für Körper, Lust & Empowerment vom 23.10 – 25.10.2020 im HANUMAN YOGA STUDIO in Basel",
        "url": "https://mypleasurefestival.ch/",
        "logo": "https://mypleasurefestival.ch/wp-content/uploads/2020/09/Startseite_Clit-600x450.png",
        "screencapture": "images/screencapture-mypleasurefestival.png"
    },
    {
        "name": "FYYRSTELL",
        "description": "Das Catering Fyyrstell-Velo bringt köstliches Essen (Burger, zwei weitere Klassiker in naher Zukunft) und eine Plattform für Austausch und Begegnung.",
        "url": "https://fyyrstell.ch/",
        "logo": "https://fyyrstell.ch/wp-content/uploads/2020/07/FYYRSTELL_Logo-Naturweiss_Vollst%C3%A4ndig.svg",
        "screencapture": "images/screencapture-fyyrstell.png"
    },
    {
        "name": "PSP - Basel",
        "description": "PSP Postgraduale Studiengänge in Psychotherapie",
        "url": "https://www.psp-basel.ch",
        "logo": "https://psp-basel.ch/images/logo/psp-color-rgb.svg",
        "screencapture": "images/screencapture-psp-basel.png"
    },
]


// const displayBox = myWorksEperience => {
//     let exp = ""
//     myWorksEperience.forEach((e, i) => {
//         console.log(i)
//         const alignBox = (i % 2 == 0) ? "right" : "left"
//         const alignText = alignBox === "right" ? "left" : "right"
//
//         exp += `
//                 <div id="box${i}" style="top: ${i*120}px; ${alignBox}: 20px" class="absolute bg-white bg-gradient-to-${alignBox.charAt(0)} from-blue-200 to-gray-200 w-1/6 text-${alignText}">
//                     <a href="${e.address}" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">${e.name}</a>
//                     <p class="text-gray-800">${e.employment}</p>
//                     <p class="text-gray-600">${e.dates} <br> ${e.location}
//                     </p>
//                 </div>
//           `
//         boxes.push("box"+i)
//     })
//     experiencesView.innerHTML = exp;
//     for (let i = 0; i < boxes.length-1; i++){
//         adjustLine(getElements(boxes[i], boxes[i+1]))
//     }
//
//     const height = distanceToTop(getElement(boxes[boxes.length - 1]))
//     console.log(height)
//     document.documentElement.style
//         .setProperty("--experience-height", height+"px" );
// }
const displayBoxes = (list, view, name, padding = 1) => {
    const boxes = []
    let exp = ""
    list.forEach((e, i) => {
        console.log(i)
         exp += `
                <box id="${name}${i}" style="top: ${i*padding*120}px; left: ${50+i*20}px" class="absolute bg-white bg-gradient-to-r from-blue-200 to-gray-200  text-left ">
                    <a href="${e.url}" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">${e.name}</a>
                    <p class="text-gray-800">${e.employment}</p>
                    <p class="text-gray-600">${e.dates} <br> ${e.location}          
                    </p>
                </box>
          `
        boxes.push(name + i.toString())
    })
    view.innerHTML = exp;

    return boxes;
}


const displaySites = myWebsites => {
    let websites = ""
    myWebsites.forEach(e => {
        websites += `
            <div class="flex ">
                <div class="md:flex-shrink-0 ">
                    <img class="rounded-lg md:w-56" src="${e.logo}" alt="${e.name}">
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                    <a href="${e.url}" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                    ${e.name}</a>
                    <p class="mt-2 text-gray-600">${e.description}</p>
                </div>
            </div>
          `
    })
    sitesView.innerHTML = websites;
}

const displayRepos = myRepos => {
    let repos = ""
    myRepos.forEach(e => {
        repos += `
            <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-300 w-2/5 m-2 hover:shadow-2xl">
                <img class="h-64  w-full object-cover select-none" src="${e.image}" alt="${e.name}">
                <div class="px-6 py-4 relative">
                    <a href="${e.github_url}" class="transform -translate-y-8 shadow-lg absolute top-1 right-0 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</a>
                    <div class="font-bold text-xl mb-2">${e.name}</div>
                    <p class="text-gray-600 text-xs uppercase font-semibold tracking-wide">${e.languages}</p>
                    <p class="text-gray-700 text-base pt-5">${e.description}</p>
          `
        if (e.homepage.length > 0) {
            repos += `
                    <div class="flex justify-center items-center">
                        <a href="${e.homepage}"
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                            <span>Homepage</span>
                            <svg class="fill-current w-8 h-8 mr-2 pl-1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 50 50"
                                 enable-background="new 0 0 50 50">
                                <path d="M 12 6 C 10.3 6 9 7.3 9 9 L 9 39 L 11 37 L 11 9 C 11 8.4 11.4 8 12 8 L 38 8 C 38.6 8 39 8.4 39 9 L 39 41 C 39 41.6 38.6 42 38 42 L 16 42 L 14 44 L 38 44 C 39.7 44 41 42.7 41 41 L 41 9 C 41 7.3 39.7 6 38 6 L 12 6 z M 16 25 L 16 27 L 24.59375 27 L 9.09375 42.5 L 10.5 43.90625 L 26 28.40625 L 26 37 L 28 37 L 28 26 L 28 25 L 27 25 L 16 25 z"/>
                            </svg>
                        </a>
                    </div>                
                `
        }
        repos += `
                </div>
            </div>`
    })
    reposView.innerHTML = repos;
}

const drawBoxLines = boxes =>{
    for (let i = 0; i < boxes.length-1; i++){
        adjustLine(getElements(boxes[i], boxes[i+1]))
    }
}

const render = async () => {
    const myRepos = await (await fetch("./myGitHubs.json")).json()
    displayRepos(myRepos)
    displaySites(myWebsites)
    const boxExp = displayBoxes(myWorkExperience, experiencesView, "exp")
    const boxEdu = displayBoxes(myEducation, educationsView, "edu", 3)

    const height = distanceToTop(getElement(boxExp[boxExp.length - 1]))

    // const height = boxHeightExp > boxHeightEdu ? boxHeightExp : boxHeightEdu;
    document.documentElement.style
        .setProperty("--experience-height", height+"px" );


    // const boxes = [boxEdu[0], ...boxExp, boxEdu[1]]
    drawBoxLines(boxExp)
    drawBoxLines(boxEdu)
}

