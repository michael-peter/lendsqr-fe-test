import InfoCard from "../components/features/info-card";
import Layout from "../components/layouts/layout";
import { infoCards } from "../utils/constants/info_cards";
import classes from "../assets/styles/users.module.scss";
import {
  Table,
  TableColumnType,
  TableRowType,
} from "../components/display/table";
import { TableColumnHeader } from "../components/features";

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

        <Table columns={columns} rows={rows} />
      </div>
    </Layout>
  );
}

const columns: TableColumnType[] = [
  {
    field: "organization",
    label: <TableColumnHeader label="Organization" />,

    width: "116px",
  },
  { field: "username", label: "Username", width: "106px" },
  { field: "email", label: "Email", width: "147px" },
  { field: "phone", label: "Phone Number", width: "124px" },
  { field: "date", label: "Date Joined", width: "154px" },
  { field: "status", label: "Status", width: "100px" },
  { field: "action", label: "", width: "20px" },
];

const rows: TableRowType[] = [
  {
    id: "1",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078903721",
    date: "May 15, 2020 10:00 AM",
    status: "inactive",
    action: "...",
  },
  {
    id: "2",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078903721",
    date: "May 15, 2020 10:00 AM",
    status: "inactive",
    action: "...",
  },
  {
    id: "3",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078903721",
    date: "May 15, 2020 10:00 AM",
    status: "inactive",
    action: "...",
  },
];
