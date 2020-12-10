const myExperiences = [
    {
        "type": "edu",
        "name": "Allgemeine Gewerbeschule Basel",
        "employment": "Ausbildung, Fachzeichner Architektur",
        "dates": "2007 - 2011",
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
        "type": "travel",
        "name": "Weltreise",
        "employment": "",
        "dates": "2014 - 2015",
        "location": "Südostasien, Indien, SriLanka",
        "url": "https://de.wikipedia.org/wiki/S%C3%BCdostasien"
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
        "employment": "Bachelor of Applied Science<br> Schwerpunkt Applikationsentwicklung<br>Informatik Profilierung iCompetence",
        "dates": "2017 - 2021",
        "location": "Brugg/Windisch",
        "url": "https://www.fhnw.ch/"
    },
    {
        "type": "work",
        "name": "",
        "employment": "Software Engineer",
        "dates": "2021 - 20XX",
        "location": "Basel/Schweiz",
        "url": ""
    }
    // {
    //     "type": "work",
    //     "name": "youEngineering AG",
    //     "employment": "Software Engineer",
    //     "dates": "2021 - 20XX",
    //     "location": "Basel",
    //     "url": "https://youengineering.com/"
    // }
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
        "name": "Digesan® Fibre",
        "description": "Webseite für das Produkt: Digesan® Fibre bei Darmbeschwerden und Reizdarmsyndrom",
        "url": "https://digesan.ch/",
        "logo": "https://digesan.ch/wp-content/uploads/2020/11/Logo_Digesan_WEB.svg",
        "background": "#f5f5f5",
        "screencapture": ""
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
    "Java": "93",
    "Python": "85",
    "Haskell": "66",
    "HTML": "95",
    "CSS": "93",
    "C#": "77",
    "SQL": "65",
    "REST": "66",
    "Spring Framework": "62",
    "React Redux": "80",
    "Angular": "45",
    "Funktionale Programmierung": "90",
    "Objektorientierte Programmierung": "85",
    "Kotlin": "66",
    "Wordpress": "70",
    "Figma": "80",
    "Internet of Things": "60",
    "Machine Learning": "60",
    "Natural Language Processing": "55",
    "Blockchain": "33",
    "Tailwind": "55",
    "Solidity": "45",
    "Unity3D": "40",
    "Arduino": "34",
}

const boxes = []
const displayExperiences = experiences => {
    const mql = window.matchMedia('(max-width: 800px)').matches;
    
    let exp = ""
    //          [edu, exp, exp, travel, exp, exp, edu, exp]
    const tops = mql ? [0, 1, 2, 3, 4, 5, 6, 8] : [0, 1, 2, 3, 4, 5, 0, 2]
    const lefts = mql ? [0, 3, 6, 15, 9, 13, -3, 6] : [-5, 5, 5, -7, 5, 5, 30, 35]


    const animationDelay = i => (i + 5) / 2;

    experiences.forEach((e, i) => {
        const alignBox = (e.type === "work") ? "r" : "l"
        const alignText = alignBox === "r" ? "left" : "right"
        const bgColor = e.type === "edu" ? "from-yellow-200 to-transparent" :
            e.type === "work" ? "from-blue-200 to-transparent" :
                "from-orange-200 to-transparent"

        const questionmark = `<svg class="absolute transform transform -translate-x-6 -translate-y-56 scale-50 overflow-hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="450" height="450">
                                 <path style="fill:#ffa500" d="M 273.79665,278.39483 L 176.01526,278.41797 C 176.01516,262.63035 180.66722,249.81298 184.24805,239.96582 C 187.82867,230.11898 193.15907,221.12648 200.23926,212.98828 C 207.31921,204.85046 223.22902,190.52755 247.96875,170.01953 C 261.15216,159.27758 267.74395,149.43059 267.74414,140.47852 C 267.74395,131.52696 265.0991,124.56896 259.80957,119.60449 C 254.51968,114.64058 246.50374,112.15849 235.76172,112.1582 C 224.20558,112.15849 214.64342,115.98336 207.0752,123.63281 C 199.50672,131.28282 194.6646,144.62916 192.54883,163.67188 L 97.822266,151.95313 C 101.07745,117.12268 113.73206,89.087225 135.78613,67.84668 C 157.84009,46.606799 191.65353,35.986692 237.22656,35.986328 C 272.70814,35.986692 301.35395,43.392284 323.16406,58.203125 C 352.78619,78.222978 367.59737,104.91566 367.59766,138.28125 C 367.59737,152.11613 363.7725,165.46247 356.12305,178.32031 C 348.47304,191.17859 332.84805,206.88496 309.24805,225.43945 C 291.37819,235.59876 274.96586,253.5497 274.54302,262.53489 L 273.79665,278.39483 z M 175.70313,312.35352 L 275.06836,312.35352 L 275.06836,400 L 175.70313,400 L 175.70313,312.35352 z " id="QuestionMark"/>
                              </svg>`

        exp += `
                <div    id="box${i}" 
                        style="top: ${tops[i] * 170}px; left: ${lefts[i] + i * 2}vw; animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${animationDelay(i)}s both; "
                        class="absolute p-5 rounded-lg bg-white bg-gradient-to-${alignBox} ${bgColor}  text-${alignText}">
                                            ${i === 7 ? questionmark : ""}
                    <a href="${e.url}" class="lg:text-lg block mt-1 leading-tight font-semibold text-gray-900 hover:underline">${e.name}</a>
                    <p class="text-gray-800">${e.employment}</p>
                    <p class="text-gray-600">${e.dates} <br> ${e.location}

                    </p>
                </div>
          `

        boxes.push("box" + i)
    })

    experiencesView.innerHTML = exp;
    for (let i = 0; i < boxes.length - 1; i++) {
        adjustLine(getElements(boxes[i], boxes[i + 1]), animationDelay(i))
    }

    const height = distanceToTop(getElement(boxes[boxes.length - 5]))
    document.documentElement.style
        .setProperty("--experience-height", height + "px");
}

