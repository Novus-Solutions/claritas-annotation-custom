import { grey } from "@material-ui/core/colors"
export default {
  container: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
    maxHeight: "100vh",
    backgroundColor: "#fff",
    overflow: "hidden",
    "&.fullscreen": {
      position: "absolute",
      zIndex: 99999,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  workspace: {
    backgroundColor: grey[200],
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    height: "100%",
    overflow: "hidden",
  },
  iconToolsContainer: {
    display: "flex",
  },
  imageCanvasContainer: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noImageSelected: {
    fontWeight: "bold",
    fontSize: 32,
    color: grey[500],
  },
  sidebarContainer: {
    width: 300,
    flexShrink: 0,
    overflowY: "auto",
    backgroundColor: grey[100],
    borderLeft: "1px solid ".concat(grey[300]),
    zIndex: 9,
    height: "100%",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
    "&.expanded": {
      display: "none",
    },
  },
  expandContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-30px",
  },
  expandButton: {
    padding: 0,
    width: 30,
    height: 30,
    transform: "rotate(90deg)",
    borderTop: "1px solid #bdbdbd",
    boxShadow: "-1px 2px 5px rgba(0,0,0,0.2)",
    boxSizing: "border-box",
    borderLeft: "1px solid #bdbdbd",
    borderBottom: "1px solid #bdbdbd",
    backgroundColor: "#fff",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    "& .icon": {
      marginTop: -6,
      width: 20,
      height: 20,
      transition: "500ms transform",
      "&.expanded": {
        transform: "rotate(180deg)",
      },
    },
  },
  expandedContent: {
    maxHeight: 300,
    overflowY: "auto",
    "&.noScroll": {
      overflowY: "visible",
      overflow: "visible",
    },
  },
}
