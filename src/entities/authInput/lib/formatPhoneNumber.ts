export default function formatPhoneNumber(input: string) {
  const match = input.match(/^(\+?)(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,4})$/);

  if (!match) {
    return input;
  }

  let formattedNumber = '';

  if (match[1]) {
    formattedNumber += match[1];
  }

  if (match[2]) {
    formattedNumber += match[2];
    if (match[3]) {
      formattedNumber += ' ' + match[3];
      if (match[4]) {
        formattedNumber += ' ' + match[4];
        if (match[5]) {
          formattedNumber += ' ' + match[5];
          if (match[6]) {
            formattedNumber += ' ' + match[6];
          }
        }
      }
    }
  }

  return formattedNumber;
}