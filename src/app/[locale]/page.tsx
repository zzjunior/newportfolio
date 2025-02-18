import { DraftingCompass, Laptop, NotebookPen } from 'lucide-react';

import { Sections, SectionsProps } from '@/components/sections';

import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  SkillsAndProjects,
} from '@/sessions';

const sections: SectionsProps = {
  sections: [
    {
      label: 'skills-and-projects',
      icon: <DraftingCompass />,
      children: <SkillsAndProjects />,
    },
    {
      label: 'experience',
      icon: <Laptop />,
      children: <Experience />,
    },
    {
      label: 'education',
      icon: <NotebookPen />,
      children: <Education />,
    },
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Sections {...sections} />
      <Contact />
    </>
  );
}