const displayWordCloud = () => {
    let cloud = "<ul>"
    for (let [key, value] of Object.entries(skills)) {
        cloud += `<li class="" style="font-size: ${value * (screen.width < 430 ? 2 : 3)}%">'${key}'</li>`
    }
    cloud += "</ul>"
    skillsView.innerHTML = cloud
}

const displayRepos = myRepos => {
    let repos = ""
    myRepos.forEach(e => {
        repos += `
            <div class="w-3/4 lg:w-2/5 xl:w-1/4 rounded-lg overflow-hidden shadow-lg bg-gray-300 m-2 hover:shadow-2xl">
                <a href="${e.github_url}" target="_blank"> 
                    <img class="h-64  w-full object-cover select-none" src="${e.image}" alt="${e.name}">
                </a>
                <div class="px-6 py-4 relative">
                    <a href="${e.github_url}" target="_blank" class="transform -translate-y-8 shadow-lg absolute top-1 right-0 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</a>
                    <div class="font-bold text-xl mb-2">${e.name}</div>
                    <p class="text-gray-600 text-xs uppercase font-semibold tracking-wide">${e.languages}</p>
                    <p class="text-gray-700 text-base pt-5">${e.description}</p>
          `
        if (e.homepage.length > 0) {
            repos += `
                    <div class="flex justify-center items-center animate-pulse">
                        <a href="${e.homepage}" target="_blank"
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
                    <a href="${e.url}" target="_blank" class="block mt-1 text-2xl leading-tight font-semibold text-gray-900 hover:underline">
                        ${e.name}
                    </a>
                    <p class="mt-2 text-gray-600">${e.description}</p>
                </div>
            </div>
          `
    })
    sitesView.innerHTML = websites;
}

let recomposeToggle = true;
window.addEventListener("resize", () => {
    console.log(mql.matches)


    if (boxes) {
        const allLines = document.querySelectorAll("LINE")
        allLines.forEach(l => l.remove())
        for (let i = 0; i < boxes.length - 1; i++) {
            adjustLine(getElements(boxes[i], boxes[i + 1]))
        }

        const height = distanceToTop(getElement(boxes[boxes.length]))
        document.documentElement.style
            .setProperty("--experience-height", height + "px");
    }

})


const render = async () => {
    const myRepos = await (await fetch("./myGitHubs.json")).json()
    displayRepos(myRepos)
    displaySites(myWebsites)
    displayExperiences(myExperiences)
    displayWordCloud()
}

