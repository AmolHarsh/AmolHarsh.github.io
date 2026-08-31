export const profile = {
  name: "Amol Harsh",
  tagline: "M.Sc. Computer Vision @ MBZUAI",
  blurb:
    "I am a Computer Vision M.Sc. student at MBZUAI, advised by Prof. Fahad Shahbaz Khan. My research is on 3D scene understanding and multimodal models, with applied work in healthcare imaging and robotics. I am currently a visiting researcher at Microsoft Research India, and previously worked at UC San Diego (MOSAIC Lab) and SUTD (MARVL Lab).",
  badge: "Ground3D-LMM accepted at ECCV 2026",
  location: "Abu Dhabi, UAE",
  email: "Amol.Harsh@mbzuai.ac.ae",
  phone: "+971 50 662 6087",
  avatar: "/profile.jpg",
  links: {
    github: "https://github.com/AmolHarsh",
    linkedin: "https://www.linkedin.com/in/amol-harsh-355523141/",
    scholar: "https://scholar.google.com/citations?user=bj92YfoAAAAJ&hl=en",
  },
  interests: [
    "3D Vision & Scene Understanding",
    "Multimodal & Vision-Language Models",
    "Embodied AI / Robot Perception",
    "Medical Image Analysis",
  ],
};

export const news = [
  {
    date: "Sep 2026",
    text: "Presenting Ground3D-LMM at ECCV 2026 in Malmö — main-conference poster on 12 Sep, plus an invited poster at the ODEWM workshop on 8 Sep.",
  },
  {
    date: "Aug 2026",
    text: "Our MAP-CKD study on mitochondrial DNA and nailfold microvascular measures was accepted to Kidney International Reports.",
  },
  {
    date: "Jul 2026",
    text: "Ground3D-LMM accepted to ECCV 2026. Paper, code, and the Ground3D dataset are now public — the dataset has since passed 13,000 downloads on Hugging Face.",
  },
  {
    date: "Jun 2026",
    text: "Joined Microsoft Research India as a visiting researcher, working with Prof. Vineeth N. Balasubramanian on video world models.",
  },
];

