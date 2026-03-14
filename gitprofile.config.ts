// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'erwinfernandjr', // Sesuai dengan username GitHub kamu
  },
  /**
   * Karena kamu akan deploy ke https://erwinfernandjr.github.io/
   * maka base-nya diatur menjadi '/'
   */
  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'Github Projects',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars', 
        limit: 4, // Dibatasi 4 agar tampilan tetap rapi
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'Academic Projects',
      projects: [
        {
          title: 'Final Project: NTL Data for Regional Transformation',
          description:
            'Processed and analyzed spatial Nighttime Light (NTL) datasets to map and evaluate socio-economic growth and regional transformation patterns across Sumatra Island.',
          imageUrl: '', 
          link: '',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Erwin Fernando Junior Manurung', 
    description: 'Geodetic Engineering Graduate | Mine Surveying & Spatial Analysis', 
    imageURL: '' 
  },
  social: {
    linkedin: 'erwinfernando',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: 'https://erwinfernandjr.github.io',
    phone: '+6285694308897',
    email: 'erwin.fernandojr@gmail.com',
  },
  resume: {
    // Jika kamu punya link Google Drive untuk CV format PDF, tempelkan linknya di sini
    fileUrl: '', 
  },
  skills: [
    'UAV Mapping',
    'GNSS Surveying',
    'Terrestrial Laser Scanning (TLS)',
    'LiDAR',
    'ArcGIS',
    'QGIS',
    'Google Earth Engine',
    'Python',
    'AutoCAD Civil 3D',
    'AutoCAD MAP',
    '12D Model',
    'TerraSolid',
    'RiScan Pro',
    'Agisoft Metashape',
    'Pix4D',
    'DJI Terra',
    'Trimble Business Center'
  ],
  experiences: [
    {
      company: 'CV. Prawira Inti Nusa',
      position: 'Freelance Surveyor',
      from: 'October 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'PT. Pamapersada Nusantara (PAMA)',
      position: 'Mine Survey Intern',
      from: 'June 2025',
      to: 'August 2025',
      companyLink: '',
    },
    {
      company: 'Diponegoro University',
      position: 'Laboratory Assistant (Photogrammetry & Remote Sensing)',
      from: 'August 2024',
      to: 'August 2025',
      companyLink: '',
    },
    {
      company: 'Tellus Meridian Survey',
      position: 'Surveyor Intern',
      from: 'January 2024',
      to: 'February 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Photogrammetry Data Processing',
      body: 'Workshop by PT. Geosurvei Tekno Servis on advanced processing of drone and aerial imagery into accurate 3D spatial models.',
      year: 'January 2024',
      link: '',
    },
    {
      name: 'Spatial Mapping and Analysis of Flood Hazard Risks',
      body: 'Online Course by Langen Teknik Satria focusing on hydrological spatial analysis (Case Study: Bandung).',
      year: 'January 2024',
      link: '',
    },
    {
      name: 'Spatial Modeling of Critical Land Using ArcGIS',
      body: 'Online Course by Langen Teknik Satria on utilizing GIS software for environmental evaluation (Case Study: IKN).',
      year: 'December 2023',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Diponegoro University',
      degree: "Bachelor's Degree in Geodetic Engineering (GPA: 3.58)",
      from: '2022',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Automated Multi-Class Pavement Distress Detection from UAV Imagery Using YOLO Deep Learning',
      conferenceName: '',
      journalName: 'International Journal of Geoinformatics',
      authors: 'Bandi S., Erwin F. J. M., Anindya K. M.',
      link: '',
      description:
        'Investigated the performance of the YOLOv11 algorithm combined with 3D Digital Surface Models (DSM) to automate road damage detection and dimensional extraction.',
    },
  ],
  blog: {
    // Dikosongkan karena tidak ada data blog Medium/Dev
    source: '', 
    username: '', 
    limit: 0, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'corporate', // Tema profesional bergaya "business"

    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    // Saya menyisakan beberapa tema bernuansa profesional saja untuk switcher-nya
    themes: [
      'corporate',
      'business',
      'light',
      'dark',
      'nord',
      'winter',
    ],
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
