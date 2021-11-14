let color = '#010101';
let linewidth ='8';

$("#width-selector")[0].oninput = function() {
    linewidth= this.value;
    $('.sizeImage').css("width",this.value);
    $('.sizeImage').css("height",this.value);
}

$("#color-selector")[0].oninput = function() {
    color= this.value;
}

let textSize =10;
let textFont = "Times New Roman";


let textSettings = {
    textSize: $('#text-size').val(),
    textFont: $('#text-font').val()
}

$("#text-size")[0].oninput = function () {
    textSettings.textSize = this.value;
};
$("#text-font")[0].oninput = function () {
    textSettings.textFont = this.value;
    $('#text-font').css("font-family", this.value)
};


