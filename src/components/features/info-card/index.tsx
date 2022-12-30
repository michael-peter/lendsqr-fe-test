import {
  IconContainerColor,
  InfoCardProps,
} from "../../../utils/constants/info_cards";
import classes from "./info-card.module.scss";

export default function InfoCard(props: InfoCardProps) {
  const { icon: Icon } = props;
  const iconContainerClassName = createIconContainerClassName(
    classes,
    props.color
  );

  return (
    <div className={classes.wrapper}>
      <div className={iconContainerClassName}>
        <Icon />
      </div>

      <p className={classes.sub_text}>{props.sub}</p>

      <h3 className={classes.label}>{props.label}</h3>
    </div>
  );
}

function createIconContainerClassName(
  classes: CSSModuleClasses,
  color: IconContainerColor
): string {
  let className = `${classes.icon_container} `;

  switch (color) {
    case "purple":
      className += classes.icon_container_purple;
      break;
    case "crimson":
      className += classes.icon_container_crimson;
      break;
    case "red":
      className += classes.icon_container_red;
      break;
    default:
      className += classes.icon_container_purple;
      break;
  }

  return className;
}
