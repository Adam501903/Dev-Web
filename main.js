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

const horizontalStart = {
  1: { r: 0, c: 0 },
  2: { r: 2, c: 0 },
  3: { r: 3, c: 10 },
  4: { r: 4, c: 1 },
  5: { r: 5, c: 9 },
  6: { r: 6, c: 3 },
  7: { r: 8, c: 9 },
  8: { r: 11, c: 9 },
  9: { r: 13, c: 4 }
};

const verticalStart = {
  1: { r: 0, c: 2 },
  2: { r: 2, c: 4 },
  3: { r: 4, c: 6 },
  4: { r: 0, c: 7 },
  5: { r: 5, c: 9 },
  6: { r: 1, c: 10 },
  7: { r: 3, c: 13 },
  8: { r: 10, c: 14 },
  9: { r: 3, c: 15 }
};


const letter = "DICHOTOMYAOCRECURSIVITYHEEBROWSERSERVEREIXEEBRAINEPROMISEOCSOHOUETALLOWTEVEIHOBJECTUMHIERARCHYL";

const container = document.getElementById("crossword-container");

const cells = [];
let index = 0;

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
      input.value = letter[index];
      index++; 
    } else {
      input.disabled = true;
    }

    row.appendChild(input);
    rowCells.push(input);
  });

  cells.push(rowCells);
  container.appendChild(row);
});

function revealWord(num, hv, word) {
  num = parseInt(num);
  word = word.toUpperCase();

  if (hv === "H") {
    let { r, c } = horizontalStart[num];

    for (let i = 0; i < word.length; i++) {
      if (!cells[r] || !cells[r][c]) break;

      if (!cells[r][c].disabled && cells[r][c].value === word[i]) {
        cells[r][c].style.color = "black";
      }
      c++;
    }
  }

  if (hv === "V") {
    let { r, c } = verticalStart[num];

    for (let i = 0; i < word.length; i++) {
      if (!cells[r] || !cells[r][c]) break;

      if (!cells[r][c].disabled && cells[r][c].value === word[i]) {
        cells[r][c].style.color = "black";
      }
      r++;
    }
  }
}

document.getElementById("submitBtn").addEventListener("click", () => {

  const num = document.getElementById("numInput").value;
  const hv = document.getElementById("hvInput").value.toUpperCase();
  const word = document.getElementById("textInput").value.toUpperCase();

  if (!num || !word || !"HV".includes(hv)) return;

  revealWord(num, hv, word);
});
