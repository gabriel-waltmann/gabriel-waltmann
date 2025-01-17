import { Chip } from "@mui/material";
import { Plus, Trash } from "@phosphor-icons/react";
import LoadingPrimary from "@/components/loading/primary";
import TypographyParagraph from "@/components/typography/paragraph";
import { TFormProjectTabTechProps } from "@/hooks/components/form/project/tabs/tech/useFormProjectTabTech";
import ButtonChip from "@/components/button/chip";

export default function FormProjectTabTech(props: TFormProjectTabTechProps): JSX.Element {
  const { 
    techAlreadyExists,
    states,
    actions,
   } = props;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
      {states.loadProjectTechsLoading && <LoadingPrimary /> }

      <section>
        <TypographyParagraph
          value="Techs do projeto"
          style={{ fontWeight: "bold" }}
        />

        <ul style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
          {!states.loadProjectTechsLoading && states.projectTechs.map((projectTech) => (
            <li key={projectTech.id + "projectTech"}>
              <ButtonChip
                value={projectTech.tech.name}
                variant="remove"
                onClick={() => actions.onDeleteProjectTech(projectTech.id)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <TypographyParagraph
          value="Techs disponiveis"
          style={{ fontWeight: "bold" }}
        />

        <ul style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
          {!states.loadProjectTechsLoading && states.techs
            .filter((tech) => !techAlreadyExists(tech.id))
            .map((tech) => (
              <li key={tech.id + "tech"}>
                <ButtonChip
                  value={tech.name}
                  onClick={() => actions.onCreateProjectTech(tech.id)}
                />
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}