const incentives = [
  "PEPP Incentives",
  "PAL Incentives (OTC)",
  "Online Renewal Incentives (Reg + OnTop)",
  "GCash-Out Incentives",
  "GCash-In Incentives",
  "Rematado JS, GB and GC Incentives (Rolling Store)",
  "Rematado JS, GB and GC Incentives (Branch Live Sale)",
  "Rematado JS, GB and GC Incentives (PPJ Live Sale)",
  "Palawan Gold JS, GB and GC Incentives (Rolling Store)",
  "Palawan Gold JS, GB and GC Incentives (Branch Live Sale)",
  "Palawan Gold JS, GB and GC Incentives (PPJ Live Sale)",
  "MyBuhay 200 Protektodo Incentives",
  "Protektodo Grupo 45 Incentives",
  "Protektodo Grupo 100 Incentives",
  "Protektodo MyCTPL (Tourist Car) Incentives",
  "Protektodo MyCTPL (Taxi/PUJ/Minibus) Incentives",
  "Protektodo MyCTPL (PUB/Tourist Bus) Incentives",
  "Protektodo MyCTPL (Motorcycle) Incentives",
  "Protektodo MyCTPL (Heavy Truck & Private Bus) Incentives",
  "Protektodo MyCTPL (Light & Medium Truck) Incentives",
  "Protektodo MyCTPL (Private Vehicles) Incentives",
  "Protektodo MyNegosyo Plus Incentives",
  "Protektodo MyNegosyo Basic Incentives",
  "Protektodo Kasambahay Incentives",
  "Protektodo Eskwela Incentives",
  "Protektodo Eskwela Max 50 Incentives",
  "Protektodo Eskwela Max 30 Incentives",
  "Protektodo Premium Solo 50 Incentives",
  "Protektodo Premium Solo Plus 99 Incentives",
  "Protektodo Premium Pamilya 100 Incentives",
  "Protektodo Premium Pamilya Max 300 Incentives",
  "Protektodo Sulit Solo 20 Incentives",
  "Protektodo Sulit Solo Plus 49 Incentives",
  "Protektodo Fire Incentives",
  "Protektodo Travel Incentives",
  "Bills Payment Incentives (PPY)",
  "International Remittance Incentives (PPY)",
  "Suki Card Sales Incentives",
  "Mc Sales Incentives"
];

// Elements
const input = document.getElementById("Area");
const dropdown = document.getElementById("dropdownList-arearecon");

// Populate dropdown list
function populateDropdown(items) {
  dropdown.innerHTML = ""; // Clear previous list
  items.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    div.style.padding = "5px 10px";
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
      input.value = item;
      dropdown.style.display = "none";
    });
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "#f0f0f0";
    });
    div.addEventListener("mouseout", () => {
      div.style.backgroundColor = "white";
    });
    dropdown.appendChild(div);
  });



}

// Initial load all items
populateDropdown(incentives);

// Show/hide dropdown
function toggleDropdownarearecon() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
    populateDropdown(incentives); // reset list when opened
  }
}

// Filter dropdown based on input
function filterDropdownarearecon() {
  const filter = input.value.toLowerCase();
  const filtered = incentives.filter(item => item.toLowerCase().includes(filter));
  populateDropdown(filtered);
  dropdown.style.display = filtered.length ? "block" : "none";
}

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!input.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});





const employeeRoles = [
  "Branch Head",
  "BA:Cashier-Regular",
  "BA:Cashier-Prob",
  "BA:PEPP Operator-Regular",
  "BA:PEPP Operator-Prob",
  "PSB Associate-Regular",
  "PSB Associate-Prob",
  "BA:Jewelry Seller-Regular",
  "BA:Jewelry Seller-Prob",
  "BA:Online Seller (Branch)-Regular",
  "BA:Online Seller (Branch)-Prob",
  "Security Guard"
];



function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  select.innerHTML = "";
  options.forEach(opt => {
    const optionElem = document.createElement("option");
    optionElem.textContent = opt;
    optionElem.value = opt;
    select.appendChild(optionElem);
  });

   
}

populateSelect("employeerole", employeeRoles);



const employeeScheds = [
  "Fulltime",
  "Halfday(AM)",
  "Halfday(PM)"
];

function populateSelectS(selectId, options) {
  const select = document.getElementById(selectId);
  select.innerHTML = "";
  options.forEach(opt => {
    const optionElem = document.createElement("option");
    optionElem.textContent = opt;
    optionElem.value = opt;
    select.appendChild(optionElem);
  });

}


populateSelectS("employeesched", employeeScheds);

