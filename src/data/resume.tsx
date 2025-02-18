/* eslint-disable max-len */

import { Github, GlobeIcon, Home, Notebook } from 'lucide-react';

import { Icons } from '@/assets/icons';

import { Resume } from '@/types/resume';

export const DATA: Resume = {
  name: 'Júnior Santos',
  initials: 'JS',
  description:
    'Web developer with experience in operational management and customer experience. Automation expert and enthusiast!',
  url: 'https://zzjunior.github.io',
  avatarUrl: '/eu.webp',
  location: {
    name: 'Rio Grande do Norte, Brazil',
    link: 'https://www.google.com/maps/place/Rio+Grande+do+Norte',
  },
  // Dock
  navbar: [
    {
      href: '/',
      icon: Home,
      label: 'Home',
    },
    {
      href: '/blog',
      icon: Notebook,
      label: 'Blog',
    },
  ],
  // Experience
  experience: [
    {
      company: 'Teia',
      companyKey: 'zenvia',
      href: 'https://teiacrm.com.br/',
      logoUrl: '/work/teia.webp',
    },
    {
      company: 'Alcance Vendas',
      companyKey: 'catency',
      href: 'https://www.alcancevendas.com.br/',
      logoUrl: '/work/alcance.webp',
    },
    {
      company: 'TJ Agency',
      companyKey: 'webgru',
      href: 'https://www.webgru.de/en/',
      logoUrl: '/work/webgru.webp',
    },
    {
      company: 'Umbler',
      companyKey: 'umbler1',
      href: 'https://www.umbler.com/br',
      logoUrl: '/work/umbler.webp',
    },
    {
      company: 'Umbler',
      companyKey: 'umbler2',
      href: 'https://www.umbler.com/br',
      logoUrl: '/work/umbler.webp',
    },
  ],
  // Education
  education: [
    {
      school: 'IFSul',
      schoolKey: 'ifsul',
      href: 'https://www.ifsul.edu.br/',
      logoUrl: '/education/ifsul.webp',
    },
    {
      school: 'Descomplica',
      schoolKey: 'descomplica',
      href: 'https://descomplica.com.br/',
      logoUrl: '/education/descomplica.webp',
    },
  ],
  // Certificates
  certificates: [
    {
      certificate: 'Next.js 15 & React - The Complete Guide',
      certificateHref:
        'https://www.udemy.com/certificate/UC-4133e657-3a1e-47ce-a660-3f7a3e0e68c0/',
      href: 'https://www.udemy.com',
      logoUrl: '/education/udemy.webp',
    },
    {
      certificate: 'Flask: avançando no desenvolvimento web com Python',
      certificateHref:
        'https://cursos.alura.com.br/certificate/isaachermel/flask-desenvolvimento-web',
      href: 'https://www.alura.com.br/',
      logoUrl: '/education/alura.webp',
    },
    {
      certificate: 'Flask: crie uma webapp com Python',
      certificateHref:
        'https://cursos.alura.com.br/certificate/isaachermel/flask-crie-webapp-python',
      href: 'https://www.alura.com.br/',
      logoUrl: '/education/alura.webp',
    },
  ],
  // Skills
  skills: {
    tech: [
      'React',
      'Next',
      'Vue',
      'Node',
      'Nest',
      'Jest',
      'Flask',
      'Python',
      'TypeScript',
      'SEO',
      'CI/CD',
      'Docker',
    ],
    organizational: ['scrum', 'kanban', 'code-doc', 'tech-research'],
    languages: ['pt', 'en'],
  },
  // Projects
  projects: [
    {
      videoUrl: 'https://cdn.magicui.design/bento-grid.mp4',
      href: 'https://magicui.design/',
      title: 'MagicUI',
      projectKey: 'magic',
      links: [
        {
          type: 'Website',
          icon: <GlobeIcon />,
          href: 'https://magicui.design/',
        },
        {
          type: 'Source',
          icon: <Github />,
          href: 'https://github.com/magicuidesign/magicui',
        },
      ],
      skills: ['React', 'Next', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    },
    // H3 Lint
    {
      bannerImageUrl: '/projects/h3-lint.webp',
      href: 'https://github.com/h3rmel/h3-lint',
      title: 'H3 Lint',
      projectKey: 'h3-lint',
      links: [
        {
          type: 'Source',
          icon: <Github />,
          href: 'https://github.com/h3rmel/h3-lint',
        },
      ],
      skills: ['ESLint', 'Prettier', 'TypeScript', 'React', 'Next', 'Vue'],
    },
    // Code Hub
    {
      bannerImageUrl: '/projects/code-hub.webp',
      href: 'https://github.com/h3rmel/code-hub/',
      title: 'Code Hub',
      projectKey: 'code-hub',
      links: [
        {
          type: 'Source',
          icon: <Github />,
          href: 'https://github.com/h3rmel/code-hub/',
        },
      ],
      skills: ['TypeScript', 'Python', 'React', 'Next', 'Nest', 'Flask'],
    },
    // Cash In Hand
    {
      bannerImageUrl: '/projects/cash-in-hand.webp',
      href: 'https://github.com/h3rmel/cash-in-hand',
      title: 'Cash In Hand',
      projectKey: 'cash-in-hand',
      links: [
        {
          type: 'Website',
          icon: <GlobeIcon />,
          href: 'https://cash-in-hand.vercel.app/',
        },
        {
          type: 'Source',
          icon: <Github />,
          href: 'https://github.com/h3rmel/cash-in-hand',
        },
      ],
      skills: ['React', 'Next', 'TypeScript', 'Clerk', 'Drizzle', 'Shadcn UI'],
    },
  ],
  // Contact
  contact: {
    email: 'mailto:juniorvlogs230@gmail.com',
    whatsApp: 'https://wa.me/558497015436',
    social: [
      {
        href: 'https://github.com/zzjunior',
        icon: Icons.github,
        label: 'GitHub',
      },
      {
        href: 'mailto:juniorvlogs230@gmail.com',
        icon: Icons.email,
        label: 'Email',
      },
      {
        href: 'https://linkedin.com/in/zjúniorsantos',
        icon: Icons.linkedin,
        label: 'LinkedIn',
      },
    ],
  },
};
