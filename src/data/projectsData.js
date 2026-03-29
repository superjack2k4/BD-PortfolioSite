export const projectsData = [
  {
    id: "aquatica",
    title: "Aquatica",
    subtitle: "Marine conservation project",
    overview: "Aquatica is a comprehensive marine conservation project aimed at preserving aquatic ecosystems and protecting endangered marine life. Volunteers will work hand-in-hand with local conservationists to monitor turtle nesting sites, rehabilitate injured marine animals, and clean up polluted coastlines in Sri Lanka. It's a life-changing opportunity to make a tangible impact on sustainable development while experiencing a vibrant culture.",
    activities: [
      { title: "Beach cleanups:", text: "Lead and participate in regular coastal cleanup drives to remove plastic waste." },
      { title: "Marine awareness campaigns:", text: "Educate local communities and schools about ocean conservation." },
      { title: "Turtle conservation:", text: "Monitor nesting sites and safely release hatchlings into the ocean." },
      { title: "Social media campaigns:", text: "Document the project impact to raise global awareness online." }
    ],
    details: {
      duration: "6 Weeks",
      location: "Sri Lanka",
      participants: "18–30 years old",
      sdgGoal: { num: 14, text: "Life Below Water" }
    },
    category: "Environment",
    skills: ["Leadership", "Teamwork", "Environmental awareness", "Project coordination"],
    images: {
      heroImg: "https://loremflickr.com/1200/800/ocean,turtle/all", // fallback image if assets not found
      gallery: [
        "https://loremflickr.com/800/600/beach,cleanup/all",
        "https://loremflickr.com/800/600/turtle,ocean/all",
        "https://loremflickr.com/800/600/marine,life/all"
      ]
    },
    colors: {
      gradient: "linear-gradient(135deg, rgba(10,151,217,0.9) 0%, rgba(3,126,243,0.95) 100%)", // custom blue
      solid: "#0A97D9"
    }
  },
  {
    id: "skill-up",
    title: "Skill Up",
    subtitle: "Career development training",
    overview: "Skill Up focuses on equipping youth and young adults with essential skills for the modern workforce. Volunteers conduct workshops on resume writing, digital literacy, and interview preparation to accelerate career readiness for aspiring professionals.",
    activities: [
      { title: "Career counseling:", text: "Help young graduates identify career goals and paths." },
      { title: "Tech literacy:", text: "Run coding bootcamps and standard software training courses." },
      { title: "Interview coaching:", text: "Hold mock interviews and provide actionable behavioral feedback." }
    ],
    details: {
      duration: "6 Weeks",
      location: "Sri Lanka",
      participants: "18–30 years old",
      sdgGoal: { num: 8, text: "Decent Work" }
    },
    category: "Skill Development",
    skills: ["Coaching", "Public Speaking", "Leadership", "Mentorship"],
    images: {
      heroImg: "https://loremflickr.com/1200/800/career,office/all",
      gallery: [
        "https://loremflickr.com/800/600/workshop,training/all",
        "https://loremflickr.com/800/600/laptop,office/all",
        "https://loremflickr.com/800/600/career,youth/all"
      ]
    },
    colors: {
      gradient: "linear-gradient(135deg, rgba(3,126,243,0.9) 0%, rgba(86,192,43,0.95) 100%)",
      solid: "#037Ef3"
    }
  },
  {
    id: "global-classroom",
    title: "Global Classroom",
    subtitle: "Teaching & education project",
    overview: "Global Classroom provides quality education to underprivileged children. Volunteers assist local schools by teaching English, organizing extracurricular activities, and creating empowering environments for young minds. Break educational barriers and provide resources shaping the futures of children.",
    activities: [
      { title: "English teaching:", text: "Create lesson plans and teach foundational English." },
      { title: "Extracurriculars:", text: "Organize arts, physical education, and teamwork exercises." },
      { title: "Mentorship:", text: "Provide psychological and emotional support to vulnerable children." },
      { title: "School improvement:", text: "Paint classrooms or improve the learning space dynamically." }
    ],
    details: {
      duration: "6 Weeks",
      location: "Sri Lanka",
      participants: "18–30 years old",
      sdgGoal: { num: 4, text: "Quality Education" }
    },
    category: "Education",
    skills: ["Teaching", "Empathy", "Communication", "Patience"],
    images: {
      heroImg: "https://loremflickr.com/1200/800/education,school/all",
      gallery: [
        "https://loremflickr.com/800/600/classroom,teaching/all",
        "https://loremflickr.com/800/600/children,school/all",
        "https://loremflickr.com/800/600/education,book/all"
      ]
    },
    colors: {
      gradient: "linear-gradient(135deg, rgba(197,25,45,0.9) 0%, rgba(244,137,36,0.95) 100%)",
      solid: "#C5192D"
    }
  },
  {
    id: "happy-bus",
    title: "Happy Bus",
    subtitle: "Education access for children",
    overview: "Happy Bus brings education directly to remote communities. By driving to underserved areas, volunteers provide mobile classrooms and interactive learning sessions to children who lack regular school access. Be the spark that lights up a child's future on the move.",
    activities: [
      { title: "Mobile tutoring:", text: "Conduct structured mini-school sessions directly out of the bus." },
      { title: "Creative arts:", text: "Encourage expression through painting and drawing workshops." },
      { title: "Reading sessions:", text: "Distribute library books and build foundational reading skills." }
    ],
    details: {
      duration: "6 Weeks",
      location: "Sri Lanka",
      participants: "18–30 years old",
      sdgGoal: { num: 4, text: "Quality Education" }
    },
    category: "Education",
    skills: ["Creativity", "Patience", "Communication", "Child Psychology"],
    images: {
      heroImg: "https://loremflickr.com/1200/800/kids,bus/all",
      gallery: [
        "https://loremflickr.com/800/600/schoolbus,kids/all",
        "https://loremflickr.com/800/600/learning,fun/all",
        "https://loremflickr.com/800/600/children,reading/all"
      ]
    },
    colors: {
      gradient: "linear-gradient(135deg, rgba(244,137,36,0.9) 0%, rgba(249,192,16,0.95) 100%)",
      solid: "#F48924"
    }
  },
  {
    id: "on-the-map",
    title: "On The Map",
    subtitle: "Tourism & economic development",
    overview: "On The Map is a project designed to boost local economies through sustainable tourism. Volunteers work with local businesses to improve their digital presence, marketing strategies, and operational efficiency, aiming to place hidden gems vividly onto the global tourism map.",
    activities: [
      { title: "Digital marketing:", text: "Create online strategies for local SME tourism businesses." },
      { title: "Business consulting:", text: "Optimize operational efficiencies for budget homestays." },
      { title: "Content creation:", text: "Capture photography and videos to build promotional materials." },
      { title: "Sustainable tourism:", text: "Help locals develop eco-friendly travel packages for explorers." }
    ],
    details: {
      duration: "6 Weeks",
      location: "Sri Lanka",
      participants: "18–30 years old",
      sdgGoal: { num: 8, text: "Decent Work" }
    },
    category: "Skill Development",
    skills: ["Marketing", "Strategic Thinking", "Business Development", "Content Creation"],
    images: {
      heroImg: "https://loremflickr.com/1200/800/srilanka,tourism/all",
      gallery: [
        "https://loremflickr.com/800/600/srilanka,tourism/all",
        "https://loremflickr.com/800/600/travel,explore/all",
        "https://loremflickr.com/800/600/culture,heritage/all"
      ]
    },
    colors: {
      gradient: "linear-gradient(135deg, rgba(162,25,66,0.9) 0%, rgba(197,25,45,0.95) 100%)",
      solid: "#A21942"
    }
  },
  {
    id: "rooted",
    title: "Rooted",
    subtitle: "Wildlife & ecosystem protection",
    overview: "Rooted focuses on protecting vulnerable wildlife populations and regenerating natural ecosystems. Volunteers will engage in tree planting, biodiversity monitoring, and anti-poaching awareness to safeguard terrestrial habitats. Join us in making a sustainable, greener Earth for the future generation while experiencing local nature at its clearest.",
    activities: [
      { title: "Reforestation:", text: "Engage in planting native trees in degraded environments." },
      { title: "Wildlife monitoring:", text: "Set up cameras and track species in natural reserves." },
      { title: "Community education:", text: "Raise awareness about anti-poaching and forest preservation." },
      { title: "Ecosystem mapping:", text: "Help researchers gather data on ecosystem recovery parameters." }
    ],
    details: {
      duration: "6 Weeks",
      location: "Sri Lanka",
      participants: "18–30 years old",
      sdgGoal: { num: 15, text: "Life on Land" }
    },
    category: "Environment",
    skills: ["Ecosystem Management", "Coordination", "Adaptability", "Teamwork"],
    images: {
      heroImg: "https://loremflickr.com/1200/800/forest,nature/all",
      gallery: [
        "https://loremflickr.com/800/600/forest,planting/all",
        "https://loremflickr.com/800/600/wildlife,nature/all",
        "https://loremflickr.com/800/600/trees,green/all"
      ]
    },
    colors: {
      gradient: "linear-gradient(135deg, rgba(86,192,43,0.9) 0%, rgba(0,193,110,0.95) 100%)",
      solid: "#56C02B"
    }
  }
];

export default projectsData;