export const projects = [
  {
    slug: "ground3d-lmm",
    featured: true,
    title: "Ground3D-LMM: Fine-Grained 3D Point Grounding & Spatial Reasoning",
    advisor: "Prof. Fahad Shahbaz Khan",
    affiliation: "MBZUAI",
    period: "Sep 2025 – Mar 2026",
    status: "Accepted, ECCV 2026",
    role: "First author",
    summary:
      "A unified 3D large multimodal model that jointly produces point-level segmentation masks and metric-consistent numerical answers about a scene.",
    bullets: [
      "Unified 3D LMM that, for the first time, jointly produces point-level 3D segmentation masks and metric-consistent numerical responses (size, distance, clearance) at object and part granularity.",
      "Proposed the 3D Grounded Measurement task and constructed Ground3D — ~3M QA pairs across 2.5K ScanNet / ScanNet++ scenes with dense object/part annotations and multi-turn grounded dialogue.",
      "Achieves SOTA across object- and part-level grounding; +5.15% mIoU over Reason3D and ~20% improvement on ScanRefer instance grounding, with markedly lower metric error than image-only baselines.",
      "Released the Ground3D dataset publicly on Hugging Face — over 13,000 downloads to date.",
    ],
    tags: ["3D Vision", "LMMs", "Grounding", "Spatial Reasoning"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2607.05493" },
      { label: "project page", href: "https://amolharsh.github.io/ground3d-lmm/" },
      { label: "code", href: "https://github.com/AmolHarsh/ground3d-lmm" },
      { label: "dataset (13k+ downloads)", href: "https://huggingface.co/datasets/amolharsh/Ground3D_Dataset" },
      { label: "video", href: "https://www.youtube.com/watch?v=UNkMmEFEBqQ" },
    ],
  },
  {
    slug: "video-world-models",
    featured: true,
    title: "Open-World Evaluation and Repair of Video World Models",
    advisor: "Prof. Vineeth N. Balasubramanian",
    affiliation: "Microsoft Research India",
    period: "Jun 2026 – Present",
    status: "Ongoing",
    role: "Visiting Researcher",
    summary:
      "Characterizing and repairing object collapse in video world models when they are conditioned on rare or unseen concepts.",
    bullets: [
      "Studying open-world failure modes in video world models — in particular object collapse for rare or unseen concepts under image-conditioned generation.",
      "Developing a detect–repair–re-evaluate pipeline that identifies collapsed generations, augments object references, and reconditions the model without retraining.",
      "Curating an object-centric benchmark spanning common, rare, and novel concepts to measure robustness across video world models.",
    ],
    tags: ["Video Generation", "World Models", "Robustness", "Benchmarking"],
    links: [],
  },
  {
    slug: "nailfold-capillaroscopy",
    featured: true,
    title: "Microcirculation Analysis with AI for Nailfold Capillaries",
    advisor: "Prof. Tauhidur Rahman",
    affiliation: "MOSAIC Lab, UC San Diego",
    period: "Aug 2024 – Dec 2024",
    status: "2 papers (KI Reports, Scientific Reports)",
    role: "Lead developer",
    summary:
      "A deep-learning pipeline for nailfold capillary video analysis, now underpinning two clinical papers on chronic kidney disease.",
    bullets: [
      "Built a deep-learning pipeline for nailfold capillary video analysis — automated detection, tracking, and pattern classification linked to chronic kidney disease.",
      "92% F1 using YOLOv11 + optical flow + graph-based methods, robust to artifacts and noisy clinical inputs.",
      "Shipped a Streamlit interface for real-time analysis, validated with collaborators at UCSD Health and Maastricht University.",
    ],
    tags: ["Medical Imaging", "Detection", "Tracking"],
    links: [],
  },
  {
    slug: "sango",
    featured: false,
    title: "SANGO — Socially Aware Navigation through Grouped Obstacles",
    advisor: "Prof. Sandeep Manjanna & Prof. Sunita Chauhan",
    affiliation: "Plaksha University",
    period: "Jan 2024 – Aug 2024",
    status: "Published, ICC-10 2024",
    role: "Second author",
    summary:
      "Deep reinforcement learning for socially compliant robot navigation, plus the simulation gym it was trained in.",
    bullets: [
      "Deep RL method for socially compliant robot navigation: 83.5% reduction in social discomfort and 29.4% fewer collisions.",
      "Built MOSANG (Modular Socially Aware Navigation Gym), a custom simulation environment for training RL agents on real-world maps, integrating A* path planning and PPO via Stable Baselines with real-time visualization.",
      "1st place — SP Dutt Award for Innovation and Impact 2024 ($2,500), recognized for hospital-robot deployment potential.",
    ],
    tags: ["Reinforcement Learning", "Robotics", "Simulation"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2411.19497" }],
  },
  {
    slug: "simmobility",
    featured: false,
    title: "SimMobility for Autonomous Rover Training",
    advisor: "Prof. Malika Meghjani",
    affiliation: "MARVL Lab, SUTD",
    period: "Jul 2023 – Aug 2023",
    status: "Research internship",
    role: "Pipeline developer",
    summary:
      "Generalized a traffic simulator so autonomous-vehicle training could run on any city in the world.",
    bullets: [
      "Generalized SimMobility to simulate any OpenStreetMap-supported city worldwide for autonomous-vehicle training.",
      "End-to-end pipeline: OSM XML → PostgreSQL backend → modified C++ source for new road datasets.",
    ],
    tags: ["Autonomous Driving", "Simulation"],
    links: [],
  },
  {
    slug: "yotta-expo",
    featured: false,
    title: "Yotta Expo — Digital Marketplace for Street Vendors",
    advisor: "Prof. Rucha Joshi",
    affiliation: "Plaksha University",
    period: "Jul 2022 – Jun 2024",
    status: "Deployed",
    role: "Team lead",
    summary:
      "A three-app marketplace that raised revenue and cut waste for Indian street vendors across two pilot cities.",
    bullets: [
      "Led a team of 3 to build a digital selling platform helping Indian street vendors raise revenue, cut waste, and compete with e-commerce.",
      "Shipped a three-app ecosystem (vendor, customer, delivery agent) to Google Play and iOS using Flutter and Firebase.",
      "Ran pilots in Prayagraj and Chandigarh: 20% increase in vendor revenue and 50% reduction in fruit and vegetable waste.",
      "Secured $1,000 annual funding and recognition from the US National Academy of Engineering.",
    ],
    tags: ["Mobile", "Flutter", "Social Impact"],
    links: [],
  },
];

export const publications = [
  {
    authors: "A. Harsh, Z. Han, J. Lahoud, Y. Liu, R. M. Anwer, H. Cholakkal, S. Khan, F. S. Khan",
    title:
      "Ground3D-LMM: Fine-Grained 3D Point Grounding and Spatial Reasoning with LMM",
    venue: "European Conference on Computer Vision (ECCV)",
    year: 2026,
    status: "Accepted",
    me: "A. Harsh",
    note: "invited poster, ODEWM Workshop",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2607.05493" },
      { label: "project page", href: "https://amolharsh.github.io/ground3d-lmm/" },
      { label: "code", href: "https://github.com/AmolHarsh/ground3d-lmm" },
      {
        label: "dataset (13k+ downloads)",
        href: "https://huggingface.co/datasets/amolharsh/Ground3D_Dataset",
      },
      { label: "video", href: "https://www.youtube.com/watch?v=UNkMmEFEBqQ" },
    ],
  },
  {
    authors:
      "A. Ahmadi, M. Rahaman, A. Harsh, X. Li, J. Yang, B. Ghanim, S. Dasgupta, T. Rahman, A. J. H. M. Houben, M. Hepokoski, J. H. Ix, R. Malhotra",
    title:
      "Associations of blood and urine mitochondrial DNA with kidney function and nailfold microvascular measures in chronic kidney disease: the MAP-CKD study",
    venue: "Kidney International Reports",
    year: 2026,
    status: "Accepted",
    me: "A. Harsh",
    links: [],
  },
  {
    authors:
      "M. Rahaman*, A. Harsh*, A. Ahmadi, J. Yang, B. Ghanim, S. Dasgupta, P. Kotanko, R. N. Weinreb, A. J. H. M. Houben, J. H. Ix, T. Rahman, R. Malhotra",
    title:
      "Time-Resolved Finger Nailfold Capillaroscopy for Dynamic Capillary Density Estimation",
    venue: "Scientific Reports (Nature Portfolio)",
    year: 2026,
    status: "Under Review",
    me: "A. Harsh",
    note: "* equal contribution",
    links: [],
  },
  {
    authors:
      "A. Harsh, B. Prince, S. Siddharth, D. R. P. Muthirayan, K. S. Bhalla, E. S. Gupta, S. Sahu",
    title: "Enhancing Public Speaking Skills in Engineering Students Through AI",
    venue: "IEEE Frontiers in Education Conference (FIE), Full Paper Track",
    year: 2025,
    status: "Published",
    me: "A. Harsh",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2511.04995" }],
  },
  {
    authors: "S. Siddharth, B. Prince, A. Harsh, S. Ramachandran",
    title:
      "‘The World of AI’: A Novel Approach to AI Literacy for First-Year Engineering Students",
    venue:
      "Artificial Intelligence in Education (CORE-A) 2025 — Springer CCIS, vol. 2591",
    year: 2025,
    status: "Published",
    me: "A. Harsh",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2506.08041" }],
  },
  {
    authors: "R. Malladi, A. Harsh, A. Sangwan, S. Chauhan, S. Manjanna",
    title: "SANGO: Socially Aware Navigation through Grouped Obstacles",
    venue: "Indian Control Conference (ICC-10)",
    year: 2024,
    status: "Published",
    me: "A. Harsh",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2411.19497" },
    ],
  },
];

