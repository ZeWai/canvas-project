class DrawingCircle extends PaintFunction {
     constructor(contextReal, contextDraft) {
         super();
         this.contextReal = contextReal;
         this.contextDraft = contextDraft;
     }

     onMouseDown(coord, e) {
         this.contextReal.fillStyle = color;
         this.origX = coord[0];
         this.origY = coord[1];

     }

     onDragging(coord, e) {
         this.contextDraft.fillStyle = color;
         var radius = 0;
         var NewX = this.origX - coord[0];
         var NewY = this.origY - coord[1];
         radius = Math.sqrt(NewX * NewX + NewY * NewY)
         this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
         this.contextDraft.beginPath();
         this.contextDraft.arc(this.origX, this.origY, radius, 0, Math.PI*2);
         this.contextDraft.fill();

     }

     onMouseMove(){}

     onMouseUp(coord) {
         var radius = 0;
         var NewX = this.origX - coord[0];
         var NewY = this.origY - coord[1];
         radius = Math.sqrt(NewX * NewX + NewY * NewY)
         this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
         this.contextReal.beginPath();
         this.contextReal.arc(this.origX, this.origY, radius, 0, Math.PI*2);
         this.contextReal.fill();
     }

     onMouseLeave() {}
     onMouseEnter() {}   

 }