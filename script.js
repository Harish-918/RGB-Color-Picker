const redSlider = document.getElementById("redSlider")
const greenSlider = document.getElementById("greenSlider")
const blueSlider = document.getElementById("blueSlider")

const redValueSpan = document.getElementById("redValue")
const greenValueSpan = document.getElementById("greenValue")
const blueValueSpan = document.getElementById("blueValue")

const colorBox = document.getElementById("color-box")
const copyButton = document.getElementById("copyButton")
const inputTypeRGBValue = document.getElementById("inputType")

redSlider.addEventListener("input", updateColor)
greenSlider.addEventListener("input", updateColor)
blueSlider.addEventListener("input", updateColor)
copyButton.addEventListener("click", copyRGBValue)


function updateColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    //console.log(redValue, greenValue, blueValue)

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    //console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue
    greenValueSpan.textContent = greenValue
    blueValueSpan.textContent = blueValue

    inputTypeRGBValue.textContent = rgbColor
}


updateColor();

function copyRGBValue(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    //Code for writeText property supported browsers
    /*navigator.clipboard.writeText(rgbColor)
        .then(()=>{
            alert("RGB Color Value copied to clipboard" +rgbColor);
        })
        .catch((error)=>{
            console.log("Failed to copy RGB Value")
        })*/

        
    //Code for writeText property not supported browsers
    if (navigator.clipboard) {
        navigator.clipboard.writeText(rgbColor)
            .then(() => {
                alert("RGB Color Value copied to clipboard: " + rgbColor);
            })
            .catch((error) => {
                console.log("Failed to copy RGB Value");
            });
    } else {
        // Fallback for browsers that don't support navigator.clipboard
        const textarea = document.createElement("textarea");
        textarea.value = rgbColor;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert("RGB Color Value copied to clipboard: " + rgbColor);
    }
}