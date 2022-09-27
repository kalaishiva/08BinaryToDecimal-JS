let decimalResult = document.querySelector(".result");


let convert = document.querySelector(".btn");
convert.addEventListener("click", bin2dec);



function bin2dec(event) {

    event.preventDefault();

    let binaryInput = parseInt(document.getElementById("binary").value);
    let result = parseInt(binaryInput, 2).toString(10);

    decimalResult.innerHTML = result;
}