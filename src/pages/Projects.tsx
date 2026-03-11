import { Container, Section, Heading } from '../components/layout'
import { projects } from '../data/projects'
import type { Project } from '../types/projects'

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article class="project-featured">
      <div class="project-featured__media" aria-hidden />
      <div class="project-featured__body">
        <Heading level={2}>{project.name}</Heading>
        <p class="project-featured__description">{project.description}</p>
        {project.tags.length > 0 && (
          <ul class="project-featured__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div class="project-featured__links">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article class="project-card">
      <div class="project-card__image" aria-hidden />
      <div class="project-card__content">
        <Heading level={3}>{project.name}</Heading>
        <p>{project.description}</p>
        {project.tags.length > 0 && (
          <ul class="project-card__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div class="project-card__links">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              URL
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/**
 * Projects page: featured project hero and list of project cards.
 */
export function Projects() {
  const featured = projects.find((p) => p.featured)
  const list = projects.filter((p) => !p.featured)

  return (
    <>
      <Section>
        <Container>
          <Heading level={1}>Projects</Heading>
          <p class="projects-intro">
            Selected work from this entity. Each card links to repo and/or live
            site when available.
          </p>
        </Container>
      </Section>

      {featured && (
        <Section>
          <Container class="project-featured-wrap">
            <FeaturedProject project={featured} />
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <ul class="project-list" aria-label="Project list">
            {list.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
