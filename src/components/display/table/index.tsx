import classes from "./table.module.scss";

interface TableProps {
  head: React.ReactNode[];
  rows: React.ReactNode[];
}

export function Table() {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>School</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Michael</td>
          <td>+2348136020773</td>
          <td>Lagos, Nigeria</td>
          <td>University of Lagos</td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>+2348136020773</td>
          <td>Lagos, Nigeria</td>
          <td>University of Lagos</td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>+2348136020773</td>
          <td>Lagos, Nigeria</td>
          <td>University of Lagos</td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>+2348136020773</td>
          <td>Lagos, Nigeria</td>
          <td>University of Lagos</td>
        </tr>
      </tbody>
    </table>
  );
}
