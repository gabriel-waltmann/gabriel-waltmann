import TypographyParagraph from "@/components/typography/paragraph";
import { usePageIndex } from "@/hooks/pages/usePageIndex";

export default function PageIndex() {
  const { articleStyles, age, totalWorkTime } = usePageIndex();

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
