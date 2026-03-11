/**
 * Represents a single project in the portfolio.
 * @public
 */
export interface Project {
  /** Unique identifier */
  id: string
  /** Display name */
  name: string
  /** Short description for cards and meta */
  description: string
  /** Optional image URL or placeholder key */
  image?: string
  /** Tags for filtering or display */
  tags: string[]
  /** Link to source repository */
  repoUrl?: string
  /** Link to live site or demo */
  liveUrl?: string
  /** When true, this project is shown in the featured hero area */
  featured?: boolean
}
