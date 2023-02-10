import { Link } from "@mui/material";
import Logo from "../Logo";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    const navItems = [
        { name: 'Sobrem mim ', link: '#about' },
        { name: 'Tecnologias ', link: '#techs' },
        { name: 'Projetos ', link: '#projects' },
        { name: 'Contato ', link: '#contact' },
    ];

    const socialMidias = [
        { icon: <GitHubIcon />, link: "https://github.com/GabrielWaltmann" },
        { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/gabrielwaltmann" },
        { icon: <WhatsAppIcon />, link: "https://wa.me/+5547996153009/" },
        { icon: <InstagramIcon />, link: "https://www.instagram.com/waltmanngabriel/" },
    ]

    return (
        <div id="footer">
            <Logo />
            
            <nav>
                {navItems.map((item) => (
                    <Link key={item.name} href={item.link}
                    > {item.name} </Link>
                ))}
            </nav>

            <ul>
                {socialMidias.map((media) => {
                    return (
                        <li>
                            <Link 
                            href={media.link}
                            target="_blank"
                            >
                                {media.icon}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <p>© 2023 Gabriel Waltmann. Todos os direitos reservados.</p>
        </div>
    )
}