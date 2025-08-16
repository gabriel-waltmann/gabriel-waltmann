import { usePageTech } from "@/hooks/pages/usePageTech";
import LinkCard from "@/components/link/card";

export default function Page() {
  const { techs, ulStyle, liStyle } = usePageTech();

  return (
    <ul style={ulStyle}>
      {techs.map((tech) => (
        <li style={liStyle} key={tech.id}>
          <LinkCard 
            name={tech.name}
            href={tech.link.key}
            imageSrc={tech.file?.key}
            imageAlt={tech.name}
          />
        </li>
      ))}
    </ul>
  );
}
