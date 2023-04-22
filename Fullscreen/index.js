import React from "react";
import Fullscreen from "react-full-screen";
export default (function (props) {
  if (!props.enabled) return props.children;
  return React.createElement(Fullscreen, props, props.children);
});