import * as React from "react";
import {
  Link,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { TechEntity } from "@/entities/TechEntity";
import { Pencil } from "@phosphor-icons/react";
import { useScreen } from "@/hooks/useScreen";

type TProps = Readonly<{
  tech: TechEntity;
  onClick: (tech: TechEntity) => void;
}>;
export default function DashboardTechCard(props: TProps) {
  const { isMobile } = useScreen();

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => props.onClick(props.tech)}>
          <Pencil />
        </IconButton>
      }
      disablePadding
    >
      {props.tech.file && (
        <ListItemAvatar>
          <Avatar alt={props.tech.name} src={props.tech.file.key} />
        </ListItemAvatar>
      )}

      {!isMobile && (
        <ListItemText
          style={{ flex: 1 }}
          id={props.tech.id}
          primary={props.tech.name}
        />
      )}

      <ListItemText style={{ flex: 1 }}>
        <Link target="_blank" href={props.tech.link.key}>
          {props.tech.link.name}
        </Link>
      </ListItemText>
    </ListItem>
  );
}
