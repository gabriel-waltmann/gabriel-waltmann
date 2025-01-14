import { usePageTech } from "@/hooks/pages/usePageTech";
import LinkTech from "@/components/links/link-tech";

export default function TechsPage() {
  const { techs, ulStyle, liStyle } = usePageTech();

  return (
    <ul style={ulStyle}>
      {techs.map((tech) => (
        <li style={liStyle} key={tech.id}>
          <LinkTech tech={tech} />
        </li>
      ))}
    </ul>
  );
}
