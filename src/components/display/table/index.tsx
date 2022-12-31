import classes from "./table.module.scss";

export interface TableColumnType {
  field: string;
  label: React.ReactNode;
  width: string;
}

export interface TableRowType {
  id: string;
  [key: string]: React.ReactNode;
}

interface TableProps {
  rows: TableRowType[];
  columns: TableColumnType[];
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
