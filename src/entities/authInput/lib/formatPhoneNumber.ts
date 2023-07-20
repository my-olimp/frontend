const PATTERN = /\D/g;
const getInputNumbersValue = (value: string) => {
  return value.replace(PATTERN, "");
};
export default function formatPhoneNumber(input: any) {
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = "";

  if (!inputNumbersValue) {
    return (input = "");
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === "9") {
      inputNumbersValue = "7" + inputNumbersValue;
    }
  }

  const firstSymbol = inputNumbersValue[0] === "8" ? "8" : "+7";
  formattedInputValue = firstSymbol + " ";

  if (inputNumbersValue.length > 1) {
    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    console.error(input);
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
  
      console.error(true);
      input = formattedInputValue;
     
  }
 
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);

    input = formattedInputValue;
    
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);

    input = formattedInputValue;
  
  } else {
    // Not Russian numbers | 35
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }

  input = formattedInputValue;

  return input;
}
