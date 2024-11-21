// Get references to the DOM elements
const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const expenseTableBody = document.querySelector("#expense-table tbody");
const totalElement = document.getElementById("total");

let totalExpense = 0;

// Add event listener to handle form submission
expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  // Validate inputs
  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and a positive amount.");
    return;
  }

  // Add expense to the table
  addExpenseToTable(description, amount);

  // Update total expense
  totalExpense += amount;
  updateTotalExpense();

  // Clear input fields
  descriptionInput.value = "";
  amountInput.value = "";
});

// Function to add a new expense to the table
function addExpenseToTable(description, amount) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${description}</td>
    <td>${amount.toFixed(2)}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Add event listener to delete button
  row.querySelector(".delete-btn").addEventListener("click", function () {
    deleteExpense(row, amount);
  });

  expenseTableBody.appendChild(row);
}

// Function to update the total expense
function updateTotalExpense() {
  totalElement.textContent = totalExpense.toFixed(2);
}

// Function to delete an expense from the table
function deleteExpense(row, amount) {
  row.remove();
  totalExpense -= amount;
  updateTotalExpense();
}
