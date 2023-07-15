import logoMoi from '../../src/assets/logowbg.png'
import logoNoz from "../assets/logo/logotype-noz.png"
import logovs from "../assets/logo/viasante-logo.svg"
import logoedokial from "../assets/logo/edokial-logo-page.png"
import logoIUTRodez from "../assets/logo/logo-iut-rodez.svg"
import logoMonteil from "../assets/logo/LOGO-MONTEIL-1.png"
import logoUt3 from "../assets/logo/logo_ups_blanc_et_jaune_petit.png"

export const experiences = [
    {
        title: 'Stagiaire à la DSI de ',
        name: 'Viasanté',
        lieu: 'Rodez, Aveyron, France',
        date: '2022 Avril - Juin',
        resume: `J'ai adoré cette expérience, elle m'a permis d'en apprendre beaucoup sur le métier 
            d'architecte SI, mais aussi sur de nombreux autres métiers que l'on peut retrouver au sein d'une DSI`,
        point: [ 
            'Rédaction de documents',
            'Recensement d’applications et de technologies sur Hopex',
            'Travaux de recherche / réflexion sur la cartographie d’un SI',
            'Organisation et animation de réunions',
            'Modélisation de systèmes applicatifs',
        ],
        technologie: [
            'Xmind',
            'Microsoft office',
            'Hopex',
            'GLPI',
            'Bwise',
            'Orchestra'
        ],
        logo: logovs,
        lien: 'https://www.viasante.fr/nos-agences/rodez',
    },
    {
        title: 'Emploi saisonnier ',
        name: 'NOZ',
        lieu: 'Bozouls, Aveyron, France',
        date: '2021 et 2022 Juillet - Septembre',
        resume: `Ce travail m'a permis de prendre conscience des conditions de travail que l'on peut
        retrouver dans des emplois pas forcément faciles, et me permet de confirmer que je souhaite bien
        faire du développement plus tard`,
        point: [
            'Répartition de colis',
            'Etiquetage de colis',
            'Déchargement de camion'
        ],
        technologie: [
            'Terminal - Scanner',
            'Transpalette',
            'Etiqueteuse',
        ],
        logo: logoNoz,
        lien: 'https://www.noz.fr/',
    },
    {
        title: 'Stagiaire en classe de 3ième ',
        name: 'Edokial',
        lieu: 'Bozouls, Aveyron, France',
        date: '2016 Janvier - Janvier',
        resume: `1ère réelle expérience en entreprise, j'ai beaucoup apprécié la faire et beaucoup appris
                 des multiples collaborateurs qui m'ont encadré au sein d'Edokial`,
        point: [
            'Visite des locaux',
            "Découverte des corps métiers de l'entreprise",
            "Rangement d'archives",
            "Exposé et compte rendu à l'école"
        ],
        technologie: [
            "Power Point",
            "Microsoft Word"
        ],
        logo: logoedokial,
        lien: 'https://www.doxio.com/',
    },
    {
        title: 'Jardinier à temps perdu ',
        name: 'Particuliers',
        lieu: 'Bozouls, Aveyron, France',
        date: '2015 - 2022',
        resume: `Il est bien de varier les activités, afin d'apprendre à se connaitre.
                 Je ne pense pas qu'il y ait meilleure manière pour se lancer dans ses
                 premières activités professionnelles`,
        point: [
            'Entretien de pelouse',
            'Entretien de haie',
            'Jardinnage',
            'Arrosage'
        ],
        technologie: [
            'Tondeuse',
            'Fourche',
            'Rateau',
            'Pelle',
            'Arrosoir',
            `Tuyaux d'arrosage`,
            'taille haie',
            'hache & tronçonneuse'
        ],
        logo: logoMoi,
        lien: 'guillaume-helg.netlify.app',
    }
]

export const schools =  [
    {
        title: 'Etudiant Miagiste ',
        name: 'Université Paul Sabatier',
        lieu: '31400 Toulouse, Haute Garonne, France',
        date: '2022 Septembre - Actuellement',
        resume: `Aillant eu par le biais de camarades de bons avis sur cette formation,
                 j'ai décidé d'y aller pour poursuivre mon projet professionnel. Dans l'objectif de plus tard devenir ingénieur logiciel ou
                 un professionnel dans la cybersécurité. Je revois et apprends beaucoup de choses de manières à parfaire mes connaissances en général`,
        point: [
            'Gestion de projet',
            'fonctionnement des entreprises / SI',
            'Développement',
            'Maitrise des langues (anglais)'
        ],
        technologie: [
            'VScode',
            'Balsamic',
            'Canva',
            'Fleet',
            'Intellij'
        ],
        logo: logoUt3,
        lien: 'https://www.univ-tlse3.fr/'
        
    }, 
    {
        title: 'Etudiant en informatique ',
        name: 'IUT de rodez',
        lieu: 'Rodez (12), Aveyron, France',
        date: '2022 Avril - Juin',
        resume: `Très bonne expérience, formation qui m'a permis de comprendre que le développement était vraiment ce que j'aimais,
                 et qui m'a aussi permis d'apprendre et de pratiquer l'informatique en général. Cette formation m'a outillé pour mes
                 futures expériences en informatique et m'a aidé à construire un projet professionnel viable`,
        point: [
            'Gestion de projet',
            'fonctionnement des entreprises / SI',
            'Développement',
            'Maitrise des langues (anglais)',
            'Algorithmie',
            'Connaissances en réseaux'
        ],
        technologie: [
            'Intellij',
            'Figma',
            'VScode',
            'Vim',
            'Linux (Debian et Ubuntu)',
            "Java",
            "C",
            "Bash",
            "Assembleur",
            "Html & Css",
            "PHP",
            "XML",
            "SQL"
        ],
        logo: logoIUTRodez,
        lien: 'https://www.iut-rodez.fr/fr'
    },
    {
        title: 'Lycéen en filière STI2D ',
        name: 'Alexis Monteil',
        lieu: 'Rodez (12), Aveyron, France',
        date: '2022 Avril - Juin',
        resume: `Étape de mon parcours scolaire qui m'a donné l'occasion de me découvrir afin que je puisse avoir les acquis pour réaliser
                 les expériences que je souhaitais réaliser. J'y ai fait mes premiers pas dans l'informatique en pratiquant sur des machines Linux
                 la programmation C et l'utilisation de Raspberry Pi. J'ai trouvé là-bas la voie, dans laquelle, je voulais me lancer.`,
        point: [
            'Manipulation de Raspberry Pi',
            'C',
        ],
        technologie: [
            'Google',
            'Vim',
            'Suite office',
            'Html & Css',
            'C',
            'Linux (Ubuntu)',
            'Raspberry Pi'
        ],
        logo: logoMonteil,
        lien: 'https://alexis-monteil.mon-ent-occitanie.fr/'
    }
]
    

