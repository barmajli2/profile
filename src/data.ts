type Project = {
  id: number;
  title: string;
  path: string;
  demo: string;
  repo: string;
  img: string;
  type: string;
  desc?: string;
  tools?: String[];
};

type Projects = Project[];

export const AllProjects: Projects = [
  {
    id: 1,
    path: "/projects/1",
    title: "Free API ",
    desc: `It's a site that I've made a bunch of (Free API & Host) and to be a reference for me and anyone looking for APIs.
    Built by (Next.Js),
    Offers data about the pairing, electronic stores, games, news, photos, remote work, books, users and hosts
    I used React Hoks:
    useState,
    useTransition :
    In order to navigate the site and control the tats.
    I compiled all the data in the profile of the name of the data in order to facilitate the addition and modification thereafter`,
    img: "/project/free-api.png",
    type: "nextjs",
    tools: ['Next Js', 'React', 'Tailwind css '],
    demo: "https://free-tools-six.vercel.app/",
    repo: "https://github.com/barmajli2/Free-Tools",
  },
  {
    id: 2,
    path: "/projects/2",
    title: "Portofolio",
    desc: `This is my profile.
    And I built a nextjs.
    React hocks used:
    useEffect,useState. &
    usePathname from next/navigation
    I made a file containing all the data used on the site and it is prepared as a local database making it easier to add and update.`,
    img: "/project/portofolio.jpg",
    type: "nextjs",
    tools: ['Next Js', 'React', 'Tailwind css ', 'typescript'],
    demo: "https://profile-gamma-coral.vercel.app/",
    repo: "https://github.com/barmajli2/profile",
  },
];

// Navbar links Router
type NavLinks = {
  id: number;
  title: string;
  path: string;
}[];

export const navLinks: NavLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",

  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
];

// What can I offer for you ?
type Offers = {
  title: string;
  image: string;
  dec: string;
}[];

export const offer: Offers = [
  {
    title: "Responsive Web Design",
    image: "/about/responsive.svg",
    dec: "Create websites that look great and function well on various devices and screen sizes.",
  },
  {
    title: "User friendly Interface",
    image: "/about/friend.svg",
    dec: "Design intuitive and easy-to-navigate interfaces that enhance user experience.",
  },
  {
    title: "Accessibility Compliance",
    image: "/about/accessibility.svg",
    dec: "Everyone should be able to easily understand what you want to show them, under any circumstances.",
  },
  {
    title: "Performance Optimization",
    image: "/about/performance.svg",
    dec: "Optimize website performance for faster loading times and improved user experience.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: "/about/seo.svg",
    dec: "Implement SEO best practices to improve the visibility and ranking of websites on search engines.",
  },
  {
    title: "Integration with Backend Systems",
    image: "/about/integration.svg",
    dec: "Collaborate with backend developers to integrate frontend components seamlessly with backend systems.",
  },
  {
    title: "Custom Solutions",
    image: "/about/solutions.svg",
    dec: "Provide custom solutions tailored to the specific needs and goals of each client.",
  },
  {
    title: "Clear Communication",
    image: "/about/communication.svg",
    dec: "Maintain open communication channels with clients to understand their requirements and provide timely updates on project progress.",
  },
]

// My skills ?
type Skills = {
  title: string;
  image: string;
}[];

export const skillsImage: Skills = [
  {
    title: "HTML",
    image: "/skills/html.png",
  },
  {
    title: "CSS",
    image: "/skills/css.png",
  },
  {
    title: "Js",
    image: "/skills/javascript.png",
  },
  {
    title: "jQuery",
    image: "/skills/jquery.png",
  },
  {
    title: "Ts",
    image: "/skills/typescript.png",
  },
  {
    title: "Bootstrap",
    image: "/skills/b.png",
  },
  {
    title: "Tailwind",
    image: "/skills/tailwind.png",
  },

  {
    title: "React Js",
    image: "/skills/react.png",
  },
  {
    title: "Next Js",
    image: "/skills/next.png",
  },
  {
    title: "Node Js",
    image: "/skills/nodejs.png",
  },
  {
    title: "Express",
    image: "/skills/express.png",
  },
  {
    title: "Mongo DB",
    image: "/skills/mongo-db.png",
  },
  {
    title: "Git",
    image: "/skills/git.png",
  },
  {
    title: "GitHub",
    image: "/skills/github.png",
  },

  {
    title: "VS Code",
    image: "/skills/visual-studio-code.png",
  },

]

// My Contact Links ?
type ContactUrl = {
  title: string;
  image: string;
  url: string;
}[];

export const contactUrl: ContactUrl = [
  {
    title: "github",
    image: "/social/github.png",
    url: "https://github.com/barmajli2"
  },
  {
    title: "linkedin",
    image: "/social/linkedin.png",
    url: "https://www.linkedin.com/in/barmajly2/"
  },
  {
    title: "gmail",
    image: "/social/gmail.png",
    url: "https://mail.google.com/mail/u/0/?fs=1&to=barmajli.info@gmail.com&tf=cm"
  },
  {
    title: "youtube",
    image: "/social/youtube.png",
    url: "https://www.youtube.com/@barmajli2"
  },
  {
    title: "whatsapp",
    image: "/social/whatsapp.png",
    url: "https://wa.me/+201151101537"
  },
  {
    title: "facebook",
    image: "/social/facebook.png",
    url: "https://web.facebook.com/barmajli2"
  },
]