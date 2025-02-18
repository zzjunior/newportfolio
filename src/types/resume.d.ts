import type { NavbarLink } from './navbar';

type Resume = {
  name: string;
  initials: string;
  description: string;
  url: string;
  avatarUrl: string;
  location: {
    name: string;
    link: string;
  };
  navbar: NavbarLink[];
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  skills: {
    tech: string[];
    organizational: string[];
    languages: string[];
  };
  projects: Project[];
  contact: {
    email: string;
    whatsApp: string;
    social: Contact[];
  };
};