export const talks = [
  {
    title: "Ground3D-LMM: Fine-Grained 3D Point Grounding and Spatial Reasoning with LMM",
    kind: "Main conference poster",
    venue:
      "ECCV 2026 — Poster Session 6, Multimodal, Video & Document Understanding",
    date: "12 September 2026, 15:00 CEST",
    location: "ExHall, poster #162 · Malmö, Sweden",
    href: "",
  },
  {
    title: "Ground3D-LMM: Fine-Grained 3D Point Grounding and Spatial Reasoning with LMM",
    kind: "Invited poster presentation",
    venue: "ODEWM Workshop — On-device Embodied World Models, ECCV 2026",
    date: "8 September 2026",
    location: "Malmö Mässan, Malmö, Sweden",
    href: "https://odewm.github.io/",
  },
];

export const experience = [
  {
    role: "Visiting Researcher",
    org: "Microsoft Research India",
    logo: "/logos/microsoft.svg",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    advisor: "Prof. Vineeth N. Balasubramanian",
    bullets: [
      "Open-world evaluation and repair of video world models — characterizing object collapse for rare and unseen concepts under image-conditioned generation.",
      "Built a detect–repair–re-evaluate pipeline that reconditions the model without retraining, plus an object-centric robustness benchmark across common, rare, and novel concepts.",
    ],
  },
  {
    role: "Visiting Scholar",
    org: "MOSAIC Lab, UC San Diego",
    logo: "/logos/ucsd.svg",
    location: "San Diego, USA",
    period: "Aug 2024 – Dec 2024",
    advisor: "Prof. Tauhidur Rahman",
    bullets: [
      "Led the AI nailfold-capillaroscopy pipeline — detection, tracking, and microvascular pattern classification.",
      "Delivered a clinical-validation Streamlit app used by collaborators at UCSD Health and Maastricht University.",
    ],
  },
  {
    role: "Visiting Researcher",
    org: "MARVL Lab, Singapore University of Technology and Design",
    logo: "/logos/sutd.svg",
    location: "Singapore",
    period: "Jul 2023 – Aug 2023",
    advisor: "Prof. Malika Meghjani",
    bullets: [
      "Generalized SimMobility traffic simulation to any OSM-supported city, with a PostgreSQL-backed XML pipeline and C++ source modifications.",
    ],
  },
];

