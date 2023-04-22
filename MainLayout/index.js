import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../Sidebar";
import ImageCanvas from "../ImageCanvas";
import Header from "../Header";
import IconTools from "../IconTools";
import styles from "./styles";
import useKey from "use-key-hook";
import classnames from "classnames";
import { useSettings } from "../SettingsProvider";
import SettingsDialog from "../SettingsDialog";
import Fullscreen from "../Fullscreen";
var useStyles = makeStyles(styles);
export default (function (_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      RegionEditLabel = _ref.RegionEditLabel;
  var classes = useStyles();
  var settings = useSettings();

  var action = function action(type) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return params.length > 0 ? dispatch(_objectSpread({
        type: type
      }, params.reduce(function (acc, p, i) {
        return acc[p] = args[i], acc;
      }, {}))) : dispatch(_objectSpread({
        type: type
      }, args[0]));
    };
  };

  var currentImage = state.images.find(function (img) {
    return img.src === state.selectedImage;
  });
  useKey(function () {
    return dispatch({
      type: "CANCEL"
    });
  }, {
    detectKeys: [27]
  });
  return React.createElement(Fullscreen, {
    enabled: state.fullScreen,
    onChange: function onChange(open) {
      if (!open) {
        action("HEADER_BUTTON_CLICKED", "buttonName")("Exit Fullscreen");
      }
    }
  }, React.createElement("div", {
    className: classnames(classes.container, state.fullScreen && "Fullscreen")
  }, React.createElement("div", {
    className: classes.headerContainer
  }, React.createElement(Header, {
    onHeaderButtonClick: action("HEADER_BUTTON_CLICKED", "buttonName"),
    inFullScreen: state.fullScreen,
    multipleImages: Boolean(state.images.length > 1),
    title: currentImage ? currentImage.name : "No Image Selected"
  })), React.createElement("div", {
    className: classes.workspace
  }, React.createElement("div", {
    className: classes.iconToolsContainer
  }, React.createElement(IconTools, {
    enabledTools: state.enabledTools,
    showTags: state.showTags,
    selectedTool: state.selectedTool,
    onClickTool: action("SELECT_TOOL", "selectedTool")
  })), React.createElement("div", {
    className: classes.imageCanvasContainer
  }, !state.selectedImage ? React.createElement("div", {
    className: classes.noImageSelected
  }, "No Image Selected") : React.createElement("div", {
    style: {
      height: "100%",
      width: "100%"
    }
  }, React.createElement(ImageCanvas, Object.assign({}, settings, {
    key: state.selectedImage,
    showTags: state.showTags,
    allowedArea: state.allowedArea,
    regionClsList: state.regionClsList,
    regionTagList: state.regionTagList,
    regions: currentImage ? currentImage.regions || [] : [],
    realSize: currentImage ? currentImage.realSize : undefined,
    imageSrc: state.selectedImage,
    pointDistancePrecision: state.pointDistancePrecision,
    createWithPrimary: state.selectedTool.includes("create"),
    dragWithPrimary: state.selectedTool === "pan",
    zoomWithPrimary: state.selectedTool === "zoom",
    showPointDistances: state.showPointDistances,
    onMouseMove: action("MOUSE_MOVE"),
    onMouseDown: action("MOUSE_DOWN"),
    onMouseUp: action("MOUSE_UP"),
    onChangeRegion: action("CHANGE_REGION", "region"),
    onBeginRegionEdit: action("OPEN_REGION_EDITOR", "region"),
    onCloseRegionEdit: action("CLOSE_REGION_EDITOR", "region"),
    onDeleteRegion: action("DELETE_REGION", "region"),
    onBeginBoxTransform: action("BEGIN_BOX_TRANSFORM", "box", "directions"),
    onBeginMovePolygonPoint: action("BEGIN_MOVE_POLYGON_POINT", "polygon", "pointIndex"),
    onAddPolygonPoint: action("ADD_POLYGON_POINT", "polygon", "point", "pointIndex"),
    onSelectRegion: action("SELECT_REGION", "region"),
    onBeginMovePoint: action("BEGIN_MOVE_POINT", "point"),
    onImageLoaded: action("IMAGE_LOADED", "image"),
    RegionEditLabel: RegionEditLabel
  })))), React.createElement("div", {
    className: classes.sidebarContainer
  }, React.createElement(Sidebar, {
    debug: window.localStorage.$ANNOTATE_DEBUG_MODE && state,
    taskDescription: state.taskDescription,
    images: state.images,
    regions: currentImage ? currentImage.regions || [] : [],
    history: state.history,
    currentImage: currentImage,
    labelImages: state.labelImages,
    imageClsList: state.imageClsList,
    imageTagList: state.imageTagList,
    onChangeImage: action("CHANGE_IMAGE", "delta"),
    onSelectRegion: action("SELECT_REGION", "region"),
    onDeleteRegion: action("DELETE_REGION", "region"),
    onSelectImage: action("SELECT_IMAGE", "image"),
    onChangeRegion: action("CHANGE_REGION", "region"),
    onRestoreHistory: action("RESTORE_HISTORY")
  }))), React.createElement(SettingsDialog, {
    open: state.settingsOpen,
    onClose: function onClose() {
      return dispatch({
        type: "HEADER_BUTTON_CLICKED",
        buttonName: "Settings"
      });
    }
  })));
});