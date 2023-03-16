
function filter() {

    // Declaring variables
    var input, filter, mainDiv, divs, levels, level, h2, i, txtValue;

    // Assigning variables
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    mainDiv = document.getElementById("search-content");
    divs = mainDiv.getElementsByTagName('div');
    levels = document.getElementsByTagName("h1");

    // Hidding all levels
    for (i = 0; i < levels.length; i++) {
        levels[i].style.display = "none";
    } 

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < divs.length; i++) {
        if (divs[i].className == "course") {

            h2 = divs[i].getElementsByTagName("h2")[0];
            txtValue = h2.textContent;
            level = getLevel(h2);
            
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                divs[i].style.display = "";
                level.style.display = "";
            } else {
                if (level.textContent.toUpperCase().indexOf(filter) > -1){
                  divs[i].style.display = "";
                  level.style.display = "";
                } else {
                  divs[i].style.display = "none";

                }
            }
        }
    }
}

// Displaying the given element's program level 
function getLevel(element) {
    element = element.parentElement;

    while (element.tagName != "H1") {
        element = element.previousSibling;
    }
    return element;
}

