// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: "Abhinav Sancheti",
  domain: "template.007Sancheti.com", // add without https:// , used in meta tags and share urls
  image: "/images/bigheadavatar.png",
  email: "mail@karngyan.com",
  googleAnalyticsV4: {
    enabled: false,
    id: ""
  },
  plausibleAnalytics: {
    enabled: true,
    domain: "template.007Sancheti.com",
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: "https://analytics.lookatx.dev" // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: "007Sancheti",
    linkedin: "abhinav-sancheti-95b64316b/",
    facebook: "007AbhinavSancheti",
    twitter: "e9a08211aa99400",
    instagram: "sanchetiabhinav",
    codestats: "007Sancheti" // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: "https://www.buymeacoffee.com/007Sancheti"
  },
  projects: {
    enabled: true
  },
  blog: {
    enabled: true
  },
  resume: {
    enabled: true,
    pdfUrl: "/RESUME_ABHINAV_SANCHETI_DARK.pdf" // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      { title: "OS", value: "Windows 11" },
      { title: "Memory", value: "8 GB 2667 MHz DDR4" },
      { title: "Keyboard", value: "Keychron K2 - Gateron Brown Keys" },
      { title: "Mouse", value: "Logitech Silent Pebble" },
      { title: "Monitor", value: "LG QHD (2560 x 1440) 27 Inch IPS Display" },
      {
        title: "Laptop • Processor • Graphics",
        value:
          "Dell (15.6-inch, 2019) • 2.6 GHz 6-Core Intel Core i5 8th gen • AMD Radeon Pro 5300M 2gb + Intel UHD Graphics 630 1536 MB"
      }
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: "PEGA", src: "/images/pega.png", url: "https://www.pega.com" },
      { name: "HCL", src: "/images/hcl.png", url: "https://www.hcltech.com" }
    ]
  },
  loadingIndicator: {
    name: "pulse"
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: "download",
      nav: {
        home: "home",
        blog: "blog",
        projects: "projects",
        uses: "uses",
        resume: "résumé",
        signIn: "sign in",
        signOut: "sign out"
      },
      hero: {
        iBlogTech: "i blog tech",
        haveALook: "have a look",
        friendlyNeighborhood: "your friendly neighborhood",
        description:
          "i am a software engineer and a part time freelancer. i blog tech, write a weekend newsletter called software shots, and tinker with side projects every now n then.",
        words: ["developer", "designer", "engineer", "programmer", "encoder"]
      },
      githubCalendar: {
        header: "contributions",
        subtext: "github calendar heatmap"
      },
      blog: {
        header: "blog",
        subtext:
          "i try to write once in a while. let me know your thoughts in comments or 007sancheti@gmail.com"
      },
      recentBlog: {
        header: "recent blogs",
        subtext: "it takes a lot of time to write man"
      },
      uses: {
        header: "uses",
        subtext:
          "a quick summary of what I use on a daily basis to code and some codestats.net flex"
      },
      projects: {
        header: "projects",
        subtext:
          "this page lists some of my personal and work projects. every project has some story, click on the title to read"
      }
    }
  }
};
