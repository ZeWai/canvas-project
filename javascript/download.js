

const reader = new FileReader();
const img = new Image();

const uploadImage = (e) => {
    reader.onload = () => {
        img.onload = () => {
            canvasReal.width = img.width;
            canvasReal.height = img.height;
            contextReal.drawImage(img, 0, 0);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
};
const imageLoader = document.getElementById('uploader')
imageLoader.addEventListener('change', uploadImage);

function download() {
    const image = canvasReal.toDataURL();
    const link = document.createElement('a')
    link.href = image
    link.download = 'image.png'
    link.click();
}

document.querySelector('button').addEventListener('click', download);
