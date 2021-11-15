let existingTextBox = false;  



class Text extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.origX = null;
        this.origY = null;
    }

    
    onMouseDown(coord, event) {
        if (existingTextBox == false){
            this.origX = coord[0];
            this.origY = coord[1];
            var input = document.createElement('input');

            input.setAttribute('class', 'inputBox');
            
            input.type ='text';
            input.style.position = 'fixed';
            input.placeholder = "Enter text here!";
            input.style.left = event.clientX + 'px';
            input.style.top = event.clientY + 'px';
            this.contextReal.font = `${textSettings.textSize}px ${textSettings.textFont}`;
            input.style.color = color;
            input.style.font = `${textSettings.textSize}px ${textSettings.textFont}`;
            input.style.border = '2px dotted black';
            input.id = 'textBox'
            document.body.appendChild(input);
            existingTextBox = true;
  
        }

      
            let ctxReal = this.contextReal;

         

    
            input.onkeydown = function handleEnter(input) {
                if (input.key == 'Enter') {
                    this.typedText= document.getElementById("textBox").value;
                    ctxReal.textBaseline = "middle";
                    contextReal.fillStyle = color;

                    ctxReal.fillText(this.typedText,event.offsetX,event.offsetY);
                    
                    
                    document.body.removeChild(this);
                    existingTextBox = false;

                    
                    beforeDraw();
                    existingTextBox = false;
                }

              
            if(input.key === 'Escape') {
                $('.inputBox').remove();
                existingTextBox = false;
            }
             };
    }

    onDragging(){}
    onMouseMove(){}
    onMouseLeave(coord){
    }

    onMouseUp(){}
   
    onMouseEnter(){}

}
