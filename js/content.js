// ===== EDIT YOUR CONTENT HERE (all text, links, projects, skills) =====
window.SITE = {
  name: "Mahmoud Sallam", fullName: "Mahmoud Atef Sallam",
  title: "Web Developer & Digital Designer", location: "Egypt",
  email: "mahmou55.za@gmail.com", phone: "+201117226118",
  whatsapp: "https://wa.me/201117226118",
  linkedin: "https://www.linkedin.com/in/mahmoud-sallam-6590143b1/",
  github: "https://github.com/mahmousallam",
  cv: { file: "cv/Mahmoud-Sallam-CV.pdf" },
  about: [
    "Business website development and responsive web experiences.",
    "UI/UX design, wireframing and prototyping in Figma.",
    "Complete brand identity, social media and advertising design.",
    "Translating business requirements into clear digital solutions."
  ],
  education: "Background: Biotechnology studies at Menoufia University.",
  skills: {
    "Frontend Development": ["HTML5","CSS3","JavaScript (ES6+)","TypeScript","React.js","Next.js","Vue.js","Angular","Tailwind CSS","Bootstrap","Sass / SCSS","Responsive Web Design","CSS Animations","Component-Based Development","UI Implementation"],
    "Backend Development": ["Python","Node.js","Express.js","PHP","REST APIs","API Integration","Authentication","Authorization","CRUD Operations","Server-Side Development"],
    "Databases": ["MySQL","PostgreSQL","MongoDB","Firebase","Supabase","Database Design","Data Modeling"],
    "Programming & Development": ["Object-Oriented Programming","Data Structures","Algorithms","Clean Code","Debugging","Software Architecture Fundamentals","Git","GitHub","Version Control"],
    "Development Tools": ["Visual Studio Code","npm","Vite","Chrome DevTools","Postman","Deployment Platforms","Hosting and Domain Management"],
    "Professional Web Development": ["SEO Fundamentals","Technical SEO","Web Accessibility","Performance Optimization","Cross-Browser Compatibility","Website Testing","Error Handling","Website Deployment","Website Maintenance","Security Fundamentals"],
    "Design Tools": ["Figma","Canva","GIMP"],
    "Brand Identity": ["Complete Brand Identity","Logo Design","Color Systems","Typography Systems","Brand Guidelines","Visual Identity Development"],
    "Graphic Design": ["Social Media Designs","Advertising Creatives","Promotional Materials","Marketing Campaign Visuals","Posters and Banners","Digital Marketing Graphics","Business Presentations"],
    "UI/UX": ["User Interface Design","User Experience Principles","Wireframing","Prototyping","Website Layout Design","Design Systems","User-Centered Design"]
  },
  services: [
    ["Business Website Development","A fast, credible website that presents your business clearly and turns visitors into inquiries."],
    ["Corporate Website Development","Structured company sites with catalogs, service pages and an easy-to-maintain content flow."],
    ["Landing Pages","Focused single-purpose pages built around one message and one clear call to action."],
    ["Front-End Development","Clean, accessible interfaces built from your designs or from scratch."],
    ["Responsive Website Design","Layouts designed intentionally for mobile, tablet and desktop."],
    ["Website Redesign","Modernize an existing site: clearer structure, better visuals, better usability."],
    ["UI/UX Design","Wireframes, prototypes and interface design shaped around real user needs."],
    ["Complete Brand Identity","Logo, colors, typography and guidelines that make your brand consistent."],
    ["Logo Design","A distinctive mark with usable variations for web and print."],
    ["Social Media Design","Cohesive post and story templates that look like one brand."],
    ["Advertising & Marketing Creatives","Campaign visuals, banners and promotional materials."],
    ["Website Maintenance","Updates, fixes and improvements after launch."]
  ],
  process: [["Discovery","Understand the business, audience and goals."],["Planning","Define structure, content and scope."],["Design","Shape the visual direction and interface."],["Development","Build responsive, clean and maintainable code."],["Testing","Check devices, browsers, links and accessibility."],["Launch","Deploy, connect the domain and hand over."]],
  // group: "commercial" | "initiative". Screenshots: assets/projects/<slug>-1.jpg, -2.jpg, -3.jpg
  // Fill contribution/tech/objectives/etc. ONLY with facts you confirm. Empty = shows a "pending" note.
  projects: [
    { slug:"ayman-allam", title:"Ayman Allam Website", category:"Business Website", group:"commercial",
      url:"https://nom939305-hub.github.io/ayman-allam-site/", github:"",
      overview:"A bilingual (Arabic/English) professional profile website for a professor at the Faculty of Agriculture, Menoufia University, gathering CV, consultancy and research documents with direct contact options.",
      features:["Arabic and English interface toggle","Downloadable CV, consultant profile and publications PDFs","Links to LinkedIn, Google Scholar, Scopus, ORCID and ResearchGate","Call, WhatsApp and email contact actions"],
      objectives:[],requirements:[],contribution:"",design:"",development:"",tech:[],future:[] },
    { slug:"alaa-eldeen-travel", title:"Alaa Eldeen Travel", category:"Tourism & Travel Website", group:"commercial",
      url:"https://alaa-eldeen-travel.onrender.com", github:"",
      overview:"An Arabic website for Alaa El Din Tours (Shebin El Kom) presenting trips, flight tickets, tourist visas, embassy document services and Hajj & Umrah inquiries.",
      features:["Dedicated pages for flights, visas, embassy documents and Hajj & Umrah","Service and trip search by type and approximate date","Inquiry form that continues on WhatsApp","Offers section managed from an admin panel","Three-step booking explainer"],
      objectives:[],requirements:[],contribution:"",design:"",development:"",tech:[],future:[] },
    { slug:"ust-camp", title:"UST Camp Website", category:"Educational & Training Platform", group:"initiative",
      url:"https://agri-camp.onrender.com", github:"https://github.com/mahmousallam/ust-camp-website",
      overview:"The website of the UST Menoufia Agriculture Career & Skills Program, a free four-month training program for university students with six modules.",
      features:["Program modules, schedule and FAQ","Student registration and student login","Points system with a public leaderboard","Program moments gallery","Certificate tiers: Participation, Completion, Outstanding, Best Team"],
      objectives:[],requirements:[],contribution:"",design:"",development:"",tech:[],future:[] },
    { slug:"nas-company-store", title:"NAS Company Store", category:"Web Application", group:"commercial",
      url:"https://nas-six-omega.vercel.app/", github:"",
      overview:"An Arabic online storefront for medical and gym equipment with product categories, a shopping cart and WhatsApp contact.",
      features:["Category filtering: medical and gym equipment","Add-to-cart with confirmation and cart page","Direct WhatsApp and phone contact","Newsletter signup field"],
      objectives:[],requirements:[],contribution:"",design:"",development:"",tech:[],future:[] },
    { slug:"eldawleya-medical", title:"Eldawleya Medical Equipment", category:"Corporate Website", group:"commercial",
      url:"https://eldawleyamedical-equepments.onrender.com", github:"",
      overview:"A corporate catalog for El Dawlya Medical Supplies (Shibin El Kom, since 1995) where visitors browse products and build a price-quote cart for their clinic or hospital.",
      features:["Product catalog","Price-quote cart","Admin page for managing the catalog"],
      objectives:[],requirements:[],contribution:"",design:"",development:"",tech:[],future:[] }
  ],
  // Replace placeholders with real work: set src:"assets/gallery/file.jpg"
  gallery: [
    {t:"Brand Identity concept",c:"Brand Identity"},{t:"Logo Design sample",c:"Logo Design"},
    {t:"Social Media series",c:"Social Media"},{t:"Advertising creative",c:"Advertising"},
    {t:"Marketing materials",c:"Marketing Materials"},{t:"UI/UX concept",c:"UI/UX Concepts"}
  ].map(g=>({...g,src:""}))
};
