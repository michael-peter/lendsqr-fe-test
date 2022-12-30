import {
  BadgePercentIcon,
  BankIcon,
  BriefcaseIcon,
  ChartIcon,
  ClipboardIcon,
  CoinsIcon,
  GalaxyIcon,
  GroupIcon,
  HandshakeIcon,
  LoanIcon,
  MoneyBagIcon,
  SavingsIcon,
  ScrollIcon,
  SlidersIcon,
  TireIcon,
  TransactionsIcon,
  UserCheckIcon,
  UserSettingsIcon,
  UsersIcon,
  UserTimesIcon,
} from "../../components/icons";

interface SidebarLink {
  path: string;
  label: string;
  icon: () => JSX.Element;
}

export const customersSidebarLinks: SidebarLink[] = [
  { path: "/users", label: "Users", icon: UsersIcon },
  { path: "/guarantors", label: "Guarantors", icon: GroupIcon },
  { path: "/loans", label: "Loans", icon: MoneyBagIcon },
  { path: "/decision-models", label: "Decision Models", icon: HandshakeIcon },
  { path: "/savings", label: "Savings", icon: SavingsIcon },
  { path: "/loan-requests", label: "Loan Requests", icon: LoanIcon },
  { path: "/whitelist", label: "Whitelist", icon: UserCheckIcon },
  { path: "/karma", label: "Karma", icon: UserTimesIcon },
];

export const businessesSidebarLinks: SidebarLink[] = [
  { path: "/organization", label: "Organization", icon: BriefcaseIcon },
  { path: "/loan-products", label: "Loan Products", icon: LoanIcon },
  { path: "/savings-products", label: "Savings Products", icon: BankIcon },
  { path: "/fees-and-charges", label: "Fees and Charges", icon: CoinsIcon },
  { path: "/transactions", label: "Transactions", icon: TransactionsIcon },
  { path: "/services", label: "Services", icon: GalaxyIcon },
  {
    path: "/service-account",
    label: "Service Account",
    icon: UserSettingsIcon,
  },
  { path: "/settlements", label: "Settlements", icon: ScrollIcon },
  { path: "/reports", label: "Reports", icon: ChartIcon },
];

export const settingsSidebarLinks: SidebarLink[] = [
  { path: "/preferences", label: "Preferences", icon: SlidersIcon },
  {
    path: "/fees-and-pricing",
    label: "Fees and Pricing",
    icon: BadgePercentIcon,
  },
  { path: "/audit-logs", label: "Audit Logs", icon: ClipboardIcon },
  { path: "/systems-messages", label: "Systems Messages", icon: TireIcon },
];
