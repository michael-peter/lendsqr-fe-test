import classes from "./table.module.scss";

export interface TableColumn {
  field: string;
  label: React.ReactNode;
  width: string;
}

export interface TableRow {
  id: string;
  [key: string]: React.ReactNode;
}

interface TableProps {
  rows: TableRow[];
  columns: TableColumn[];
}

export function Table(props: TableProps) {
  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <thead>
          <tr>
            {props.columns.map((col) => (
              <th key={col.field} style={{ minWidth: col.width }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.rows.map((row) => (
            <tr key={row.id}>
              {props.columns.map((col) => (
                <td
                  key={row.id + "-" + col.field}
                  style={{ minWidth: col.width }}
                >
                  {row![col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
