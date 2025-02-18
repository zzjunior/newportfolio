type LinkType = 'Website' | 'Source';

type Project = {
  bannerImageUrl?: string;
  videoUrl?: string;
  href: string;
  title: string;
  projectKey: string;
  links: {
    type: LinkType;
    icon: React.ReactNode;
    href: string;
  }[];
  skills: string[];
};

type ProjectCardProps = Readonly<Project>;
