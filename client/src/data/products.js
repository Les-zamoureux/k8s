import X3Image from './../assets/products/3x.png'
import DryImage from './../assets/products/dry.png'
import FrozenImage from './../assets/products/frozen.png'
import GelatoImage from './../assets/products/gelato.webp'
import PurpleImage from './../assets/products/purple.png'
import ShitImage from './../assets/products/shit.png'
import HazeImage from './../assets/products/haze.png'

let products = [
    {
        "id":0,
        "name":"3x filtré",
        "genetics":"Méthode moderne par extraction à l’eau glacée",
        "category":"ice-o-lator",
        "star":true,
        "type":"hash",
        "stock":1000,
        "thc":35,
        "cbd":0,
        "price":8,
        "image":X3Image,
        "description":"Le 3x filtré, aussi appelé Triple Zéro, est une résine de très haute qualité obtenue par trois filtrations successives à l’eau froide. Ce processus permet de ne conserver que les trichomes les plus purs de la plante, garantissant une puissance et une pureté exceptionnelles.\n\nSon aspect brillant, sa texture grasse et son goût pur en font un produit recherché par les amateurs de hash haut de gamme. Il fond facilement à la chaleur, sans laisser de résidu.",
        "rate":"4.4",
        "reviews":[
            {"name":"Hugo Crepin", "date":1750172854000, "message":"Meilleure cam du monde", "rate":"5"},
            {"name":"Hugo Crepin", "date":1750172854000, "message":"Trop fort les gars", "rate":"4"},
            {"name":"Hugo Crepin", "date":1750172854000, "message":"Pas mal pas mal, j'ai bien aimé le moment ou tanguy est pas venu en cours parce qu'il est 'malade' (c'est son anniversaire aujourd'hui)", "rate":"4"},
            {"name":"Hugo Crepin", "date":1750172854000, "message":"Vous avez du 4 fois filtré ?", "rate":"4.5"},
            {"name":"Hugo Crepin", "date":1750172854000, "message":"Vous avez du 4 fois filtré ?", "rate":"4.5"},
            {"name":"Hugo Crepin", "date":1750172854000, "message":"Vous avez du 4 fois filtré ?", "rate":"1.4"}
        ],
        "color":"Doré à brun clair",
        "flavors":["Terreux et crémeux", "Notes florales ou citronnées selon la variété utilisée", "Goût pur, sans impuretés"],
        "aspects":["Molle", "Grasse", "Facile à manipuler"],
        "effects":["Relaxation intense", "Effet corporel profond, parfois sédatif", "Idéal pour le soir ou pour soulager le stress et les douleurs"],
        "idealFor":["Consommateurs expérimentés", "Soirées calmes", "Recherche de pureté et puissance"],
    },
    {
        "id":1,
        "name": "Amnesia Haze",
        "genetics": "Haze × (Afghan × Hawaiian × Thai × Jamaican)",
        "category": "weed-flower",
        "star": true,
        "type": "weed",
        "stock": 1000,
        "thc": 22,
        "cbd": 0,
        "price": 10,
        "image": HazeImage,
        "description": "Amnesia Haze est l’une des variétés Sativa les plus connues dans le monde. Elle offre un effet cérébral puissant, une montée euphorique et une sensation d’énergie mentale idéale pour la journée. Issue de génétiques exotiques, elle est très appréciée pour sa puissance et ses arômes citronnés.\n\nSon profil riche en terpènes, son aspect givré et sa dominance Sativa en font un choix populaire pour les amateurs de sensations mentales et créatives.",
        "rate": "4.6",
        "reviews": [
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Très bon produit, effet clair et puissant.", "rate": "5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "J'ai fait toute ma présentation d'anglais avec ça, merci les gars.", "rate": "4.5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Fume pas ça avant de dormir, j’ai nettoyé ma chambre à 3h du mat", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Classique, toujours aussi efficace.", "rate": "5" }
        ],
        "color": "Vert clair avec des pistils orange",
        "flavors": ["Citron frais", "Notes terreuses", "Épices douces", "Encens"],
        "aspects": ["Têtes denses", "Résineuses", "Aspect givré"],
        "effects": ["Euphorie mentale", "Stimulation de la créativité", "Énergie cérébrale", "Bonne humeur"],
        "idealFor": ["Utilisation en journée", "Activités créatives", "Sorties sociales", "Combattre la fatigue ou le stress"]
    },
    {
        "id":2,
        "name": "Gelato",
        "genetics": "Sunset Sherbet × Thin Mint Girl Scout Cookies",
        "category": "weed-flower",
        "star": true,
        "type": "weed",
        "stock": 1000,
        "thc": 24,
        "cbd": 0,
        "price": 11,
        "image": GelatoImage,
        "description": "La Gelato est une variété hybride haut de gamme très prisée pour son équilibre parfait entre effet cérébral et relaxation corporelle. Issue de lignées californiennes prestigieuses, elle se distingue par son goût sucré unique et sa puissance bien dosée.\n\nC’est une fleur idéale pour les consommateurs recherchant une expérience intense mais maîtrisée, avec un effet à la fois planant et physique.",
        "rate": "4.7",
        "reviews": [
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Le goût est incroyable, vraiment dessert.", "rate": "5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Très relaxant mais je reste fonctionnel. Top !", "rate": "4.5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Un peu trop fort pour moi perso, mais super qualité.", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Une dinguerie, j’en reprends direct.", "rate": "5" }
        ],
        "color": "Vert foncé avec des teintes violettes et pistils orange",
        "flavors": ["Crème sucrée", "Fruits des bois", "Agrumes", "Notes terreuses"],
        "aspects": ["Compacte", "Cristaux visibles", "Couleur vibrante"],
        "effects": ["Relaxation musculaire", "Clarté mentale", "Bon pour l'humeur", "Soulage le stress"],
        "idealFor": ["Moments de détente", "Fin de journée", "Réduire l’anxiété", "Amateurs de saveurs sucrées"]
    },
    {
        "id":3,
        "name": "Shit Classique",
        "genetics": "Résine extraite des trichomes de cannabis marocain",
        "category": "traditional-hash",
        "star": false,
        "type": "hash",
        "stock": 1000,
        "thc": 12,
        "cbd": 0,
        "price": 5,
        "image": ShitImage,
        "description": "Ce shit classique, aussi appelé haschich marocain standard, est l’un des produits les plus répandus sur le marché. Issu d’une extraction traditionnelle à sec, il présente une texture légèrement friable et un aspect brun foncé.\n\nSon goût est terreux, légèrement poivré, avec un effet corporel modéré. C’est un produit accessible, parfait pour les consommateurs occasionnels ou les amateurs de résines traditionnelles.",
        "rate": "3.9",
        "reviews": [
            {"name":"Hugo Crepin", "date":1750172854000, "message": "C’est pas de la frappe mais il fait le taf", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Goût un peu sec mais bon rapport qualité-prix", "rate": "3.5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Classique des classiques. J’ai grandi avec ça.", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Pas mal pour débuter ou pour rouler en scred", "rate": "4" }
        ],
        "color": "Brun foncé à noir, intérieur beige/marron",
        "flavors": ["Terreux", "Épicé", "Léger goût boisé"],
        "aspects": ["Friable à la main", "Compact", "Sec à modérément gras"],
        "effects": ["Relaxation légère", "Sensation corporelle douce", "Idéal pour se détendre sans être KO"],
        "idealFor": ["Débutants", "Utilisation en journée", "Petit budget", "Ambiance chill"]
    },
    {
        "id":4,
        "name": "Buckeye Purple",
        "genetics": "Granddaddy Purple × Unknown Hybrid",
        "category": "weed-flower",
        "star": true,
        "type": "weed",
        "stock": 1000,
        "thc": 20,
        "cbd": 1,
        "price": 10,
        "image": PurpleImage,
        "description": "La Buckeye Purple, aussi appelée Purple Strain, est une variété à dominance indica réputée pour ses magnifiques couleurs violettes et son effet profondément relaxant. C’est une fleur idéale pour la détente en soirée ou pour lutter contre l’anxiété et les douleurs.\n\nElle dégage des arômes sucrés et fruités, avec une légère touche boisée, et son apparence dense et givrée en fait un produit visuellement impressionnant.",
        "rate": "4.5",
        "reviews": [
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Elle m’a collé au canapé. Parfaite pour Netflix !", "rate": "5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Couleur magnifique, goût très doux. Validé.", "rate": "4.5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Pas trop fort en tête mais super relaxant.", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Une vraie beuh de soirée tranquille.", "rate": "4.5" }
        ],
        "color": "Violet foncé avec nuances vertes et trichomes blancs",
        "flavors": ["Fruits rouges", "Raisin mûr", "Notes boisées", "Sucré"],
        "aspects": ["Têtes denses", "Couleurs vives", "Givrée"],
        "effects": ["Relaxation corporelle", "Apaisement mental", "Sédatif léger", "Bonne humeur"],
        "idealFor": ["Fin de journée", "Soulager le stress", "Insomnie", "Chiller en intérieur"]
    },
    {
        "id":5,
        "name": "Frozen Hash",
        "genetics": "Extraction sur fleurs fraîches congelées (Fresh Frozen)",
        "category": "modern-hash",
        "star": true,
        "type": "hash",
        "stock": 1000,
        "thc": 40,
        "cbd": 0.5,
        "price": 12,
        "image": FrozenImage,
        "description": "Le Frozen Hash est une résine d’exception obtenue à partir de fleurs fraîchement récoltées, immédiatement congelées puis extraites à l’eau glacée. Ce procédé, aussi appelé 'Fresh Frozen Bubble Hash', permet de préserver tous les arômes et principes actifs de la plante, pour un rendu ultra-pur, riche en terpènes, et extrêmement puissant.\n\nSa texture est souvent sableuse ou crémeuse selon le degré de filtration, et son goût est fidèle à la fleur fraîche. C’est un produit recherché par les connaisseurs pour sa pureté et son effet net et intense.",
        "rate": "4.9",
        "reviews": [
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Une dinguerie. Gout de plante fraîche incroyable !", "rate": "5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Le meilleur hash que j’ai testé, on sent que c’est du haut niveau.", "rate": "5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Fume ça avec modération, ça rigole pas.", "rate": "4.5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Parfait pour le dab ou le pur.", "rate": "5" }
        ],
        "color": "Beige clair à doré selon la filtration",
        "flavors": ["Fleur fraîche", "Agrumes", "Pin", "Légèrement sucré"],
        "aspects": ["Poudreux ou crémeux", "Collant à la chaleur", "Très pur"],
        "effects": ["Effet rapide et intense", "Euphorie mentale", "Relaxation musculaire", "Très propre et clair"],
        "idealFor": ["Connaisseurs", "Dabbing", "Sessions pures", "Soirées tranquilles ou créatives"]
    },
    {
        "id":6,
        "name": "Dry Sift",
        "genetics": "Extraction mécanique à sec des trichomes",
        "category": "traditional-hash",
        "star": false,
        "type": "hash",
        "stock": 1000,
        "thc": 22,
        "cbd": 0.2,
        "price": 7,
        "image": DryImage,
        "description": "Le Dry Sift, parfois appelé simplement 'Dry', est un haschich obtenu par tamisage à sec des fleurs de cannabis. Les trichomes sont séparés mécaniquement à l’aide de filets fins, puis pressés pour former une résine compacte.\n\nCe hash à l’ancienne conserve les arômes d’origine de la plante et offre un effet équilibré, relaxant et clair. Il est apprécié pour sa texture friable, sa combustion facile et son goût naturel.",
        "rate": "4.3",
        "reviews": [
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Un bon hash simple et efficace, comme à l’ancienne.", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Goût brut et naturel, parfait avec un café.", "rate": "4.5" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Pas le plus fort mais vraiment agréable à fumer.", "rate": "4" },
            {"name":"Hugo Crepin", "date":1750172854000, "message": "Qualité propre pour le prix, bon taf.", "rate": "4.5" }
        ],
        "color": "Beige à brun clair",
        "flavors": ["Terreux", "Naturel", "Légèrement épicé"],
        "aspects": ["Friable", "Sec à semi-gras", "Grain fin"],
        "effects": ["Relaxation modérée", "Clarté mentale", "Effet doux et durable"],
        "idealFor": ["Débutants", "Usage en journée", "Mix tabac/cannabis", "Amateurs de produits naturels"]
    }
]

export default products