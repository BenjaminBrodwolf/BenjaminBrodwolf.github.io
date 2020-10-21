const myExperiences = [
    {
        "type": "edu",
        "name": "Allgemeine Gewerbeschule Basel",
        "employment": "Ausbildung, Fachzeichner Architektur",
        "dates": "September 2007 - 2011",
        "location": "Basel",
        "url": "https://www.agsbs.ch/"
    },
    {
        "type": "work",
        "name": "Mermet+Burckhardt AG",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2007 - 2011",
        "location": "Basel",
        "url": "http://www.mermetburckhardt.ch/"
    },
    {
        "type": "work",
        "name": "Ferrara Architekten AG",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2011 - 2014",
        "location": "Basel",
        "url": "https://www.ferrara-architekten.ch/"
    },
    {
        "type": "work",
        "name": "SuperdraftStudio GmbH",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2015 - 2016",
        "location": "Basel",
        "url": "https://www.superdraftstudio.ch/"
    },
    {
        "type": "work",
        "name": "Jeker Architekten SIA AG",
        "employment": "Zeichner EFZ, FR Architektur",
        "dates": "2016 - 2017",
        "location": "Basel",
        "url": "http://www.jekerarchitekten.ch/"
    },
    {
        "type": "edu",
        "name": "Fachhochschule Nordwestschweiz FHNW",
        "employment": "Bachelor of Applied Science <br>Informatik Profilierung iCompetence",
        "dates": "September 2017 - 2021",
        "location": "Brugg/Windisch",
        "url": "https://www.fhnw.ch/"
    },
    {
        "type": "work",
        "name": "youEngineering AG",
        "employment": "Software Engineer",
        "dates": "2021 - 20XX",
        "location": "Basel",
        "url": "https://youengineering.com/"
    }
]

const myWebsites = [
    {
        "name": "Hanuman Yoga Studio",
        "description": "Hanuman Yoga in Basel ist zentral gelegen und bietet einen flexiblen Stundenplan mit unterschiedlichen Yogastilen",
        "url": "https://hanumanyoga.ch",
        "logo": "images/hanumanyoga.png",
        "background": "#73A5AD",
        "screencapture": "images/screencapture-hanumanyoga.png"
    },
    {
        "name": "My Pleasure! Festival",
        "description": "Ein Festival für Körper, Lust & Empowerment vom 23.10 – 25.10.2020 im HANUMAN YOGA STUDIO in Basel",
        "url": "https://mypleasurefestival.ch/",
        "logo": "https://mypleasurefestival.ch/wp-content/uploads/2020/09/Startseite_Clit-600x450.png",
        "background": "white",
        "screencapture": "images/screencapture-mypleasurefestival.png"
    },
    {
        "name": "FYYRSTELL",
        "description": "Das Catering Fyyrstell-Velo bringt köstliches Essen (Burger, zwei weitere Klassiker in naher Zukunft) und eine Plattform für Austausch und Begegnung.",
        "url": "https://fyyrstell.ch/",
        "logo": "https://fyyrstell.ch/wp-content/uploads/2020/07/FYYRSTELL_Logo-Naturweiss_Vollst%C3%A4ndig.svg",
        "background": "#3E3E3F",
        "screencapture": "images/screencapture-fyyrstell.png"
    },
    {
        "name": "PSP - Basel",
        "description": "PSP Postgraduale Studiengänge in Psychotherapie",
        "url": "https://www.psp-basel.ch",
        "logo": "https://psp-basel.ch/images/logo/psp-color-rgb.svg",
        "background": "#75B59F",
        "screencapture": "images/screencapture-psp-basel.png"
    },
]


const skills = {
    "JavaScript": "100",
    "Java": "90",
    "Python": "85",
    "Haskell": "66",
    "HTML": "95",
    "CSS": "93",
    "C#": "70",
    "Spring Framework": "55",
    "React": "75",
    "Angular": "45",
    "Objektorientierte Programmierung": "85",
    "Funktionale Programmierung": "90",
    "Wordpress": "65",
    "Figma": "80",
    "Internet of Things": "60",
    "Machine Learning": "60",
    "Natural Language Processing": "55",
    "ArchiCAD / VectorWorks": "35",
    "Unity3D": "40",
    "Arduino": "34",
}

const boxes = []
const displayExperiences = experiences => {
    let exp = ""
    //          [edu, exp, exp, exp, exp, edu, exp]
    const tops = [  0, 1, 2, 3, 4, 0, 2]
    const lefts = [-5, 5, 5, 5, 5, 30, 35]

    experiences.forEach((e, i) => {
        console.log(i)
        const alignBox = i === 0 ? "left" : "right" //(e.type === "edu") ? "left" : "right"
        const alignText = alignBox === "right" ? "left" : "right"
        const animationDelay = i/2;

        exp += `
                <div    id="box${i}" 
                        style="top: ${tops[i] * 170}px; left: ${lefts[i] + i * 2}vw; animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${animationDelay}s both; "
                        class="absolute p-5 rounded-lg bg-white bg-gradient-to-${alignBox.charAt(0)} from-blue-200 to-gray-200 text-${alignText}">
                    <a href="${e.url}" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">${e.name}</a>
                    <p class="text-gray-800">${e.employment}</p>
                    <p class="text-gray-600">${e.dates} <br> ${e.location}
                    </p>
                </div>
          `

        boxes.push("box" + i)
    })


    experiencesView.innerHTML = exp;
    for (let i = 0; i < boxes.length - 1; i++) {
        adjustLine(getElements(boxes[i], boxes[i + 1]), i/2)
    }

    const height = distanceToTop(getElement(boxes[boxes.length - 3]))
    console.log(height)
    document.documentElement.style
        .setProperty("--experience-height", height + "px");
}

const displayWordCloud = () => {
    let cloud = "<ul>"
    for (let [key, value] of Object.entries(skills)) {
        cloud += `<li class="" style="font-size: ${value * 3}%">'${key}'</li>`
    }
    cloud += "</ul>"
    skillsView.innerHTML = cloud
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
                    <div class="flex justify-center items-center animate-pulse">
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

const displaySites = myWebsites => {
    let websites = ""
    myWebsites.forEach(e => {
        websites += `
            <div class="flex mt-5" style="min-height: 150px">
                <div class="md:flex-shrink-0 p-2 " style="background-color: ${e.background}">
                    <img class="rounded-lg w-56" src="${e.logo}" alt="${e.name}">
                </div>
                <div class="mt-4 md:mt-0 md:ml-6">
                    <a href="${e.url}" class="block mt-1 text-2xl leading-tight font-semibold text-gray-900 hover:underline">
                    ${e.name}</a>
                    <p class="mt-2 text-gray-600">${e.description}</p>
                </div>
            </div>
          `
    })
    sitesView.innerHTML = websites;
}


window.addEventListener("resize", () => {
    if(boxes){
        const allLines = document.querySelectorAll("LINE")
        allLines.forEach(l => l.remove())
        for (let i = 0; i < boxes.length-1; i++){
            adjustLine(getElements(boxes[i], boxes[i+1]))
        }
    }
})


const render = async () => {
    const myRepos = await (await fetch("./myGitHubs.json")).json()
    displayRepos(myRepos)
    displaySites(myWebsites)
    displayExperiences(myExperiences, experiencesView, "exp")
    displayWordCloud()
}

