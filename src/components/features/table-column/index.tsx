import { FilterIcon } from "../../icons";
import { IconButton } from "../../input";
import classes from "./table-column.module.scss";

interface TableColumProps {
  label: string;
}

export default function TableColumn(props: TableColumProps) {
  return (
    <div className={classes.wrapper}>
      <span>{props.label}</span>
      <IconButton>
        <FilterIcon />
      </IconButton>
    </div>
  );
}
