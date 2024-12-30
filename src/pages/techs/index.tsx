import TypographyCaption from "@/components/typography/caption";
import { TechEntity } from "@/entities/TechEntity";
import * as techsMiddleware from "@/middlewheres/techs"
import { ImageList, ImageListItem } from "@mui/material";
import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";

const ulStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  width: 656, 
  margin: "0 auto", 
  marginTop: "1rem",
  gap: "1rem"
}

const liStyle: CSSProperties = {
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
  borderRadius: "1rem",
}

const captionStyle: CSSProperties = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  padding: "0.5rem",
  borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem"
}

const aStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  textAlign: "center",
}

export default function TechsPage() {
  const [techs, setTechs] = useState<TechEntity[]>([]);

  const handleTechs = async () => {
    const techs = await techsMiddleware.retrieves();

    setTechs(techs);
  }

  useEffect(() => {
    handleTechs();
  }, []);
  
  return (
<ul style={ulStyle}>
  {techs.map((tech) => (
    <li style={liStyle} key={tech.id}>
      <a href={tech.link.key} style={aStyle} target="_blank">
        <img
          src={tech.file.key}
          alt={tech.name}
          width={120}
          height={120}
          loading="lazy"
        />

        <TypographyCaption styles={captionStyle}>{tech.name}</TypographyCaption>
      </a>
    </li>
  ))}
</ul>
  )
}