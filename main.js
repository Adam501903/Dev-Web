const gridLayout = [
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0],
    [0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0],
    [0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0],
    [0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0],
    [0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0],
    [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0]
];

const answer = [
  "1HDICHOTOMY","2HRECURSIVITY","3HBROWSER","4HSERVER","5HBRAIN","6HPROMISE",
  "7HALLOW","8HOBJECT","9HHIERARCHY","1VCACHE","2VREVERSE","3VREMOTE",
  "4VMOVE","5VBEHAVIOR","6VCYBER","7VWINDOW","8VHTML","9VEXECUTE"
];

const letter = "DICHOTOMYAOCRECURSIVITYHEEBROWSERSERVEREIXEEBRAINEPROMISEOCSOHOUETALLOWTEVEIAOBJECTUMHIERARCHYL";

const container = document.getElementById("crossword-container");

// Store grid cells
const cells = [];
let index = 0;

/* -------------------------------------------------
   BUILD GRID WITH HIDDEN LETTERS
---------------------------------------------------*/
gridLayout.forEach((rowData, r) => {

  const row = document.createElement("div");
  row.className = "row mb-1";

  const rowCells = [];

  rowData.forEach((cell, c) => {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.className = "crossword-cell";
    input.readOnly = true;

    input.dataset.row = r;
    input.dataset.col = c;

    if (cell === 1) {
      input.value = letter[index];     // store letter
      index++;
      input.style.color = "transparent"; // hide letter initially
    } else {
      input.disabled = true;
    }

    row.appendChild(input);
    rowCells.push(input);
  });

  cells.push(rowCells);
  container.appendChild(row);
});

/* -------------------------------------------------
   REVEAL FUNCTION (H + V)
---------------------------------------------------*/
function revealWord(num, hv, word) {
  num = parseInt(num);

  if (hv === "H") {
    let r = num - 1;
    let col = 0;

    for (let i = 0; i < word.length; i++) {

      while (cells[r][col]?.disabled) col++;

      if (!cells[r][col]) break;

      if (cells[r][col].value.toUpperCase() === word[i]) {
        cells[r][col].style.color = "black";   // reveal letter
      }
      col++;
    }
  }

  if (hv === "V") {
    let c = num - 1;
    let row = 0;

    for (let i = 0; i < word.length; i++) {

      while (cells[row] && cells[row][c]?.disabled) row++;

      if (!cells[row] || !cells[row][c]) break;

      if (cells[row][c].value.toUpperCase() === word[i]) {
        cells[row][c].style.color = "black";   // reveal letter
      }
      row++;
    }
  }
}

/* -------------------------------------------------
   BUTTON CLICK: CHECK & REVEAL
---------------------------------------------------*/
document.getElementById("submitBtn").addEventListener("click", () => {

  const num = document.getElementById("numInput").value;
  const hv = document.getElementById("hvInput").value.toUpperCase();
  const word = document.getElementById("textInput").value.toUpperCase();

  if (!num || !word || !"HV".includes(hv)) return;

  revealWord(num, hv, word);
});
