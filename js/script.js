function generateTable() {
            const number = document.getElementById("number").value;
            const tableBody = document.querySelector("#multiplicationTable tbody");
            tableBody.innerHTML = "";  // Clear previous table content
            
            for (let i = 1; i <= 10; i++) {
                let row = tableBody.insertRow();
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerText = `${number} x ${i}`;
                cell2.innerText = number * i;
            }
        }

function showAdvice() {
    let age = parseInt(document.getElementById("age").value);
    let tableBody = document.getElementById("ageAdviceTable").getElementsByTagName("tbody")[0];
    
    // Clear previous table rows
    tableBody.innerHTML = "";

    // Age-based advice list
    let adviceList = [
        { age: 18, advice: "You can vote and participate in elections." },
        { age: 21, advice: "You can legally drink alcohol in many countries." },
        { age: 25, advice: "You may be eligible for car insurance discounts." },
        { age: 30, advice: "It's a good time to start thinking about long-term savings." },
        { age: 40, advice: "You may start considering your retirement plans." },
        { age: 50, advice: "You are halfway to retirement! Time to reassess your goals." },
        { age: 60, advice: "You may qualify for senior discounts and benefits." },
        { age: 65, advice: "Eligible for retirement in many countries and pension benefits." }
    ];

    // Find the exact match for the entered age
    let matchedAdvice = adviceList.find(entry => entry.age === age);

    // Add matched advice to the table, if found
    if (matchedAdvice) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = matchedAdvice.age;
        cell2.innerHTML = matchedAdvice.advice;
    } else {
        // Optional: show a message if no advice found
        let row = tableBody.insertRow();
        let cell = row.insertCell(0);
        cell.colSpan = 2;
        cell.style.textAlign = "center";
        cell.innerHTML = "No advice found for this age.";
    }
}
