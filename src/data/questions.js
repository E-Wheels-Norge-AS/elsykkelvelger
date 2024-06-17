export const questions = [
    {
        id: 1,
        question: "Hvor skal du sykle?",
        stepsLeft: 3,
        options: [
            { 
                text: "Asfalt", 
                next: 2, 
                image: "/optionsImages/asfalt.webp",
                description: "Du sykler for det meste i byen" 
            },
            { 
                text: "Terreng", 
                next: 4, 
                image: "/optionsImages/terreng.webp",
                description: "Stisykling, downhill og fjellturer" 
            },
        ] 
    },
    {
        id: 2,
        question: "Hva skal du bruke sykkelen til?",
        options: [
            { 
                text: "Pendling", 
                next: 3,
                image: "/optionsImages/pendling.webp",
                description: "Du bruker sykkelen daglig for å pendle til jobben" 
            },
            { 
                text: "Frakt og last", 
                selectedBikeId: 2,
                image: "/optionsImages/lastesykkel.jpg",
                description: "For deg som handler på vei hjem fra jobb, og henter i barnehagen" 
            },
        ] 
    },
    {
        id: 3,
        question: "Hvor langt er det til jobben?",
        options: [
            { 
                text: "Kort", 
                selectedBikeId: 1,
                image: "/optionsImages/pendling.webp",
                description: "Du bruker sykkelen daglig for å pendle til jobben" 
            },
            { 
                text: "Langt", 
                selectedBikeId: 1,
                image: "/optionsImages/lastesykkel.jpg",
                description: "For deg som handler på vei hjem fra jobb, og henter i barnehagen" 
            },
        ] 
    },
    {
        id: 4,
        question: "Hvilken demping ønsker du?",
        options: [
            { 
                text: "Fulldempet", 
                selectedBikeId: 3,
                image: "/optionsImages/fulldemper.webp",
                description: "Stisykling, downhill og fjellturer"  
            },
            { 
                text: "Ikke fulldempet", 
                selectedBikeId: 1,
                image: "/optionsImages/terreng.webp",
                description: "Stisykling, downhill og fjellturer"  
            },
        ] 
    }
]
