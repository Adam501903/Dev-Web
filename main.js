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
const answer=["1HDICHOTOMY","2HRECURSIVITY","3HBROWSER","4HSERVER","5HBRAIN","6HPROMISE","7HALLOW","8HOBJECT","9HHIERARCHY","1VCACHE","2VREVERSE","3VREMOTE","4VMOVE","5VBEHAVIOR","6VCYBER","7VWINDOW","8VHTML","9VEXECUTE"];
const container = document.getElementById("crossword-container");

gridLayout.forEach(rowData => {
  const row = document.createElement("div");
  row.className = "row mb-1";

  rowData.forEach(cell => {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.className = "crossword-cell";
    input.readOnly=true;

    if (cell === 0) input.disabled = true;

    row.appendChild(input);
  });

  container.appendChild(row);
});
