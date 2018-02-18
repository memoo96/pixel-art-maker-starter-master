function makeGrid() {
    let table = document.getElementById("pixel_canvas");
    let rowCount = table.rows.length;

    while (rowCount > 0) {
        table.deleteRow(0);
    }
    // Select size input
    let input_rows = document.getElementById("input_height").value;
    let input_cols = document.getElementById("input_width").value;

    for (let m = 0; m < input_rows; m++) {
        let tr = table.insertRow(m);

        for (let n = 0; n < input_cols; n++) {
            let td = tr.insertCell(n);
            td.addEventListener('click', function(e) {
                e.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
}

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});