/*
 *Rectangle class(생성 함수)
 */
var Rectangle = function(x1, y1, x2, y2, backgroundColor) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.backgroundColor = backgroundColor;
}
Rectangle.prototype.show = function() {
	document.write("<div style='position: absolute; " + "left: " + this.x1
			+ "px; " + "top: " + this.y1 + "px; " + "height: "
			+ (this.x2 - this.x1) + "px; " + "width: " + (this.y2 - this.y1)
			+ "px; " + "background-color: " + this.backgroundColor + "'>"
			+ "</div>");
}