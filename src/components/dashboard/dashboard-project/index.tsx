import { ProjectEntity } from "@/entities/project/ProjectEntity";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type TProps = Readonly<{
  project: ProjectEntity,
  onClick: (project: ProjectEntity) => void
}>;
export default function DashboardProjectCard(props: TProps)  {
  return (
    <Card sx={{ height: "180px", width: "100%", cursor: "pointer"}}>
        <CardContent>
          <CardActionArea onClick={() => props.onClick(props.project)}>
            <Typography gutterBottom variant="h5" component="div">
              {props.project.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.project.description}
            </Typography>
          </CardActionArea>
        </CardContent>
    </Card>
  )
}