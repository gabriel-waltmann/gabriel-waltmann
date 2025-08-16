import ButtonFile from "@/components/button/file";
import FinanceImportTable from "@/components/table/finance-import";
import TypographyTitle from "@/components/typography/title";
import { TPageDashboardFinanceImportProps, usePageDashboardFinanceImport } from "@/hooks/pages/dashboard/finance-import/usePageDashboardFinanceImport";

export default function Page(props: TPageDashboardFinanceImportProps) {
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

        <FinanceImportTable logs={logs}  />
      </div>
    </>
  );
} 