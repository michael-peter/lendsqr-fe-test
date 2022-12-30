import avatar from "../../../assets/images/avatar.png";
import { DropdownIcon } from "../../icons";
import { Button } from "../../input";
import classes from "./profile-dropdown.module.scss";

export default function ProfileDropdown() {
  return (
    <div className={classes.wrapper}>
      <Button
        startIcon={
          <div className={classes.image_container}>
            <img src={avatar} alt="User avatar" />
          </div>
        }
        endIcon={<DropdownIcon />}
        variant="plain"
      >
        <span>Adedeji</span>
      </Button>
    </div>
  );
}
