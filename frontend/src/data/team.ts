export interface TeamMember {
  name: string
  role: string
  /**
   * Optional photo. To add a photo for a team member:
   *   1. Drop the image file into  public/images/team/
   *   2. Set `image` to the path, e.g. '/images/team/anil-sharma.jpg'
   * If left undefined, a clean initials avatar is shown automatically.
   */
  image?: string
  linkedin?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Anil Sharma',
    role: 'Founder & CEO',
    // image: '/images/team/anil-sharma.jpg',
  },
  {
    name: 'Amod Pangare',
    role: 'Co-founder & Head of Product',
    // image: '/images/team/amod-pangare.jpg',
  },
  {
    name: 'Partha Santra',
    role: 'Head of Engineering',
    // image: '/images/team/partha-santra.jpg',
  },
]
