For the diagrams we currently use Visio and export them to SVG.
So you should always make your changes in the original Visio files and then save a copy via 
"Save as..." with the format "Scalable Vector Graphics (svg)".
 
Unfortunately there is a bug in Visio and you afterwards always have to add this to the "svg" root tag:
 xmlns:xlink="http://www.w3.org/1999/xlink"