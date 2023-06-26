import React, { createContext } from "react"
import Button from "@material-ui/core/Button"
export var HeaderButtonContext = createContext()
export default (function (_ref) {
  var name = _ref.name,
    Icon = _ref.Icon,
    hideSave = _ref.hideSave
  return React.createElement(
    HeaderButtonContext.Consumer,
    null,
    function (_ref2) {
      var onHeaderButtonClick = _ref2.onHeaderButtonClick
      return React.createElement(
        Button,
        {
          onClick: function onClick() {
            return onHeaderButtonClick(name)
          },
          style: {
            width: 120,
            margin: 2,
            display: hideSave ? "none" : "block",
          },
        },
        React.createElement(
          "div",
          null,
          React.createElement(Icon, {
            style: {},
          }),
          React.createElement(
            "div",
            {
              style: {
                fontWeight: "bold",
              },
            },
            name
          )
        )
      )
    }
  )
})
