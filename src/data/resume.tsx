import { Icons } from "@/components/icons"; // importa icons
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
  avatarUrl: "/me.jpeg",
  skills: [
    {
      name: "JavaScript",
      icon: <Icons.javascript className="size-4" />,
    },
    {
      name: "PHP",
      icon: <Icons.php className="size-4" />,
    },
    {
      name: "Node.js",
      icon: <Icons.nodejs className="size-4" />,
    },
    {
      name: "Python",
      icon: <Icons.python className="size-4" />,
    },
    {
      name: "MySQL",
      icon: <Icons.mysql className="size-4" />,
    },
    {
      name: "C++",
      icon: <Icons.cpp className="size-4" />,
    },
    {
      name: "HTML",
      icon: <Icons.html className="size-4" />,
    },
    {
      name: "CSS",
      icon: <Icons.css className="size-4" />,
    },
    {
      name: "TailwindCSS",
      icon: <Icons.tailwindcss className="size-4" />,
    },
    {
      name: "Docker",
      icon: <Icons.docker className="size-4" />,
    },
    {      
      name: "Git",
      icon: <Icons.git className="size-4" />,
    },
    {
      name: "Laravel",
      icon: <Icons.laravel className="size-4" />,
    },
    //{
      //name: "React",
      //icon: <Icons.react className="size-4" />,
    //},
    {
      name: "Flutter",
      icon: <Icons.flutter className="size-4" />,
    },
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
        "• Suporte operacional, integrações, desenvolvimento de novas funcionalidades, manutenção de sistemas, atendimento ao cliente, treinamento de usuários, entre outras atividades.\n • Atuo diretamente na gestão operacional da equipe de suporte, auxiliando na resolução de problemas técnicos, implementação de melhorias e garantindo a satisfação dos clientes com o uso do Teia CRM.\n• Trabalho em colaboração com a equipe de desenvolvimento para identificar e solucionar bugs, além de contribuir para o aprimoramento contínuo do sistema.",
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
    // adicionando site do vendedor
    {
      title: "Site do Vendedor",
      href: "https://vendedor.site/ovendedoronline",
      dates: "Agosto 2025 - Presente",
      active: true,
      description:
        "Auxilio no desenvolvimento como *Desenvolvedor Junior* e manutenção do Site do Vendedor online, plataforma de vendas para consórcios vinculada a Alcance Vendas.",
      technologies: [
        "Laravel",
        "JavaScript",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://vendedor.site/ovendedoronline",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/site-vendedor.png",
      video: "",
    },
    // adicionando linksbio.me
    {
      title: "linksbio.me",
      href: "https://linksbio.me/",
      dates: "Fevereiro 2025 - Agora",
      active: true,
      description:
        "Criador de links personalizados do WhatsApp e páginas de Bio para o instagram.Inspirado em outros sites com mesma ideia e com focos em ser produtos estilo SaaS com planos gratuitos.",
      technologies: [
        "Slim Framework",
        "JavaScript",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://linksbio.me/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/linksbio-me.png",
      video: "",
    },
    {
      title: "menu.linksbio.me",
      href: "https://menu.linksbio.me/fortalecai",
      dates: "Novembro 2025 - Agora",
      active: true,
      description:
        "Cardápio digital para restaurantes, bares e lanchonetes, com foco em ser simples, rápido e gratuito para pequenos negócios. Planos personalizados para quem deseja mais funcionalidades.",
      technologies: [
        "Slim Framework",
        "JavaScript",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://menu.linksbio.me/fortalecai",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zzjunior/menu.linksbio.me",
          icon: <Icons.github className="size-3" />,
        }

      ],
      image: "/fortalecai-img.png",
      video: "",
    },
    // mozaniel motos
    {
      title: "Landing Page - Mozaniel Motos",
      href: "https://consorcio.mozanielmotos.com.br",
      dates: "Fevereiro 2024 - Novembro 2024",
      active: true,
      description:
        "Landing page para Mozaniel Motos, focada em consórcios, com design atraente e funcionalidade para captar clientes interessados em consórcios que ele oferece e direciona-los para um bot do whatsApp especializado.",
      technologies: [
        "Slim Framework",
        "JavaScript",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://consorcio.mozanielmotos.com.br",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/mozanielmotos-img.png",
      video: "",
    },
    // seu chale
    {
      title: "Landing Page - Seu Chalé",
      href: "https://clickston.com.br/SeuChale",
      dates: "Janeiro 2024 - Agora",
      active: true,
      description:
        "Landing page para Seu Chalé, cliente realiza aluguel de imoveis próprios e precisava de uma landing page focada em oferecer uma experiência digital para clientes realizarem o agendamento da visita ao Chalé, mas sendo simples e rápida, com design atraente e funcionalidade para facilitar pedidos e reservas.",
      technologies: [
        "Slim Framework",
        "JavaScript",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://clickston.com.br/SeuChale",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/clickston-seuchale.png",
      video: "",
    },
    // Qrcode generator
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
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://linksbio.me/",
        },
      ],
    },
    {
      title: "menu.linksbio.me",
      dates: "Outubro 2025 - Agora",
      location: "Natal, Brasil.",
      description:
        "Cardápio digital para lojas, e lanchonetes. Opensource e gratuito para pequenos negócios.",
      image:
        "fortalecai-img.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://menu.linksbio.me/fortalecai",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/zzjunior/menu.linksbio.me"
        }
      ],
    },
    {
      title: "WhatsApp Checker API",
      icon: <Icons.whatsapp className="size-4" />,
      dates: "Julho 2024 - Agosto 2024",
      location: "Natal, Brasil.",
      description: "API desenvolvida para checagem de existencia de números no WhatsApp de forma rápida, sem riscos de bloqueios de números na checagem.",
      image: "whatsapp-checker-img.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/zzjunior/whatsapp-checker-api"
        },
        {
          title: "API Documentation",
          icon: <Icons.postman className="h-4 w-4" />,
          href: "https://documenter.getpostman.com/view/46605612/2sBXVbFsXL"
        }
      ]
    }

  ],
} as const;
