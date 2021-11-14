/**********************************************
 * Eraser Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvasReal-common
 * Remember, order matters
 ***********************************************/
class ColorFill extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
var imgData = this.contextReal.getImageData(0,0,canvasReal.width, canvasReal.height);
var pixelStack = [[coord[0], coord[1]]];
var startingPos=(coord[1]*canvasReal.width + coord[0]) * 4;
var startR=imgData.data[startingPos];
var startG=imgData.data[startingPos+1];
var startB=imgData.data[startingPos+2];
var colorhex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
var fillColorR=parseInt(colorhex[1],16);
var fillColorG=parseInt(colorhex[2],16);
var fillColorB=parseInt(colorhex[3],16);
var rgb = [fillColorR, fillColorG, fillColorB];
var pixelData = [startR, startG, startB];
if (JSON.stringify(rgb) !== JSON.stringify(pixelData)) {
while(pixelStack.length)
{
  var newPos, x, y, pixelPos, reachLeft, reachRight;
  newPos = pixelStack.pop();
  x = newPos[0];
  y = newPos[1];
  
  pixelPos = (y*canvasReal.width + x) * 4;
  while(y-- >= 0 && matchStartColor(pixelPos))
  {
    pixelPos -= canvasReal.width * 4;
  }
  pixelPos += canvasReal.width * 4;
  ++y;
  reachLeft = false;
  reachRight = false;
  while(y++ < canvasReal.height-1 && matchStartColor(pixelPos))
  {
    colorPixel(pixelPos);

    if(x > 0)
    {
      if(matchStartColor(pixelPos - 4))
      {
        if(!reachLeft){
          pixelStack.push([x - 1, y]);
          reachLeft = true;
        }
      }
      else if(reachLeft)
      {
        reachLeft = false;
      }
    }
	
    if(x < canvasReal.width-1)
    {
      if(matchStartColor(pixelPos + 4))
      {
        if(!reachRight)
        {
          pixelStack.push([x + 1, y]);
          reachRight = true;
        }
      }
      else if(reachRight)
      {
        reachRight = false;
      }
    }
			
    pixelPos += canvasReal.width * 4;
  }
}
  }
this.contextReal.putImageData(imgData, 0, 0);

function matchStartColor(pixelPos)
{
  var r = imgData.data[pixelPos];	
  var g = imgData.data[pixelPos+1];	
  var b = imgData.data[pixelPos+2];

  return (r === startR && g === startG && b === startB);
}

function colorPixel(pixelPos)
{
  imgData.data[pixelPos] = fillColorR;
  imgData.data[pixelPos+1] = fillColorG;
  imgData.data[pixelPos+2] = fillColorB;
  imgData.data[pixelPos+3] = 255;
}
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
  }

  onMouseMove() {}
  onMouseUp() {
  autosave();
  }
  onMouseLeave() {}
  onMouseEnter() {}

}

