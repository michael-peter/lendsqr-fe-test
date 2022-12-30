import { Link, useLocation } from "react-router-dom";
import { BriefcaseIcon, CaretDownIcon } from "../../icons";
import { Button } from "../../input";
import classes from "./sidebar.module.scss";

export default function Sidebar() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <aside className={classes.aside}>
      <section className={classes.organisation}>
        <Button
          startIcon={<BriefcaseIcon />}
          endIcon={<CaretDownIcon />}
          variant="plain"
        >
          Switch Organisation
        </Button>
      </section>

      <section className={classes.dashboard}>
        <Link to="/dashoboard">
          <div
            className={`${classes.sidebar_link} ${
              isActive("/dashboard") && classes.sidebar_link_active
            }`}
          >
            Dashboard
          </div>
        </Link>
      </section>
    </aside>
  );
}
