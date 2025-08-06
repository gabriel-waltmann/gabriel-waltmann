import ButtonFile from "@/components/button/file";
import TableBankToNotion from "@/components/table/bank-to-notion";
import TypographyTitle from "@/components/typography/title";
import { TPageDashboardFinanceImportProps, usePageDashboardFinanceImport } from "@/hooks/pages/dashboard/finance-import/usePageDashboardFinanceImport";

export default function PageDashboardBankToNotion(props: TPageDashboardFinanceImportProps) {
  const { headerStyle, ulStyle, onUploadInterBank, onUploadNubank, logs } = usePageDashboardFinanceImport(props);

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