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
    }
  ],
  // Experience
  experience: [
    {
      company: 'Teia',
      companyKey: 'teia',
      href: 'https://teiacrm.com.br/',
      logoUrl: '/work/teia.webp',
    },
    {
      company: 'Teia',
      companyKey: 'teia2',
      href: 'https://teiacrm.com.br/',
      logoUrl: '/work/teia.webp',
    },
    {
      company: 'TJ Agency',
      companyKey: 'agencytj',
      href: 'https://agenciatj.com.br/',
      logoUrl: '/work/tj.webp',
    },
    {
      company: 'Umbler',
      companyKey: 'umbler1',
      href: 'https://www.umbler.com/br',
      logoUrl: '/work/umbler.webp',
    },
  ],
  // Education
  education: [
    {
      school: 'UFRN',
      schoolKey: 'ufrn',
      href: 'https://www.ufrn.edu.br/',
      logoUrl: '/education/logo-ufrn.webp',
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
      'PHP',
      'JavaScript',
      'Node',
      'Python',
      'Next',
      'TypeScript',
    ],
    organizational: ['kanban', 'code-doc', 'tech-research'],
    languages: ['pt'],
  },
  // Projects
  projects: [
    {
      bannerImageUrl: '/projects/image.convert.webp',
      href: 'https://conversor.clickston.com.br/',
      title: 'image.convert',
      projectKey: 'imageconvert',
      links: [
        {
          type: 'Website',
          icon: <GlobeIcon />,
          href: 'https://conversor.clickston.com.br/',
        },
        {
          type: 'Source',
          icon: <Github />,
          href: 'https://github.com/zzjunior/image.convert',
        },
      ],
      skills: ['JavaScript', 'HTML', 'CSS'],
    },
    // QR code
    {
      bannerImageUrl: '/projects/qrcode.webp',
      href: 'https://qrcode.clickston.com.br/',
      title: 'QrCode Free',
      projectKey: 'qrcodefree',
      links: [
        {
          type: 'Website',
          icon: <GlobeIcon />,
          href: 'https://qrcode.clickston.com.br/',
        },
        {
          type: 'Source',
          icon: <Github />,
          href: 'https://github.com/zzjunior/QRcodeFree',
        },
      ],
      skills: ['ESLint', 'Prettier', 'TypeScript', 'React', 'Next', 'Vue'],
    },
    // website Teia
    {
      bannerImageUrl: '/projects/website-teia.webp',
      href: 'https://teiacrm.com.br',
      title: 'Website Teia',
      projectKey: 'websiteteia',
      links: [
        {
          type: 'Website',
          icon: <GlobeIcon />,
          href: 'https://teiacrm.com.br',
        },
      ],
      skills: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    }
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