export const education = [
  {
    school: "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    logo: "/logos/mbzuai.png",
    degree: "M.Sc. in Computer Vision",
    advisor: "Prof. Fahad Shahbaz Khan",
    period: "2025 – 2027",
    gpa: "",
    location: "Abu Dhabi, UAE",
    notes: [
      "Coursework: Human and Computer Vision, Probabilistic & Statistical Inference, Visual Object Recognition and Detection.",
    ],
  },
  {
    school: "Plaksha University",
    logo: "/logos/plaksha.png",
    degree: "B.Tech. in Computer Science and Artificial Intelligence",
    advisor: "",
    period: "2021 – 2025",
    gpa: "9.57 / 10",
    location: "India",
    notes: [
      "Dean's List 2021–2024 (top 5 students across all majors, three consecutive years).",
      "2021–22 batch topper — highest CGPA across all majors.",
      "Coursework: Machine Learning & Pattern Recognition, Deep Learning, Reinforcement Learning, Data Science & AI.",
    ],
  },
  {
    school: "Ashoka University",
    logo: "/logos/ashoka.png",
    degree: "Freshman year (liberal arts & sciences)",
    advisor: "",
    period: "2020 – 2021",
    gpa: "3.93 / 4.0",
    location: "India",
    notes: ["Dean's List, Monsoon 2020 and Spring 2021."],
  },
];

export const skills = {
  "Programming & Systems": [
    "Python", "C++", "Dart", "Java", "PostgreSQL", "Ubuntu", "Flutter", "Firebase", "Git",
  ],
  "ML & Deep Learning": [
    "PyTorch", "Reinforcement Learning (PPO)", "Stable Baselines", "Model Development",
  ],
  "Vision & Data": [
    "OpenCV", "NumPy", "Pandas", "Matplotlib", "Statistical Modeling", "Data Wrangling",
  ],
  "Other": [
    "Scientific Writing", "Simulation Design", "Mobile App Development", "Shell Scripting",
  ],
};

export const awards = [
  "Fully funded merit scholarship for the M.Sc. in Computer Vision at MBZUAI (≈US$407K), 2025.",
  "Full merit scholarship for the B.Tech. in Computer Science and AI at Plaksha University (≈US$280K), 2021.",
  "1st place — SP Dutt Award for Innovation and Impact 2024, Plaksha University ($2,500).",
  "$1,000 annual funding from the US National Academy of Engineering for Yotta Expo.",
  "Member, New York Academy of Sciences (top 9% of 17,000 global applicants, 2018).",
];
