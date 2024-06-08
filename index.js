function appendToResult(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let resultElement = document.getElementById("result");

    try{
        let result = eval(resultElement.value);
        result = parseFloat(result.toFixed(10));
        resultElement.value = result;
    }catch(error){
        console.log(error);
        resultElement.value = 'Error';
    }
}

// function reset() {
//     document.getElementById("result").value = 0;
// }