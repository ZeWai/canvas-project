


class Text extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    
    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
        var input = document.createElement('input');
        input.type ='text';
        input.style.position = 'fixed';
        input.style.left = (this.origX + 170) + 'px';
        input.style.top = (this.origY + 80) + 'px';
        
        input.id = 'textBox'
        document.body.appendChild(input);

        input.onkeydown = function handleEnter(input) {
            if (input.key == 'Enter') {
                this.typedText= document.getElementById("textBox").value;
                contextReal.fillText(this.typedText,event.clientX - 170,event.clientY - 80);
                document.body.removeChild(this);
                
                beforeDraw();
            }
      };

      
    
    

    
    }

    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(coord){

    }
    onMouseEnter(){}





}
