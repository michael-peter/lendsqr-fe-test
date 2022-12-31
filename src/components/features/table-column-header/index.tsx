import { FilterIcon } from "../../icons";
import { IconButton } from "../../input";
import classes from "./table-column-header.module.scss";

interface TableColumnHeaderProps {
  label: string;
}

export default function TableColumnHeader(props: TableColumnHeaderProps) {
  return (
    <div className={classes.wrapper}>
      <span>{props.label}</span>
      <IconButton>
        <FilterIcon />
      </IconButton>
    </div>
  );
}
