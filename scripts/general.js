const searchInputarearecon = document.getElementById("Area");
const dropdownListarearecon = document.getElementById("dropdownList-arearecon");

document.getElementById('Area').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
  }
});

function toggleDropdownarearecon() {
    dropdownListarearecon.style.display = dropdownListarearecon.style.display === "block" ? "none" : "block";
}

function filterDropdownarearecon() {
  const filterarearecon = searchInputarearecon.value.toUpperCase();
  const itemsarearecon = dropdownListarearecon.getElementsByTagName("div");

  // Show dropdown if there's input, otherwise hide it
  dropdownListarearecon.style.display = filterarearecon ? "block" : "none";

  for (let i = 0; i < itemsarearecon.length; i++) {
      const itemarearecon = itemsarearecon[i];
      const txtValuearearecon = itemarearecon.textContent || itemarearecon.innerText;

      if (txtValuearearecon.toUpperCase().indexOf(filterarearecon) > -1) {
          itemarearecon.style.display = "";
      } else {
          itemarearecon.style.display = "none";
      }
  }
}


const Principal = document.getElementById('Principal');
const Count = document.getElementById('Count');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5'); // if this exists
const num6 = document.getElementById('num6'); // if this exists

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5'); // if this exists
const p6 = document.getElementById('p6'); 


// Elements from PEPPbracketHD (Halfday: AM and PM)
const PEPPbracket = document.getElementById('PEPPbracket')
const Countpm = document.getElementById('Countpm');
const num12 = document.getElementById('num12');
const num22 = document.getElementById('num22');
const num32 = document.getElementById('num32');
const num42 = document.getElementById('num42');
const num52 = document.getElementById('num52'); // if this exists
const num62 = document.getElementById('num62'); // if this exists


const totaltrxcount = document.getElementById('totaltrxcount'); 

  function computetotal() {
    function getNumValue(el) {
      return el && el.value ? parseFloat(el.value) || 0 : 0;
    }

    const totalFirstSet =
      getNumValue(num1) +
      getNumValue(num2) +
      getNumValue(num3) +
      getNumValue(num4) +
      getNumValue(num5) +
      getNumValue(num6);

    const totalSecondSet =
      getNumValue(num12) +
      getNumValue(num22) +
      getNumValue(num32) +
      getNumValue(num42) +
      getNumValue(num52) +
      getNumValue(num62);

    const total = totalFirstSet + totalSecondSet;
 
    totaltrxcount.innerText = 'Total Count: ' + total;
  }

function showElements(elements) {
  elements.forEach(el => { if (el) el.style.display = 'inline-block'; });
}

function hideElements(elements) {
  elements.forEach(el => { if (el) el.style.display = 'none'; });
}

function showRows(rows) {
  rows.forEach(row => { if (row) row.style.display = 'table-row'; });
}

function hideRows(rows) {
  rows.forEach(row => { if (row) row.style.display = 'none'; });
}

function clearValues(elements) {
  elements.forEach(el => { if (el) el.value = ''; });
}

function setTextContent(el, text) {
  if (el) el.textContent = text;
}

function checkHalfday() {
  for (let i = 1; i < checkrow.length; i++) {
    const cells = checkrow[i].getElementsByTagName("td");
    const rowSched = cells[2].textContent.trim();
    if (rowSched === 'Halfday(AM)' || rowSched === 'Halfday(PM)') {
      return true;
    }
  }
  return false;
}

function toggleCountpmColumn(show) {
  Countpm.style.display = show ? 'table-cell' : 'none';
  document.querySelectorAll('[id$="C2"]').forEach(cell => {
    cell.style.display = show ? 'table-cell' : 'none';
  });
}


function updateIncentiveDisplay() {
  const hasHalfday = checkHalfday();
  const area = Area.value;

  const rows = [R0, R1, R2, R3, R4, R5, R6];
  const numsAM = [num1, num2, num3, num4, num5, num6];
  const numsPM = [num12, num22, num32, num42, num52, num62];
  const labels = [p1, p2, p3, p4, p5, p6];

  PEPPbracket.style.display = 'block';

  // General setup
  Count.style.display = 'table-cell';
  toggleCountpmColumn(hasHalfday);  // <== Use this here
  setTextContent(Count, hasHalfday ? 'Count (AM)' : 'Count');
  if (hasHalfday) setTextContent(Countpm, 'Count (PM)');


  switch (area) {
    case 'PEPP Incentives':
      showRows(rows);

      if (hasHalfday) {
        showElements(numsAM);
        showElements(numsPM);
      } else {
        showElements(numsAM);
        hideElements(numsPM);
        clearValues(numsPM);
      }

      setTextContent(labels[0], '001-100');
      setTextContent(labels[1], '101-200');
      setTextContent(labels[2], '201-300');
      setTextContent(labels[3], '301-500');
      setTextContent(labels[4], '501-1,000');
      setTextContent(labels[5], '1,001-up');
    
      break;

    case 'GCash-In Incentives':
      showRows([R0, R1, R2]);
      hideRows([R3, R4, R5, R6]);

      if (hasHalfday) {
        showElements([num1, num2, num12, num22]);
        hideElements([num3, num4, num5, num6, num32, num42, num52, num62]);
        clearValues([num3, num4, num5, num6, num32, num42, num52, num62]);
      } else {
        showElements([num1, num2, num3, num4, num5, num6]);
        hideElements([num12, num22, num32, num42, num52, num62]);
        clearValues([num3, num4, num5, num6, numsPM]);
      }

      setTextContent(labels[0], '0001-1,000');
      setTextContent(labels[1], '1,001-up');
    
      break;     
   
    case 'Rematado JS, GB and GC Incentives (Rolling Store)':    
    case 'Rematado JS, GB and GC Incentives (PPJ Live Sale)':    
    case 'Rematado JS, GB and GC Incentives (Branch Live Sale)':
      showRows([R0, R1, R2, R3, R4]);
      hideRows([R5, R6]);
    

      if (hasHalfday) {
        showElements([num1, num2, num3, num4, num12, num22, num32, num42]);
        hideElements([num5, num6, num52, num62]);
        clearValues([num5, num6, num52, num62]);
      } else {
        showElements([num1, num2, num3, num4]);
        hideElements([num5, num6, num12, num22, num32, num42, num52, num62]);
        clearValues([num5, num6, num12, num22, num32, num42, num52, num62]);
      }

      setTextContent(labels[0], '   001-10,000');
      setTextContent(labels[1], '10,001-20,000');
      setTextContent(labels[2], '20,001-50,000');
      setTextContent(labels[3], '50,001-up');
      
      break;
   
    case 'Palawan Gold JS, GB and GC Incentives (Rolling Store)':
    case 'Palawan Gold JS, GB and GC Incentives (Branch Live Sale)':
    case 'Palawan Gold JS, GB and GC Incentives (PPJ Live Sale)':
       showRows([R0, R1, R2, R3, R4, R5]);
       hideRows([R6]);

      if (hasHalfday) {
        showElements([num1, num2, num3, num4, num5, num12, num22, num32, num42, num52]);
        hideElements([num6, num62]);
        clearValues([num6, num62]);
      } else {
        showElements([num1, num2, num3, num4, num5]);
        hideElements([num6, num12, num22, num32, num42, num52, num62]);
        clearValues([num6, num12, num22, num32, num42, num52, num62]);
      }

      setTextContent(labels[0], '   001-10,000');
      setTextContent(labels[1], '10,001-20,000');
      setTextContent(labels[2], '20,001-50,000');
      setTextContent(labels[3], '50,001-100,000');
      setTextContent(labels[4], '100,001-up');
   
    break;
    case '':

      showRows([R0]);
      hideRows([R1, R2, R3, R4, R5, R6]);
      clearValues([numsAM, numsPM]);
    break;


    case 'Mc Sales Incentives':

      showRows([R0, R1]);
      hideRows([R2, R3, R4, R5, R6]);

      if (hasHalfday) {
        showElements([num12]);
        hideElements([num22, num32, num42, num52, num62]);
        clearValues([num2, num3, num4, num5, num6, num22, num32, num42, num52, num62])
      } else {
        hideElements([num2, num3, num4, num5, num6, num12, num22, num32, num42, num52, num62]);
        clearValues([num2, num3, num4, num5, num6, num12, num22, num32, num42, num52, num62]);
      }

      setTextContent(labels[0], 'Total Amount');

      break;
    break;
  
    default:
      showRows([R0, R1]);
      hideRows([R2, R3, R4, R5, R6]);

      if (hasHalfday) {
        showElements([num12]);
        hideElements([num22, num32, num42, num52, num62]);
        clearValues([num2, num3, num4, num5, num6, num22, num32, num42, num52, num62])
      } else {
        hideElements([num2, num3, num4, num5, num6, num12, num22, num32, num42, num52, num62]);
        clearValues([num2, num3, num4, num5, num6, num12, num22, num32, num42, num52, num62]);
      }

      setTextContent(labels[0], '0001-Up');
     
      break;
  }
}


