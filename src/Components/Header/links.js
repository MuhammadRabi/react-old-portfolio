import {
  FaLinkedinIn,
  FaYoutube,
  FaGithubSquare,
  FaWhatsapp,
} from "react-icons/fa"

export const links = [
  {
    id: 1,
    link: "#hero",
    text: "home",
  },
  {
    id: 2,
    link: "#about",
    text: "about me",
  },
  {
    id: 3,
    link: "#services",
    text: "services",
  },
  {
    id: 4,
    link: "#faq",
    text: "FAQ",
  },
  {
    id: 5,
    link: "#projects",
    text: "recent projects",
  },
]

export const socialLinks = [
  {
    id: 1,
    link: "https://github.com/MuhammadRabi",
    aria: "github-link",
    icon: FaGithubSquare,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/muhammad-rabi-07a51b202/",
    aria: "linkedin-link",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    link: "https://www.youtube.com/c/MohamedRabi",
    aria: "youtube-link",
    icon: FaYoutube,
  },
  {
    id: 3,
    link: "https://wa.me/201066940972",
    aria: "whatsapp-chat",
    icon: FaWhatsapp,
  },
]
