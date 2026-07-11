import hero from "../assets/images/imgside2.webp";
import cafe from "../assets/images/imgside1.webp";
import beleza from "../assets/images/imgteste2.webp";
import negocios from "../assets/images/imgteste.webp";


const articles = {

    featured: [

        {

            id: 1,
            category: "NEGÓCIOS",
            title: "José Roberto Sales: memória, história e identidade de Varginha",
            author: "Revista Elitte",
            image: negocios

        },

        {

            id: 2,
            category: "TECNOLOGIA",
            title: "IPD: uma história que atravessa gerações cuidando da vida",
            author: "Revista Elitte",
            image: beleza

        }

    ],

    side: [

        {

            id: 3,
            category: "CIDADE",
            title: "Inaugurada a nova Cafeteria A Caprichosa: uma experiência única",
            author: "Natália Viana",
            image: cafe

        },

        {

            id: 4,
            category: "DESTAQUE",
            title: "Um novo olhar para a Harmonização Facial!",
            author: "Revista Elitte",
            image: hero

        }

    ]

};

export default articles;