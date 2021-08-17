var itemTag = document.getElementsByClassName("item-tag");
var arrow = document.getElementsByClassName("arrow");
var i;

for (i=0; i < itemTag.length; i++) {
    itemTag[i].addEventListener("click", function() {
        this.classList.toggle("active");
        

        var itemDiv = this.nextElementSibling;
        if (itemDiv.style.maxHeight) {
            itemDiv.style.maxHeight = null;
        } else {
            itemDiv.style.maxHeight = itemDiv.scrollHeight + "px";
        }
    });
}