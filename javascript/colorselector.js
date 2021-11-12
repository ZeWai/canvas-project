let color = "black";
let linewidth ='2';
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

