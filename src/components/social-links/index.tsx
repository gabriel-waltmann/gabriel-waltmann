import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, List, ListItem, ListItemIcon } from '@mui/material';
export type TSocialLinks = {
  linkedinId?: string,
  instagramId?: string,
  email?: string
}

type TProps = {
  socialLinks: TSocialLinks
}

export default function SocialLinks({ socialLinks }: Readonly<TProps>) {
  const { linkedinId, instagramId, email } = socialLinks

  const links = [
    {
      icon: <LinkedInIcon />,
      link: linkedinId ? `https://www.linkedin.com/${linkedinId}` : null,
    },
    {
      icon: <InstagramIcon />,
      link: instagramId ? `https://www.instagram.com/${instagramId}` : null,
    },
    {
      icon: <MailOutlineIcon />,
      link: email ? `mailto:${email}` : null,
    }
  ]
  
  return (
    <ul style={{ display: 'flex', gap: '1rem' }}>
      {links.map((link, index) => (
        <li key={index+'link'}>
          <Link color='inherit'> {link.link ? link.icon : null}</Link>
        </li>
      ))}
    </ul>
  )
}