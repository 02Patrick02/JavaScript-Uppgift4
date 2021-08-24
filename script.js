let input1Element, input2Element, resultElement;
function init(){
    input1Element=document.getElementById("input1");
    input2Element=document.getElementById("input2");
    resultElement=document.getElementById("result");
    document.getElementById("runBtn").onclick=doCalculations;
}
window.onload=init;

function doCalculations(){

    let width;
    let lenght;
    let distance;
    let unit = ["steg", "fot", "tum"];
    let conv = [90,30.48,2.54];

    lenght = Number(input1Element.value);
    width = Number(input2Element.value);


        area = lenght * width;
    resultElement.innerHTML = "<p>Rektangelns area blir " + area + "m<sup>2</sup>.</p>";

        area = 3.14159 * lenght * width / 4;
    resultElement.innerHTML += "<p>Elliepsens area blir " + area + "m<sup>2</sup>.</p>";

    resultElement.innerHTML += "<p>Längden " + lenght + " meter blir: </p>";
    distance = lenght / conv[0] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[0] + "</p>";
    distance = lenght / conv[1] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
    distance = lenght / conv[2] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";
}