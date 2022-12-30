import { SearchIcon } from "../../icons";
import { Button, Textfield } from "../../input";
import classes from "./search.module.scss";

export default function SearchForm() {
  return (
    <form className={classes.form}>
      <Textfield
        className={classes.textfield}
        placeholder="Search for anything"
      />
      <Button className={classes.button}>
        <SearchIcon />
      </Button>
    </form>
  );
}
