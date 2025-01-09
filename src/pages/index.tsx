import TypographyParagraph from "@/components/typography/paragraph";
import { calcAge } from "@/utils/math/calc-age";
import { getTotalWorkTime } from "@/utils/math/get-work-time";
import { CSSProperties } from "react";

const articleStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1rem",
};

type TProps = Readonly<{}>;
export default function IndexPage(props: TProps) {
  const age = calcAge(new Date("2004-10-04"));
  const totalWorkTime = getTotalWorkTime(2022);

  return (
    <article style={articleStyles}>
      <TypographyParagraph>
        Olá, me chamo Gabriel Waltmann, moro em Campo Alegre - SC, tenho {age}{" "}
        anos e trabalho com desenvolvimento e manutenção de sistemas. Há{" "}
        {totalWorkTime} anos busco desenvolver soluções robustas e escaláveis
        que atendam aos requisitos do cliente.
      </TypographyParagraph>

      <TypographyParagraph>
        No backend, tenho conhecimentos em Node.js, Express, TypeScript, MongoDB
        e PostgreSQL, Java e Spring Boot. No frontend, tenho conhecimentos em
        React, Next.js, TypeScript e CSS. Além disso, tenho conhecimentos em
        Git, Linux e Docker.
      </TypographyParagraph>
    </article>
  );
}
