
// When slider is moved, show the value and print the pyramid
function showValAndDrawPyramid(val){
    document.getElementById("sliderVal").innerHTML = val; 
    determineHeightAndThenDrawPyramid();
}

//determineHeightAndThenDrawPyramid
function determineHeightAndThenDrawPyramid() {
    var input = document.getElementById("height");
    //console.log(input.value);
    heightStr = input.value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // draw the pyramid with the given height
    drawPyramid(height);
}


var select = document.querySelector('select');
select.addEventListener("change", determineHeightAndThenDrawPyramid);


//drawPyramid
function drawPyramid(height) {

    // before drawing, clear the old content
    document.getElementById('pyramid').innerHTML = "";
    var select = document.querySelector('select');
    var brickType = select.value;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
         rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
         rowStr += brickType;
        }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
