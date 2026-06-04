let count = 0;
let grandTotal = 0;

// Set today's date by default
document.getElementById('date').valueAsDate = new Date();

function addItem() {
    const selectBox = document.getElementById("candle");
    const qtyInput = document.getElementById("qty");
    const qty = parseInt(qtyInput.value);

    // Validation
    if (selectBox.value === "") {
        alert("Please select a product");
        return;
    }
    if (!qty || qty <= 0) {
        alert("Please enter a valid quantity");
        return;
    }

    count++;

    // Get Product Name and Price
    const productName = selectBox.options[selectBox.selectedIndex].text;
    const price = parseInt(selectBox.value);
    
    // Calculate Subtotal
    const subtotal = price * qty;
    grandTotal += subtotal;

    // Update Grand Total Display
    document.getElementById("grandTotal").innerText = grandTotal;

    // Create Table Row
    const tableRow = document.createElement("tr");
    
    // Insert Data
    tableRow.innerHTML = `
        <td style="text-align:center; color:#888;">${count}</td>
        <td>${productName}</td>
        <td style="text-align:center;">${qty}</td>
        <td>₹${price}</td>
        <td><strong>₹${subtotal}</strong></td>
    `;

    const tableBody = document.getElementById("invoiceBody");
    tableBody.appendChild(tableRow);

    // Reset Inputs
    qtyInput.value = "";
    selectBox.value = "";
    
    // Refocus on select for next entry
    selectBox.focus();
}