const userData = {
  githubUsername: "nbilenko",
  name: "ny bilenko",
  lastUpdated: 2023,
  profileUrl: "/profile.png",
  email: "nbilenko+website@gmail.com",
  publications: [
    {
      title: "Queer in AI: a case study in community-led participatory AI",
      authors: "Organizers Of Queer in AI et al.",
      year: 2023,
      where: "FAccT 2023, Best Paper Award",
      url: "https://dl.acm.org/doi/10.1145/3593013.3594134",
      topics: ["machine learning", "community organizing"],
      type: "article",
    },
    {
      title:
        "Saliency mapping of imagery during artificially intelligent image classification",
      authors: "N Bilenko, C Frye, MG Cannon, N Poilvert",
      year: 2021,
      where: "USPTO Patent",
      url: "https://uspto.report/patent/grant/10,937,156",
      topics: [
        "machine learning",
        "healthcare",
        "vision",
        "software",
        "data visualization",
      ],
      type: "patent",
    },
    {
      title:
        "Visual and linguistic semantic representations are aligned at the border of human visual cortex",
      authors:
        "SF Popham, AG Huth, NY Bilenko, F Deniz, JS Gao, AO Nunez-Elizalde, JL Gallant",
      year: 2021,
      where: "Nature Neuroscience 24 (11), 1628-1636",
      url: "https://drive.google.com/file/d/1_CcPfViYAUQFD2HxdneEzSrmBwjd-QkJ/view",
      topics: ["neuroscience", "vision", "language"],
      type: "article",
    },
    {
      title: "Video clip selector for medical imaging and diagnosis",
      authors:
        "C Cadieu, H Hong, K Koepsell, J Mathe, N Poilvert, M Cannon, N Romano, N Bilenko, C Chen, N Miolane",
      year: 2020,
      where: "USPTO Patent",
      url: "https://uspto.report/patent/grant/10,631,791",
      type: "patent",
      topics: ["machine learning", "healthcare", "vision", "software"],
    },
    {
      title:
        "Confidence determination in a medical imaging video clip measurement based upon video clip image quality",
      authors:
        "C Cadieu, H Hong, K Koepsell, N Poilvert, MG Cannon, N Romano, C Hsieh, S Surette, N Bilenko",
      year: 2020,
      where: "USPTO Patent",
      url: "https://uspto.report/patent/grant/10,726,548",
      topics: ["machine learning", "healthcare", "vision", "software"],
      type: "patent",
    },
    {
      title:
        "Eye movement-invariant representations in the human visual system",
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
      type: "thesis",
    },
    {
      title:
        "Using image processing to improve reconstruction of movies from brain activity",
      authors: "NY Bilenko, V Savage",
      year: 2016,
      where: "Technical Report, University of California, Berkeley",
      url: "https://vimeo.com/169779284",
      topics: ["neuroscience", "vision", "data visualization"],
      type: "report",
      urlText: "watch",
    },
    {
      title:
        "Modeling of Natural Stimulus Representation in the Human Brain Using Canonical Correlation Analysis",
      authors: "NY Bilenko",
      year: 2016,
      where: "PhD Thesis, HWNI, UC Berkeley",
      url: "https://www.proquest.com/openview/85282e3d86b79384685d642f00759e00",
      topics: ["neuroscience", "vision", "language", "software"],
      type: "thesis",
    },
    {
      title:
        "Decoding the semantic content of natural movies from human brain activity",
      authors: "AG Huth, T Lee, S Nishimoto, NY Bilenko, AT Vu, JL Gallant",
      year: 2016,
      where: "Frontiers in Systems Neuroscience 10, 81",
      url: "https://www.frontiersin.org/articles/10.3389/fnsys.2016.00081/full",
      topics: ["neuroscience", "vision", "language"],
      type: "article",
    },
    {
      title:
        "Pyrcca: regularized kernel canonical correlation analysis in python and its applications to neuroimaging",
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
      title:
        "Human visual areas invariant to eye movements during natural vision",
      authors: "S Nishimoto, AG Huth, NY Bilenko, JL Gallant",
      year: 2013,
      where: "Journal of Vision 13 (9), 1061-1061",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2143168",
      topics: ["neuroscience", "vision"],
      type: "proceedings",
    },
    {
      title:
        "The “parahippocampal place area” responds preferentially to high spatial frequencies in humans and monkeys",
      authors: "R Rajimehr, KJ Devaney, NY Bilenko, JC Young, RBH Tootell",
      year: 2011,
      where: "PLoS Biology 9 (4), e1000608",
      url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1000608",
      topics: ["neuroscience", "vision"],
      type: "article",
    },
    {
      title:
        "How much tuning information is lost when we average across subjects in fMRI experiments?",
      authors: "NY Bilenko, AT Vu, T Naselaris, AG Huth, JL Gallant",
      year: 2010,
      where: "Journal of Vision 10 (7), 917-917",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2139059",
      topics: ["neuroscience"],
      type: "proceedings",
    },
    {
      title:
        "The visual cortical ‘word form area’is selective for high spatial frequencies in humans but not monkeys",
      authors: "NY Bilenko, R Rajimehr, JC Young, RBH Tootell",
      year: 2008,
      where: "Journal of Vision 8 (6), 626-626",
      url: "https://jov.arvojournals.org/article.aspx?articleid=2137345",
      topics: ["neuroscience", "vision"],
      type: "proceedings",
    },
    {
      title:
        "The role of the left inferior frontal gyrus in implicit semantic competition and selection: An event-related fMRI study",
      authors: "CM Grindrod, NY Bilenko, EB Myers, SE Blumstein",
      year: 2008,
      where: "Brain Research 1229, 167-178",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2566953/",
      topics: ["neuroscience", "language"],
      type: "article",
    },
    {
      title:
        "Neural correlates of semantic competition during processing of ambiguous words",
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
      url: "",
    },
    {
      title: "Computer Vision and Its Applications (guest lecturer)",
      where: "Stanford d.school: Designing Machine Learning",
      whereurl:
        "https://dschool.stanford.edu/classes/designing-machine-learning",
      year: 2020,
      url: "https://drive.google.com/file/d/1mMgi1h_fXB9xr15GIG_bQIMUGxdOuQtq/view?usp=sharing",
    },
    {
      title:
        "Our Relationship with AI: Exploring the Present & Dreaming Up Radical Futures workshop (organizer)",
      where:
        "CtrlZ.AI zine fair at ACM Fairness, Accountability, and Transparency 2020",
      whereurl: "https://facctconference.org/2020/",
      year: 2020,
      url: "https://drive.google.com/file/d/1v8eW_ZfimZNjDac249iH3h-bLNcFOZCH/view?usp=sharing",
      urlText: "zine",
    },
    {
      title:
        "Panel - Algorithmic Inequity: Impacts on the Queer Community and Beyond (moderator)",
      where: "NeurIPS 2019 Queer in AI workshop",
      whereurl: "https://sites.google.com/view/queer-in-ai/neurips-2019",
      year: 2019,
      url: "",
    },
    {
      title: "Ethical and Societal Implications of AI (lecturer/mentor)",
      where: "AI4All Alumni Special Interest Group",
      whereurl: "https://ai-4-all.org/",
      year: 2019,
      url: "https://drive.google.com/file/d/1U_Tf2Luh-GQqPaRty90B-aiB5uiq_Q8F/view?usp=sharing",
    },
    {
      title:
        "Improving Detection and Diagnosis of Heart Disease with Deep Learning (guest lecturer)",
      where: "Stanford CS522: Seminar in AI and Healthcare",
      whereurl: "https://shift.stanford.edu/healthai/2017/",
      year: 2017,
      url: "https://drive.google.com/file/d/1Ypvclu1O7MwvlDogUntPVRT9lVEBJqKY/view?usp=sharing",
    },
    // {
    //   title: "Improving Detection and Diagnosis of Heart Disease with Deep Learning",
    //   where: "Women in Machine Learning and Data Science",
    //   whereurl: "https://wimlds.org",
    //   year: 2017,
    //   url: "https://drive.google.com/file/d/1OxN9v9tmmvNubY0RXDkJXnvOZprFT6_K/view?usp=sharing"
    // },
    {
      title:
        "Modeling of Natural Stimulus Representation in the Human Brain using Canonical Correlation Analysis (PhD seminar)",
      where: "HW Neuroscience Institute, UC Berkeley",
      whereurl: "https://neuroscience.berkeley.edu/",
      year: 2016,
      url: "https://drive.google.com/file/d/1CGsO_GbQxcXF18L5ywRlyXrm4IWzPvjB/view?usp=sharing",
    },

    {
      title: "Dr. Brainlove: Interactive Neuroscience Vehicle (moderator)",
      where: "SXSW Interactive 2015 panel",
      whereurl: "https://schedule.sxsw.com/2015/events/event_IAP38468",
      year: 2015,
    },
  ],
  projects: [
    {
      name: "Ariadne: observability for search",
      url: "",
      description:
        "Ariadne is an internal observability system for search that I built at Stitch Fix, alongside the new capability for customer-facing search. My colleague Javad Hashemi and I wrote a blog post about it.",
      tiles: [
        {
          name: "Ariadne",
          url: "/ariadne.png",
        },
      ],
      tags: ["observability", "data visualization", "prototyping"],
    },
    {
      name: "Saliency mapping for cardiac imaging",
      url: "https://uspto.report/patent/grant/10,937,156",
      description:
        "At Caption Health (now part of GE Healthcare), I worked with Charles Frye on a method for interpreting which parts of ultrasound video contributed to algorithimic detection of heart valve disease.",
      tiles: [
        { name: "Saliency mapping for cardiac imaging", url: "/saliency.png" },
      ],
      tags: ["observability", "healthcare", "machine learning"],
    },
    {
      name: "Dreaming up radical AI futures",
      url: "https://drive.google.com/file/d/1v8eW_ZfimZNjDac249iH3h-bLNcFOZCH/view?usp=sharing",
      tiles: [
        {
          name: "Dreaming up radical AI futures",
          url: "/radicalai.png",
        },
      ],
      description:
        "Our Relationship with AI: Exploring the Present & Dreaming Up Radical Futures was a workshop at FAccT CtrlZ.AI Zine Fair 2020. I co-organized this workshop with other members of the Radical AI Network, leading the participants in a collaborative hands-on data painting of their personal and collective imagined futures with AI.",
      tags: [
        "tech ethics",
        "community organizing",
        "art",
        "data visualization",
      ],
    },
    {
      name: "Dear Data postcard exchange",
      tiles: [{ name: "Dear data hero", url: "/deardata.jpg" }],
      description: (
        <p>
          Following the footsteps of the{" "}
          <a
            href="http://www.dear-data.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            Dear Data project by Giorgia Lupi and Stefanie Posavec
          </a>
          , Ching Hsieh and I exchanged a series of handmade data visualization
          postcards, each one depicting a codified slice of our personal lives.
        </p>
      ),
      tags: ["data visualization", "art"],
    },
    {
      name: "The Narrative Explorer",
      url: "https://www.fastcompany.com/3025287/a-new-visualization-hints-at-netflix-for-books",
      tiles: [
        {
          name: "The Narrative Explorer (The Hobbit)",
          url: "/hobbit.png",
        },
      ],
      description:
        "The Narrative Explorer is an app for deconstructing and visualizing narrative structure of stories. It was project co-designed with Asako Miyakawa that I expanded into my Masters degree in Computer Science.",
      tags: ["data visualization", "language", "machine learning"],
    },
    {
      name: "The Mind's Eye",
      url: "http://www.explorecogtech.com/projects.html#TME",
      tiles: [
        {
          name: "The Mind's Eye",
          url: "/mindseye.jpg",
        },
      ],
      description:
        "The Mind's Eye was a gesture-based interactive UI for exploring 3D models of the brain via a LeapMotion controller. James Gao and I co-designed this UI for the Cognitive Technologies exhibit at the Exploratorium museum.",
      tags: ["art", "data visualization", "science education", "neuroscience"],
    },
    {
      name: "Dr. Brainlove",
      url: "https://drbrainlove.org",
      tiles: [
        {
          name: "Dr. Brainlove - desert",
          url: "/drbrainlove.png",
        },
        {
          name: "Dr. Brainlove - team",
          url: "/drbrainlove.jpg",
        },
      ],
      description: (
        <>
          Dr. Brainlove is a climbable interactive 27-foot-long brain car with
          lights controllable by EEG and neural models. It was built by the
          artist-scientist consortium the Phage,{" "}
          <a
            href="https://www.theatlantic.com/technology/archive/2014/07/colossal-brain-shaped-jungle-gym-is-the-most-burning-man-thing-ever/374407/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            dubbed by the Atlantic "the most Burning Man thing ever"
          </a>
          , and was featured at{" "}
          <a
            href="https://schedule.sxsw.com/2015/events/event_IAP38468"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            SXSW Interactive
          </a>{" "}
          and the Bay Area Science Festival.
        </>
      ),
      tags: ["art", "data visualization", "science education", "neuroscience"],
    },
    {
      name: "Pyrcca",
      url: "https://github.com/gallantlab/pyrcca",
      tiles: [{ name: "Pyrcca", url: "/cca.jpg" }],
      description:
        "Pyrcca is an open-source Python package for performing canonical correlation analysis (CCA). I developed it as part of my PhD research in the Gallant lab, which involved modeling brain activity using CCA. Pyrcca is not actively maintained - use at your own risk.",
      tags: ["neuroscience", "machine learning", "software"],
    },
    {
      name: "Berkeley Science Review: digital magazine",
      url: "https://www.berkeleysciencereview.com/",
      tiles: [{ name: "Berkeley Science Review for iPad", url: "/bsr.png" }],
      description:
        "The mobile app of the Berkeley Science Review magazine was based on the now defunct Adobe InDesign Digital Publishing Suite. I led development for the app, in collaboration with Asako Miyakawa and Helene Moorman.",
      tags: ["data visualization", "science education", "publishing"],
    },
  ],
  crafts: [
    {
      name: "Shirt no. 1",
      pattern: "100 acts of sewing: Shirt no.1",
      patternUrl:
        "https://shop.100actsofsewing.com/collections/frontpage/products/100-acts-of-sewing-shirt-no-1-pdf-sewing-pattern",
      fabric: ["Hokkoh Poppies linen"],
      fabricUrl: [
        "https://stonemountainfabric.com/product/hokkoh-linen-poppies-orange/",
      ],
      tags: ["sewing"],
      tiles: [
        {
          url: "https://drive.google.com/uc?export=view&id=1ZtiYHe1qfExFtCQEiulnij8Oq7FUiS8L",
          name: "shirt no. 1, front",
        },
      ],
    },
    {
      name: "Gillian wrap dress",
      pattern: "Gillian wrap dress by Muse patterns",
      patternUrl: "https://sewingmuse.com/products/gillian-wrap-dress",
      fabric: ["Digital print rayon knit", "black stretch poplin"],
      tags: ["sewing"],
      tiles: [
        {
          url: "https://drive.google.com/uc?export=view&id=1D6oFwfl4BkfzujVCftz6rM7W2YMn1nzB",
          name: "Gillian wrap dress (standing)",
        },
        {
          url: "https://drive.google.com/uc?export=view&id=1vOlav6KgjQoHenLQRXwFmOHKT0BZE7JH",
          name: "Gillian wrap dress (seated)",
        },
      ],
    },
    {
      name: "Burnside bibs",
      pattern: "Burnside bibs by Sew House 7",
      patternUrl: "https://sewhouse7.com/products/burnside-bibs",
      fabric: ["Yarn dyed cotton in rainbow stripe"],
      fabricUrl: [
        "https://stonemountainfabric.com/product/yarn-dyed-cotton-rainbow-stripe-pink-green-yellow/",
      ],
      tiles: [
        {
          url: "https://drive.google.com/uc?export=view&id=1oeL7STMV9fR1V7h06yN79MmwHQALq8-J",
          name: "Burnside bibs, view 1",
        },
        {
          url: "https://drive.google.com/uc?export=view&id=1VyyfLRHDa4lyvH9SQwGbjoxIKxlGg41H",
          name: "Burnside bibs, view 2",
        },
        {
          url: "https://drive.google.com/uc?export=view&id=11xEgakav9XIwBBG3yKAiTSI2U-ky0_VA",
          name: "Burnside bibs, view 3",
        },
      ],
      tags: ["sewing"],
    },
    // {
    //   name: "Blanca flight suit",
    //   pattern: "Blanca flight suit by Closet Core patterns",
    //   patternUrl:
    //     "https://closetcorepatterns.com/products/blanca-flight-suit-pattern?variant=39419135950982",
    //   fabric: ["Yarn dyed two-tone linen", "Hokkoh Poppies linen"],
    //   fabricUrl: [
    //     "https://stonemountainfabric.com/?s=Yarn+Dyed+Two-Tone+Linen",
    //     "https://stonemountainfabric.com/product/hokkoh-linen-poppies-orange/",
    //   ],
    //   tags: ["sewing"],
    // },
    {
      name: "Elodie wrap dress",
      pattern: "Elodie wrap dress by Closet Core patterns",
      patternUrl:
        "https://closetcorepatterns.com/products/elodie-wrap-dress-pattern",
      fabric: ["Hokkoh Poppies linen"],
      fabricUrl: [
        "https://stonemountainfabric.com/product/hokkoh-linen-fresh-poppies-charcoalyellow/",
      ],
      tiles: [
        {
          name: "Elodie wrap dress (seated)",
          url: "https://drive.google.com/uc?export=view&id=1ICP89fbKoLLTDk5Lw6y_TxS2BO4Hy8or",
        },
        {
          name: "Elodie wrap dress (standing)",
          url: "https://drive.google.com/uc?export=view&id=1cX1MEPSXvigLRS6zal-2JNs-3IU-U5LV",
        },
      ],
      tags: ["sewing"],
    },
    {
      name: "Rio t-shirt",
      pattern: "Rio t-shirt by True Bias",
      patternUrl: "https://truebias.com/products/rio-ringer-t-shirt-dress",
      fabric: ["Bamboo rayon in tie dye", "bamboo rib knit"],
      tiles: [
        {
          name: "Rio t-shirt",
          url: "https://drive.google.com/uc?export=view&id=1q9_Knu-p7GnEO5oN6wyIUA7RL0swbMfq",
        },
      ],
      tags: ["sewing"],
    },
    {
      name: "Pajama pants",
      pattern: "Self-drafted pajama pants with piped turn-ups",
      fabric: [
        "Repurposed cotton shower curtain from Target",
        "repurposed linen curtains from IKEA",
      ],
      tiles: [
        {
          name: "Pajama pants",
          url: "https://drive.google.com/uc?export=view&id=1AfiXu4JqBDrJlQ7vGmQCtuBiT9uHJ8Ls",
        },
      ],
      tags: ["sewing", "recycling"],
    },
    {
      name: "Ilford jacket (long)",
      pattern: "Ilford jacket by the Friday Pattern Company",
      patternUrl:
        "https://fridaypatterncompany.com/products/the-ilford-jacket-pdf-pattern",
      fabric: [
        "Thrifted herringbone tweed wool",
        "Digital print cotton remnant in Aurora",
      ],
      fabricUrl: [
        "https://www.berkeleycraftsstore.com/",
        "https://stonemountainfabric.com",
      ],
      description: (
        <>
          <p>Notions: Shell buttons from Mood Fabrics.</p>
          <p>Pattern moified with external and hidden welt pockets.</p>
        </>
      ),
      tiles: [
        {
          name: "Ilford jacket",
          url: "https://drive.google.com/uc?export=view&id=1DoQ-_1anZXOyDzkdoNYSL05eEAmQe3Ne",
        },
        {
          name: "Ilford jacket (lining view)",
          url: "https://drive.google.com/uc?export=view&id=1i12hYKmwB2QwyafR-G953wrwvanQCrH4",
        },
        {
          name: "Ilford jacket (button detail)",
          url: "https://drive.google.com/uc?export=view&id=1RMZi_7Q54yRfVVJquXIH-faLKZYMdT8c",
        },
        {
          name: "Ilford jacket (pockets turned out)",
          url: "https://drive.google.com/uc?export=view&id=1pWT9QIUpjbl-KDtgNh4o98PoZsndG25T",
        },
      ],
      tags: ["sewing", "recycling"],
    },
    {
      name: "Moth hole embroidery darning",
      tiles: [
        {
          name: "Moth hole embroidery darning",
          url: "https://drive.google.com/uc?export=view&id=1jO2E-cVZYyl_cPDTKFr2pm3y7fcoU-6p",
        },
      ],
      description: (
        <>
          <p>
            Death's head hawkmoth embroidery to guard against new moth attacks.
          </p>
          <p>Materials: embroidery floss thread, recycled denim backing.</p>
        </>
      ),
      tags: ["embroidery", "recycling"],
    },
    {
      name: "Kalle shirt (stand collar)",
      pattern: "Kalle shirt by Closet core patterns",
      patternUrl:
        "https://closetcorepatterns.com/products/kalle-shirt-shirtdress-pattern",
      fabric: ["Scrap Cotton + Steel quilting cotton in Imagined Landscapes"],
      description: "Notions: Orange buttons from Etsy",
      tiles: [
        {
          name: "Kalle shirt with stand collar (front)",
          url: "https://drive.google.com/uc?export=view&id=1R-llRsd1McvuWKlBLY7OBS1mYcK58owd",
        },
        {
          name: "Kalle shirt with stand collar (back)",
          url: "https://drive.google.com/uc?export=view&id=1vuu3EiuZ3Dedgko-EZvRvZf92a5ja_jM",
        },
      ],
      tags: ["sewing", "recycling"],
    },
    // {
    //   name: "Charlie caftan",
    //   pattern: "Charlie caftan by Closet Core patterns",
    //   patternUrl:
    //     "https://closetcorepatterns.com/products/charlie-caftan-pattern",
    //   fabric: [
    //     "Cat faces Ecovero Challis in black/white and wisteria/merlot (discontinued)",
    //   ],
    //   tags: ["sewing"],
    // },
    {
      name: "Ilford jacket (short)",
      pattern: "Ilford jacket by the Friday Pattern Company",
      patternUrl:
        "https://fridaypatterncompany.com/products/the-ilford-jacket-pdf-pattern",
      fabric: [
        "Repurposed canvas from IKEA EKTORP sofa cover in Svanby green",
        "Thrifted heavyweight charcoal denim",
      ],
      fabricUrl: [
        "https://www.ikea.com/us/en/cat/ektorp-series-07488/",
        "https://www.berkeleycraftsstore.com/",
      ],
      description: "Notions: Moon buttons from Etsy",
      tiles: [
        {
          name: "Ilford jacket",
          url: "https://drive.google.com/uc?export=view&id=199zQhBPIkXlA8zbIHWdjhkefaZUXT5xA",
        },
        {
          name: "Ilford jacket (back)",
          url: "https://drive.google.com/uc?export=view&id=1TAm_kO9_mSv66B-Qgv4k_sagsA8JWlxt",
        },
        {
          name: "Ilford jacket (inside detail)",
          url: "https://drive.google.com/uc?export=view&id=1lf893lWOwSeA4S7udRy-8LdlC8Kgg7Sf",
        },
        {
          name: "Ilford jacket (sleeve placket detail)",
          url: "https://drive.google.com/uc?export=view&id=1qRVdsioAdfjIP-itfimIwgcw91GCi0E4",
        },
      ],
      tags: ["sewing", "recycling"],
    },
    {
      name: "Kalle shirt (full collar)",
      pattern: "Kalle shirt by Closet core patterns",
      patternUrl:
        "https://closetcorepatterns.com/products/kalle-shirt-shirtdress-pattern",
      fabric: ["Dear Stella Starstuff Mushrooms cotton remnant"],
      tiles: [
        {
          name: "Kalle shirt with full collar (front)",
          url: "https://drive.google.com/uc?export=view&id=1STAqnQN_Umbh-4Cn04SW2AqoBF-JkNiH",
        },
        {
          name: "Kalle shirt with full collar (back)",
          url: "https://drive.google.com/uc?export=view&id=1a1_mm1tNUfyrOQeiCkKJGJ_GHwnK8MaN",
        },
      ],
      tags: ["sewing"],
    },
    {
      name: "Yarn scrap tote",
      pattern: "A few of the 365 days of granny squares",
      patternUrl: "https://yarnutopia.com/365-days-of-granny-squares/",
      tiles: [
        {
          name: "Yarn scrap tote (hanging)",
          url: "https://drive.google.com/uc?export=view&id=1yYkdiQBMGcQhkODsGJ2RbsP-XGElV1Vt",
        },
        {
          name: "Yarn scrap tote (side 1)",
          url: "https://drive.google.com/uc?export=view&id=1icQQdl1rMX54ILzdxmH_R6dNrDMb1IHN",
        },
        {
          name: "Yarn scrap tote (side 2)",
          url: "https://drive.google.com/uc?export=view&id=1ml3JCsoMC9UK44jXL8iM6lH_siWo--SZ",
        },
      ],
      description:
        "I made this tote out of old scrap yarn to experiment with a few granny square designs for another project.",
      tags: ["crochet", "recycling", "prototype"],
    },
  ],
  socialLinks: {
    twitter: "https://twitter.com/unthevert",
    linkedin: "https://linkedin.com/in/nbilenko",
    github: "https://github.com/nbilenko",
  },
};

export default userData;
