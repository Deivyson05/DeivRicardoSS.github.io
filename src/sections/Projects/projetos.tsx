interface Projetos {
    id: string;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github: string;
    type: string
}

export const projetos: Projetos[] = [
    {
        id: "adotai",
        name: "Adotaí!",
        description: "Aplicativo de match para pets",
        image: "https://imgs.search.brave.com/Rx5rJxT928A5U1_CIq-3tWqIuvEwCw0hT5oPUpCL5Aw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9hcl8xNjo5/LGJfYXV0bzpib3Jk/ZXIsY19scGFkL2Jf/d2hpdGUvZl9hdXRv/L3FfYXV0by9kcHJf/MS41L25jb20vc29m/dHdhcmUvc3dpdGNo/LzcwMDEwMDAwMDAw/OTY0L2U3MDgyZGZm/NTEzMjExZTJiZWM2/ZmFjZGRmYzY2NTc2/ZWRhZjRiNjIwODYx/MTZlNjI5MDgyOGY4/MDc1Yzk1YWE",
        technologies: [ "ReactJs", "TypeScript", "NodeJs", "Express", "PostgreSQL"],
        link: "https://www.google.com",
        github: "https://github.com",
        type: "Full-Stack"
    },
    {
        id: "combogo-unicap",
        name: "Landing page Combogó",
        description: "LandingPage de apresentação da Combogó",
        image: "https://drive.google.com/thumbnail?id=1itqzbEp2TV-sovBWOwlyq4I62n1kdohv",
        technologies: ["JavaScript","ReactJs","CSS3","HTML5"],
        link: "https://combogo.vercel.app/",
        github: "https://github.com/DeivRicardoSS/combogo-unicap",
        type: "Front-End"
    },
    {
        id: "player_de_musica_basico",
        name: "Player de música básico",
        description: "Player de música simples feito com JavaScript",
        image: "https://drive.google.com/thumbnail?id=1ZrkcGkX0n0FNd-aRtSnNOeboDSskrg-R",
        technologies: [  "HTML5",  "CSS3",  "JavaScript"],
        link: "https://deivyson.me/player_de_musica_basico/",
        github: "https://github.com/DeivRicardoSS/player_de_musica_basico",
        type: "Front-End"
    },
    {
        id: "guia-de-leitura",
        name: "Shlomo",
        description: "Aplicativo para gerenciamento de leitura",
        image: "https://drive.google.com/thumbnail?id=18NFgLVbCT26on8WJO_YO6cY4nmd4yUiB",
        technologies: [  "HTML5",  "CSS3",  "JavaScript"],
        link: "",
        github: "https://github.com/DeivRicardoSS/guia-de-leitura",
        type: "Front-End"
    }
];