ace.define("ace/theme/twilight",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

    exports.isDark = true;
    exports.cssClass = "js-twilight";
    exports.cssText = ".js-twilight .ace_gutter {\
background: #232323;\
color: #E2E2E2\
}\
.js-twilight .ace_print-margin {\
width: 1px;\
background: #232323\
}\
.js-twilight {\
background-color: #141414;\
color: #F8F8F8\
}\
.js-twilight .ace_cursor {\
color: #A7A7A7\
}\
.js-twilight .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20)\
}\
.js-twilight.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #141414;\
}\
.js-twilight .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.js-twilight .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25)\
}\
.js-twilight .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.031)\
}\
.js-twilight .ace_gutter-active-line {\
background-color: rgba(255, 255, 255, 0.031)\
}\
.js-twilight .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(221, 240, 255, 0.20)\
}\
.js-twilight .ace_invisible {\
color: rgba(255, 255, 255, 0.25)\
}\
.js-twilight .ace_keyword,\
.js-twilight .ace_meta {\
color: #CDA869\
}\
.js-twilight .ace_constant,\
.js-twilight .ace_constant.ace_character,\
.js-twilight .ace_constant.ace_character.ace_escape,\
.js-twilight .ace_constant.ace_other,\
.js-twilight .ace_heading,\
.js-twilight .ace_markup.ace_heading,\
.js-twilight .ace_support.ace_constant {\
color: #CF6A4C\
}\
.js-twilight .ace_invalid.ace_illegal {\
color: #F8F8F8;\
background-color: rgba(86, 45, 86, 0.75)\
}\
.js-twilight .ace_invalid.ace_deprecated {\
text-decoration: underline;\
font-style: italic;\
color: #D2A8A1\
}\
.js-twilight .ace_support {\
color: #9B859D\
}\
.js-twilight .ace_fold {\
background-color: #AC885B;\
border-color: #F8F8F8\
}\
.js-twilight .ace_support.ace_function {\
color: #DAD085\
}\
.js-twilight .ace_list,\
.js-twilight .ace_markup.ace_list,\
.js-twilight .ace_storage {\
color: #F9EE98\
}\
.js-twilight .ace_entity.ace_name.ace_function,\
.js-twilight .ace_meta.ace_tag,\
.js-twilight .ace_variable {\
color: #AC885B\
}\
.js-twilight .ace_string {\
color: #8F9D6A\
}\
.js-twilight .ace_string.ace_regexp {\
color: #E9C062\
}\
.js-twilight .ace_comment {\
font-style: italic;\
color: #5F5A60\
}\
.js-twilight .ace_variable {\
color: #7587A6\
}\
.js-twilight .ace_xml-pe {\
color: #494949\
}\
.js-twilight .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\
}";

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
    ace.require(["ace/theme/twilight"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
