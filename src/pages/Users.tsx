import InfoCard from "../components/features/info-card";
import Layout from "../components/layouts/layout";
import { infoCards } from "../utils/constants/info_cards";
import classes from "../assets/styles/users.module.scss";
import { Table } from "../components/display/table";

export default function Users() {
  return (
    <Layout>
      <div className={classes.wrapper}>
        <h1 className={classes.header}>Users</h1>

        <section className={classes.info_cards_container}>
          {infoCards.map((card) => (
            <InfoCard key={card.color} {...card} />
          ))}
        </section>

        <Table />
      </div>
    </Layout>
  );
}
