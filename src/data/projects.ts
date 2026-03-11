import type { Project } from '../types/projects'

/** Static project list. Replace with API or CMS later. */
export const projects: Project[] = [
  {
    id: 'featured-one',
    name: 'Featured Project',
    description:
      'A flagship project that demonstrates core capabilities and design philosophy. Replace with your first real project.',
    image: undefined,
    tags: ['TypeScript', 'Preact', 'Vite'],
    repoUrl: 'https://github.com',
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'project-two',
    name: 'Project Two',
    description: 'Short description for the second project. Add repo and live URLs as needed.',
    tags: ['Web'],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'project-three',
    name: 'Project Three',
    description: 'Another project card. Image, tags, and links are optional.',
    tags: [],
  },
]
