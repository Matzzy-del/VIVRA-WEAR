import { Product, Benefit, TechFeature, Testimonial, FAQItem } from "./types";
import yogaStudioBanner from "./assets/images/yoga_studio_banner_1783113236879.jpg";
import vivraEmanaDetail from "./assets/images/vivra_emana_detail_1783087490386.jpg";
import vivraLeggings from "./assets/images/vivra_leggings_1783087504688.jpg";
import vivraTop from "./assets/images/vivra_top_1783087517124.jpg";
import vivraJacket from "./assets/images/vivra_jacket_1783087529638.jpg";

// Official Generated Asset Paths
export const ASSETS = {
  hero: yogaStudioBanner,
  emanaDetail: vivraEmanaDetail,
  leggings: vivraLeggings,
  top: vivraTop,
  jacket: vivraJacket
};

export const PRODUCTS: Product[] = [
  {
    id: "v-01",
    name: "Conjunto Emana® Mauve (Shorts & Top)",
    category: "High Compression Set",
    price: "R$ 540",
    image: ASSETS.leggings,
    description: "Uma fusão perfeita entre alta compressão e modelagem escultural em tom mauve. Peças desenvolvidas com fios inteligentes Emana® que estimulam a microcirculação celular profunda.",
    details: [
      "Tecnologia de cristais bioativos Emana®",
      "Redução de fadiga e dores musculares",
      "Melhora de firmeza e elasticidade da pele",
      "Tecido respirável de rápida secagem",
      "Modelagem perfeita com cós anatômico"
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Mauve", hex: "#A76575", image: ASSETS.leggings },
      { name: "Preto Carbono", hex: "#171717", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=1000" },
      { name: "Azul Royal", hex: "#0047AB", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" }
    ]
  },
  {
    id: "v-02",
    name: "Conjunto Emana® Chocolate",
    category: "Premium Fitness",
    price: "R$ 560",
    image: ASSETS.top,
    description: "Silhueta minimalista em tom chocolate premium. Desenvolvido para oferecer máxima sustentação com modelagem perfeita, unindo leveza e compressão inteligente.",
    details: [
      "Fio inteligente com minerais bioativos",
      "Alta compressão e modelagem anatômica",
      "Tecido térmico de toque gelado",
      "Proteção UV 50+ contra raios solares",
      "Livre de costuras abrasivas incômodas"
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Chocolate", hex: "#5D3A21", image: ASSETS.top },
      { name: "Creme", hex: "#E8D8C8", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000" },
      { name: "Preto Obsidian", hex: "#1A1A1A", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" }
    ]
  },
  {
    id: "v-03",
    name: "Macacão Emana® Carbon Active",
    category: "Couture Athletic",
    price: "R$ 620",
    image: ASSETS.jacket,
    description: "Design de peça única em tom cinza escuro/carbono para máxima liberdade e estilo. Ajuste de alta performance com a revolucionária tecnologia de regeneração celular Emana®.",
    details: [
      "Concepção em peça única termo-adaptativa",
      "Estímulo à microcirculação sanguínea",
      "Recuperação muscular acelerada (-20% lactato)",
      "Alta elasticidade multidirecional",
      "Visual limpo sem costuras aparentes"
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Carbono", hex: "#434B4D", image: ASSETS.jacket },
      { name: "Terracota", hex: "#B35B41", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000" },
      { name: "Azul Marinho", hex: "#1A2B4C", image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1000" }
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "b-1",
    title: "Microcirculação Ativa",
    description: "Os minerais emissores de infravermelho longo incorporados ao fio Emana® estimulam a circulação local profunda durante e após o uso.",
    metric: "+9%"
  },
  {
    id: "b-2",
    title: "Firmeza & Elasticidade",
    description: "O uso contínuo por no mínimo 6 horas diárias melhora a textura da pele e estimula a síntese de colágeno através da bioestimulação.",
    metric: "Estudos Clínicos"
  },
  {
    id: "b-3",
    title: "Recuperação Muscular",
    description: "Reduz o acúmulo de lactato nos tecidos musculares, acelerando a regeneração e minimizando a fadiga física de forma orgânica.",
    metric: "-20% Lactato"
  },
  {
    id: "b-4",
    title: "Equilíbrio Térmico",
    description: "Promove a troca de calor inteligente com o ambiente externo, evitando picos de temperatura corporal e garantindo máximo conforto.",
    metric: "Regulação Ativa"
  }
];

export const TECH_FEATURES: TechFeature[] = [
  {
    id: "t-1",
    title: "A Ciência do Infravermelho Longo",
    subtitle: "A tecnologia por trás do fio Emana®",
    description: "O fio de poliamida Emana® é enriquecido com minerais bioativos que absorvem o calor do corpo humano e o devolvem sob a forma de raios infravermelhos longos (F.I.R.). Estes raios penetram suavemente na pele, estimulando a microcirculação sanguínea celular e gerando benefícios profundos de bem-estar, estética e performance desportiva."
  },
  {
    id: "t-2",
    title: "Durabilidade Infinita",
    subtitle: "Os minerais fazem parte do DNA do fio",
    description: "Ao contrário de tratamentos superficiais que se perdem nas lavagens, os cristais bioativos do tecido Emana® são fundidos diretamente na matriz polimérica do fio durante a fiação. Isso garante que as propriedades tecnológicas de bioestimulação durem por toda a vida útil da peça, mantendo-se ativas lavagem após lavagem."
  },
  {
    id: "t-3",
    title: "Certificação Científica Internacional",
    subtitle: "Eficácia comprovada e selo Oeko-Tex®",
    description: "Emana® é uma tecnologia patenteada mundialmente e rigorosamente testada por laboratórios independentes. Possui homologação internacional Classe I do selo Oeko-Tex Standard 100, comprovando a total ausência de substâncias nocivas à saúde, sendo seguro inclusive para contato direto com a pele de recém-nascidos."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ts-1",
    quote: "A Vivra representa exatamente o que eu buscava: um minimalismo extremo que não compromete a performance. O toque do tecido na pele é incomparável, parece uma extensão natural do próprio corpo.",
    author: "Helena Cavalcante",
    role: "Arquiteta e Colecionadora de Arte",
    rating: 5
  },
  {
    id: "ts-2",
    quote: "A jaqueta Kinetic e a legging Sculpt redefiniram meu conceito de conforto pós-treino. Sinto que a recuperação muscular é de fato acelerada, e a sofisticação da peça me permite sair do studio direto para reuniões de negócios.",
    author: "Mariana Lins",
    role: "Diretora Criativa",
    rating: 5
  },
  {
    id: "ts-3",
    quote: "Uma obra-prima têxtil. O corte assimétrico e a precisão da modelagem evocam o melhor do design industrial. O tecido Emana® entrega uma leveza térmica que nunca vi em nenhuma outra marca internacional.",
    author: "Ricardo Brandt",
    role: "Designer de Mobiliário de Luxo",
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que é a tecnologia Emana® e como ela funciona?",
    answer: "Emana® é uma tecnologia patenteada que consiste em minerais bioativos incorporados diretamente no fio do tecido. Esses minerais absorvem o calor natural do corpo humano e o emitem de volta sob a forma de raios infravermelhos longos. Esses raios interagem suavemente com a pele, estimulando a microcirculação sanguínea e promovendo benefícios de recuperação muscular, equilíbrio térmico e melhora da firmeza cutânea."
  },
  {
    id: "faq-2",
    question: "Os benefícios tecnológicos desaparecem com as lavagens?",
    answer: "Não. Como os cristais bioativos são incorporados diretamente na composição molecular do fio durante a sua fabricação, a tecnologia Emana® possui durabilidade ilimitada. Suas propriedades bioestimulantes permanecem totalmente intactas durante toda a vida útil da peça, independentemente do número de lavagens ou uso frequente."
  },
  {
    id: "faq-3",
    question: "Como devo lavar e cuidar das minhas peças Vivra?",
    answer: "Para preservar a alta costura e a modelagem escultural das peças, recomendamos a lavagem manual ou em ciclo delicado com água fria e sabão neutro. Evite o uso de amaciantes, alvejantes e secagem em tambor rotativo. Secar à sombra e não passar a ferro para proteger a delicadeza estrutural das costuras seladas a laser."
  },
  {
    id: "faq-4",
    question: "Existe alguma contraindicação para o uso de roupas com tecnologia Emana®?",
    answer: "Por se tratar de uma bioestimulação puramente física (através do calor natural do próprio corpo), o uso é extremamente seguro. A única contraindicação médica estrita se aplica a pessoas com doenças circulatórias graves, feridas abertas ou inflamações agudas na região de contato, ou gestantes (que devem consultar o médico assistente antes do uso regular na região abdominal devido ao estímulo circulatório local)."
  },
  {
    id: "faq-5",
    question: "Quanto tempo preciso usar para sentir os benefícios estéticos?",
    answer: "Para obter a melhora na firmeza e elasticidade da pele, bem como a redução visível dos sinais de celulite, os estudos clínicos recomendam o uso diário de peças Vivra Wear por no mínimo 6 horas consecutivas durante 30 dias seguidos."
  }
];
