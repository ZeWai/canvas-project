let saved =$('#canvas-real');
let undostep = [];
let redostep = [];


function autosave() {
    var lastMove = saved[0].toDataURL();
    undostep.push(lastMove);
    redostep = [];
}

function undo () {

    if (undostep.length <= 1) {
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
    } else if (undostep.length > 1) {
        var lastStep = new Image();
        lastStep.src = undostep[undostep.length - 2];
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        lastStep.onload = function (){
        contextReal.drawImage(lastStep, 0, 0);
    };
    }
    redostep.push(undostep.pop());
}

function redo () {
    if (redostep.length > 0) {
        var nextStep = new Image();
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        nextStep.src = redostep[redostep.length - 1];
        nextStep.onload = function () {
            contextReal.drawImage(nextStep, 0, 0);
        };
        undostep.push(redostep.pop());
    }
}
