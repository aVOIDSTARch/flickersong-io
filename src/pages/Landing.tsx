import { Container, Section, Heading } from '../components/layout'

/**
 * Landing page: hero, company philosophy, and teaser to projects.
 */
export function Landing() {
  return (
    <>
      <Section class="landing-hero">
        <div class="landing-hero__visual" aria-hidden />
        <Container>
          <Heading level={1}>Flickersong</Heading>
          <p class="landing-hero__tagline">
            Craft and clarity in software.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading level={2}>Philosophy</Heading>
          <p class="landing-philosophy">
            We focus on minimal, purposeful solutions: clean interfaces, robust
            systems, and code that stays maintainable. Every project reflects
            that balance between simplicity and capability.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading level={2}>Current work</Heading>
          <p>
            Explore ongoing and past projects—from tools to products—that
            embody this approach.
          </p>
          <a href="/projects" class="landing-cta">
            View projects
          </a>
        </Container>
      </Section>
    </>
  )
}
