export function numberToString(amount) {
  // Convert the amount to a string and format it
  const amountString = amount.toString();
  
  // Check if the amount is greater than 10000
  if (amount > 10000) {
    // Insert a space after the first two digits
    return amountString.replace(/(\d{2})(\d+)/, '$1 $2');
  }
  
  // Return the amount as is for amounts less than or equal to 10000
  return amountString;
}