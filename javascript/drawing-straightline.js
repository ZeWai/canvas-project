class DrawingStraightLine extends PaintFunction {
     constructor(contextReal, contextDraft) {
         super();
         this.contextReal = contextReal;
         this.contextDraft = contextDraft;
     }

     onMouseDown(coord, e) {
         this.contextReal.strokeStyle = color;
         this.contextReal.lineWidth = linewidth;
         this.origX = coord[0];
         this.origY = coord[1];
        
     }

     onDragging(coord, e) {
         this.contextDraft.strokeStyle = color;
         this.contextDraft.lineWidth = linewidth;
         this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
         this.contextDraft.beginPath();
         this.contextDraft.moveTo(this.origX,this.origY)
         this.contextDraft.lineTo(coord[0],coord[1]);
         this.contextDraft.stroke();

     }

     onMouseMove(){}

     onMouseUp(coord) {
         this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
         this.contextReal.beginPath();
         this.contextReal.moveTo(this.origX,this.origY)
         this.contextReal.lineTo(coord[0],coord[1]);
         this.contextReal.stroke();
         
  autosave();
     }

     onMouseLeave() {}
     onMouseEnter() {}   

 }