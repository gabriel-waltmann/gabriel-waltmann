import { TechEntity } from "@/entities/TechEntity";
import { CSSProperties, useEffect, useState } from "react";
import { useScreen } from "@/hooks/useScreen";
import { TechController } from "@/controller/tech/TechController";

const liStyle: CSSProperties = {
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
  borderRadius: "1rem",
};

export function usePageTech() {
  const [techs, setTechs] = useState<TechEntity[]>([]);
  const { width } = useScreen();
  const techController = new TechController();

  const handleTechs = async () => {
    try {
      const techs = await techController.retrieves();
  
      setTechs(techs);
    } catch {      
      setTechs([]);
    }
  };

  const getGridColumns = (): number => {
    const sizes = [
      // [width, columns]
      [300, 2],
      [400, 3],
      [600, 4],
      [700, 5],
      [800, 6],
    ];

    return sizes.find((size) => size[0] > width)?.[1] ?? 8;
  };

  const ulStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
    margin: "0 auto",
    marginTop: "1rem",
    gap: "1rem",
  };

  useEffect(() => {
    handleTechs();
  }, []);

  return {
    techs,
    ulStyle,
    liStyle,
  };
}
