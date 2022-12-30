import { Link, useLocation } from "react-router-dom";
import {
  businessesSidebarLinks,
  customersSidebarLinks,
  settingsSidebarLinks,
} from "../../../utils/constants/sidebar_links";
import { BriefcaseIcon, CaretDownIcon, HomeIcon } from "../../icons";
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

      <section className={classes.section}>
        <Link to="/dashboard">
          <div
            className={`${classes.sidebar_link} ${
              isActive("/dashboard") && classes.sidebar_link_active
            }`}
          >
            <HomeIcon />
            <span>Dashboard</span>
          </div>
        </Link>
      </section>

      <section className={classes.section}>
        <p>CUSTOMERS</p>

        {customersSidebarLinks.map((Item) => (
          <Link key={Item.path} to={Item.path}>
            <div
              className={`${classes.sidebar_link} ${
                isActive(Item.path) && classes.sidebar_link_active
              }`}
            >
              <Item.icon />
              <span>{Item.label}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={classes.section}>
        <p>BUSINESSES</p>

        {businessesSidebarLinks.map((Item) => (
          <Link key={Item.path} to={Item.path}>
            <div
              className={`${classes.sidebar_link} ${
                isActive(Item.path) && classes.sidebar_link_active
              }`}
            >
              <Item.icon />
              <span>{Item.label}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={classes.section}>
        <p>SETTINGS</p>

        {settingsSidebarLinks.map((Item) => (
          <Link key={Item.path} to={Item.path}>
            <div
              className={`${classes.sidebar_link} ${
                isActive(Item.path) && classes.sidebar_link_active
              }`}
            >
              <Item.icon />
              <span>{Item.label}</span>
            </div>
          </Link>
        ))}
      </section>
    </aside>
  );
}
