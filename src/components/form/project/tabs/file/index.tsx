import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import {  Trash } from "@phosphor-icons/react";
import ButtonFile from "@/components/button/file";
import LoadingPrimary from "@/components/loading/primary";
import { TFormProjectTabFileProps } from "@/hooks/components/form/project/tabs/file/useFormProjectTabFile";

export default function FormProjectTabFile(props: TFormProjectTabFileProps): JSX.Element {
  const { states, actions } = props;

  return (
    <div style={{ flex: 1 }}>
      <ImageList
        gap={16}
        cols={1}
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          width: "100%",
        }}
      >
        <ImageListItem>
          <ButtonFile onChange={actions.onCreateProjectFile} />
        </ImageListItem>

        {states.loadProjectFilesLoading && <LoadingPrimary /> }

        {!states.loadProjectFilesLoading && states.projectFiles.map((projectFile) => (
          <ImageListItem key={projectFile.id + "projectFile"}>
            <img
              src={projectFile.file.key}
              alt={projectFile.file.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={projectFile.file.name}
              actionIcon={
                <IconButton
                  onClick={() => actions.onDeleteProjectFile(projectFile.id)}
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${projectFile.file.name}`}
                  className="test-delete-button"
                >
                  <Trash size={24} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}