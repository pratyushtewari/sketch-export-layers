var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/json-to-css/index.js":
/*!*******************************************!*\
  !*** ./node_modules/json-to-css/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/css */ "./node_modules/json-to-css/src/css.js")


/***/ }),

/***/ "./node_modules/json-to-css/src/css.js":
/*!*********************************************!*\
  !*** ./node_modules/json-to-css/src/css.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Css {
  static of (json) {
    const selectors = Object.keys(json)
    return selectors.map((selector) => {
      const definition = json[selector]
      const rules = Object.keys(definition)
      const result = rules.map((rule) => {
        return `${rule}:${definition[rule]}`
      }).join(';')
      return `${selector}{${result}}`
    }).join('\n')
  }
}

module.exports = Css

/***/ }),

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onRun; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);


var Css = __webpack_require__(/*! json-to-css */ "./node_modules/json-to-css/index.js");

function onRun(context) {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Exporting ... Please Wait");
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var selection = document.selectedLayers;
  var spec = {};
  spec["img:hover"] = {
    "outline": 0,
    "box-shadow": "0 0 0 1px #BD10E0"
  };
  spec['[data-name="PTEWARIDescription"] > img '] = {
    "display": "none",
    "top": "0 !important"
  };
  spec['img.selected'] = {
    "box-shadow": "0 0 0 1px #00ff2d" // function saveToClipboard(string) {
    //   var pasteBoard = NSPasteboard.generalPasteboard()
    //   pasteBoard.clearContents()
    //   pasteBoard.setString_forType(string, NSStringPboardType)
    // }

  };

  function saveJSONObjToFile(jsonObj, pathString) {
    var file = NSString.stringWithString(JSON.stringify(jsonObj, null, "\t"));
    var path = NSString.alloc().initWithString_(pathString).stringByExpandingTildeInPath();
    var url = NSURL.fileURLWithPath_(path);
    file.writeToFile_atomically_encoding_error(url.path(), true, NSUTF8StringEncoding, null);
  }

  function saveJSONStringToFile(jsonString, pathString) {
    var path = NSString.alloc().initWithString_(pathString).stringByExpandingTildeInPath();
    var url = NSURL.fileURLWithPath_(path);
    jsonString.writeToFile_atomically_encoding_error(url.path(), true, NSUTF8StringEncoding, null);
  }

  function exportIndividualLayer(object) {
    if (object.type == 'Group' && (object.name.toLowerCase().startsWith("ico-") || object.name.toLowerCase().startsWith("image-"))) {
      exportandSpec(object); // Do return here since you dont want to continue further down the group

      return;
    }

    if (object.layers && object.layers.length) {
      // iterate through the children
      object.layers.forEach(exportIndividualLayer);
    }

    exportandSpec(object); // recursive return here (no need to write return explicitly since we dont use the result from previous recursion)
  }

  function exportandSpec(layer) {
    // return if the layer is hidden
    if (layer.hidden) return; // Because the text export in sketch is broken and it does not export the empty space.
    // if (layer.type == "text") {
    //   exportLayerWithPageRect(layer, document, 'png', '1', )
    //   var slice = MSSliceLayer.new();
    //   var parent = layer.parentGroup();
    //   parent.addLayers([slice]);
    // }

    if (layer.type != "Group" || layer.name.toLowerCase().startsWith("ico-") || layer.name.toLowerCase().startsWith("image-") || layer.name.toLowerCase().startsWith("@")) {
      // export as their id
      var path = "~/Desktop/" + currentSelectionLayer.name;
      var options = {
        output: path,
        'use-id-for-name': true,
        overwriting: true,
        trimming: false
      };
      sketch__WEBPACK_IMPORTED_MODULE_0___default.a.export(layer, options);
    } // Add to the spec global object


    var key = "#PTEWARI" + layer.id.replace(/-/g, "");
    spec[key] = {
      left: layer.frame.x + "px",
      top: layer.frame.y + "px",
      position: "absolute"
    };

    if (layer.type == "Group") {// spec[key].height =  layer.frame.height + "px";
      // spec[key].width =  layer.frame.width + "px";
    }
  }

  var currentSelectionLayer;
  selection.forEach(function (layer, i) {
    var path = "~/Desktop/" + layer.name;
    currentSelectionLayer = layer;
    exportIndividualLayer(layer); // spec is global set from exportandSpec function
    // Remove the top and left for the selected group so that the whole group is not positioned up top

    spec["#PTEWARI" + layer.id.replace(/-/g, "")] = {
      left: "0px",
      right: "0px"
    };
    saveJSONObjToFile(spec, path + "/style.json");
    var jsonData = NSJSONSerialization.dataWithJSONObject_options_error_(layer.sketchObject.treeAsDictionary(), 0, nil);
    var jsonString = NSString.alloc().initWithData_encoding_(jsonData, NSUTF8StringEncoding);
    saveJSONStringToFile(jsonString, path + "/data.json");
    var indexhtml = "<!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"utf-8\"/>\n          <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n          <script src=\"myjs.js\"></script>\n          <link rel=\"stylesheet\" href=\"data.css\">\n        </head>\n        <body>\n          <div id=\"main\" style=\"padding: 20px; position: relative;\">      \n        </div>\n        </body>\n      </html>";
    var objcStr = NSString.stringWithFormat("%@", indexhtml);
    saveJSONStringToFile(objcStr, path + "/index.html");
    var css = NSString.stringWithFormat("%@", Css.of(spec));
    saveJSONStringToFile(css, path + "/data.css");
    var myjs = "\n\n\n    function layer2Html(layer) {\n      var html;\n      if (layer[\"<class>\"] == \"MSLayerGroup\" && !(layer.name.toLowerCase().startsWith(\"ico-\") || layer.name.toLowerCase().startsWith(\"image-\") || layer.name.toLowerCase().startsWith(\"@\"))) {\n        html = document.createElement(\"div\");\n      } else {\n        html = document.createElement(\"img\");\n        html.setAttribute(\"src\", layer.objectID + \".png\");\n      }\n      html.setAttribute(\"id\", \"PTEWARI\" + layer.objectID.replace(/-/gi, \"\"));\n      html.setAttribute(\"data-name\", \"PTEWARI\" + layer.name);\n      if (layer.name.toLowerCase().startsWith(\"ico-\") || layer.name.toLowerCase().startsWith(\"image-\") || layer.name.toLowerCase().startsWith(\"@\")) {\n        return html;\n      }\n      if (layer.layers && layer.layers.length) {\n        layer.layers.forEach(layer => {\n          if (html.nodeName != \"IMG\") {\n            html.appendChild(layer2Html(layer))\n          }\n        });\n      }\n      return html;\n    }\n    $(document).ready(function () {\n      $.getJSON(\"./data.json\")\n      .done(function (data) {\n        var html = layer2Html(data);\n        document.getElementById(\"main\").appendChild(html);\n        $(\"img\").click(function (e) {    \n          $(\"img\").removeClass(\"selected\")\n          let name = $(this).addClass(\"selected\").attr(\"data-name\");\n          $('[data-name=\"PTEWARIDescription\"] > img').hide();\n          let image = '[data-name=\"PTEWARIDescription\"] > img[data-name=\"' + name + '\"]';\n          $(image).show();\n        });\n      });\n    });\n    ";
    var myjsjs = NSString.stringWithFormat("%@", myjs);
    saveJSONStringToFile(myjsjs, path + "/myjs.js");
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Export is successfull 🙌");
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map