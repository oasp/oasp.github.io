webpackJsonp(["styles"],{

/***/ "./node_modules/prismjs/themes/prism-okaidia.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/prismjs/themes/prism-okaidia.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../raw-loader/index.js!../../postcss-loader/lib/index.js??embedded!./prism-okaidia.css", function() {
			var newContent = require("!!../../raw-loader/index.js!../../postcss-loader/lib/index.js??embedded!./prism-okaidia.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/prismjs/themes/prism-okaidia.css":
/***/ (function(module, exports) {

module.exports = "/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #f8f8f2;\n\tbackground: none;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\n\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: 0.3em;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #272822;\n}\n\n/* Inline code */\n\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #f8f8f2;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #e6db74;\n}\n\n.token.keyword {\n\tcolor: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #fd971f;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n\r\n.framework {\r\n  background-image: url('on_the_flexible_solution.a2445c672cae8bb0348b.png');\r\n  background-size: contain;\r\n  background-position: bottom;\r\n  background-repeat: no-repeat;\r\n  padding-bottom: 100px;\r\n  background-size: 100%;\r\n}\r\n\r\n.framework img {\r\n  width: auto;\r\n  max-height: 60px;\r\n  margin-top: 170px;\r\n}\r\n\r\n.framework p {\r\n  font-size: 14pt;\r\n  color: #9d9d9d;\r\n  font-family: montserrat-Regular;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n}\r\n\r\n.framework p.java {\r\n  color: #222c38;\r\n  text-align: center;\r\n}\r\n\r\n.framework p.javaScript {\r\n  color: #222c38;\r\n}\r\n\r\n.framework p.net {\r\n  color: #222c38;\r\n  text-align: center;\r\n}\r\n\r\n/**     Markdown styles*/\r\n\r\n.framework .markdown p {\r\n  color: #9d9d9d;\r\n  font-family: Montserrat-Regular;\r\n  padding: 20px 0px;\r\n  font-size: 14pt;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.framework .markdown h1 {\r\n  margin-top: 150px;\r\n  color: #222c38;\r\n  font-family: montserrat-Regular;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  padding-bottom: 10px;\r\n  text-align: left;\r\n}\r\n\r\n.framework .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 15px;\r\n  margin: 20px 0px;\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n}\r\n\r\n/**Media syles*/\r\n\r\n@media only screen and (max-width: 1023px) and (min-width: 768px) {\r\n  .framework .markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .framework .markdown h1::after {\r\n    width: 2em;\r\n    left: 8em;\r\n  }\r\n  .framework {\r\n    background-image: none;\r\n  }\r\n  .framework img {\r\n    margin-top: 100px;\r\n  }\r\n  .framework .markdown p {\r\n    padding: 30px 0px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .framework .markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .framework .markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 40%;\r\n  }\r\n  .btn-primary {\r\n    margin-bottom: 40px;\r\n  }\r\n  .mg-top10 {\r\n    margin-top: 10px;\r\n  }\r\n  .framework {\r\n    background-image: none;\r\n  }\r\n  p {\r\n    padding: 10px 0px;\r\n  }\r\n  .framework img {\r\n    margin-top: 70px;\r\n  }\r\n}\r\n\r\n.devonfw {\r\n  background: url('/assets/images/logo.png') center center no-repeat;\r\n  background-color: #4bbdec;\r\n  background-size: contain;\r\n  background-position-x: -140px;\r\n  text-align: right !important;\r\n}\r\n\r\n.devonfw h1 {\r\n  margin-top: 40%;\r\n}\r\n\r\n/**Markdown Styles**/\r\n\r\n.devonfw .markdown h1 {\r\n  color: #ffffff;\r\n  font-family: montserrat-regular;\r\n  font-weight: 500;\r\n}\r\n\r\n.devonfw .markdown p {\r\n  color: #ffffff !important;\r\n  font-style: normal;\r\n  font-family: montserrat-light;\r\n}\r\n\r\n.devonfw .markdown h1::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  right: 15px;\r\n  margin: 10px 0px;\r\n  width: 15%;\r\n  background-color: #ffffff;\r\n  height: 4px;\r\n}\r\n\r\n.devonfw .markdown a {\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n\r\n.devonfw .markdown a:hover {\r\n  border-color: #ffffff;\r\n  color: #4bbdec;\r\n  background-color: #ffffff;\r\n}\r\n\r\n/**Media query*/\r\n\r\n@media only screen and (max-width: 1023px) and (min-width: 768px) {\r\n  .devonfw {\r\n    background-position-x: -250px;\r\n  }\r\n  .devonfw .markdown p {\r\n    text-align: right;\r\n  }\r\n  .devonfw .markdown h1 {\r\n    text-align: right;\r\n  }\r\n  .devonfw .markdown a {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .devonfw {\r\n    text-align: center !important;\r\n  }\r\n  .devonfw h1 {\r\n    margin-top: 10%;\r\n  }\r\n  .devonfw .markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n    position: relative;\r\n    right: 0px;\r\n  }\r\n  .devonfw {\r\n    background-image: none;\r\n  }\r\n  .devonfw img {\r\n    width: 100px;\r\n    padding-top: 40px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.OASP {\r\n  background: url('img_1.15c9dcff69f70a30e389.png') center no-repeat;\r\n  background-color: #4bbdec;\r\n  background-size: cover;\r\n  text-align: left;\r\n  margin-left: -13%;\r\n}\r\n\r\n.OASP .markdown p {\r\n  color: white;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n}\r\n\r\n.OASP .markdown li {\r\n  color: white;\r\n  font-size: 16pt;\r\n  font-family: montserrat-Regular;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 16pt;\r\n  padding: 5px 0px; \r\n  list-style-type: square; \r\n}\r\n\r\n.OASP .markdown a {\r\n  color:white;\r\n  display: initial;\r\n  width: auto;\r\n  margin-bottom: 0px;\r\n  margin-right: 0px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  font-size: 12pt;\r\n  font-family: Montserrat-Regular;\r\n  font-style: normal;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  border-width: 0px;\r\n}\r\n\r\n.OASP .markdown h2 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n}\r\n\r\n.OASP .markdown h4 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 16pt;\r\n  line-height: 28pt;\r\n  border-bottom: white 6px;\r\n  width: 30%;\r\n  border-bottom-style: solid;\r\n}\r\n\r\n.OASP .markdown h2::after {\r\n  display: none;\r\n}\r\n\r\n.button-style{\r\n  margin-left: 8%;\r\n  margin-bottom: 4%;\r\n}\r\n\r\n.cg_internal {\r\n  display: none;\r\n}\r\n\r\n/*---------------------- ---------------------- Responsive UI -------------------------------------------- */\r\n\r\n/* // Extra small devices (portrait phones, less than 576px) */\r\n\r\n@media (max-width: 575.98px) { \r\n\r\n  .OASP {\r\n    text-align: left;\r\n  }\r\n\r\n .text-xs-center {\r\n    text-align: left;\r\n  }\r\n\r\n  .OASP .markdown p {\r\n    text-align: left;\r\n    padding-left: 5%;\r\n    font-size: 12pt;\r\n  }\r\n  .OASP .markdown h2 {\r\n    text-align: left;\r\n    margin-left: 3%;\r\n  }\r\n\r\n  .OASP .markdown li {\r\n    text-align: left;\r\n    margin-left: 5%;  \r\n    font-size: 12pt;  \r\n  }\r\n  \r\n  .col-11 {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n    width: 100%;\r\n  }\r\n\r\n  .btn-primary {\r\n    color: white;\r\n    background-color: transparent;\r\n    border-color: white;\r\n    border-radius: 72px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 52px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n  }\r\n  .btn-primary:nth-last-of-type() {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .btn-primary:hover, .btn-primary:active, .markdown a:hover, .markdown a:active {\r\n    color: #fff;\r\n    background-color: #4bbdec;\r\n    border-color: #4bbdec;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn-primary.btn-white {\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-white:hover {\r\n    border-color: #ffffff;\r\n    color: #4bbdec;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-dark {\r\n    border-color: #222c38;\r\n    color: #ffffff;\r\n    background-color: #222c38;\r\n  }\r\n  \r\n  .btn-primary.btn-dark:hover {\r\n    border-color: #11161c;\r\n    color: rgba(255, 255, 255, 0.95);\r\n    background-color: #11161c;\r\n  }\r\n \r\n  .button-style{\r\n    margin-left: 10%;\r\n  }\r\n}\r\n\r\n/* // Small devices (landscape phones, 576px and up) */\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) { \r\n\r\n  .OASP {\r\n    background: url('img_1.15c9dcff69f70a30e389.png') center no-repeat;\r\n    background-color: #4bbdec;\r\n    background-size: cover;\r\n    text-align: left;\r\n  }\r\n\r\n .text-xs-center {\r\n    text-align: left;\r\n  }\r\n\r\n  .OASP .markdown p {\r\n    text-align: left;\r\n    padding-left: 10%;\r\n    font-size: 12pt;\r\n  }\r\n  .OASP .markdown h2 {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .OASP .markdown li {\r\n    text-align: left;\r\n    margin-left: 10%;  \r\n    font-size: 12pt;  \r\n  }\r\n\r\n  .btn-primary {\r\n    color: white;\r\n    background-color: transparent;\r\n    border-color: white;\r\n    border-radius: 72px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 52px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n  }\r\n  .btn-primary:nth-last-of-type() {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .btn-primary:hover, .btn-primary:active, .markdown a:hover, .markdown a:active {\r\n    color: #fff;\r\n    background-color: #4bbdec;\r\n    border-color: #4bbdec;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn-primary.btn-white {\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-white:hover {\r\n    border-color: #ffffff;\r\n    color: #4bbdec;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-dark {\r\n    border-color: #222c38;\r\n    color: #ffffff;\r\n    background-color: #222c38;\r\n  }\r\n  \r\n  .btn-primary.btn-dark:hover {\r\n    border-color: #11161c;\r\n    color: rgba(255, 255, 255, 0.95);\r\n    background-color: #11161c;\r\n  }\r\n  .button-style{\r\n    margin-left: 10%;\r\n  }\r\n}\r\n\r\n/* // Medium devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n  \r\n  .OASP {\r\n    background: url('img_1.15c9dcff69f70a30e389.png') center no-repeat;\r\n    background-color: #4bbdec;\r\n    background-size: cover;\r\n    text-align: left;\r\n  }\r\n\r\n .text-xs-center {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .OASP .markdown p {\r\n    text-align: left;\r\n    padding-left: 10%;\r\n    font-size: 12pt;\r\n  }\r\n  .OASP .markdown h2 {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .OASP .markdown li {\r\n    text-align: left;\r\n    margin-left: 10%;  \r\n    font-size: 12pt;  \r\n  }\r\n\r\n  .btn-primary {\r\n    color: white;\r\n    background-color: transparent;\r\n    border-color: white;\r\n    border-radius: 72px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 52px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n  }\r\n  .btn-primary:nth-last-of-type() {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .btn-primary:hover, .btn-primary:active, .markdown a:hover, .markdown a:active {\r\n    color: #fff;\r\n    background-color: #4bbdec;\r\n    border-color: #4bbdec;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn-primary.btn-white {\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-white:hover {\r\n    border-color: #ffffff;\r\n    color: #4bbdec;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-dark {\r\n    border-color: #222c38;\r\n    color: #ffffff;\r\n    background-color: #222c38;\r\n  }\r\n  \r\n  .btn-primary.btn-dark:hover {\r\n    border-color: #11161c;\r\n    color: rgba(255, 255, 255, 0.95);\r\n    background-color: #11161c;\r\n  }\r\n  .button-style{\r\n    margin-left:18%;\r\n  }\r\n }\r\n\r\n/* // Large devices (desktops, 992px and up) */\r\n\r\n@media (min-width: 992px) and (max-width: 1199.98px) { \r\n\r\n  .OASP {\r\n    background: url('img_1.15c9dcff69f70a30e389.png') center no-repeat;\r\n    background-color: #4bbdec;\r\n    background-size: cover;\r\n    text-align: left;\r\n  }\r\n\r\n .text-xs-center {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .OASP .markdown p {\r\n    text-align: left;\r\n    padding-left: 10%;\r\n    font-size: 12pt;\r\n  }\r\n  .OASP .markdown h2 {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .OASP .markdown li {\r\n    text-align: left;\r\n    margin-left: 10%;  \r\n    font-size: 12pt;  \r\n  }\r\n\r\n  .btn-primary {\r\n    color: white;\r\n    background-color: transparent;\r\n    border-color: white;\r\n    border-radius: 72px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 52px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n  }\r\n  .btn-primary:nth-last-of-type() {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .btn-primary:hover, .btn-primary:active, .markdown a:hover, .markdown a:active {\r\n    color: #fff;\r\n    background-color: #4bbdec;\r\n    border-color: #4bbdec;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn-primary.btn-white {\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-white:hover {\r\n    border-color: #ffffff;\r\n    color: #4bbdec;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-dark {\r\n    border-color: #222c38;\r\n    color: #ffffff;\r\n    background-color: #222c38;\r\n  }\r\n  \r\n  .btn-primary.btn-dark:hover {\r\n    border-color: #11161c;\r\n    color: rgba(255, 255, 255, 0.95);\r\n    background-color: #11161c;\r\n  }\r\n  .button-style{\r\n    margin-left: 15%;\r\n  }\r\n }\r\n\r\n/* // Extra large devices (large desktops, 1200px and up) */\r\n\r\n@media (min-width: 1200px) { \r\n\r\n  .OASP .markdown p {\r\n    text-align: left;\r\n    padding-left: 10%;\r\n    font-size: 12pt;\r\n  }\r\n  .OASP .markdown h2 {\r\n    text-align: left;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .OASP .markdown li {\r\n    text-align: left;\r\n    margin-left: 10%;  \r\n    font-size: 12pt;  \r\n  }\r\n  .btn-primary:nth-last-of-type() {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .btn-primary:hover, .btn-primary:active, .markdown a:hover, .markdown a:active {\r\n    color: #fff;\r\n    background-color: #4bbdec;\r\n    border-color: #4bbdec;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn-primary.btn-white {\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-white:hover {\r\n    border-color: #ffffff;\r\n    color: #4bbdec;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .btn-primary.btn-dark {\r\n    border-color: #222c38;\r\n    color: #ffffff;\r\n    background-color: #222c38;\r\n  }\r\n  \r\n  .btn-primary.btn-dark:hover {\r\n    border-color: #11161c;\r\n    color: rgba(255, 255, 255, 0.95);\r\n    background-color: #11161c;\r\n  }\r\n  .button-style{\r\n    margin-left: 8%;\r\n  }\r\n }\r\n\r\n.tryit {\r\n  background: url('img.61e94ee30f18d8e85521.png') center center no-repeat;\r\n  background-size: cover;\r\n  padding-top: 6em;\r\n  padding-bottom: 6em;\r\n}\r\n\r\n/**markdown styles**/\r\n\r\n.tryit .markdown h2 {\r\n  color: #ffffff;\r\n  font-family: Montserrat-Medium;\r\n  font-size: 20pt;\r\n}\r\n\r\n.tryit .markdown a {\r\n  border-color: #FFFFFF;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.tryit .markdown a:hover {\r\n  border-color: #FFFFFF;\r\n  color: #4bbdec;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.tryit .markdown h2::after {\r\n  display: none;\r\n}\r\n\r\n/**Media query*/\r\n\r\n@media (max-width: 767px) {\r\n  .tryit {\r\n    padding-bottom: 2em;\r\n    padding-top: 3em;\r\n  }\r\n}\r\n\r\n.gettingstarted {\r\n  background: url('getting_started.282a12b918f712653649.png') center center no-repeat;\r\n  background-size: 40%;\r\n  background-position-x: 90px;\r\n  background-position-y: 180px;\r\n  -webkit-box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n}\r\n\r\n.started {\r\n  padding: 0px 60px 0px 60px !important;\r\n}\r\n\r\n.gettingstarted h1 {\r\n  margin-top: 50%;\r\n}\r\n\r\n.timeline {\r\n  background-color: white;\r\n  -webkit-box-shadow: inset 0px 0px 100px #e2e2e2;\r\n          box-shadow: inset 0px 0px 100px #e2e2e2;\r\n}\r\n\r\n.gettingstarted .markdown p {\r\n  text-align: right;\r\n  color: #9d9d9d;\r\n  font-family: Montserrat-Regular;\r\n  font-style: normal;\r\n}\r\n\r\n.gettingstarted .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px 0px 0px 403px;\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n  float: right;\r\n}\r\n\r\n.gettingstarted .markdown h1 {\r\n  font-family: Montserrat-Medium;\r\n  font-size: 25pt;\r\n  text-align: right;\r\n  color: #222c38\r\n}\r\n\r\n.gettingstarted img {\r\n  width: 50px;\r\n  padding-left: 0px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.timeline img {\r\n  width: 50px;\r\n  padding: 0px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.media-body p {\r\n  padding-top: 3%;\r\n  text-align: left;\r\n}\r\n\r\n.timeline-centered {\r\n  margin-bottom: 0px;\r\n  right: 200px;\r\n}\r\n\r\n.timeline-centered:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline-centered:before,\r\n.timeline-centered:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline-centered:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline-centered:before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 2px;\r\n  background: #58ACFA;\r\n  left: 25%;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-left: 4px;\r\n}\r\n\r\n.timeline-centered .timeline-entry {\r\n  position: relative;\r\n  width: 75%;\r\n  float: right;\r\n  clear: both;\r\n  padding: 50px 0px;\r\n}\r\n\r\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {\r\n  margin-left: 0;\r\n  margin-right: -18px;\r\n}\r\n\r\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {\r\n  float: right;\r\n  font-weight: bold;\r\n}\r\n\r\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {\r\n  margin-left: 0;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner {\r\n  position: relative;\r\n  margin-left: -22px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\r\n  background: #fff;\r\n  color: #58ACFA;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-clip: padding-box;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 0 5px #58ACFA;\r\n  box-shadow: 0 0 0 2px #58ACFA;\r\n  line-height: 40px;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  float: left;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2,\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {\r\n  color: #585657;\r\n  font-family: Montserrat-Regular;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  line-height: 1.428571429;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .gettingstarted .markdown a {\r\n    display: inline !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .gettingstarted {\r\n    background-position-x: 195px;\r\n    background-position-y: 112px;\r\n  }\r\n  .gettingstarted .markdown p {\r\n    text-align: center;\r\n    padding: 0px 0px 20px 0px;\r\n  }\r\n  .gettingstarted .markdown h1::after {\r\n    width: 2em;\r\n    margin-left: 8.5em;\r\n    float: none;\r\n  }\r\n  .gettingstarted .markdown h1 {\r\n    text-align: center;\r\n    padding: 0px 0 20px 0px;\r\n  }\r\n  .gettingstarted h1 {\r\n    margin-top: 20%;\r\n  }\r\n  .gettingstarted .markdown a {\r\n    margin-bottom: 20%;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .gettingstarted {\r\n    background-size: 75%;\r\n    background-position-y: 128px;\r\n    background-position-x: 53px;\r\n    padding-top: 7em;\r\n  }\r\n  .gettingstarted .markdown p {\r\n    text-align: center;\r\n    padding: 0px 0px 20px 0px;\r\n  }\r\n  .gettingstarted .markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n    float: none;\r\n  }\r\n  .gettingstarted .markdown h1 {\r\n    text-align: center;\r\n    padding: 0px 0 20px 0px;\r\n    margin-top: 0px;\r\n  }\r\n  .gettingstarted .markdown a {\r\n    text-align: center;\r\n    margin-right: 0px;\r\n  }\r\n}\r\n\r\n.usedTechnologies{\r\n    background-color: #ffffff;\r\n    -webkit-box-shadow:inset 0px 7px 20px rgba(68,68,68,0.3);\r\n            box-shadow:inset 0px 7px 20px rgba(68,68,68,0.3)}\r\n\r\n.usedTechnologies .logos-tech{\r\n    padding: 50px 0px;\r\n}\r\n\r\n.usedTechnologies .logos-tech a{\r\n    text-align: center;\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.usedTechnologies .logos-tech a img{\r\n    padding: 50px 0px;\r\n}\r\n\r\n.usedTechnologies img:hover {\r\n    opacity: 0.5;\r\n  }\r\n\r\n@media (max-width: 767px) {\r\n    .usedTechnologies .logos-tech a img{\r\n        padding: 50px 15px;\r\n    }\r\n}\r\n\r\n.navbar {\r\n  background-color: #4bbdec!important;\r\n  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10);\r\n  -webkit-transition: all 300ms;\r\n  transition: all 300ms;\r\n}\r\n\r\n.oasp4j-container {\r\n  padding-top: 80px;\r\n}\r\n\r\n.content-roadmap {\r\n  padding: 0px!important;\r\n}\r\n\r\n.roadmap {\r\n  background: url('corte_4.0c40c70611e0cc9749e1.png');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position-x: -900px;\r\n  background-position-y: -100px;\r\n}\r\n\r\n.roadmap .main-title h1 {\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .main-title h1::before {\r\n  position: absolute;\r\n}\r\n\r\n.roadmap h1 {\r\n  color: #4bbdec;\r\n  padding: 40px 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap h1.road {\r\n  margin-bottom: 0px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.roadmap h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-left: 1em;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.roadmap h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-right: 1em;\r\n  background-color: transparent !important;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown h4 {\r\n  padding: 35px 0;\r\n  margin: 35px 0px 0 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #4bbdec;\r\n}\r\n\r\n.timeline {\r\n  background-color: transparent;\r\n  -webkit-box-shadow: inset 0px 0px 100px #e2e2e2;\r\n          box-shadow: inset 0px 0px 100px #e2e2e2;\r\n}\r\n\r\n.timeline-centered .timeline-entry {\r\n  width: 85%;\r\n}\r\n\r\n.timeline-centered:before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 2px;\r\n  background: #58ACFA;\r\n  left: 15%;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-left: 8px;\r\n}\r\n\r\n.media-body p {\r\n  padding-top: 0px;\r\n  text-align: left;\r\n  font-weight: 700 !important;\r\n  font-size: 11pt !important;\r\n}\r\n\r\n.media-body a p {\r\n  color: #4bbdec !important;\r\n  text-decoration: none;\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.media-body .description {\r\n  padding-top: 15px;\r\n  font-weight: normal !important;\r\n}\r\n\r\n/**Markdown styles**/\r\n\r\n.roadmap .main-title.markdown {\r\n  background: url('corte_4.0c40c70611e0cc9749e1.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 200%;\r\n  background-position-x: -800px;\r\n  background-position-y: -750px;\r\n  padding: 10%;\r\n  -webkit-box-shadow: 0 5px 20px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 5px 20px rgba(68, 68, 68, 0.3);\r\n}\r\n\r\n.roadmap .markdown {\r\n  padding: 2em 10%;\r\n}\r\n\r\n.roadmap .markdown p {\r\n  color: white;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 0px 0px;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h1 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h2 {\r\n  color: #585657;\r\n  font-family: montserrat-light;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px 380px 0px 0px;\r\n  width: 2.2em;\r\n  background-color: #ffffff;\r\n  height: 4px;\r\n}\r\n\r\n.over.markdown a {\r\n  margin-top: 0px;\r\n  margin-right: 20px;\r\n  margin-left: 20px !important;\r\n  width: 214px;\r\n  height: auto;\r\n}\r\n\r\n.over.markdown h2 {\r\n  font-family: montserrat-light;\r\n  text-align: center;\r\n}\r\n\r\n.over.markdown h2::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  width: 5%;\r\n  background-color: #585657;\r\n  height: 2px;\r\n  margin-top: 2%;\r\n}\r\n\r\n.over.markdown p {\r\n  color: #585657;\r\n  font-size: 12pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.tl.markdown h1 {\r\n  color: #4bbdec;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n}\r\n\r\n.tl.markdown h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown p {\r\n  color: #585657;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 0px 20px 0px;\r\n  text-align: center;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n.tl.markdown ul {\r\n  color: #959595;\r\n  font-size: 10pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 25px;\r\n  text-align: left;\r\n  padding-left: 4em;\r\n}\r\n\r\n/* SIDENAV\r\n----------------------------------------------------------*/\r\n\r\n.sidebar-left {\r\n  -webkit-box-shadow: 0 0 20px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 0 20px rgba(68, 68, 68, 0.3);\r\n  padding: 0px;\r\n  z-index: 1;\r\n}\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-nav {\r\n  position: fixed;\r\n  top: 100px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav .active {\r\n  background-color: red !important;\r\n}\r\n\r\nul.sidebar-nav-list {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav-list li a:hover {\r\n  text-decoration: none;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\nul.sidebar-nav-list li {\r\n  padding-top: 3px !important;\r\n}\r\n\r\nul.sidebar-nav-list li.dropdown a {\r\n  padding: 14px;\r\n  background-color: #ffffff;\r\n  border-left: 6px solid #4bbdec;\r\n  font-weight: 500;\r\n}\r\n\r\nul.sidebar-nav-list li.dropdown a:hover {\r\n  padding: 14px;\r\n  background-color: #ffffff;\r\n  border-left: 6px solid #4bbdec;\r\n  font-weight: 500;\r\n}\r\n\r\nul.sidebar-nav-list li a {\r\n  display: block;\r\n  padding: 7px 10px;\r\n  text-decoration: none;\r\n  color: #384759;\r\n}\r\n\r\nul.sidebar-nav-list li a:hover {\r\n  font-style: montserrat-Regular;\r\n  text-decoration: none;\r\n  color: #4bbdec;\r\n  cursor: pointer;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu {\r\n  list-style: none;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  background-color: #ffffff;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n  font-weight: 200;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a:hover {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  color: #4bbdec;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n}\r\n\r\n.timeline h1::before,\r\n.timeline h1::after {\r\n  width: 0%\r\n}\r\n\r\n.timeline h1 {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .roadmap .main-title.markdown {\r\n    background-position-x: -384px;\r\n    background-position-y: -650px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -260px;\r\n  }\r\n  .roadmap .markdown {\r\n    padding: 2em 0px;\r\n  }\r\n  .over.markdown a {\r\n    width: 214px;\r\n    height: auto;\r\n    margin-left: 0px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 991px) and (min-width: 768px) {\r\n  .oasp4j-container {\r\n    padding-top: 74px;\r\n  }\r\n  .roadmap .main-title.markdown {\r\n    background-size: 250%;\r\n    background-position-x: -580px;\r\n    background-position-y: -300px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -250px;\r\n    background-position-y: 230px;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 10%;\r\n  }\r\n  .timeline h1::before,\r\n  .timeline h1::after {\r\n    width: 0%\r\n  }\r\n  .timeline h1 {\r\n    padding-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .oasp4j-container {\r\n    padding-top: 73px;\r\n  }\r\n  .tl.markdown h1 {\r\n    display: none;\r\n  }\r\n  .roadmap .main-title.markdown {\r\n    background-color: #4bbdec;\r\n  }\r\n  .roadmap .main-title.markdown p {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n  }\r\n  .over.markdown a {\r\n    margin-bottom: 10px;\r\n  }\r\n  .sidebar-left {\r\n    display: none;\r\n  }\r\n  .sidebar-nav {\r\n    display: none;\r\n  }\r\n  .roadmap .markdown {\r\n    padding: 0px 0px;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 0%;\r\n  }\r\n  .tl.markdown ul li {\r\n    text-align: left;\r\n  }\r\n  .tabset4j .nav-pills .nav-item {\r\n    width: 100%;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top: 10px;\r\n  }\r\n  .tabset4j ul.nav-pills {\r\n    height: 42px;\r\n    background-color: #fff;\r\n    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);\r\n            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);\r\n    position: fixed;\r\n    top: 73px;\r\n    width: 100%;\r\n    z-index: 900;\r\n    font-size: 76%;\r\n  }\r\n  .about .nav-pills .nav-item.show .nav-link,\r\n  .nav-pills .nav-link:hover {\r\n    color: #4bbdec;\r\n    border-bottom: 3px solid #4bbdec !important;\r\n    border-radius: 0px;\r\n  }\r\n  .tl.markdown {\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n  }\r\n  .tl.markdown h4 {\r\n    padding: 35px 0;\r\n    margin: 50px 0px 0 0px;\r\n    font-family: montserrat-Regular;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background: #4bbdec;\r\n    -webkit-box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n            box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n  }\r\n  .timeline-centered {\r\n    margin-top: 43px;\r\n  }\r\n}\r\n\r\n.navbar {\r\n  background-color: #4bbdec;\r\n  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10);\r\n  -webkit-transition: all 300ms;\r\n  transition: all 300ms;\r\n}\r\n\r\n.oasp4js-container {\r\n  padding-top: 80px;\r\n}\r\n\r\n.content-roadmap {\r\n  padding: 0px !important;\r\n}\r\n\r\n.roadmap {\r\n  background: url('corte_4.0c40c70611e0cc9749e1.png');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position-x: -900px;\r\n  background-position-y: -100px;  \r\n}\r\n\r\n.roadmap .main-title h1 {\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .main-title h1::before {\r\n  position: absolute;\r\n}\r\n\r\n.roadmap h1 {\r\n  color: #4bbdec;\r\n  padding: 40px 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-left: 1em;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.roadmap h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-right: 1em;\r\n  background-color: transparent !important;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.roadmap h4 {\r\n  padding: 35px 0;\r\n  margin: 35px 16px 0 16px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n  color: black;\r\n  background: transparent;\r\n}\r\n\r\n.tl.markdown h4 {\r\n  padding: 35px 0;\r\n  margin: 35px 0px 0 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #4bbdec;\r\n  -webkit-box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n          box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n}\r\n\r\n.tl.markdown {\r\n  padding-right: 0px !important;\r\n  padding-left: 0px !important;\r\n}\r\n\r\n.tl.markdown li {\r\n  padding: 0.5em !important\r\n}\r\n\r\n/**Markdown styles**/\r\n\r\n.roadmap .main-title.markdown {\r\n  background: url('corte_4.0c40c70611e0cc9749e1.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 200%;\r\n  background-position-x: -800px;\r\n  background-position-y: -750px;\r\n  padding: 10%;\r\n  -webkit-box-shadow: 0 5px 20px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 5px 20px rgba(68, 68, 68, 0.3);\r\n}\r\n\r\n.roadmap .markdown {\r\n  padding: 2em 10%;\r\n}\r\n\r\n.roadmap .markdown p {\r\n  color: white;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 0px 0px;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h1 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h2 {\r\n  color: #585657;\r\n  font-family: montserrat-light;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px 380px 0px 0px;\r\n  width: 2.2em;\r\n  background-color: #ffffff;\r\n  height: 4px;\r\n}\r\n\r\n.over.markdown h2 {\r\n  font-family: montserrat-light;\r\n  text-align: center;\r\n}\r\n\r\n.over.markdown h2::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  width: 5%;\r\n  background-color: #585657;\r\n  height: 2px;\r\n  margin-top: 2%;\r\n}\r\n\r\n.over.markdown p {\r\n  color: #585657;\r\n  font-size: 12pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.tl.markdown h1 {\r\n  color: #4bbdec;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n}\r\n\r\n.tl.markdown h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown p {\r\n  color: #585657;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 0px 20px 0px;\r\n  text-align: center;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n.tl.markdown ul {\r\n  color: #959595;\r\n  font-size: 12pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 25px;\r\n  text-align: left;\r\n  padding-left: 4em;\r\n}\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-left {\r\n  -webkit-box-shadow: 0 0 20px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 0 20px rgba(68, 68, 68, 0.3);\r\n  padding: 0px;\r\n  z-index: 1;\r\n}\r\n\r\n.sidebar-nav {\r\n  position: fixed;\r\n  top: 100px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nul.sidebar-nav-list {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav-list li a:hover {\r\n  text-decoration: none;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\nul.sidebar-nav-list li {\r\n  padding: 0px;\r\n}\r\n\r\nul.sidebar-nav-list li.dropdown a {\r\n  padding: 14px 14px 14px 25px;\r\n  background-color: #ffffff;\r\n  border-left: 6px solid #4bbdec;\r\n  font-weight: 500;\r\n}\r\n\r\nul.sidebar-nav-list li a {\r\n  display: block;\r\n  padding: 7px 10px;\r\n  text-decoration: none;\r\n  color: #384759;\r\n}\r\n\r\nul.sidebar-nav-list li a:hover {\r\n  text-decoration: none;\r\n  color: #4bbdec;\r\n  cursor: pointer;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu {\r\n  list-style: none;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  background-color: #ffffff;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n  font-weight: 200;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a:hover {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  color: #4bbdec;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n}\r\n\r\n.timeline h1::before,\r\n.timeline h1::after {\r\n  width: 0%\r\n}\r\n\r\n.timeline h1 {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.media-body a p {\r\n  color: #4bbdec !important;\r\n  text-decoration: none;\r\n  font-weight: 700 !important;\r\n  font-size: 11pt;\r\n}\r\n\r\n/** Media query*/\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .roadmap .main-title.markdown {\r\n    background-position-x: -384px;\r\n    background-position-y: -650px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -260px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 991px) and (min-width: 768px) {\r\n  .roadmap .main-title.markdown {\r\n    background-size: 250%;\r\n    background-position-x: -580px;\r\n    background-position-y: -300px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -250px;\r\n    background-position-y: 230px;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 10%;\r\n  }\r\n  .timeline h1::before,\r\n  .timeline h1::after {\r\n    width: 0%\r\n  }\r\n  .timeline h1 {\r\n    padding-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .nav-link {\r\n    padding: .5em;\r\n  }\r\n  .roadmap .main-title.markdown {\r\n    background-color: #4bbdec;\r\n  }\r\n  .roadmap .main-title.markdown p {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n  }\r\n  .sidebar-left {\r\n    display: none;\r\n  }\r\n  .sidebar-nav {\r\n    display: none;\r\n  }\r\n  .roadmap .markdown {\r\n    padding: 2em 10%;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 0%;\r\n  }\r\n  .tl.markdown ul li {\r\n    text-align: left;\r\n  }\r\n  .tabset4js .nav-pills .nav-item {\r\n    width: 100%;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top: 10px;\r\n  }\r\n  .tabset4js ul.nav-pills {\r\n    height: 42px;\r\n    background-color: #fff;\r\n    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);\r\n            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);\r\n    position: fixed;\r\n    top: 73px;\r\n    width: 100%;\r\n    z-index: 900;\r\n    font-size: 76%;\r\n  }\r\n  .about .nav-pills .nav-item.show .nav-link,\r\n  .nav-pills .nav-link:hover {\r\n    color: #4bbdec;\r\n    border-bottom: 3px solid #4bbdec !important;\r\n    border-radius: 0px;\r\n  }\r\n  .tl.markdown h4 {\r\n    padding: 35px 0;\r\n    margin: 50px 0px 0 0px;\r\n    font-family: montserrat-Regular;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background: #4bbdec;\r\n    -webkit-box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n            box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n  }\r\n}\r\n\r\n.about {\r\n  background: url('corte_2.3b3ff4230c02447e92f5.png') -580px -300px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  -webkit-box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n  padding: 40px 0px 30px;\r\n  background-size: 100%;\r\n  height: 700px;\r\n}\r\n\r\n.about .nav-pills .nav-item.show .nav-link, .nav-pills .nav-link.active {\r\n  color: #0275d8;\r\n  cursor: default;\r\n  background-color: rgba(255, 255, 255, 0.0);\r\n  border-bottom: 3px solid #0275d8;\r\n  border-radius: 0px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.about .nav-pills .nav-item.show .nav-link, .nav-pills .nav-link:hover {\r\n  color: #0275d8;\r\n  border-bottom: 3px solid #0275d8;\r\n  border-radius: 0px;\r\n}\r\n\r\n.about .nav-pills {\r\n  -webkit-box-pack: center !important;\r\n      -ms-flex-pack: center !important;\r\n          justify-content: center !important;\r\n}\r\n\r\nli {\r\n  padding: 0px 10px;\r\n}\r\n\r\n.gallery {\r\n  -webkit-box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n          box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n  background: #ddd;\r\n  border-radius: 3px;\r\n  margin-bottom: 40px;\r\n  background-color: #4bbdec;\r\n  text-align: center;\r\n}\r\n\r\n.gallery img {\r\n  width: auto;\r\n  height: 100px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.desc {\r\n  background-color: white;\r\n  padding: 15px;\r\n  text-align: left;\r\n  padding-top: 23px;\r\n  font-family: Montserrat-medium;\r\n  color: #4bbdec;\r\n  height: 70px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n\r\n.desc h5::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  margin: 0px 0px;\r\n  width: 2em;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.carousel-indicators li {\r\n  border-radius: 50%;\r\n  padding: 0px;\r\n  max-width: 15px;\r\n  max-height: 15px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 2px solid #4bbdec;\r\n  background-color: #4bbdec;\r\n  top: 40px;\r\n}\r\n\r\n.carousel-tab-panel .carousel-item p {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.img-resp {\r\n  text-align: center;\r\n  -webkit-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, .15);\r\n          box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.about * {\r\n  outline: none;\r\n}\r\n\r\n.about .markdown h3 {\r\n  color: black;\r\n  font-size: 16pt;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.about .markdown h3::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 15px;\r\n  margin: 20px 0px;\r\n  width: 15%;\r\n  background-color: white;\r\n  height: 4px;\r\n}\r\n\r\n.about .markdown h4 {\r\n  color: black;\r\n  font-family: montserrat-Regular;\r\n  font-size: 16pt;\r\n}\r\n\r\n.about .markdown p {\r\n  color: black !important;\r\n  font-size: 12pt;\r\n  font-family: montserrat-Regular;\r\n  font-style: normal;\r\n  font-weight: 200;\r\n  line-height: 30pt;\r\n}\r\n\r\n.about .markdown li {\r\n  color: black !important;\r\n  font-size: 12pt;\r\n  font-family: montserrat-Regular;\r\n  font-style: normal;\r\n  font-weight: 200;\r\n  padding: 20px 0px;\r\n  list-style-type: square;\r\n  line-height: 15pt;\r\n}\r\n\r\n.btn {\r\n  color: white;\r\n  background-color: transparent;\r\n  border-color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  border-radius: 70px;\r\n  font-size: 10pt;\r\n  border-width: 2px;\r\n  font-family: Montserrat-Regular;\r\n  cursor: pointer;\r\n  margin-right: 5px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.img {\r\n  height: 95%;\r\n  width: 135%;\r\n}\r\n\r\n/*---------------------- ---------------------- Responsive UI -------------------------------------------- */\r\n\r\n/* // Extra small devices (portrait phones, less than 576px) */\r\n\r\n@media (max-width: 575.98px) {\r\n  .about {\r\n    height: auto;\r\n  }\r\n  .img-resp {\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n  }\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .about .tabset {\r\n    display: none;\r\n  }\r\n  .gallery img {\r\n    width: auto;\r\n    height: 60px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n  }\r\n  li {\r\n    text-align: center\r\n  }\r\n  .carousel-indicators .active {\r\n    background-color: transparent;\r\n  }\r\n  .carousel-indicators {\r\n    top: -80px;\r\n  }\r\n  .carousel-item.active {\r\n    display: block!important;\r\n  }\r\n  .carousel-caption {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n    font-weight: 200;\r\n    top: auto;\r\n    left: auto;\r\n    width: 100%;\r\n    position: relative;\r\n    float: none;\r\n    right: auto;\r\n  }\r\n  .about .carousel-caption h3 {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n  }\r\n  p {\r\n    text-align: center;\r\n    padding: 0px 10px;\r\n  }\r\n  .about .markdown p {\r\n    color: black !important;\r\n    font-size: 12pt;\r\n    font-family: montserrat-Regular;\r\n    font-style: normal;\r\n    font-weight: 200;\r\n    line-height: 30pt;\r\n    text-align: left;\r\n  }\r\n  .about .markdown li {\r\n    color: black !important;\r\n    font-size: 12pt;\r\n    font-family: montserrat-Regular;\r\n    font-style: normal;\r\n    font-weight: 200;\r\n    padding: 10px 0px;\r\n    list-style-type: square;\r\n    line-height: 15pt;\r\n    text-align: left;\r\n  }\r\n  .about .carousel-caption h3 {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 14pt;\r\n  }\r\n  .more-info {\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n  }\r\n  .btn-info {\r\n    color: #4bbdec;\r\n    background-color: transparent;\r\n    border-color: #4bbdec;\r\n    border-radius: 42px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    margin-left: 10%;\r\n  }\r\n  .img {\r\n    height: 95%;\r\n    width: 135%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/* // Small devices (landscape phones, 576px and up) */\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n  .about {\r\n    height: auto;\r\n    background: url('corte_4.0c40c70611e0cc9749e1.png') -1300px 550px;\r\n  }\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .about .tabset {\r\n    display: none;\r\n  }\r\n  .gallery img {\r\n    width: auto;\r\n    height: 60px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n  }\r\n  li {\r\n    text-align: center\r\n  }\r\n  .about .container {\r\n    text-align: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    padding-right: 20px;\r\n  }\r\n  .carousel-indicators .active {\r\n    background-color: transparent;\r\n  }\r\n  .carousel-indicators {\r\n    top: -80px;\r\n  }\r\n  .carousel-item.active {\r\n    display: block!important;\r\n  }\r\n  .carousel-caption {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n    font-weight: 200;\r\n    top: auto;\r\n    left: auto;\r\n    width: 100%;\r\n    position: relative;\r\n    float: none;\r\n    right: auto;\r\n  }\r\n  .about .carousel-caption h3 {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n  }\r\n  p {\r\n    text-align: center;\r\n    padding: 0px 10px;\r\n  }\r\n\r\n  .about .markdown h3 {\r\n    color: black;\r\n    font-size: 14pt;\r\n    margin-bottom: 30px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .about .markdown h3::after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 15px;\r\n    margin: 20px 0px;\r\n    width: 15%;\r\n    background-color: white;\r\n    height: 4px;\r\n  }\r\n  \r\n  .about .markdown h4 {\r\n    color: black;\r\n    font-family: montserrat-Regular;\r\n    font-size: 16pt;\r\n  }\r\n  \r\n  .about .markdown p {\r\n    color: black !important;\r\n    font-size: 10pt;\r\n    font-family: montserrat-Regular;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    line-height: 20pt;\r\n    text-align: left;\r\n  }\r\n  \r\n  .about .markdown li {\r\n    color: black !important;\r\n    font-size: 10pt;\r\n    font-family: montserrat-Regular;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    padding: 5px 0px;\r\n    list-style-type: square;\r\n    line-height: 12pt;\r\n    text-align: left;\r\n  }\r\n  \r\n  .btn {\r\n    color: #4bbdec;\r\n    background-color: transparent;\r\n    border-color: #4bbdec;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 11px;\r\n    padding-bottom: 11px;\r\n    border-radius: 60px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .more-info {\r\n    margin-top: 20px;\r\n    margin-left:-330px;\r\n  }\r\n}\r\n\r\n/* // Medium devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n\r\n  .about {\r\n    height: auto;\r\n    background: url('corte_4.0c40c70611e0cc9749e1.png') -1700px -2000px;\r\n  }\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .about .tabset {\r\n    display: none;\r\n  }\r\n  .gallery img {\r\n    width: auto;\r\n    height: 60px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n  }\r\n  li {\r\n    text-align: center\r\n  }\r\n  .about .container {\r\n    text-align: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    padding-right: 20px;\r\n  }\r\n  .carousel-indicators .active {\r\n    background-color: transparent;\r\n  }\r\n  .carousel-indicators {\r\n    top: -80px;\r\n  }\r\n  .carousel-item.active {\r\n    display: block!important;\r\n  }\r\n  .carousel-caption {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n    font-weight: 200;\r\n    top: auto;\r\n    left: auto;\r\n    width: 100%;\r\n    position: relative;\r\n    float: none;\r\n    right: auto;\r\n  }\r\n  .about .carousel-caption h3 {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n  }\r\n  p {\r\n    text-align: center;\r\n    padding: 0px 10px;\r\n  }\r\n\r\n  .about .markdown h3 {\r\n    color: black;\r\n    font-size: 14pt;\r\n    margin-bottom: 30px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .about .markdown h3::after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 15px;\r\n    margin: 20px 0px;\r\n    width: 15%;\r\n    background-color: white;\r\n    height: 4px;\r\n  }\r\n  \r\n  .about .markdown h4 {\r\n    color: black;\r\n    font-family: montserrat-Regular;\r\n    font-size: 16pt;\r\n  }\r\n  \r\n  .about .markdown p {\r\n    color: black !important;\r\n    font-size: 10pt;\r\n    font-family: montserrat-Regular;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    line-height: 20pt;\r\n    text-align: left;\r\n  }\r\n  \r\n  .about .markdown li {\r\n    color: black !important;\r\n    font-size: 10pt;\r\n    font-family: montserrat-Regular;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    padding: 5px 0px;\r\n    list-style-type: square;\r\n    line-height: 12pt;\r\n    text-align: left;\r\n  }\r\n  \r\n  .btn {\r\n    color: #4bbdec;\r\n    background-color: transparent;\r\n    border-color: #4bbdec;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 11px;\r\n    padding-bottom: 11px;\r\n    border-radius: 60px;\r\n    font-size: 10pt;\r\n    border-width: 2px;\r\n    font-family: Montserrat-Regular;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .more-info {\r\n    margin-top: 20px;\r\n    margin-left:-80%;\r\n  }\r\n\r\n  .img {\r\n    height: 95%;\r\n    width: 135%;\r\n  }\r\n}\r\n\r\n/* // Large devices (desktops, 992px and up) */\r\n\r\n@media (min-width: 992px) and (max-width: 1199.98px) {\r\n\r\n  .img {\r\n    height: 75%;\r\n    width: 110%;\r\n  }\r\n}\r\n\r\n/* // Extra large devices (large desktops, 1200px and up) */\r\n\r\n@media (min-width: 1200px) {\r\n\r\n}\r\n\r\n.slider {\r\n  background: url('testimonials.9585486bc2d962811715.png') center center no-repeat;\r\n  background-size: contain;\r\n  background-color: #293645;\r\n  background-position-y: 350px;\r\n  ;\r\n  padding: 10% 0% 5% 0%;\r\n}\r\n\r\n.testimonials {\r\n  background: url(\"data:image/png;base64,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\") center no-repeat;\r\n  background-size: 30%;\r\n  background-position-x: 300px;\r\n  background-position-y: 0px;\r\n  height: 190px;\r\n  margin-top: 40px;\r\n  margin-bottom: 90px;\r\n  margin-right:0px;\r\n}\r\n\r\n.nomargin {\r\n  margin-right: 0px;\r\n}\r\n\r\n.slider img {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%\r\n}\r\n\r\n.carouselExampleSlidesOnly {\r\n  margin-top: 10%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.slider h3,\r\n.slider h5 {\r\n  color: white;\r\n  font-family: Montserrat-Regular;\r\n}\r\n\r\n.slider .carousel-indicators {\r\n  margin-top: 0px;\r\n  top: 170px;\r\n}\r\n\r\n.slider .carousel-indicators li {\r\n  max-width: 15px;\r\n  height: 15px;\r\n  border: 2px solid white;\r\n  border-radius: 50%;\r\n  background-color: transparent;\r\n}\r\n\r\n.slider .carousel-indicators .active {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.slider p {\r\n  color: white;\r\n  font-family: Montserrat-Extralight;\r\n  font-size: 12pt;\r\n  text-align: left;\r\n}\r\n\r\n.slider .carousel-caption {\r\n  text-align: left;\r\n  left: 180px;\r\n  top: 0px;\r\n}\r\n\r\n.slider .right.carousel-control-next,\r\n.slider .left.carousel-control-prev {\r\n  display: none;\r\n}\r\n\r\n.slider * {\r\n  outline: none;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1200px) {\r\n  .slider p {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  p {\r\n    margin-left: auto !important;\r\n    margin-right: auto !important;\r\n    display: block !important\r\n  }\r\n  .slider {\r\n    text-align: center;\r\n  }\r\n  .nomargin {\r\n    margin-right: 0px;\r\n  }\r\n  .testimonials{margin-bottom: 113px;}\r\n\r\n  .slider>img {\r\n    display: inline-block;\r\n  }\r\n  .slider .carousel-caption {\r\n    top: auto;\r\n    left: auto;\r\n    width: 100%;\r\n    position: relative;\r\n    float: none;\r\n    right: auto;\r\n  }\r\n  .slider img {\r\n    text-align: center;\r\n    margin: 10px auto!important;\r\n  }\r\n  .slider p,\r\n  .slider h3,\r\n  .slider h5 {\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n  .slider p {\r\n    font-size: 13px;\r\n  }\r\n  .carousel-testimonial .carousel-indicators[_ngcontent-c12] {\r\n    margin-top: 0px;\r\n    position: relative;\r\n    top: 0px;\r\n  }\r\n  .carousel-item.active {\r\n    display: block!important;\r\n  }\r\n  .slider .carousel-indicators {\r\n    top: -90px;\r\n  }\r\n}\r\n\r\n@font-face {\r\n  font-family: Montserrat-Regular;\r\n  src: url('Montserrat-Regular.f7213526ec9296ff4342.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: Montserrat-Bold;\r\n  src: url('Montserrat-Bold.a8de8ffe262db7e277de.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: montserrat-light;\r\n  src: url('Montserrat-Light.9e52b00d737492e337b2.ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: montserrat-Extralight;\r\n  src: url('Montserrat-ExtraLight.b415dcea9b371c36eaf4.ttf');\r\n}\r\n\r\n.navbar-light .navbar-toggler {\r\n  border-color: transparent;\r\n  outline: 0px none;\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%22512px%22 version%3D%221.1%22 height%3D%22512px%22 viewBox%3D%220 0 64 64%22 enable-background%3D%22new 0 0 64 64%22%3E%0D  %3Cg%3E%0D    %3Cg fill%3D%22%231D1D1B%22%3E%0D      %3Cpath d%3D%22M2.252%2C10.271h58.871c1.124%2C0%2C2.034-0.91%2C2.034-2.034c0-1.123-0.91-2.034-2.034-2.034H2.252    c-1.124%2C0-2.034%2C0.911-2.034%2C2.034C0.218%2C9.36%2C1.128%2C10.271%2C2.252%2C10.271z%22 fill%3D%22%23FFFFFF%22%2F%3E%0D      %3Cpath d%3D%22m61.123%2C30.015h-58.871c-1.124%2C0-2.034%2C0.912-2.034%2C2.035 0%2C1.122 0.91%2C2.034 2.034%2C2.034h58.871c1.124%2C0 2.034-0.912 2.034-2.034-7.10543e-15-1.123-0.91-2.035-2.034-2.035z%22 fill%3D%22%23FFFFFF%22%2F%3E%0D      %3Cpath d%3D%22m61.123%2C53.876h-58.871c-1.124%2C0-2.034%2C0.91-2.034%2C2.034 0%2C1.123 0.91%2C2.034 2.034%2C2.034h58.871c1.124%2C0 2.034-0.911 2.034-2.034-7.10543e-15-1.124-0.91-2.034-2.034-2.034z%22 fill%3D%22%23FFFFFF%22%2F%3E%0D    %3C%2Fg%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n  margin-top: 10px;\r\n}\r\n\r\n.btn-primary {\r\n  color: #4bbdec;\r\n  background-color: transparent;\r\n  border-color: #4bbdec;\r\n  border-radius: 72px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  border-radius: 72px;\r\n  font-size: 12pt;\r\n  border-width: 2px;\r\n  font-family: Montserrat-Regular;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-primary:nth-last-of-type() {\r\n  margin-right: 0px;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:active, .markdown a:hover, .markdown a:active {\r\n  color: #fff;\r\n  background-color: #4bbdec;\r\n  border-color: #4bbdec;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn-primary.btn-white {\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn-primary.btn-white:hover {\r\n  border-color: #ffffff;\r\n  color: #4bbdec;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.btn-primary.btn-dark {\r\n  border-color: #222c38;\r\n  color: #ffffff;\r\n  background-color: #222c38;\r\n}\r\n\r\n.btn-primary.btn-dark:hover {\r\n  border-color: #11161c;\r\n  color: rgba(255, 255, 255, 0.95);\r\n  background-color: #11161c;\r\n}\r\n\r\nhr {\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 3px;\r\n}\r\n\r\n.markdown h2 {\r\n  color: #585657;\r\n  font-family: Montserrat-Medium;\r\n  font-size: 23pt;\r\n  margin-top: 2em;\r\n}\r\n\r\n.markdown h2::after {\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px auto 0px;\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n}\r\n\r\n.markdown p {\r\n  color: #9d9d9d;\r\n  font-family: Montserrat-Regular;\r\n  font-size: 12pt;\r\n  font-style: italic;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.markdown a {\r\n  color: #4bbdec;\r\n  display: inline-block;\r\n  width: auto;\r\n  border: #4bbdec 2px solid;\r\n  margin-bottom: 10px;\r\n  margin-right: 10px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  border-radius: 72px !important;\r\n  font-size: 12pt;\r\n  border-width: 2px;\r\n  font-family: Montserrat-Regular;\r\n  font-style: normal;\r\n  cursor: pointer;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.modal-header {\r\n  background-color: #4bbdec;\r\n}\r\n\r\n.modal-header h4 {\r\n  color: white;\r\n}\r\n\r\n.modal-body .markdown p {\r\n  text-align: left;\r\n  font-style: normal;\r\n}\r\n\r\n.modal-body .markdown li {\r\n  text-align: left;\r\n}\r\n\r\n.modal-body .markdown a {\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  nav.navbar {\r\n    background-color: #4bbdec !important;\r\n  }\r\n  markdown a:last-of-type {\r\n    margin-left: 0px;\r\n    margin-bottom: 0px;\r\n  }\r\n  .markdown a {\r\n    width: 250px;\r\n    height: auto;\r\n  }\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/styles.css");
module.exports = __webpack_require__("./node_modules/prismjs/themes/prism-okaidia.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.6d76b8ee294ebd481cdd.bundle.js.map