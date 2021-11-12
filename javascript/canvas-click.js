    $(()=>{
    currentFunction =  new DrawingLine(contextReal)
    $("#drawing-rectangle").click(() => {
        currentFunction = new DrawingRectangle(contextReal, contextDraft);
    });
    $("#drawing-circle").click(() => {
        currentFunction = new DrawingCircle(contextReal, contextDraft);
    });
    $("#clear").click(() => {
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        autosave();
    });
    $("#drawing-line").click(() => {
        currentFunction = new DrawingLine(contextReal);
    });  
    $("#drawing-eraser").click(() => {
        currentFunction = new Eraser(contextReal);
    });  
    $("#drawing-strokerectangle").click(() => {
        currentFunction = new DrawingStrokeRectangle(contextReal, contextDraft);
    });
    $("#drawing-strokecicrle").click(() => {
        currentFunction = new DrawingStrokeCircle(contextReal, contextDraft);
    });
    $("#drawing-straightline").click(() => {
    currentFunction = new DrawingStraightLine(contextReal, contextDraft);
    });
    $("#text-box-button").click(() => {
    currentFunction = new Text(contextReal, contextDraft);
    });
    $("#color-fill").click(() => {
    currentFunction = new ColorFill(contextReal, contextDraft);
    });
    $("#undo").click(() => {
        undo();});
        $("#redo").click(() => {
        redo();
    });
})
