import { Layout } from "../components/layouts";
import classes from "../assets/styles/404.module.scss";

export default function Error404() {
  return (
    <Layout>
      <div className={classes.error_404_wrapper}>
        <h1>404</h1>
      </div>
    </Layout>
  );
}
