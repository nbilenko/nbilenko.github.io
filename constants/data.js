const userData = {
  githubUsername: "nbilenko",
  name: "ny bilenko",
  lastUpdated: 2023,
  designation: "Some sort of person",
  profileUrl: "/profile.png",
  email: "nbilenko+website@gmail.com",
  publications: [
    {
      title: "Queer in AI: a case study in community-led participatory AI",
      authors: "Organizers Of Queer in AI et al.",
      year: 2023,
      where: "To appear at FAccT 2023",
      url: "https://arxiv.org/abs/2303.16972",
      topics: ["machine learning", "community organizing"],
      type: "article"
    },
    {
      title: "Saliency mapping of imagery during artificially intelligent image classification",
      authors: "N Bilenko, C Frye, MG Cannon, N Poilvert",
      year: 2021,
      where: "USPTO Patent",
      url: "https://uspto.report/patent/grant/10,937,156",
      topics: ["machine learning", "healthcare", "vision", "software", "data visualization"],
      type: "patent"
    },
    {
      title: "Visual and linguistic semantic representations are aligned at the border of human visual cortex",
      authors: "SF Popham, AG Huth, NY Bilenko, F Deniz, JS Gao, AO Nunez-Elizalde, JL Gallant",
      year: 2021,
      where: "Nature Neuroscience 24 (11), 1628-1636",
      url: "https://drive.google.com/file/d/1_CcPfViYAUQFD2HxdneEzSrmBwjd-QkJ/view",
      topics: ["neuroscience", "vision", "language"],
      type: "article",
    },
    {
      title: "Video clip selector for medical imaging and diagnosis",
      authors: "C Cadieu, H Hong, K Koepsell, J Mathe, N Poilvert, M Cannon, N Romano, N Bilenko, C Chen, N Miolane",
      year: 2020,
      where: "USPTO Patent",
      url: "https://uspto.report/patent/grant/10,631,791",
      type: "patent",
      topics: ["machine learning", "healthcare", "vision", "software"],
    },
    {
      title: "Confidence determination in a medical imaging video clip measurement based upon video clip image quality",
      authors: "C Cadieu, H Hong, K Koepsell, N Poilvert, MG Cannon, N Romano, C Hsieh, S Surette, N Bilenko",
      year: 2020,
      where: "USPTO Patent",
      url: "https://uspto.report/patent/grant/10,726,548",
      topics: ["machine learning", "healthcare", "vision", "software"],
      type: "patent"
    },
    {
      title: "Eye movement-invariant representations in the human visual system",
      authors: "S Nishimoto, AG Huth, NY Bilenko, JL Gallant",
      year: 2017,
      where: "Journal of Vision 17 (1), 11-11",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2597819",
      topics: ["neuroscience", "vision"],
      type: "article",
    },
    {
      title: "The narrative explorer",
      authors: "NY Bilenko",
      year: 2016,
      where: "MS thesis, EECS, UC Berkeley",
      url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-63.pdf",
      topics: ["data visualization", "language"],
      type: "thesis"
    },
    {
      title: "Using image processing to improve reconstruction of movies from brain activity",
      authors: "NY Bilenko, V Savage",
      year: 2016,
      where: "Technical Report, University of California, Berkeley",
      url: "https://vimeo.com/169779284",
      topics: ["neuroscience", "vision", "data visualization"],
      type: "report",
      urlText: "watch"
    },
    {
      title: "Modeling of Natural Stimulus Representation in the Human Brain Using Canonical Correlation Analysis",
      authors: "NY Bilenko",
      year: 2016,
      where: "PhD Thesis, HWNI, UC Berkeley",
      url: "https://www.proquest.com/openview/85282e3d86b79384685d642f00759e00",
      topics: ["neuroscience", "vision", "language", "software"],
      type: "thesis"
    },
    {
      title: "Decoding the semantic content of natural movies from human brain activity",
      authors: "AG Huth, T Lee, S Nishimoto, NY Bilenko, AT Vu, JL Gallant",
      year: 2016,
      where: "Frontiers in Systems Neuroscience 10, 81",
      url: "https://www.frontiersin.org/articles/10.3389/fnsys.2016.00081/full",
      topics: ["neuroscience", "vision", "language"],
      type: "article",
    },
    {
      title: "Pyrcca: regularized kernel canonical correlation analysis in python and its applications to neuroimaging",
      authors: "NY Bilenko, JL Gallant",
      year: 2016,
      where: "Frontiers in Neuroinformatics 10, 49",
      url: "https://www.frontiersin.org/articles/10.3389/fninf.2016.00049/full",
      topics: ["neuroscience", "software"],
      type: "article",
    },
    {
      title: "Retinotopy versus face selectivity in macaque visual cortex",
      authors: "R Rajimehr, NY Bilenko, W Vanduffel, RBH Tootell",
      year: 2014,
      where: "Journal of Cognitive Neuroscience 26 (12), 2691-2700",
      url: "https://dspace.mit.edu/bitstream/handle/1721.1/92520/Rajimehr-2014-Retinotopy%20versus%20Fa.pdf?sequence=2&isAllowed=y",
      topics: ["neuroscience", "vision"],
      type: "article",
    },
    {
      title: "Human visual areas invariant to eye movements during natural vision",
      authors: "S Nishimoto, AG Huth, NY Bilenko, JL Gallant",
      year: 2013,
      where: "Journal of Vision 13 (9), 1061-1061",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2143168",
      topics: ["neuroscience", "vision"],
      type: "proceedings"
    },
    {
      title: "The “parahippocampal place area” responds preferentially to high spatial frequencies in humans and monkeys",
      authors: "R Rajimehr, KJ Devaney, NY Bilenko, JC Young, RBH Tootell",
      year: 2011,
      where: "PLoS Biology 9 (4), e1000608",
      url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1000608",
      topics: ["neuroscience", "vision"],
      type: "article",
    },
    {
      title: "How much tuning information is lost when we average across subjects in fMRI experiments?",
      authors: "NY Bilenko, AT Vu, T Naselaris, AG Huth, JL Gallant",
      year: 2010,
      where: "Journal of Vision 10 (7), 917-917",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2139059",
      topics: ["neuroscience"],
      type: "proceedings"
    },
    {
      title: "The visual cortical ‘word form area’is selective for high spatial frequencies in humans but not monkeys",
      authors: "NY Bilenko, R Rajimehr, JC Young, RBH Tootell",
      year: 2008,
      where: "Journal of Vision 8 (6), 626-626",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2137345",
      topics: ["neuroscience", "vision"],
      type: "proceedings"
    },
    {
      title: "The role of the left inferior frontal gyrus in implicit semantic competition and selection: An event-related fMRI study",
      authors: "CM Grindrod, NY Bilenko, EB Myers, SE Blumstein",
      year: 2008,
      where: "Brain Research 1229, 167-178",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2566953/",
      topics: ["neuroscience", "language"],
      type: "article",
    },
    {
      title: "Neural correlates of semantic competition during processing of ambiguous words",
      authors: "NY Bilenko, CM Grindrod, EB Myers, SE Blumstein",
      year: 2008,
      where: "Journal of Cognitive Neuroscience 21 (5), 960-975",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2855879/",
      topics: ["neuroscience", "language"],
      type: "article",
    },
  ],
  talks: [
    {
      title: "Panel - Ethics in AI (panelist)",
      where: "Women in Data Science Silicon Valley @ SAP",
      whereurl: "https://events.sap.com/us/wids-2020-sv/en/online-agenda",
      year: 2020,
      url: ""
    },
    {
      title: "Computer Vision and Its Applications (guest lecturer)",
      where: "Stanford d.school: Designing Machine Learning",
      whereurl: "https://dschool.stanford.edu/classes/designing-machine-learning",
      year: 2020,
      url: "https://drive.google.com/file/d/1mMgi1h_fXB9xr15GIG_bQIMUGxdOuQtq/view?usp=sharing"
    },
    {
      title: "Our Relationship with AI: Exploring the Present & Dreaming Up Radical Futures workshop (organizer)",
      where: "CtrlZ.AI zine fair at ACM Fairness, Accountability, and Transparency 2020",
      whereurl: "https://facctconference.org/2020/",
      year: 2020,
      url: ""
    },
    {
      title: "Panel - Algorithmic Inequity: Impacts on the Queer Community and Beyond (moderator)",
      where: "NeurIPS 2019 Queer in AI workshop",
      whereurl: "https://sites.google.com/view/queer-in-ai/neurips-2019",
      year: 2019,
      url: ""
    },
    {
      title: "Ethical and Societal Implications of AI (lecturer/mentor)",
      where: "AI4All Alumni Special Interest Group",
      whereurl: "https://ai-4-all.org/",
      year: 2019,
      url: "https://drive.google.com/file/d/1U_Tf2Luh-GQqPaRty90B-aiB5uiq_Q8F/view?usp=sharing"
    },
    {
      title: "Improving Detection and Diagnosis of Heart Disease with Deep Learning (guest lecturer)",
      where: "Stanford CS522: Seminar in AI and Healthcare",
      whereurl: "https://shift.stanford.edu/healthai/2017/",
      year: 2017,
      url: "https://drive.google.com/file/d/1Ypvclu1O7MwvlDogUntPVRT9lVEBJqKY/view?usp=sharing"
    },
    // {
    //   title: "Improving Detection and Diagnosis of Heart Disease with Deep Learning",
    //   where: "Women in Machine Learning and Data Science",
    //   whereurl: "https://wimlds.org",
    //   year: 2017,
    //   url: "https://drive.google.com/file/d/1OxN9v9tmmvNubY0RXDkJXnvOZprFT6_K/view?usp=sharing"
    // },
    {
      title: "Modeling of Natural Stimulus Representation in the Human Brain using Canonical Correlation Analysis (PhD seminar)",
      where: "HW Neuroscience Institute, UC Berkeley",
      whereurl: "https://neuroscience.berkeley.edu/",
      year: 2016,
      url: "https://drive.google.com/file/d/1CGsO_GbQxcXF18L5ywRlyXrm4IWzPvjB/view?usp=sharing"
    },

    {
      title: "Dr. Brainlove: Interactive Neuroscience Vehicle (moderator)",
      where: "SXSW Interactive 2015 panel",
      whereurl: "https://schedule.sxsw.com/2015/events/event_IAP38468",
      year: 2015,
    }
  ],
  projects: [
    // {
    //   title: "Tailwind Master Kit",
    //   link: "https://tailwindmasterkit.com",
    //   imgUrl: "/tmk.jpg",
    // },
    {
      name: "Narrative Explorer - the Hobbit",
      url: "https://nbilenko.com/projects/hobbit.html",
      imageUrl: "/hobbit.png"
    },
    {
      name: "Narrative Explorer - the Hobbit",
      url: "https://nbilenko.com/projects/hobbit.html",
      imageUrl: "/hobbit.png"
    },
    {
      name: "Narrative Explorer - the Hobbit",
      url: "https://nbilenko.com/projects/hobbit.html",
      imageUrl: "/hobbit.png"
    },
  ],
  about: {
    title:
      "I'm a software developer that loves building products and web applications that impact millions of lives",
    description: [
      `I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.`,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
      `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`,
    ],
    currentProject: "Tailwind Master Kit",
    currentProjectUrl: "https://tailwindmasterkit.com",
  },
  experience: [
    {
      title: "Software Developer",
      company: "mroads",
      year: "2021",
      companyLink: "https://mroads.com",
      desc: "Contributed to our flagship product - Panna - which is an AI powered candidate interviewing product.",
    },
    {
      title: "Founder and Developer",
      company: "TailwindMasterKit",
      year: "2021",
      companyLink: "https://tailwindmasterkit.com",
      desc: "Developed a marketplace for tailwind web components (React, HTML and Angular) and templates.",
    },
    {
      title: "Founder and Developer",
      company: "Algochurn",
      year: "2021",
      companyLink: "https://algochurn.com",
      desc: "Your last moment revision friend right before a Tech coding interview. Practice problems and get hired at top Product based companies.",
    },
    {
      title: "Internship",
      company: "Intel Corporation",
      year: "2019",
      companyLink: "https://intel.com",
      desc: "Developed pothole detection system with OpenCV and computer vision, detects potholes on roads and informs the driver.",
    },
    {
      title: "Graduation",
      company: "UPES, Dehradun.",
      year: "2019",
      companyLink: "https://upes.co.in",
      desc: "Major in Computer Science and Engineering with a CGPA of 7.0. Nobody asks this but it's okay.",
    },
    {
      title: "High School",
      company: "Delhi Public School, Jaipur.",
      year: "2015",
      companyLink: "https://upes.co.in",
      desc: "Subjects being PCM - I barely survived with 93.6% marks aggregate. Flex fridays, fellas.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
  socialLinks: {
    twitter: "https://twitter.com/unthevert",
    linkedin: "https://linkedin.com/in/nbilenko",
    github: "https://github.com/nbilenko",
  },
};

export default userData;
