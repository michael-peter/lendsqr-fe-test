import classes from "./iconbutton.module.scss";

export default function IconButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className={`${classes.button} ${
        Boolean(props.className) && props.className
      }`}
    >
      {props.children}
    </button>
  );
}
