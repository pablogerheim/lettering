import "./Button.css";

function Button(props) {
  return (
    <a
      className={`primary-button ${props.className}`}
      href={props.href}
      id={props.id}
      onClick={() => props.setOpen && props.setOpen(true)}
    >
      {props.children}
    </a>
  );
}

export default Button;
