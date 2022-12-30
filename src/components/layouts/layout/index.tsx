import Nav from "../nav";
import Sidebar from "../sidebar";
import classes from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Nav />
      <div className={classes.wrapper}>
        <Sidebar />
        <main>{props.children}</main>
      </div>
    </>
  );
}
