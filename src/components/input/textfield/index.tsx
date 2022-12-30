import classes from "./textfield.module.scss";

export default function Textfield(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className={`${classes.input} ${
        Boolean(props.className) && props.className
      }`}
    />
  );
}
