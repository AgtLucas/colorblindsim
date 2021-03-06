import { h } from "preact";
import Eye from "preact-feather/dist/icons/eye";
import EyeOff from "preact-feather/dist/icons/eye-off";

const DisabledToggle = ({ disabled, ...otherProps }) => {
  const Icon = disabled ? Eye : EyeOff;
  const label = disabled ? "Enable" : "Disable";
  const color = disabled ? "black" : "white";

  return (
    <button class={disabled ? "" : "disable"} title={label} {...otherProps}>
      <Icon stroke-width="1" size="48" />
    </button>
  );
};

export default DisabledToggle;
