import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Júnior Santos",
  initials: "JS",
  url: "https://zzjunior.github.io",
  location: "Natal RN - Brazil",
  locationLink: "https://www.google.com/maps/place/Natal,+RN",
  description:
    "Desenvolvedor Web, Entusiasta de Tecnologia e Estudante de ADS e C&T.",
  summary:
    "Um amante de tecnologia! Meu inicio de fato nesse universo veio em 2019, quando conquistei meu primeiro computador, desde então venho estudando e me aprimorando em várias areas desde de hardware à softwares. Atuante na area de TI desde de 2020, onde comecei a estudar programação, desde então venho me aprimorando e buscando sempre novos desafios e novos aprendizados. Hoje atuo no mercado tanto no meu trabalho atual na gestão operacional do TEIA CRM, como também como freelancer na TJ Agência criada por mim quando iniciei na área. Estou sempre estudando e tentando inovar meus conhecimentos, atualmente as áreas onde tenho mais interesse são desenvolvimento web, automação de processos com uso de inteligência artificial e programação, mas também me aventurando bastante na análise de dados.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "PHP",
    "Node.js",
    "Python",
    "MySQL",
    "C++",
    "HTML",
    "CSS",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "junior@agenciatj.com.br",
    tel: "+5584997015436",
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
      email: {
        name: "Send Email",
        url: "mailto:junior@agenciatj.com.br",
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
      location: "Presencial - Natal Brazil",
      title: "Suporte Técnico Operacional",
      logoUrl: "/teia.webp",
      start: "Março 2023",
      end: "Atual",
      description:
        "• Suporte operacional, integrações, desenvolvimento de novas funcionalidades, manutenção de sistemas, atendimento ao cliente, treinamento de usuários, entre outras atividades.",
    },
    {
      company: "Umbler | Umbler Internet ltda.",
      href: "https://umbler.com/br/",
      badges: [],
      location: "Home Office - Porto Alegre, Brasil",
      title: "Costomer Success Host Analyst",
      logoUrl: "/umbler.png",
      start: "Março 2022",
      end: "Dezembro 2022",
      description:
        "• Auxiliar no atendimento aos clientes via chat, online e e-mails, auxílio nos projetos. Suporte aos clientes com dificuldades em websites (Wordpress, HTML, CSS, JavaScript e PHP), FTP, banco de dados Mysql / SQLServer, configuração de DNS, registro de domínios e servidores SMTP, POP e IMAP.",
    },
  ],
  education: [
    {
      school: "UFRN - Universidade Federal do Rio Grande do Norte",
      href: "https://www.ufrn.br",
      degree: "Bacharelado em Ciências e Tecnologia",
      logoUrl: "/ufrn.png",
      start: "2021",
      end: "2027 - Previsão",
    },
    {
      school: "Estácio de Sá",
      href: "https://www.estacio.br",
      degree: "Analise e Desenvolvimento de Sistemas",
      logoUrl: "/logo-estacio.webp",
      start: "2024",
      end: "2026 - Previsão",
    }
  ],
  projects: [
    {
      title: "Site - Teia CRM",
      href: "https://teiacrm.com.br",
      dates: "Novembro 2024 - Presente",
      active: true,
      description:
        "Site do produto Saas Teia CRM, desenvolvido com o objetivo de apresentar o sistema e modelo de negócio da empresa e serviços, sendo o primeiro CRM voltado 100% para consórcio.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://teiacrm.com.br",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video:
        "/teia-clip.mp4",
    },
    {
      title: "Qrcode Generator",
      href: "https://qrcode.clickston.com.br",
      dates: "Janeiro 2024 - Feveiro 2024",
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
        "/qrcode-clip.mp4",
    },
    {
      title: "image.convert",
      href: "https://conversor.clickston.com.br",
      dates: "Junho 2024 - Presente",
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
      video: "/image-convert-clip.mp4",
    }
  ],
  hackathons: [
    {
      title: "linksbio.me",
      dates: "Fevereiro 2025 - Agora",
      location: "Natal, Brasil.",
      description:
        "Criador de links personalizados do WhatsApp e páginas de Bio para o instagram.Inspirado em outros sites com mesma ideia e com focos em ser produtos estilo SaaS com planos gratuitos.",
      image:
        "linksbio.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://linksbio.me/",
        },
      ],
    }
  ],
} as const;
