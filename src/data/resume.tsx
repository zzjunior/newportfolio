import { Icons } from "@/components/icons"; // importa icons
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/utils";
import { AppWindow, Bot, HomeIcon, LayoutTemplate, Smartphone } from "lucide-react";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Css } from "@/components/ui/svgs/css";
import { Docker } from "@/components/ui/svgs/docker";
import { Flutter } from "@/components/ui/svgs/flutter";
import { Git } from "@/components/ui/svgs/git";
import { Html } from "@/components/ui/svgs/html";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Php } from "@/components/ui/svgs/php";
import { Python } from "@/components/ui/svgs/python";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";

export const DATA = {
  name: "Júnior Santos",
  initials: "JS",
  url: "https://junior.linksbio.me",
  location: "Natal RN - Brazil",
  locationLink: "https://www.google.com/maps/place/Natal,+RN",
  description:
    "Desenvolvedor Web na Teia CRM e freelancer pela TJ Agência. Sites, sistemas e automações com IA.",
  summary:
    "Sou apaixonado por tecnologia desde 2019, quando conquistei meu primeiro computador. Desde então estudo de hardware a software e, em 2020, comecei a programar. Hoje atuo como **Desenvolvedor Web na Teia CRM** e atendo clientes como freelancer pela **TJ Agência**.\n\nMeu foco é desenvolvimento web, apps mobile e automação de processos com inteligência artificial. Gosto de resolver problemas reais com soluções simples, rápidas e bem feitas.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "JavaScript", icon: Javascript },
    { name: "PHP", icon: Php },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "MySQL", icon: Mysql },
    { name: "C++", icon: Cpp },
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "TailwindCSS", icon: Tailwindcss },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Git },
    { name: "Laravel", icon: Laravel },
    { name: "Flutter", icon: Flutter },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "junior@agenciatj.com.br",
    whatsapp: WHATSAPP_NUMBER,
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
      WhatsApp: {
        name: "WhatsApp",
        url: whatsappLink(),
        icon: Icons.whatsapp,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_zzjunior",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Email",
        url: "mailto:junior@agenciatj.com.br",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  services: [
    {
      title: "Landing Pages",
      description: "Páginas rápidas e focadas em conversão.",
      icon: LayoutTemplate,
      message: "Olá Júnior, quero um orçamento de Landing Pages.",
    },
    {
      title: "Sistemas Web & SaaS",
      description: "Plataformas sob medida para o seu processo.",
      icon: AppWindow,
      message: "Olá Júnior, quero um orçamento de Sistemas Web & SaaS.",
    },
    {
      title: "Apps Mobile",
      description: "Aplicativos para Android e iOS integrados ao seu negócio.",
      icon: Smartphone,
      message: "Olá Júnior, quero um orçamento de Apps Mobile.",
    },
    {
      title: "Automações com IA",
      description: "Integrações e processos automatizados.",
      icon: Bot,
      message: "Olá Júnior, quero um orçamento de Automações com IA.",
    },
  ],

  work: [
    {
      company: "Teia CRM",
      href: "https://teiacrm.com.br",
      location: "Presencial - Natal, Brasil",
      logoUrl: "/teia.webp",
      group: {
        name: "Alcance",
        logoUrl: "/alcance-symbol.png",
      },
      start: "2023",
      end: "Atual",
      roles: [
        {
          title: "Desenvolvedor Web",
          start: "2026",
          end: "Atual",
          description: "",
        },
        {
          title: "Suporte Técnico Operacional",
          start: "2023",
          end: "2026",
          description:
            "• Suporte operacional, integrações, desenvolvimento de novas funcionalidades, manutenção de sistemas, atendimento ao cliente e treinamento de usuários.\n• Atuação na gestão operacional da equipe de suporte, auxiliando na resolução de problemas técnicos, na implementação de melhorias e garantindo a satisfação dos clientes com o Teia CRM.\n• Colaboração com a equipe de desenvolvimento para identificar e solucionar bugs, contribuindo para o aprimoramento contínuo do sistema.",
        },
      ],
    },
    {
      company: "TJ Agência",
      href: "",
      location: "Remoto - Natal, Brasil",
      logoUrl: "/TJ.png",
      start: "2022",
      end: "Atual",
      roles: [
        {
          title: "Desenvolvedor Web Freelancer",
          start: "2022",
          end: "Atual",
          description:
            "Atuação como freelancer pela minha agência, com desenvolvimento web desde 2023: landing pages, sistemas sob medida e produtos SaaS próprios (linksbio.me, menu.linksbio.me).",
        },
      ],
    },
    {
      company: "Umbler",
      href: "https://umbler.com/br/",
      location: "Home Office - Porto Alegre, Brasil",
      logoUrl: "/umbler.png",
      start: "2022",
      end: "2022",
      roles: [
        {
          title: "Customer Success Host Analyst",
          start: "2022",
          end: "2022",
          description:
            "• Atendimento aos clientes via chat e e-mail e auxílio em projetos. Suporte a clientes com dificuldades em websites (WordPress, HTML, CSS, JavaScript e PHP), FTP, bancos de dados MySQL / SQL Server, configuração de DNS, registro de domínios e servidores SMTP, POP e IMAP.",
        },
      ],
    },
  ],
  education: [
    {
      school: "UFRN - Universidade Federal do Rio Grande do Norte",
      href: "https://www.ufrn.br",
      degree: "Bacharelado em Ciências e Tecnologia",
      logoUrl: "/ufrn.png",
      start: "2021",
      end: "2024",
      status: "Não concluído · 6º período",
    },
    {
      school: "Estácio de Sá",
      href: "https://www.estacio.br",
      degree: "Análise e Desenvolvimento de Sistemas",
      logoUrl: "/logo-estacio.webp",
      start: "2024",
      end: "2027 (previsão)",
    },
  ],
  hackathons: [
    {
      title: "Site do Vendedor",
      dates: "Agosto 2025 - Atual",
      location: "Grupo Alcance Vendas",
      description:
        "Plataforma de catálogo e ferramentas para vendedores Honda, com aplicativo mobile e agentes de IA. Atuo como um dos desenvolvedores do time do Grupo Alcance, no desenvolvimento de novas funcionalidades e na manutenção da plataforma.",
      image: "/site-vendedor.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://vendedor.site/ovendedoronline",
        },
      ],
    },
    {
      title: "linksbio.me",
      dates: "Fevereiro 2025 - Atual",
      location: "Natal, Brasil.",
      description:
        "Criador de links personalizados do WhatsApp, páginas de bio para o Instagram, encurtador de links e gerador de QR Code. Inspirado em outros sites com a mesma ideia, com foco em ser um produto estilo SaaS com planos gratuitos.",
      image:
        "/linksbio.png",
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
      dates: "Outubro 2025 - Atual",
      location: "Natal, Brasil.",
      description:
        "Cardápio digital para lojas e lanchonetes. Open source e gratuito para pequenos negócios.",
      image:
        "/fortalecai-img.png",
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
      dates: "Julho 2024 - Agosto 2024",
      location: "Natal, Brasil.",
      description: "API desenvolvida para checagem de existência de números no WhatsApp de forma rápida, sem riscos de bloqueios de números na checagem.",
      image: "/whatsapp-checker-img.png",
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

  projects: [
    {
      title: "menu.linksbio.me",
      href: "https://menu.linksbio.me/fortalecai",
      dates: "Novembro 2025 - Atual",
      active: true,
      description:
        "Cardápio digital para restaurantes, bares e lanchonetes, com foco em ser simples, rápido e gratuito para pequenos negócios. Planos personalizados para quem deseja mais funcionalidades.",
      technologies: ["Slim Framework", "JavaScript", "PHP", "Docker"],
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
        },
      ],
      image: "/fortalecai-img.png",
      video: "",
    },
    {
      title: "linksbio.me",
      href: "https://linksbio.me/",
      dates: "Fevereiro 2025 - Atual",
      active: true,
      description:
        "Criador de links personalizados do WhatsApp, páginas de bio para o Instagram, encurtador de links e gerador de QR Code. Um produto no estilo SaaS, com plano gratuito.",
      technologies: ["Slim Framework", "JavaScript", "PHP", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://linksbio.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/linksbio-me.png",
      video: "",
    },
    {
      title: "WhatsApp Checker API",
      href: "https://github.com/zzjunior/whatsapp-checker-api",
      dates: "Julho 2024 - Agosto 2024",
      active: true,
      description:
        "API para checar a existência de números no WhatsApp de forma rápida, sem risco de bloqueio dos números usados na checagem.",
      technologies: ["Node.js", "JavaScript", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/zzjunior/whatsapp-checker-api",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "API Docs",
          href: "https://documenter.getpostman.com/view/46605612/2sBXVbFsXL",
          icon: <Icons.postman className="size-3" />,
        },
      ],
      image: "/whatsapp-checker-img.png",
      video: "",
    },
    {
      title: "image.convert",
      href: "https://conversor.clickston.com.br",
      dates: "Junho 2024",
      active: true,
      description:
        "Conversor de imagens para vários formatos, com download imediato.",
      technologies: ["HTML", "CSS", "JavaScript"],
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
    },
    {
      title: "Qrcode Generator",
      href: "https://qrcode.clickston.com.br",
      dates: "Janeiro 2024 - Fevereiro 2024",
      active: true,
      description:
        "Gerador de QR Codes para links, baseado na qrcode.js, com opção de salvar o QR Code em PNG.",
      technologies: ["HTML", "CSS", "JavaScript"],
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
      video: "/qrcode-clip.mp4",
    },
    {
      title: "Site - Teia CRM",
      href: "https://teiacrm.com.br",
      dates: "Novembro 2024",
      active: true,
      description:
        "Site do produto SaaS Teia CRM, desenvolvido para apresentar o sistema, o modelo de negócio e os serviços da empresa. É o primeiro CRM voltado 100% para consórcio.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://teiacrm.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/teia-clip.mp4",
    },
  ],
} as const;
