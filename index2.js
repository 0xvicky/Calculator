let result = document.getElementById("theResult");
let allKeys = document.querySelectorAll("button");
let resultValue = '';
for (item of allKeys) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.textContent;

        // console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            resultValue += buttonText
            result.value = resultValue;
        } else if (buttonText == 'C') {
            resultValue = '';
            result.value = resultValue;

        } else if (buttonText == '=') {

            result.value = eval(resultValue);
        } else {
            resultValue += buttonText
            result.value = resultValue;
        }
    })
}