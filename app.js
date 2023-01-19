// Використані методи:

// getElementById()
// querySelector()
// .innerText
// addEventListener('click', () => { })
// Number()
// Math.round()
// slice()
// split()

// отримання доступу до елементів форми:
// кнопка
const calculateButton = document.getElementById("calculate");
// загальна сума чайових
const tipAmountText = document.getElementById("tip-amount");
// загальна сума до сплати на одну особу
const totalPerPersonText = document.getElementById("total-per-person");
// сума чеку
const billAmountInput = document.getElementById("bill-amount");
// кількість осіб
const numberOfPeopleInput = document.getElementById("number-of-people");

// функція, яка активується за подією click по елементу calculate
calculateButton.addEventListener("click", function () {
  // запис значення поточної суми
  const originalBillAmount = Number(billAmountInput.value);
  // запис значення поточної кількості осіб
  const numberOfPeople = Number(numberOfPeopleInput.value);

  // доступ до обраного елемента - відсотка для обрахування
  const selectedRadioTip = document.querySelector('input[name="tip"]:checked');

  // надає рядок, slice для відкидання позначки відсотків у полі value, приведення до числа, дулення для отримання десятих/сотих
  const tipPercentage = Number(selectedRadioTip.value.slice(0, -1)) / 100;

  // визначення суми згідно обраному відсотку чайових
  const totalTip = Math.round(originalBillAmount * tipPercentage * 100) / 100;

  // визначення загальної суми до сплати (чек + обраховані вище чайові)
  const totalBill = totalTip + originalBillAmount;

  // визначення суми на одну людину
  const perPerson = Math.round((totalBill / numberOfPeople) * 100) / 100;

  // додавання у форму обрахованих даних
  tipAmountText.innerText = totalTip;
  totalPerPersonText.innerText = perPerson;
});

// щоб додавались нулі, якщо сума без сотих
// const formatPrice = (price) => {
//   let retVal = price.toString();
//   const parts = retVal.split(".");
//   if (parts[0].length === 1) {
//     retVal = "0" + retVal;
//   }
//   if (parts[1].length === 1) {
//     retVal += "0";
//   }
//   return retVal;
// };
