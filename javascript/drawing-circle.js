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
        var NewX = Math.abs(this.origX - coord[0])/2;
        var NewY = Math.abs(this.origY - coord[1])/2;
        var centerX= (this.origX-(this.origX - coord[0])/2);
        var centerY= (this.origY-(this.origY - coord[1])/2);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(centerX, centerY,NewX,NewY, 0,0, Math.PI*2);
        this.contextDraft.fill();

    }

    onMouseMove(){}

    onMouseUp(coord) {
        var NewX = Math.abs(this.origX - coord[0])/2;
        var NewY = Math.abs(this.origY - coord[1])/2;
        var centerX= (this.origX-(this.origX - coord[0])/2);
        var centerY= (this.origY-(this.origY - coord[1])/2);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.ellipse(centerX, centerY,NewX, NewY,0,0, Math.PI*2);
        this.contextReal.fill();
    }

    onMouseLeave() {}
    onMouseEnter() {}   

 }