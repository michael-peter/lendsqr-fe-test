import classes from "./button.module.scss";

type ButtonVariant = "contained" | "outlined" | "highlight" | "plain";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: ButtonVariant;
}

export default function Button(props: ButtonProps) {
  const className = createClassName(classes, props.variant);
  const { startIcon: StartIcon, endIcon: EndIcon, ...domProps } = props;

  return (
    <button
      {...domProps}
      className={`${className} ${Boolean(props.className) && props.className}`}
    >
      {Boolean(props.startIcon) && StartIcon}
      {props.children}
      {Boolean(props.endIcon) && EndIcon}
    </button>
  );
}

function createClassName(
  classes: CSSModuleClasses,
  variant?: ButtonVariant
): string {
  let className = `${classes.button} `;
  switch (variant) {
    case "outlined":
      className += classes.button_outlined;
      break;
    case "highlight":
      className += classes.button_highlight;
      break;
    case "plain":
      className += classes.button_plain;
      break;
    default:
      className += classes.button_contained;
      break;
  }

  return className;
}
