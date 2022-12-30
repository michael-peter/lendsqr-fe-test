import {
  GroupOutlinedIcon,
  MoneyIcon,
  UsersOutlinedIcon,
} from "../../components/icons";

export type IconContainerColor = "purple" | "blue" | "crimson" | "red";

export interface InfoCardProps {
  color: IconContainerColor;
  icon: () => JSX.Element;
  sub: string;
  label: string;
}

export const infoCards: InfoCardProps[] = [
  { color: "purple", icon: UsersOutlinedIcon, sub: "USERS", label: "2,453" },
  {
    color: "blue",
    icon: GroupOutlinedIcon,
    sub: "ACTIVE USERS",
    label: "2,453",
  },
  {
    color: "crimson",
    icon: UsersOutlinedIcon,
    sub: "USERS WITH LOANS",
    label: "2,453",
  },
  {
    color: "red",
    icon: MoneyIcon,
    sub: "USERS WITH SAVINGS",
    label: "2,453",
  },
];
