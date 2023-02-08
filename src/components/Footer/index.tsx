import { Button, Link } from "@mui/material";
import Logo from "../Logo";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    const navItems = ['Sobrem mim ', 'Tecnologias ', 'Projetos ', 'Contato '];

    return(
        <div id="footer">
            <Logo/>
            <nav>
                {navItems.map((item) => (
                <Link 
                key={item}
                href="#about"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <ul>
                <li>
                    <Link href="https://github.com/GabrielWaltmann" 
                    target="_blank" 
                    >
                        <GitHubIcon />
                    </Link>
                </li>

                <li>
                    <Link href="https://www.linkedin.com/in/gabrielwaltmann" 
                    target="_blank" 
                    >
                        <LinkedInIcon /> 
                    </Link>
                </li>

                <li>
                    <Link href="https://wa.me/+5547996153009/" 
                    target="_blank" 
                    >
                        <WhatsAppIcon /> 
                    </Link>
                </li>

                <li>
                    <Link href="https://www.instagram.com/waltmanngabriel/" 
                    target="_blank" 
                    >
                        <InstagramIcon /> 
                    </Link>
                </li>
            </ul>

            <p>© 2023 Gabriel Waltmann. Todos os direitos reservados.</p>
        </div>
    )
}