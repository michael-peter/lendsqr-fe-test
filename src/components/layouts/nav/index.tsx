import classes from "./nav.module.scss";
import logo from "../../../assets/images/brand-logo.svg";
import { Link } from "react-router-dom";
import { SearchForm } from "../../forms";
import { IconButton } from "../../input";
import { NotificationIcon } from "../../icons";
import { ProfileDropdown } from "../../features";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <Link to="/">
          <img src={logo} alt="Lendsqr logo" />
        </Link>
      </div>

      <div className={classes.actions}>
        <SearchForm />

        <div className={classes.activity}>
          <Link to="/docs">Docs</Link>

          <IconButton>
            <NotificationIcon />
          </IconButton>

          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
}
