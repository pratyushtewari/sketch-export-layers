import sketch from 'sketch'
const Css = require('json-to-css')

export default function onRun(context) {
  sketch.UI.message("Exporting ... Please Wait");

  var document = sketch.getSelectedDocument()
  var selection = document.selectedLayers

  var spec = {}
  spec["img:hover"] = {
      "outline": 0,
      "box-shadow": "0 0 0 1px #BD10E0"
  } 
  spec['[data-name="PTEWARIDescription"] > img '] = {"display": "none", "top": "0 !important"}
  spec['img.selected']={"box-shadow": "0 0 0 1px #00ff2d"}

  // function saveToClipboard(string) {
  //   var pasteBoard = NSPasteboard.generalPasteboard()
  //   pasteBoard.clearContents()
  //   pasteBoard.setString_forType(string, NSStringPboardType)
  // }

  function saveJSONObjToFile(jsonObj, pathString) {
    var file = NSString.stringWithString(JSON.stringify(jsonObj, null, "\t"));
    var path = NSString.alloc().initWithString_(pathString).stringByExpandingTildeInPath();
    var url = NSURL.fileURLWithPath_(path);
    file.writeToFile_atomically_encoding_error(url.path(),
      true, NSUTF8StringEncoding, null)
  }

  function saveJSONStringToFile(jsonString, pathString) {
    var path = NSString.alloc().initWithString_(pathString).stringByExpandingTildeInPath();
    var url = NSURL.fileURLWithPath_(path);

    jsonString.writeToFile_atomically_encoding_error(url.path(),
      true, NSUTF8StringEncoding, null)
  }


  function exportIndividualLayer(object) {

    if (object.type == 'Group' && (object.name.toLowerCase().startsWith("ico-") || object.name.toLowerCase().startsWith("image-"))) {
      exportandSpec(object)
      // Do return here since you dont want to continue further down the group
      return;
    }
    if (object.layers && object.layers.length) {
      // iterate through the children
      object.layers.forEach(exportIndividualLayer)
    }

    exportandSpec(object)
    // recursive return here (no need to write return explicitly since we dont use the result from previous recursion)
  }
  
  function exportandSpec(layer) {
    // return if the layer is hidden
    if (layer.hidden) return;
    // Because the text export in sketch is broken and it does not export the empty space.
    // if (layer.type == "text") {
    //   exportLayerWithPageRect(layer, document, 'png', '1', )
    //   var slice = MSSliceLayer.new();
    //   var parent = layer.parentGroup();
    //   parent.addLayers([slice]);
    // }

    if (layer.type != "Group" || layer.name.toLowerCase().startsWith("ico-") || layer.name.toLowerCase().startsWith("image-") || layer.name.toLowerCase().startsWith("@")) {
      
      // export as their id
      var path = "~/Desktop/" + currentSelectionLayer.name
      var options = {
        output: path,
        'use-id-for-name': true,
        overwriting: true,
        trimming: false
      }
      sketch.export(layer, options)
    }

    // Add to the spec global object
    var key = "#PTEWARI" + layer.id.replace(/-/g, "");

    spec[key] = {
      left: layer.frame.x + "px",
      top: layer.frame.y + "px",
      position: "absolute",
    }

    if(layer.type == "Group") {
      // spec[key].height =  layer.frame.height + "px";
      // spec[key].width =  layer.frame.width + "px";
    }
  }
  
  var currentSelectionLayer
  selection.forEach(function (layer, i) {
    var path = "~/Desktop/" + layer.name
    currentSelectionLayer = layer
    exportIndividualLayer(layer)

    // spec is global set from exportandSpec function
    // Remove the top and left for the selected group so that the whole group is not positioned up top
    spec["#PTEWARI" + layer.id.replace(/-/g, "")] = {
      left: "0px",
      right: "0px"
    }
    saveJSONObjToFile(spec, path + "/style.json")

    var jsonData = NSJSONSerialization.dataWithJSONObject_options_error_(layer.sketchObject.treeAsDictionary(), 0, nil);
    var jsonString = NSString.alloc().initWithData_encoding_(jsonData, NSUTF8StringEncoding);
    saveJSONStringToFile(jsonString, path + "/data.json")

    var indexhtml = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="myjs.js"></script>
          <link rel="stylesheet" href="data.css">
        </head>
        <body>
          <div id="main" style="padding: 20px; position: relative;">      
        </div>
        </body>
      </html>`;
    var objcStr = NSString.stringWithFormat("%@", indexhtml);    
    saveJSONStringToFile(objcStr, path + "/index.html")

    var css = NSString.stringWithFormat("%@", Css.of(spec));
    saveJSONStringToFile(css, path + "/data.css")

    var myjs = `


    function layer2Html(layer) {
      var html;
      if (layer["<class>"] == "MSLayerGroup" && !(layer.name.toLowerCase().startsWith("ico-") || layer.name.toLowerCase().startsWith("image-") || layer.name.toLowerCase().startsWith("@"))) {
        html = document.createElement("div");
      } else {
        html = document.createElement("img");
        html.setAttribute("src", layer.objectID + ".png");
      }
      html.setAttribute("id", "PTEWARI" + layer.objectID.replace(/-/gi, ""));
      html.setAttribute("data-name", "PTEWARI" + layer.name);
      if (layer.name.toLowerCase().startsWith("ico-") || layer.name.toLowerCase().startsWith("image-") || layer.name.toLowerCase().startsWith("@")) {
        return html;
      }
      if (layer.layers && layer.layers.length) {
        layer.layers.forEach(layer => {
          if (html.nodeName != "IMG") {
            html.appendChild(layer2Html(layer))
          }
        });
      }
      return html;
    }
    $(document).ready(function () {
      $.getJSON("./data.json")
      .done(function (data) {
        var html = layer2Html(data);
        document.getElementById("main").appendChild(html);
        $("img").click(function (e) {    
          $("img").removeClass("selected")
          let name = $(this).addClass("selected").attr("data-name");
          $('[data-name="PTEWARIDescription"] > img').hide();
          let image = '[data-name="PTEWARIDescription"] > img[data-name="' + name + '"]';
          $(image).show();
        });
      });
    });
    `
    var myjsjs = NSString.stringWithFormat("%@", myjs);
    saveJSONStringToFile(myjsjs, path + "/myjs.js");
  });
  sketch.UI.message("Export is successfull 🙌")
}