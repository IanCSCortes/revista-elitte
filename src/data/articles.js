import hero from "../assets/images/hero.jpg";
import cafe from "../assets/images/cafe.jpg";
import beleza from "../assets/images/beleza.jpg";
import negocios from "../assets/images/negocios.jpg";


const articles = {

    featured: [

        {

            id: 1,
            category: "NEGÓCIOS",
            title: "Como a Inteligência Artificial está mudando o mercado",
            author: "Ian Cortes",
            image: negocios

        },

        {

            id: 2,
            category: "TECNOLOGIA",
            title: "React continua dominando o mercado Front-End",
            author: "Revista Elitte",
            image: beleza

        }

    ],

    side: [

        {

            id: 3,
            category: "LIFESTYLE",
            title: "5 hábitos para aumentar sua produtividade",
            author: "Natália Viana",
            image: cafe

        },

        {

            id: 4,
            category: "NEGÓCIOS",
            title: "Empresas brasileiras investem cada vez mais em IA",
            author: "Revista Elitte",
            image: hero

        }

    ]

};

export default articles;