// Handle item selection

dropdownListarearecon.addEventListener("click", function(event) {
  if (event.target.tagName === "DIV") {
    searchInputarearecon.value = event.target.textContent;
    dropdownListarearecon.style.display = "none";
  }

  updateIncentiveDisplay(); 
  updateAMPMDisplay();
  saveDutyTable();
  saveCountTable();
   saveDropdowns();
  Area.style.borderColor = 'gray';
  computetotal()
 
});



// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

  if (!event.target.closest('.dropdown')) {
    dropdownListarearecon.style.display = "none";
  }
});

const selectElementarearecon = document.getElementById('Area');

selectElementarearecon.addEventListener('change', function () {
// Check if the placeholder option is selected (value is empty string)
 if (selectElementarearecon.value === '') {
  selectElementarearecon.value = '';  // This will ensure the value is set to blank 
    
    R1.style.display='none'
    R2.style.display='none'
    R3.style.display='none'
    R4.style.display='none'
    R5.style.display='none'
    R6.style.display='none'

    num1.value=''
    num2.value=''
    num3.value=''
    num4.value=''
    num5.value=''
    num6.value=''
    computetotal()

    Area.style.borderColor = 'red';
 }else {
    Area.style.borderColor = 'gray';

 }
});


  const FTtablebody = document.getElementById('employeetable');
  const checkrow = FTtablebody.getElementsByTagName("tr");
  const bcasFTtablebody = FTtablebody.querySelector('tbody');






function showConflictNotification(role, currentSched, newSched) {
  const notification = document.getElementById('notification');
  
  notification.innerHTML = `
    <div class="icon">⚠️</div>
    <div class="message">
      Schedule conflict: <br> <strong>${role}</strong>
      already has <strong>${currentSched} </strong> schedule.
      <strong>${newSched}</strong> cannot be added anymore. 
    </div>
  `;

  notification.style.display = 'flex';

  // Reset animation
  notification.style.animation = 'none';
  void notification.offsetWidth;
  notification.style.animation = null;

  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
}



function add() {
 
    // Normalize role for conflict checking
    let currentRole = employeerole.value;
    const currentSched = employeesched.value;

    if (currentRole === 'BA:Cashier-Regular' || currentRole === 'BA:Cashier-Prob') {
        currentRole = 'BA:Cashier';
    }

     if (currentRole === 'BA:Online Seller (Branch)-Regular' || currentRole === 'BA:Online Seller (Branch)-Prob') {
        currentRole = 'BA:Online Seller (Branch)';
    }

    if (currentRole === 'BA:Jewelry Seller-Regular' || currentRole === 'BA:Jewelry Seller-Prob') {
        currentRole = 'BA:Jewelry Seller';
    }

    // Conflict matrix
    const conflictMatrix = {
        'Branch Head': {
            'Fulltime': ['Fulltime', 'Halfday(AM)', 'Halfday(PM)'],
            'Halfday(AM)': ['Fulltime', 'Halfday(AM)'],
            'Halfday(PM)': ['Fulltime', 'Halfday(PM)'],
        },
        'BA:Cashier': {
            'Fulltime': ['Fulltime', 'Halfday(AM)', 'Halfday(PM)'],
            'Halfday(AM)': ['Fulltime', 'Halfday(AM)'],
            'Halfday(PM)': ['Fulltime', 'Halfday(PM)'],
        },
        'Security Guard': {
            'Fulltime': ['Fulltime', 'Halfday(AM)', 'Halfday(PM)'],
            'Halfday(AM)': ['Fulltime', 'Halfday(AM)'],
            'Halfday(PM)': ['Fulltime', 'Halfday(PM)'],
        },        
        'BA:Jewelry Seller': {
            'Fulltime': ['Fulltime', 'Halfday(AM)', 'Halfday(PM)'],
            'Halfday(AM)': ['Fulltime', 'Halfday(AM)'],
            'Halfday(PM)': ['Fulltime', 'Halfday(PM)'],
        },
        'BA:Online Seller (Branch)': {
            'Fulltime': ['Fulltime', 'Halfday(AM)', 'Halfday(PM)'],
            'Halfday(AM)': ['Fulltime', 'Halfday(AM)'],
            'Halfday(PM)': ['Fulltime', 'Halfday(PM)'],
        }




    };

    // Conflict check
    for (let i = 1; i < checkrow.length; i++) {
        const cells = checkrow[i].getElementsByTagName("td");
        let rowRole = cells[1].innerText;
        const rowSched = cells[2].innerText;

        // Normalize role in existing table for comparison
        if (rowRole === 'BA:Cashier-Regular' || rowRole === 'BA:Cashier-Prob') {
            rowRole = 'BA:Cashier';
        }

     if (rowRole === 'BA:Online Seller (Branch)-Regular' || rowRole === 'BA:Online Seller (Branch)-Prob') {
        rowRole= 'BA:Online Seller (Branch)';
    }

    if (rowRole === 'BA:Jewelry Seller-Regular' || rowRole === 'BA:Jewelry Seller-Prob') {
        rowRole = 'BA:Jewelry Seller';
    }

        if (rowRole === currentRole) {
          const conflictSchedules = conflictMatrix[currentRole]?.[currentSched];
          if (conflictSchedules && conflictSchedules.includes(rowSched)) {
            showConflictNotification(currentRole, rowSched, currentSched); // 💡 'rowSched' is the current, 'currentSched' is what user wants to add
          return;
          }
        }
    }

    // Append new row
    const roleText = document.createTextNode(employeerole.value + " "); // Keep original label
    const actionBtn = document.createElement('button');
    Object.assign(actionBtn.style, {
        width: "20px",
        height: "20px",
        padding: "0px",
        marginRight: "30px",
        borderRadius: "10px",
        marginTop: "10px",
        marginLeft: "10px",
        backgroundColor : "red",
        color: "white",
        borderColor: "red",
        fontSize: "10px",
    });


    const newRow = bcasFTtablebody.insertRow();
    const act = newRow.insertCell(0);
    const rol = newRow.insertCell(1);
    const sch = newRow.insertCell(2);
    const inc = newRow.insertCell(3);
    actionBtn.textContent = 'x';
    actionBtn.onclick = () => {
  newRow.remove();
  updateIncentiveDisplay()
  updateAMPMDisplay()
  computetotal();
  saveDutyTable();
  saveCountTable();
  saveDropdowns();
};

    act.appendChild(actionBtn);
    rol.appendChild(roleText);
    sch.textContent = currentSched;
    inc.textContent = '';
    updateIncentiveDisplay()
    updateAMPMDisplay()
    computetotal();
    saveDutyTable();
    saveCountTable();
    saveDropdowns();
}

