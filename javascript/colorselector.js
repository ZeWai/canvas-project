let color = '#010101';
let linewidth ='7';

$("#width-selector")[0].oninput = function() {
    linewidth= this.value;
    $('.sizeImage').css("width",this.value);
    $('.sizeImage').css("height",this.value);
}

$("#color-selector")[0].oninput = function() {
    color= this.value;
}
