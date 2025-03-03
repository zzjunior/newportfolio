import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Júnior Santos",
  initials: "JS",
  url: "https://zzjunior.github.io",
  location: "Natal RN - Brazil",
  locationLink: "https://www.google.com/maps/place/Natal,+RN",
  description:
    "Web Developer, Tech Enthusiast, and Student.",
  summary:
    "Um amante de tecnologia! Meu inicio de fato nesse universo veio em 2019, quando conquistei meu primeiro computador, desde então venho estudando e me aprimorando em várias areas desde de hardware à softwares. Atuante na area de TI desde de 2020, onde comecei a estudar programação, desde então venho me aprimorando e buscando sempre novos desafios e novos aprendizados. Hoje atuo no mercado tanto no meu trabalho atual na gestão operacional do TEIA CRM, como também como freelancer na TJ Agência criada por mim quando iniciei na área. Estou sempre estudando e tentando inovar meus conhecimentos, atualmente as áreas onde tenho mais interesse são desenvolvimento web, automação de processos com uso de inteligência artificial e programação, mas também me aventurando bastante na análise de dados.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "Node.js",
    "Python",
    "MySQL",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zzjunior",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zjúniorsantos/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_zzjunior",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Teia CRM | JCW Desenvolvimento de Tecnologias LTDA.",
      href: "https://teiacrm.com.br",
      badges: [],
      location: "Presencial",
      title: "Tech Supoort Operacional",
      logoUrl: "/teia.webp",
      start: "Mar 2023",
      end: "Atual",
      description:
        "Suporte operacional, integrações, desenvolvimento de novas funcionalidades, manutenção de sistemas, atendimento ao cliente, treinamento de usuários, entre outras atividades.",
    },
    {
      company: "Umbler",
      href: "https://umbler.com/br/",
      badges: [],
      location: "Porto Alegre, Brasil",
      title: "Costomer Success Host Analyst",
      logoUrl: "/umbler.png",
      start: "Mar 2022",
      end: "Dezembro 2022",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "UFRN - Universidade Federal do Rio Grande do Norte",
      href: "https://www.ufrn.br",
      degree: "Bacharelado em Ciências e Tecnologia",
      logoUrl: "/ufrn.png",
      start: "2021",
      end: "2026 - Previsão",
    },
    {
      school: "Estácio de Sá",
      href: "https://uwaterloo.ca",
      degree: "Analise e Desenvolvimento de Sistemas",
      logoUrl: "/logo-estacio.webp",
      start: "2024",
      end: "2026 - Previsão",
    }
  ],
  projects: [
    {
      title: "Qrcode Generator",
      href: "https://qrcode.clickston.com.br",
      dates: "Jan 2024 - Fev 2024",
      active: true,
      description:
        "Gerador de QrCodes para links, baseado na qrcode.js, com a possibilidade de salvar o qrcode gerado em formato png.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://qrcode.clickston.com.br",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zzjunior/QRcodeFree",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "#",
    },
    {
      title: "image.convert",
      href: "https://conversor.clickston.com.br",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Conversor de imagens, atualmente converte imagens para vários formatos e disponibiliza o dowload imediato.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://conversor.clickston.com.br",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zzjunior/image.convert",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "#",
    }
  ],
  hackathons: [
    {
      title: "Linksbee",
      dates: "Fev 2025 - Agora",
      location: "Natal, Brasil.",
      description:
        "Criados de links personalizados do WhatsApp e páginas de Bio para o instagram focado em produto estilo SaaS.",
      image:
        "linksbee.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://linksbee.com.br/",
        },
      ],
    }
  ],
} as const;