function computeDynamicAMPMCounts() {
  const table = document.getElementById('employeetable');
  if (!table) return { am: 0, pm: 0, sgam: 0, sgpm: 0 };

  const tbody = table.querySelector('tbody');
  if (!tbody) return { am: 0, pm: 0, sgam: 0, sgpm: 0 };

  const rows = tbody.querySelectorAll('tr');

  let am = 0;
  let pm = 0;
  let sgam = 0;
  let sgpm = 0;

  let jsam = 0;
  let jspm = 0;

  let osam = 0;
  let ospm = 0;

  let pjam = 0;
  let pjpm = 0;

  function normalizeRole(role) {
    return (role === 'BA:Cashier-Regular' || role === 'BA:Cashier-Prob') 
           ? 'BA:Cashier' 
           : role;

    return (role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob') 
           ? 'BA:Online Seller (Branch)'
           : role;

    return (role === 'BA:Jewelry Seller-Regular' || role === 'BA:Jewelry Seller-Prob') 
           ? 'BA:Jewelry Seller'
           : role;

    }

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length < 3) return;

    let role = cells[1].textContent.trim();
    const sched = cells[2].textContent.trim();

      if ( role === 'BA:Jewelry Seller-Regular' || role === 'BA:Jewelry Seller-Prob'){
        if (sched === 'Fulltime') {
          jsam++;
          jspm++;
        } else if (sched === 'Halfday(AM)') {
          jsam++;
        } else if (sched === 'Halfday(PM)') {
          jspm++;
        }
        
      }
      if ( role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob'){
        if (sched === 'Fulltime') {
          osam++;
          ospm++;
        } else if (sched === 'Halfday(AM)') {
          osam++;
        } else if (sched === 'Halfday(PM)') {
          ospm++;
        }
        
      }

     if ( role === 'Branch Head'){
        if (sched === 'Fulltime') {
          pjam++;
          pjpm++;
        } else if (sched === 'Halfday(AM)') {
          pjam++;
        } else if (sched === 'Halfday(PM)') {
          pjpm++;
        }
        
      }
      


    if (role === 'Security Guard') {
      // Count Security Guard separately
      if (sched === 'Fulltime') {
        sgam++;
        sgpm++;
      } else if (sched === 'Halfday(AM)') {
        sgam++;
      } else if (sched === 'Halfday(PM)') {
        sgpm++;
      }
    } else {
      // Normalize role for others
      role = normalizeRole(role);

      if (sched === 'Fulltime') {
        am++;
        pm++;
      } else if (sched === 'Halfday(AM)') {
        am++;
      } else if (sched === 'Halfday(PM)') {
        pm++;
      }
    }
  });

  return { am, pm, sgam, sgpm, jsam, jspm, osam, ospm, pjam, pjpm };
}

