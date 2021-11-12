class StraightLine extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.contextReal.fillStyle = color;
        this.origX = coord[0];
        this.origY = coord[1];
        
      }
    // Clicking and removing your mouse
    onDragging(coord, event) {
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if (keyListeners.escape == true) this.escape = true;
        if (this.escape == false) this.checkAndDraw(coord, this.contextDraft);
       
      }

      onMouseUp(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if (this.escape == false) {
            this.checkAndDraw(coord, this.contextReal);        
            beforeDraw();
        }
        this.escape = false;
    }
  
    onMouseMove() {}
   
    onMouseLeave() {}
    onMouseEnter() {}
  
    checkAndDraw(coord, context) {
        if (keyListeners.shift == true) {
            if (Math.abs(this.origX - coord[0]) > Math.abs(this.origY - coord[1])) {
                this.drawLine(this.origX, this.origY, coord[0], this.origY, context);
            } else {
                this.drawLine(this.origX, this.origY, this.origX, coord[1], context);
            }
        } else {
            this.drawLine(this.origX, this.origY, coord[0], coord[1], context);
        }
    }

    drawLine (x1, y1, x2, y2, context) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();    
    }

  }