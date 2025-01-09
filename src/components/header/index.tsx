import TypographyTitle from "@/components/typography/title";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { CSSProperties } from "react";

const headerStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  gap: "1rem",
};

const figureStyle: CSSProperties = {
  height: "120px",
  width: "120px",
  borderRadius: "50%",
  overflow: "hidden",
};

const ulStyles: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
};

const mailLink = "mailto:gabrielwaltmann@example.com";
const instagramLink = "https://www.instagram.com/waltmanngabriel";
const githubLink = "https://github.com/gabriel-waltmann";
const linkedinLink = "https://www.linkedin.com/in/gabrielwaltmann/";

type TProps = Readonly<{}>;
export default function IndexHeader(props: TProps) {
  return (
    <header style={headerStyle}>
      <figure style={figureStyle}>
        <img
          src="/profile.jpg"
          height="100%"
          width="100%"
          alt="Gabriel Waltmann's profile"
        />
      </figure>

      <article>
        <TypographyTitle>Gabriel Waltmann</TypographyTitle>

        <ul style={ulStyles}>
          <li>
            <a href={mailLink} target="_blank">
              <EnvelopeSimple color="#121212" size={24} />
            </a>
          </li>

          <li>
            <a href={instagramLink} target="_blank">
              <InstagramLogo color="#121212" size={24} />
            </a>
          </li>

          <li>
            <a href={linkedinLink} target="_blank">
              <LinkedinLogo color="#121212" size={24} />
            </a>
          </li>

          <li>
            <a href={githubLink} target="_blank">
              <GithubLogo color="#121212" size={24} />
            </a>
          </li>
        </ul>
      </article>
    </header>
  );
}
