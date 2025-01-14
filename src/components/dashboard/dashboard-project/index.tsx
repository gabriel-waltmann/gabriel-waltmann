import TypographyParagraph from "@/components/typography/paragraph";
import TypographySubtitle from "@/components/typography/subtitle";
import { ProjectEntity } from "@/entities/project/ProjectEntity";

type TProps = Readonly<{
  project: ProjectEntity;
  onClick: (project: ProjectEntity) => void;
}>;
export default function DashboardProjectCard(props: TProps) {
  return (
    <button
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: ".8rem",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
      onClick={() => props.onClick(props.project)}
    >
      <TypographySubtitle value={props.project.title} />

      <TypographyParagraph value={props.project.description} />
    </button>
  );
}
