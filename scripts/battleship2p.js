function makeBoard(width, height) {
    var hmtl = "";

    for (var y = 0; y < height; y++) {
        html += "<tr>";
        for (var x = 0; x < width; x++) {
            hmtl += "<td></td>"; //TODO
        }
        html += "</tr>";
    }
}

<tr>
<td class="ButtonTD" id="0">
    <div class="ButtonDiv">
        <button class="Button" onclick="buttonClick(0, false)"></button>
    </div>
</td>
<td class="ButtonTD" id="1">
    <div class="ButtonDiv">
        <button class="Button" onclick="buttonClick(1, false)"></button>
    </div>
</td>
<td class="ButtonTD" id="2">
    <div class="ButtonDiv">
        <button class="Button" onclick="buttonClick(2, false)"></button>
    </div>
</td>
</tr>