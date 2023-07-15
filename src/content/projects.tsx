import img1 from '../assets/projet/img1.webp'
import Logo from '../../src/assets/logowbg.png'


export const data = [
    {
        id: 1,
        image: img1,
        logo: Logo,
        title: 'Portfolio',
        date: '1er Novembre 2022 - 1er Janvier 2022',
        tech: [
                'VSCode',
                'Javascript',
                'HTML',
                'CSS',
                'React',
                'Netlify',
                'Gitlab',
                'Figma'
        ],
        description: `Conception d'un site dans l'objectif de me représenter moi et mon parcours dans l'informatique, 
                      ainsi que de pratiquer les différentes technologies web`,
        github: 'https://gitlab.com/lc31/portfolio', 
    },
    {
        id: 2,
        image: img1,
        logo: Logo,

        title: 'QuizzAnime',
        date: '1er Mars 2022 - En cours',
        tech: [
            'Java',
            'XML',
            'Figma',
            'Android Studio',
            'Gitlab'
        ],
        description: `Application Android à destination de jeu sous forme de quiz, dont l'objectif est
                      de deviner la musique que l'application est en train de jouer`,
        github: 'https://gitlab.com/ghelg/QuizzAnime',
    },
    {
        id: 3,
        image: img1,
        logo: Logo,
        title: 'Outil Cuisson',
        date: '1er Mars 2022 - 1er Avril 2022',
        tech: [
            'Java',
            'XML',
            'Android Studio',
            'Gitlab'
        ], 
        description: `Application permettant de sauvegarder, de lister, et de modifier les informations de plats pour lesquels 
                      on va récupérer des informations comme la température de cuisson, et le temps de cuisson`,
        github: 'https://gitlab.com/ghelg/Projet_Dut_OutilCuisson',
    },
    {
        id: 4,
        image: img1,
        logo: Logo,
        title: 'Jeu de la dame de pique',
        date: 'Février 2021 - Juin 2021',
        tech: [
            'Java',
            'Intellij Idea',
            'Discord',
            'Git & Github',
            'Modélio',
            'Microsoft project'
        ],
        description: `Application qui reproduit le jeu de la Dame de Pique développée en java et se jouant sur le terminal
                      à 4 joueurs dont 3 joueurs robots`,
        github: 'https://gitlab.com/ghelg/ProjetJeuDameDePique',
    },
    {
        id: 5,
        image: img1,
        logo: Logo,

        title: "Ajustement dynamique de la masse logicielle d'un système GNU/Linux",
        date: '20 Octobre 2021 - 30 Mars 2022',
        tech: [
            'Debian',
            'Bash',
            'C',
            'Virtual Box',
            'Github',
            'Vim'
        ],
        description: `Projet qui consiste à alléger les paquets qui ne sont pas nécessaires à différents profils imaginés par mon équipe et moi
                      sur une machine virtuelle Debian lancée par VirtualBox`,
        github: 'https://gitlab.com/ghelg/ProjetS3S4-Allo-memoire',
    }
    // },
    // {
    //     id: 6,
    //     image: img1,
    //     logo: Logo,
    //     title: 'Résolveur de rubikcube',
    //     date: '1er Septembre 2022 - En cours',
    //     tech: [
    //         'C',
    //         'VSCode'
    //     ],
    //     description: 'Projet qui consiste à développer une application qui a pour objectif de résoudre un rubikcube',
    //     github: 'https://github.com/',
    // }
]