function calculate(){
const Area = document.getElementById('Area').value;
  const { am, pm, sgam, sgpm, jsam, jspm, osam, ospm, pjam, pjpm } = computeDynamicAMPMCounts();

 if (Area === '' && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {   
    
    
          const notification = document.getElementById('notification');
            
            notification.innerHTML = `
              <div class="icon">⚠️</div>
              <div class="message">
                <strong>No Selected Incentives Scheme:</strong> <br> 
                Kindly choose an incentive type and enter values in the count fields.. 
              </div>
            `;

            notification.style.display = 'flex';

            // Reset animation
            notification.style.animation = 'none';
            void notification.offsetWidth;
            notification.style.animation = null;

            setTimeout(() => {
              notification.style.display = 'none';
            }, 5000); 

    } else { 
      updateAMPMDisplay()
    saveDutyTable();
    saveCountTable();
    saveDropdowns();
    }
}


function updateAMPMDisplay() {
  const { am, pm, sgam, sgpm, jsam, jspm, osam, ospm, pjam, pjpm } = computeDynamicAMPMCounts();
 // const display = document.getElementById('ampmCountDisplay');
 // display.textContent = `AM Assoc: ${am} | PM Assoc : ${pm} | AM SG: ${sgam} | PM SG: ${sgpm}`;

  const Area = document.getElementById('Area').value;
  const checkrow = document.querySelectorAll('#employeetable tbody tr');

  // Get all the numeric inputs safely am and full
  const value1 = parseFloat(document.getElementById('num1')?.value) || 0;
  const value2 = parseFloat(document.getElementById('num2')?.value) || 0;
  const value3 = parseFloat(document.getElementById('num3')?.value) || 0;
  const value4 = parseFloat(document.getElementById('num4')?.value) || 0;
  const value5 = parseFloat(document.getElementById('num5')?.value) || 0;
  const value6 = parseFloat(document.getElementById('num6')?.value) || 0;

    // Get all the numeric inputs safely
  const value12 = parseFloat(document.getElementById('num12')?.value) || 0;
  const value22 = parseFloat(document.getElementById('num22')?.value) || 0;
  const value32 = parseFloat(document.getElementById('num32')?.value) || 0;
  const value42 = parseFloat(document.getElementById('num42')?.value) || 0;
  const value52 = parseFloat(document.getElementById('num52')?.value) || 0;
  const value62 = parseFloat(document.getElementById('num62')?.value) || 0;

  const value123 = parseFloat(document.getElementById('num123')?.value) || 0;
  const value223 = parseFloat(document.getElementById('num223')?.value) || 0;
  const value323 = parseFloat(document.getElementById('num323')?.value) || 0;
  const value423 = parseFloat(document.getElementById('num423')?.value) || 0;
  const value523 = parseFloat(document.getElementById('num523')?.value) || 0;
  const value623 = parseFloat(document.getElementById('num623')?.value) || 0;

if (Area === 'PEPP Incentives' && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {

            checkrow.forEach(row => {
              const cells = row.querySelectorAll('td');
              if (cells.length < 4) return;

              const role = cells[1].innerText.trim();
              const sched = cells[2].innerText.trim();
              const isSecurity = role === 'Security Guard';
              const isHalfdayAM = sched === 'Halfday(AM)';
              const isHalfdayPM = sched === 'Halfday(PM)';
              const isFulltime = !isHalfdayAM && !isHalfdayPM;

              const weights = [0.15, 0.25, 0.5, 0.75, 1.75];

              const computeLastValue = (count) => {
                return count > 230
                  ? ((count - 230) * 0.5) + (200 * 1.25) + (30 * 2.5)
                  : count > 30
                    ? ((count - 30) * 1.25) + (30 * 2.5)
                    : count * 2.5;
              };


             let pmvalue = 0;
              const total = value6 + value62;
              if (value6 >= 230){
                 pmvalue += (value62 * 0.5) 


              }else if (value6 >= 30){

                if (total <= 230 ){
                pmvalue += (value62 * 1.25)
                }else if (total > 230){
                pmvalue += (( (value62 - value6) - 230  ) * 0.5) + (( 230 - value6)* 1.25)

                }
              }else if ( value6 >= 0 && value6 < 30 ){
                if (total <= 230){
                  if (total >= 30){
                    pmvalue +=  (( 30 - value6)* 2.5) +  (( value62 - ( 30 - value6) ) * 1.25) 
                  }else {
                    pmvalue +=  value62* 2.5
                  }
                }else{

                    pmvalue += (( 30 - value6)* 2.5) +  ((value62 - 230)  * 0.5) + (((value62-(30-value6))-(value62- 230))* 1.25) 
                }
               
              }



              const computeShare = (values, count, sgCount, isSecurity, lastvalue) => {
                let multiplier = 0;
                let assoc = 0;
                let sg = 0;

                if (sgCount > 0) {
                  const assocRatio = count <= 3 ? 0.85 : 0.90;
                  const sgRatio = count <= 3 ? 0.15 : 0.10;
                  multiplier = isSecurity ? sgRatio : assocRatio;
                  assoc = (lastvalue * assocRatio) / count;
                  sg = lastvalue * sgRatio;
                } else {
                  multiplier = isSecurity ? 0 : 1;
                  assoc = lastvalue / count;
                }

                let total = 0;
                values.forEach((val, i) => {
                  const contrib = val * multiplier * weights[i];
                  total += isSecurity ? contrib : contrib / count;
                });

                return isSecurity ? sg + total : assoc + total;
              };

              if (isHalfdayAM) {
                const values = [value1, value2, value3, value4, value5];
                const finalValue = computeShare(values, am, sgam, isSecurity, computeLastValue(value6));
                cells[3].innerText = finalValue.toFixed(3);

              } else if (isHalfdayPM) {
                const values = [value12, value22, value32, value42, value52];
                const finalValue = computeShare(values, pm, sgpm, isSecurity, pmvalue );
                cells[3].innerText = finalValue.toFixed(3);

              } else if (isFulltime) {
                const valuesAM = [value1, value2, value3, value4, value5];
                const valuesPM = [value12, value22, value32, value42, value52];

                const lvAM = computeLastValue(value6);
                const lvPM = pmvalue ;

                const shareAM = computeShare(valuesAM, am, sgam, isSecurity, lvAM);
                const sharePM = computeShare(valuesPM, pm, sgpm, isSecurity, lvPM);

                const finalValue = shareAM + sharePM;
                cells[3].innerText = finalValue.toFixed(3);
              }
            });

 } else if (Area === 'International Remittance Incentives (PPY)' && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {



            checkrow.forEach(row => {
              const cells = row.querySelectorAll('td');
              if (cells.length < 4) return;

              const role = cells[1].innerText.trim();
              const sched = cells[2].innerText.trim();
              const isSecurity = role === 'Security Guard';
              const isHalfdayAM = sched === 'Halfday(AM)';
              const isHalfdayPM = sched === 'Halfday(PM)';
              const isFulltime = !isHalfdayAM && !isHalfdayPM;

              //const weights = [0.15, 0.25, 0.5, 0.75, 1.75];

              const computeLastValue = (count) => {
                return count > 230
                  ? ((count - 230) * 0.5) + (200 * 1.25) + (30 * 2.5)
                  : count > 30
                    ? ((count - 30) * 1.25) + (30 * 2.5)
                    : count * 2.5;
              };


              let pmvalue = 0;
              const total = value1 + value12;
              if (value1 >= 230){
                 pmvalue += (value12 * 0.5) 


              }else if (value1 >= 30){

                if (total <= 230 ){
                pmvalue += (value12 * 1.25)
                }else if (total > 230){
                pmvalue += (( (value12 - value1) - 230  ) * 0.5) + (( 230 - value1)* 1.25)

                }
              }else if ( value1 >= 0 && value1 < 30 ){
                if (total <= 230){
                  if (total >= 30){
                    pmvalue +=  (( 30 - value1)* 2.5) +  (( value12 - ( 30 - value1) ) * 1.25) 
                  }else {
                    pmvalue +=  value12* 2.5
                  }
                }else{

                    pmvalue += (( 30 - value1)* 2.5) +  ((value12 - 230)  * 0.5) + (((value12-(30-value1))-(value12- 230))* 1.25) 
                }
               
              }


              const computeShare = (count, sgCount, isSecurity, lastvalue) => {
                let multiplier = 0;
                let assoc = 0;
                let sg = 0;

                if (sgCount > 0) {
                  const assocRatio = count <= 3 ? 0.85 : 0.90;
                  const sgRatio = count <= 3 ? 0.15 : 0.10;
                  multiplier = isSecurity ? sgRatio : assocRatio;
                  assoc = (lastvalue * assocRatio) / count;
                  sg = lastvalue * sgRatio;
                } else {
                  multiplier = isSecurity ? 0 : 1;
                  assoc = lastvalue / count;
                }

                //let total = 0;
                //values.forEach((val, i) => {
                 // const contrib = val * multiplier * weights[i];
                 // total += isSecurity ? contrib : contrib / count;
               // });

                return isSecurity ? sg : assoc ;
              };

              if (isHalfdayAM) {
               
                const finalValue = computeShare(am, sgam, isSecurity, computeLastValue(value1));
                cells[3].innerText = finalValue.toFixed(3);

              } else if (isHalfdayPM) {
               const lvPM = pmvalue;
               const finalValue = computeShare(pm, sgpm, isSecurity, lvPM);
                cells[3].innerText = finalValue.toFixed(3);

              } else if (isFulltime) {
          

                const lvAM = computeLastValue(value1);
                const lvPM = pmvalue;

                const shareAM = computeShare( am, sgam, isSecurity, lvAM);
                const sharePM = computeShare( pm, sgpm, isSecurity, lvPM);

                const finalValue = shareAM + sharePM;
                cells[3].innerText = finalValue.toFixed(3);
              }
            });


            
}else if (Area === 'PAL Incentives (OTC)' && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {
            checkrow.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 4) return;

            const role = cells[1].innerText.trim();
            const sched = cells[2].innerText.trim();
            const isSecurity = role === 'Security Guard';
            const isHalfdayAM = sched === 'Halfday(AM)';
            const isHalfdayPM = sched === 'Halfday(PM)';
            const isFulltime = !isHalfdayAM && !isHalfdayPM;

            // Multiplier based on role
            let multiplier = 1;
            if (role === 'Branch Head') multiplier = 2.5;
            else if (
              role === 'BA:Cashier-Regular' ||
              role === 'BA:PEPP Operator-Regular' ||
                  role === 'BA:Jewelry Seller-Regular' ||
                  role === 'BA:Online Seller (Branch)-Regular' ||
                  role === 'PSB Associate-Regular'
            ) multiplier = 1.5;
            else if (isSecurity) multiplier = 0.5;

            // Compute ontop shares
            const computeOntop = (val, count, sgcount) => {
              if (sgcount > 0) {
                if (count <= 3) return { sg: val * 0.15, assoc: (val * 0.85) / count };
                else return { sg: val * 0.10, assoc: (val * 0.90) / count };
              } else {
                return { sg: 0, assoc: val / count };
              }
            };

            let totalShare = 0;

            if (isHalfdayAM) {
              const { sg, assoc } = computeOntop(value1, am, sgam);
              const base = isSecurity ? value1 * 0.5 : value1 * multiplier;
              totalShare = base ;

            } else if (isHalfdayPM) {
              const { sg, assoc } = computeOntop(value12, pm, sgpm);
              const base = isSecurity ? value12 * 0.5 : value12 * multiplier;
              totalShare = base ;

            } else {
              const ontopAM = computeOntop(value1, am, sgam);
              const ontopPM = computeOntop(value12, pm, sgpm);
              const baseAM = isSecurity ? value1 * 0.5 : value1 * multiplier;
              const basePM = isSecurity ? value12 * 0.5 : value12 * multiplier;
              const totalOntop = isSecurity
                ? ontopAM.sg + ontopPM.sg
                : ontopAM.assoc + ontopPM.assoc;

              totalShare = baseAM + basePM ;
            }

            cells[3].innerText = totalShare.toFixed(3);
          });





}else if (Area === 'Online Renewal Incentives (Reg + OnTop)' && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {
            checkrow.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 4) return;

            const role = cells[1].innerText.trim();
            const sched = cells[2].innerText.trim();
            const isSecurity = role === 'Security Guard';
            const isHalfdayAM = sched === 'Halfday(AM)';
            const isHalfdayPM = sched === 'Halfday(PM)';
            const isFulltime = !isHalfdayAM && !isHalfdayPM;

            // Multiplier based on role
            let multiplier = 1;
            if (role === 'Branch Head') multiplier = 2.5;
            else if (
              role === 'BA:Cashier-Regular' ||
              role === 'BA:PEPP Operator-Regular' ||
                  role === 'BA:Jewelry Seller-Regular' ||
                  role === 'BA:Online Seller (Branch)-Regular' ||
                  role === 'PSB Associate-Regular'
            ) multiplier = 1.5;
            else if (isSecurity) multiplier = 0.5;

            // Compute ontop shares
            const computeOntop = (val, count, sgcount) => {
              if (sgcount > 0) {
                if (count <= 3) return { sg: val * 0.15, assoc: (val * 0.85) / count };
                else return { sg: val * 0.10, assoc: (val * 0.90) / count };
              } else {
                return { sg: 0, assoc: val / count };
              }
            };

            let totalShare = 0;

            if (isHalfdayAM) {
              const { sg, assoc } = computeOntop(value1, am, sgam);
              const base = isSecurity ? value1 * 0.5 : value1 * multiplier;
              totalShare = base + (isSecurity ? sg : assoc);

            } else if (isHalfdayPM) {
              const { sg, assoc } = computeOntop(value12, pm, sgpm);
              const base = isSecurity ? value12 * 0.5 : value12 * multiplier;
              totalShare = base + (isSecurity ? sg : assoc);

            } else {
              const ontopAM = computeOntop(value1, am, sgam);
              const ontopPM = computeOntop(value12, pm, sgpm);
              const baseAM = isSecurity ? value1 * 0.5 : value1 * multiplier;
              const basePM = isSecurity ? value12 * 0.5 : value12 * multiplier;
              const totalOntop = isSecurity
                ? ontopAM.sg + ontopPM.sg
                : ontopAM.assoc + ontopPM.assoc;

              totalShare = baseAM + basePM + totalOntop;
            }

            cells[3].innerText = totalShare.toFixed(3);
          });

}else if (Area === 'Mc Sales Incentives' && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {

          
checkrow.forEach(row => {
  const cells = row.querySelectorAll('td');
  if (cells.length < 4) return;

  const role = cells[1].innerText.trim();
  const sched = cells[2].innerText.trim();
 
  const isSecurity = role === 'Security Guard';
  const isHalfdayAM = sched === 'Halfday(AM)';
  const isHalfdayPM = sched === 'Halfday(PM)';
  const isFulltime = !isHalfdayAM && !isHalfdayPM;

let valam = 0;
let valpm = 0;

valam += value1 * 0.001;
valpm += value12 * 0.001;

let assocshaream = 0;
let assocsharepm = 0;
let sgshaream = 0;
let sgsharepm = 0;


  if (isHalfdayAM) {
          if(sgam > 0 ){
            assocshaream += (((am <=3) ? 0.85: 0.9) * valam) / am
            sgshaream += ((am <=3) ? 0.15: 0.1) * valam

          
          } else {
            assocshaream += (1  * valam) / am
          cells[3].innerText = assocshaream.toFixed(3);
          }

          
            if (isSecurity){
             cells[3].innerText = sgshaream.toFixed(3);

            }else {
              cells[3].innerText = assocshaream.toFixed(3);

            }

  } else if (isHalfdayPM) {
          if(sgpm > 0 ){
            assocsharepm += (((pm <=3) ? 0.85: 0.9) * valpm) / pm
            sgsharepm += ((pm <=3) ? 0.15: 0.1) * valpm

          } else {
            assocsharepm += (1  * valpm) / pm
            cells[3].innerText = assocsharepm.toFixed(3);
          }

            if (isSecurity){
             cells[3].innerText = sgsharepm.toFixed(3);

            }else {
              cells[3].innerText = assocsharepm.toFixed(3);

            }
  } else {
 
          if(sgam > 0 ){
            assocshaream += (((am <=3) ? 0.85: 0.9) * valam) / am
            sgshaream += ((am <=3) ? 0.15: 0.1) * valam
          
          } else {
            assocshaream += (1  * valam) / am
       
          }

          if(sgpm > 0 ){          
            assocsharepm += (((pm <=3) ? 0.85: 0.9) * valpm) / pm
            sgsharepm += ((pm <=3) ? 0.15: 0.1) * valpm         

          } else {
            assocsharepm += (1  * valpm) / pm
          
          }

     let totalsg = 0;     
     let totalassoc = 0;
 
      totalsg += sgshaream + sgsharepm
      totalassoc += assocshaream + assocsharepm


            if (isSecurity){
             cells[3].innerText = totalsg.toFixed(3);

            }else {
              cells[3].innerText = totalassoc.toFixed(3);

            }

   
  }

 
});

}else if ((Area === 'Rematado JS, GB and GC Incentives (Rolling Store)' || Area === 'Palawan Gold JS, GB and GC Incentives (Rolling Store)') && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {

          let valam = 0;
          let valpm = 0;

          if (Area === 'Rematado JS, GB and GC Incentives (Rolling Store)'){

              valam += (value1 * 10) +   (value2 * 20)  +   (value3 * 30) +   (value4 * 50) 
              valpm += (value12 * 10) +   (value22 * 20)  +   (value32 * 30) +   (value42 * 50) 

          }else {

              valam += (value1 * 20) +   (value2 * 30)  +   (value3 * 40) +   (value4 * 60)  +   (value5 * 80) 
              valpm += (value12 * 20) +   (value22 * 30)  +   (value32 * 40) +   (value42 * 60) +   (value52 * 80) 
          }

         
           


       checkrow.forEach(row => {
            const cells = row.querySelectorAll('td');
            const role = cells[1].innerText.trim();
            const sched = cells[2].innerText.trim();
            const isJewelry = role === 'BA:Jewelry Seller';
            const isSecurity = role === 'Security Guard';
            const isHalfdayAM = sched === 'Halfday(AM)';
            const isHalfdayPM = sched === 'Halfday(PM)';
            const isFulltime = !isHalfdayAM && !isHalfdayPM;
            if (cells.length < 4) return;


            if (isHalfdayAM) {


            if (jsam > 0) {
                 if (role === 'BA:Jewelry Seller-Regular' || role === 'BA:Jewelry Seller-Prob' ) {
                  cells[3].innerText = (valam * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgam > 0) {
                  cells[3].innerText = (valam * 0.05).toFixed(3);
                } else {
                  // If SG exists, split 30%, else 35%
                  const portion = sgam > 0 ? 0.35 : 0.40;
                  const divisor = am - 1;
                  cells[3].innerText = divisor > 0 ? (valam * portion / divisor).toFixed(3) : valpm * portion ;
                }
            } else {
                if (role === 'Branch Head') {
                  cells[3].innerText = (valam * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgam > 0) {
                  cells[3].innerText = (valam * 0.05).toFixed(3);
                } else {
                  const portion = sgam > 0 ? 0.35 : 0.4;
                  const divisor = am - 1;
                  cells[3].innerText = divisor > 0 ? (valam * portion / divisor).toFixed(3) : valpm * portion ;
                }
             }
             

            } else if (isHalfdayPM) {


              if (jspm > 0) {
                if (role === 'BA:Jewelry Seller') {
                  cells[3].innerText = (valpm * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgpm > 0) {
                  cells[3].innerText = (valpm * 0.05).toFixed(3);
                } else {
                  // If SG exists, split 30%, else 35%
                  const portion = sgpm > 0 ? 0.30 : 0.4;
                  const divisor = pm - 1;
                  cells[3].innerText = divisor > 0 ? (valpm * portion / divisor).toFixed(3) : valpm * portion  ;
                }
            } else {
                if (role === 'Branch Head') {
                  cells[3].innerText = (valpm * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgpm > 0) {
                  cells[3].innerText = (valpm * 0.05).toFixed(3);
                } else {
                  const portion = sgpm > 0 ? 0.35 : 0.4;
                  const divisor = pm - 1;
                  cells[3].innerText = divisor > 0 ? (valpm * portion / divisor).toFixed(3) : valpm * portion  ;
                }
             }
            

            } else if (isFulltime) {
              let finaljsam = 0;          
              let finaljspm = 0;   
              let finalbham = 0;          
              let finalbhpm = 0;  
              let finalassam = 0;          
              let finalasspm = 0;  
              let finalsgam = 0;          
              let finalsgpm = 0;  
                   valam = isNaN(valam) ? 0 : valam;
                   valpm = isNaN(valpm) ? 0 : valpm;
          
              if (jsam > 0) {
                    finaljsam += valam * 0.60;

                    if (sgam > 0) {
                        finalassam += am > 1 ? (valam * 0.35) / (am - 1) : valpm * 0.35 ;
                        finalsgam += valam * 0.05;
                    } else {
                        finalassam += am > 1 ? (valam * 0.40) / (am - 1) : valam * 0.40;
                    }
                } else {
                    finalbham += valam * 0.60;

                    if (sgam > 0) {
                        finalassam += am > 1 ? (valam * 0.35) / (am - 1) : valam * 0.35;
                        finalsgam += valam * 0.05;
                    } else {
                        finalassam += am > 1 ? (valam * 0.40) / (am - 1) : valam * 0.40;
                    }
                }

                if (jspm > 0) {
                    finaljspm += valpm * 0.65;

                    if (sgpm > 0) {
                        finalasspm += pm > 1 ? (valpm * 0.35) / (pm - 1) : 0;
                        finalsgpm += valpm * 0.05;
                    } else {
                        finalasspm += pm > 1 ? (valpm * 0.40) / (pm - 1) : valam * 0.40;
                    }
                } else {
                    finalbhpm += valpm * 0.60;

                    if (sgpm > 0) {
                        finalasspm += pm > 1 ? (valpm * 0.35) / (pm - 1) : valpm * 0.35;
                        finalsgpm += valpm * 0.05;
                    } else {
                        finalasspm += pm > 1 ? (valpm * 0.40) / (pm - 1) : valam * 0.40;
                    }
                }

            // FINAL ASSIGNMENT TO CELLS — Avoid NaN
            const totalJS = finaljsam + finaljspm;
            const totalBH = finalbham + finalbhpm;
            const totalSG = finalsgam + finalsgpm;
            const totalASS = finalassam + finalasspm;

            if (jsam > 0 && jspm > 0) {
                if (role === 'BA:Jewelry Seller-Regular' || role === 'BA:Jewelry Seller-Prob' ) {
                    cells[3].innerText = totalJS.toFixed(3);
                } else if (role === 'Security Guard') {
                    cells[3].innerText = totalSG.toFixed(3);
                } else {
                    cells[3].innerText = totalASS.toFixed(3);
                }
            } else  if (jsam > 0 && jspm === 0){

              if (role === 'BA:Jewelry Seller-Regular' || role === 'BA:Jewelry Seller-Prob' ) {
                    cells[3].innerText = finaljsam.toFixed(3);
                } else if (role === 'Security Guard') {
                    cells[3].innerText = totalSG.toFixed(3);
                } else if (role === 'Branch Head') {
                    cells[3].innerText = (finalassam + finalbhpm).toFixed(3);
                } else {
                    cells[3].innerText = totalASS.toFixed(3);
                }


            } else  if (jsam === 0 && jspm > 0){

              if (role === 'BA:Jewelry Seller-Regular' || role === 'BA:Jewelry Seller-Prob'  ) {
                    cells[3].innerText = finaljspm.toFixed(3);
                } else if (role === 'Security Guard') {
                    cells[3].innerText = totalSG.toFixed(3);
                } else if (role === 'Branch Head') {
                    cells[3].innerText = (finalbham + finalasspm).toFixed(3);
                } else {
                    cells[3].innerText = totalASS.toFixed(3);
                }


            }else {

              if (role === 'Security Guard') {
                    cells[3].innerText = totalSG.toFixed(3);
              } else if (role === 'Branch Head') {
                    cells[3].innerText = totalBH.toFixed(3);
              } else {
                    cells[3].innerText = totalASS.toFixed(3);
              }

            }

            }
                    
          });


}else if ((Area === 'Rematado JS, GB and GC Incentives (Branch Live Sale)' || Area === 'Palawan Gold JS, GB and GC Incentives (Branch Live Sale)') && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {

          let valam = 0;
          let valpm = 0;

          if (Area === 'Rematado JS, GB and GC Incentives (Branch Live Sale)'){

              valam += (value1 * 10) +   (value2 * 20)  +   (value3 * 30) +   (value4 * 50) 
              valpm += (value12 * 10) +   (value22 * 20)  +   (value32 * 30) +   (value42 * 50) 

          }else {

              valam += (value1 * 20) +   (value2 * 30)  +   (value3 * 40) +   (value4 * 60)  +   (value5 * 80) 
              valpm += (value12 * 20) +   (value22 * 30)  +   (value32 * 40) +   (value42 * 60) +   (value52 * 80) 
          }
           


       checkrow.forEach(row => {
            const cells = row.querySelectorAll('td');
            const role = cells[1].innerText.trim();
            const sched = cells[2].innerText.trim();
            const isOnline = role === 'BA:Online Seller (Branch)';
            const isSecurity = role === 'Security Guard';
            const isHalfdayAM = sched === 'Halfday(AM)';
            const isHalfdayPM = sched === 'Halfday(PM)';
            const isFulltime = !isHalfdayAM && !isHalfdayPM;
            if (cells.length < 4) return;


            if (isHalfdayAM) {


            if (osam > 0) {
                if (role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob') {
                  cells[3].innerText = (valam * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgam > 0) {
                  cells[3].innerText = (valam * 0.05).toFixed(3);
                } else {
                  // If SG exists, split 30%, else 35%
                  const portion = sgam > 0 ? 0.35 : 0.40;
                  const divisor = am - 1;
                  cells[3].innerText = divisor > 0 ? (valam * portion / divisor).toFixed(3) : '0.00';
                }
            } else {
             
                  cells[3].innerText = 0;
                
             }
             

            } else if (isHalfdayPM) {


              if (ospm > 0) {
                if (role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob') {
                  cells[3].innerText = (valpm * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgpm > 0) {
                  cells[3].innerText = (valpm * 0.05).toFixed(3);
                } else {
                  // If SG exists, split 30%, else 35%
                  const portion = sgpm > 0 ? 0.35 : 0.40;
                  const divisor = pm - 1;
                  cells[3].innerText = divisor > 0 ? (valpm * portion / divisor).toFixed(3) : '0.00';
                }
            } else {
               
                  cells[3].innerText = 0;
              
             }
            

            } else if (isFulltime) {
              let finalosam = 0;          
              let finalospm = 0;   
              let finalbham = 0;          
              let finalbhpm = 0;  
              let finalassam = 0;          
              let finalasspm = 0;  
              let finalsgam = 0;          
              let finalsgpm = 0;  
                   valam = isNaN(valam) ? 0 : valam;
                   valpm = isNaN(valpm) ? 0 : valpm;
          
              if (osam > 0) {
                    finalosam += valam * 0.60;

                    if (sgam > 0) {
                        finalassam += am > 1 ? (valam * 0.35) / (am - 1) : valpm * 0.35;
                        finalsgam += valam * 0.05;
                    } else {
                        finalassam += am > 1 ? (valam * 0.40) / (am - 1) : valam * 0.40;
                    }
                } else {
                 
                }

                if (ospm > 0) {
                    finalospm += valpm * 0.60;

                    if (sgpm > 0) {
                        finalasspm += pm > 1 ? (valpm * 0.35) / (pm - 1) : valpm * 0.35;
                        finalsgpm += valpm * 0.05;
                    } else {
                        finalasspm += pm > 1 ? (valpm * 0.40) / (pm - 1) : valam * 0.40;
                    }
                } else {
              
                }

                  // FINAL ASSIGNMENT TO CELLS — Avoid NaN
                  const totalOS = finalosam + finalospm;
                  const totalBH = finalbham + finalbhpm;
                  const totalSG = finalsgam + finalsgpm;
                  const totalASS = finalassam + finalasspm;

                  if (osam > 0 && ospm > 0) {
                      if (role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob') {
                          cells[3].innerText = totalOS.toFixed(3);
                      } else if (role === 'Security Guard') {
                          cells[3].innerText = totalSG.toFixed(3);
                      } else {
                          cells[3].innerText = totalASS.toFixed(3);
                      }
                  } else  if (osam > 0 && ospm === 0){

                    if (role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob') {
                          cells[3].innerText = finalosam.toFixed(3);
                      } else if (role === 'Security Guard') {
                          cells[3].innerText = finalsgam.toFixed(3);
                    
                      } else {
                          cells[3].innerText = finalassam.toFixed(3);
                      }


                  } else  if (osam === 0 && ospm > 0){

                    if (role === 'BA:Online Seller (Branch)-Regular' || role === 'BA:Online Seller (Branch)-Prob') {
                          cells[3].innerText = finalospm.toFixed(3);
                      } else if (role === 'Security Guard') {
                          cells[3].innerText = finalsgpm.toFixed(3);
               
                      } else {
                          cells[3].innerText = finalasspm.toFixed(3);
                      }              

                  } else {
                    cells[3].innerText =0;

                  }

            }
                    
          });   

 
 
}else if ((Area === 'Rematado JS, GB and GC Incentives (PPJ Live Sale)' || Area === 'Palawan Gold JS, GB and GC Incentives (PPJ Live Sale)') && (am > 0 || pm > 0 || sgam > 0 || sgpm > 0)) {

          let valam = 0;
          let valpm = 0;

          if (Area === 'Rematado JS, GB and GC Incentives (PPJ Live Sale)'){

              valam += (value1 * 5) +   (value2 * 10)  +   (value3 * 15) +   (value4 * 25) 
              valpm += (value12 * 5) +   (value22 * 10)  +   (value32 * 15) +   (value42 * 25) 

          }else {

              valam += (value1 * 10) +   (value2 * 15)  +   (value3 * 20) +   (value4 * 30)  +   (value5 * 40) 
              valpm += (value12 * 10) +   (value22 * 15)  +   (value32 * 20) +   (value42 * 30)  +   (value52 * 40) 
          }

       checkrow.forEach(row => {
            const cells = row.querySelectorAll('td');
            const role = cells[1].innerText.trim();
            const sched = cells[2].innerText.trim();
            const isOnline = role === 'Branch Head';
            const isSecurity = role === 'Security Guard';
            const isHalfdayAM = sched === 'Halfday(AM)';
            const isHalfdayPM = sched === 'Halfday(PM)';
            const isFulltime = !isHalfdayAM && !isHalfdayPM;
            if (cells.length < 4) return;


            if (isHalfdayAM) {


            if (pjam > 0) {
                if (role === 'Branch Head') {
                  cells[3].innerText = (valam * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgam > 0) {
                  cells[3].innerText = (valam * 0.05).toFixed(3);
                } else {
                  // If SG exists, split 30%, else 35%
                  const portion = sgam > 0 ? 0.35 : 0.40;
                  const divisor = am - 1;
                  cells[3].innerText = divisor > 0 ? (valam * portion / divisor).toFixed(3) : valpm * portion;
                }
            } else {
             
                  cells[3].innerText = 0;
                
             }
             

            } else if (isHalfdayPM) {


              if (pjpm > 0) {
                if (role === 'Branch Head') {
                  cells[3].innerText = (valpm * 0.60).toFixed(3);
                } else if (role === 'Security Guard' && sgpm > 0) {
                  cells[3].innerText = (valpm * 0.05).toFixed(3);
                } else {
                  // If SG exists, split 30%, else 35%
                  const portion = sgpm > 0 ? 0.35 : 0.40;
                  const divisor = pm - 1;
                  cells[3].innerText = divisor > 0 ? (valpm * portion / divisor).toFixed(3) : valpm * portion;
                }
            } else {
               
                  cells[3].innerText = 0;
              
             }
            

            } else if (isFulltime) {
              let finalpjam = 0;          
              let finalpjpm = 0;   
              let finalbham = 0;          
              let finalbhpm = 0;  
              let finalassam = 0;          
              let finalasspm = 0;  
              let finalsgam = 0;          
              let finalsgpm = 0;  
                   valam = isNaN(valam) ? 0 : valam;
                   valpm = isNaN(valpm) ? 0 : valpm;
          
              if (pjam > 0) {
                    finalpjam += valam * 0.60;

                    if (sgam > 0) {
                        finalassam += am > 1 ? (valam * 0.35) / (am - 1) : valam * 0.35;
                        finalsgam += valam * 0.05;
                    } else {
                        finalassam += am > 1 ? (valam * 0.40) / (am - 1) : valam * 0.40;
                    }
                } else {
                 
                }

                if (pjpm > 0) {
                    finalpjpm += valpm * 0.60;

                    if (sgpm > 0) {
                        finalasspm += pm > 1 ? (valpm * 0.35) / (pm - 1) : valam * 0.35;
                        finalsgpm += valpm * 0.05;
                    } else {
                        finalasspm += pm > 1 ? (valpm * 0.40) / (pm - 1) : valam * 0.40;
                    }
                } else {
              
                }

                  // FINAL ASSIGNMENT TO CELLS — Avoid NaN
                  const totalOS = finalpjam + finalpjpm;
                  const totalBH = finalbham + finalbhpm;
                  const totalSG = finalsgam + finalsgpm;
                  const totalASS = finalassam + finalasspm;

                  if (pjam > 0 && pjpm > 0) {
                      if (role === 'Branch Head') {
                          cells[3].innerText = totalOS.toFixed(3);
                      } else if (role === 'Security Guard') {
                          cells[3].innerText = totalSG.toFixed(3);
                      } else {
                          cells[3].innerText = totalASS.toFixed(3);
                      }
                  } else  if (pjam > 0 && pjpm === 0){

                    if (role === 'Branch Head') {
                          cells[3].innerText = finalpjam.toFixed(3);
                      } else if (role === 'Security Guard') {
                          cells[3].innerText = finalsgam.toFixed(3);
                    
                      } else {
                          cells[3].innerText = finalassam.toFixed(3);
                      }


                  } else  if (pjam === 0 && pjpm > 0){

                    if (role === 'Branch Head') {
                          cells[3].innerText = finalpjpm.toFixed(3);
                      } else if (role === 'Security Guard') {
                          cells[3].innerText = finalsgpm.toFixed(3);
               
                      } else {
                          cells[3].innerText = finalasspm.toFixed(3);
                      }
              

                  } else {
                    cells[3].innerText =0;

                  }

            }
                    
          });   

 } else { 
  
  if (am > 0 || pm > 0 || sgam > 0 || sgpm > 0) {     

        let valam = 0;
        let valpm = 0;

        const areaMultipliers = {
          'GCash-Out Incentives': 1.25,
          'Protektodo Grupo 45 Incentives': 10,
          'MyBuhay 200 Protektodo Incentives': 15,
          'Protektodo Grupo 100 Incentives': 22, 
          'Protektodo MyCTPL (Tourist Car) Incentives': 59,
          'Protektodo MyCTPL (Private Vehicles) Incentives': 45,
          'Protektodo MyCTPL (Taxi/PUJ/Minibus) Incentives': 86,
          'Protektodo MyCTPL (Motorcycle) Incentives': 22,
          'Protektodo MyCTPL (Light & Medium Truck) Incentives': 50,
          'Protektodo MyCTPL (PUB/Tourist Bus) Incentives': 113,  
          'Protektodo MyCTPL (Heavy Truck & Private Bus) Incentives': 94,
          'Protektodo MyNegosyo Plus Incentives': 15,
          'Protektodo MyNegosyo Basic Incentives': 8,
          'Protektodo Kasambahay Incentives': 5,
          'Protektodo Premium Pamilya Max 300 Incentives': 42,
          'Protektodo Eskwela Max 50 Incentives': 7,
          'Protektodo Eskwela Incentives': 1.5,
          'Protektodo Eskwela Max 30 Incentives': 4,
          'Protektodo Premium Solo Plus 99 Incentives': 14,
          'Protektodo Sulit Solo Plus 49 Incentives': 7,
          'Protektodo Sulit Solo 20 Incentives': 3,
          'Protektodo Premium Pamilya 100 Incentives': 14,
          'Protektodo Premium Solo 50 Incentives': 7,          
          'Bills Payment Incentives (PPY)': 0.20,
          'Protektodo Fire Incentives': 11,
          'Protektodo Travel Incentives': 1,          
          'Suki Card Sales Incentives': 5,
        };

        const multiplier = areaMultipliers[Area];

        if (multiplier) {
          valam = value1 * multiplier;
          valpm = value12 * multiplier;
        } else  if (Area === 'GCash-In Incentives'){
          valam = (value1 * 0.5) + (value2) ;
          valpm = (value12 * 0.5)+ (value22) ;

        }


                checkrow.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    const role = cells[1].innerText.trim();
                    const sched = cells[2].innerText.trim();         
                    const isSecurity = role === 'Security Guard';
                    const isHalfdayAM = sched === 'Halfday(AM)';
                    const isHalfdayPM = sched === 'Halfday(PM)';
                    const isFulltime = !isHalfdayAM && !isHalfdayPM;
                    if (cells.length < 4) return;


                    if (isHalfdayAM) {

                            if (sgam > 0) {

                                if ( am <=3) {
                                  if (role === 'Security Guard'){
                                    cells[3].innerText = (valam * 0.15).toFixed(3);
                                    }else{
                                    cells[3].innerText = ((valam * 0.85)/am).toFixed(3); 
                                  }
                                } else if (am >=4) {
                                  if (role === 'Security Guard'){
                                    cells[3].innerText = (valam * 0.10).toFixed(3);
                                    }else{
                                    cells[3].innerText = ((valam * 0.9)/am).toFixed(3); 
                                  }
                                }   
                            
                            } else {
                            
                                cells[3].innerText = (valam/am).toFixed(3); 
                                
                            }
                    

                    } else if (isHalfdayPM) {

                            if (sgpm > 0) {
                                if (pm <=3) {
                                  if (role === 'Security Guard'){
                                    cells[3].innerText = (valpm * 0.15).toFixed(3);
                                    }else{
                                    cells[3].innerText = ((valpm * 0.85)/pm).toFixed(3); 
                                  }
                                } else if (pm >=4) {
                                  if (role === 'Security Guard'){
                                    cells[3].innerText = (valpm * 0.10).toFixed(3);
                                    }else{
                                    cells[3].innerText = ((valpm * 0.9)/pm).toFixed(3); 
                                  }
                                }   
                            
                            } else {
                            
                                cells[3].innerText = (valpm/pm).toFixed(3); 
                                
                            }            

                    } else if (isFulltime) {
        
                      let finalassam = 0;          
                      let finalasspm = 0;  
                      let finalsgam = 0;          
                      let finalsgpm = 0;  
                          valam = isNaN(valam) ? 0 : valam;
                          valpm = isNaN(valpm) ? 0 : valpm;
                  
                          if (sgam > 0) {
                                if (am <=3) {                        
                                    finalsgam += (valam * 0.15);                         
                                    finalassam += ((valam * 0.85)/am);                         
                                } else  {                   
                                    finalsgam += (valam * 0.10);                       
                                    finalassam += ((valam * 0.9)/am);                      
                                }  
                            
                            } else {                    
                                finalassam += (valam/am);                         
                            }

                          if (sgpm > 0) {
                                if (pm <=3) {                        
                                    finalsgpm += (valpm * 0.15);                         
                                    finalasspm += ((valpm * 0.85)/pm);                         
                                } else  {                   
                                    finalsgpm += (valam * 0.10);                       
                                    finalasspm += ((valam * 0.9)/pm);                      
                                }  
                            
                            } else {                    
                                finalasspm += (valpm/pm);                         
                            }

                          // FINAL ASSIGNMENT TO CELLS — Avoid NaN
          
                          const totalSG = finalsgam + finalsgpm;
                          const totalASS = finalassam + finalasspm;

                          if (role === 'Security Guard') {
                                  cells[3].innerText = !isNaN(totalSG) ? totalSG.toFixed(3) : '0.000';
                          } else {
                              cells[3].innerText = !isNaN(totalASS) ? totalASS.toFixed(3) : '0.000';
                          }                 

                          } 
                              
                  });   



     }  else {


            const notification = document.getElementById('notification');
            
            notification.innerHTML = `
              <div class="icon">⚠️</div>
              <div class="message">
                <strong>Missing Employees:</strong> <br> Please add duty Employee Roles. 
              </div>
            `;

            notification.style.display = 'flex';

            // Reset animation
            notification.style.animation = 'none';
            void notification.offsetWidth;
            notification.style.animation = null;

            setTimeout(() => {
              notification.style.display = 'none';
            }, 5000); 


      }

}//<----- end of if

//=========[To get the total incentives]==========================================================

  let total = 0;
  const rows = document.querySelectorAll('#employeetable tbody tr');
  rows.forEach(row => {
    const incentiveCell = row.cells[3]; // 4th column (index starts at 0)
    if (incentiveCell) {
      const value = parseFloat(incentiveCell.textContent);
      if (!isNaN(value)) {
        total += value;
      }
    }
  });

  document.getElementById('totalIncentives').textContent =  total.toFixed(2);

} //=========[End To get the total incentives]==========================================================






//=========[To save the current details]==========================================================

function saveDutyTable() {
  const rows = [...document.querySelectorAll('#employeetable tbody tr')];
  const data = rows.map(row => ({
    role: row.children[1].innerText,
    schedule: row.children[2].innerText,
    incentives: row.children[3].innerText
  }));
  localStorage.setItem('dutyTableData', JSON.stringify(data));
}

// Load duty table rows from localStorage
function loadDutyTable() {
  const data = JSON.parse(localStorage.getItem('dutyTableData') || '[]');
  const tbody = document.querySelector('#employeetable tbody');

  tbody.innerHTML = '';
  data.forEach(({ actionBtn, role, schedule, incentives }) => {
  const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><button class="actionBtn" style = "width: 20px; height: 20px; padding: 0px; margin-right: 30px; border-radius: 10px; margin-top: 10px;
         margin-left: 10px; background-color: red; color: white; border-color: red; font-size: 10px; ">X</button></td> 
      <td>${role}</td>
      <td>${schedule}</td>
      <td>${incentives}</td>
    `;
    tbody.appendChild(tr);

    // Remove row and save updated table
    tr.querySelector('.actionBtn').addEventListener('click', () => {
      tr.remove();
      saveDutyTable();
      saveCountTable();
      saveDropdowns();
      updateIncentiveDisplay(); 
      updateAMPMDisplay();
      computetotal();
    });
  });
}

// Save counts inputs to localStorage
function saveCountTable() {
  const inputs = document.querySelectorAll('#PEPPbracket tbody input[type="number"]');
  inputs.forEach((input, i) => {
    localStorage.setItem(`countInput_${i}`, input.value);
  });
}

// Load counts inputs from localStorage
function loadCountTable() {
  const inputs = document.querySelectorAll('#PEPPbracket tbody input[type="number"]');
  inputs.forEach((input, i) => {
    const saved = localStorage.getItem(`countInput_${i}`);
    if (saved !== null) input.value = saved;
  });
}

// Setup event listeners for count inputs to save on input
function setupCountInputListeners() {
  const inputs = document.querySelectorAll('#PEPPbracket tbody input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('input', saveCountTable);
  });
}

function saveDropdowns() {
  const d1 = document.getElementById('employeerole');
  const d2 = document.getElementById('employeesched');
  const d3 = document.getElementById('Area');

  localStorage.setItem('employeerole', d1.value);
  localStorage.setItem('employeesched', d2.value);
  localStorage.setItem('Area', d3.value);
}

// Load dropdowns' selected values
function loadDropdowns() {
  const d1Val = localStorage.getItem('employeerole');
  const d2Val = localStorage.getItem('employeesched');
  const d3Val = localStorage.getItem('Area');

  if (d1Val !== null) document.getElementById('employeerole').value = d1Val;
  if (d2Val !== null) document.getElementById('employeesched').value = d2Val;
  if (d3Val !== null) document.getElementById('Area').value = d3Val;

}  //=========[END save the current details]==========================================================



//======[Load the saved details On page load]======================================================
window.addEventListener('DOMContentLoaded', () => {
  loadDutyTable();
  loadCountTable();
  loadDropdowns();
  setupCountInputListeners();
  updateIncentiveDisplay(); 
  updateAMPMDisplay();
  computetotal();
  if ( Area.value ===''){
    Area.style.borderColor = 'red'
  }else {
   Area.style.borderColor = 'gray'
  }
});  //======[End of the page load]======================================================



