import ButtonFile from "@/components/button/file";
import TableBankToNotion from "@/components/table/bank-to-notion";
import TypographyTitle from "@/components/typography/title";
import { TPageDashboardBankToNotionProps, usePageDashboardBankToNotion } from "@/hooks/pages/dashboard/bank-to-notion/usePageDashboardBankToNotion";

export default function PageDashboardBankToNotion(props: TPageDashboardBankToNotionProps) {
  const { headerStyle, ulStyle, onUploadInterBank, onUploadNubank, logs } = usePageDashboardBankToNotion(props);

  return (
    <>
      <div style={headerStyle}>
        <TypographyTitle value="Bank to Notion" />
      </div>

      <ul style={ulStyle}>
        <li>
          <ButtonFile onChange={onUploadInterBank} label="IMPORTAR INTER" />
        </li>

        <li>
          <ButtonFile onChange={onUploadNubank} label="IMPORTAR NUBANK" />
        </li>
      </ul>

      <div>
        <TypographyTitle value="Logs" />

        <TableBankToNotion logs={logs}  />
      </div>
    </>
  );
} 