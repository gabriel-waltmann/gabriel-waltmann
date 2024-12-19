import { List, ListItem } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface IButtonProp {
    href: string;
    Icon: string;
}

const techButtons: IButtonProp[] = [
    { href: "https://www.docker.com/", Icon: "/techs/docker.png"},
    { href: "https://git-scm.com/", Icon: "/techs/git.png"},
    { href: "https://www.java.com/en/", Icon: "/techs/java.png"},
    { href: "https://mariadb.org/", Icon: "/techs/mariadb.png"},
    { href: "https://www.postgresql.org/docs/current/tutorial-join.html", Icon: "/techs/postgres.png"},
    { href: "https://redis.io/", Icon: "/techs/redis.png"},
    { href: "https://spring.io/projects/spring-boot/", Icon: "/techs/spring.png"},
    { href: "https://www.typescriptlang.org/", Icon: "/techs/typescript.png"},
]

const toolButtons: IButtonProp[] = [
    { href: "https://www.figma.com/", Icon: "/tools/figma.png"},
    { href: "https://www.firebase.com/", Icon: "/tools/firebase.png"},
    { href: "https://www.swagger.com/", Icon: "/tools/swagger.png"},
    { href: "https://code.visualstudio.com/", Icon: "/tools/vscode.png"},
    { href: "https://www.jetbrains.com/idea/", Icon: "/tools/intellij.png"},
    { href: "https://github.com/", Icon: "/tools/github.png"},
    { href: "https://gitlab.com/", Icon: "/tools/gitlab.png"},
]

export default function Techs() {

    return (
        <motion.section
            id="techs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            <h2 className="techsTitle">Tecnologias</h2>

            <List >
                {techButtons.map((tech, index) => {
                    return (
                        <ListItem key={index+"tech"}>
                            <Link
                                target='_blank'
                                href={tech.href}
                                aria-label={tech.href}
                            >
                                <img style={{ width: "48px"}} src={tech.Icon} alt={tech.href} />
                            </Link>
                        </ListItem>
                    )
                })}
            </List>

            <h2 className="toolsTitle">Ferramentas</h2>

            <List >
                {toolButtons.map((tech, index)  => {
                    return (
                        <ListItem key={index+"tool"}>
                            <Link
                                target='_blank'
                                href={tech.href}
                                aria-label={tech.href}
                            >
                                <img style={{ width: "48px"}} src={tech.Icon} alt={tech.href} />
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </motion.section>
    )
}