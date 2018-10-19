$items = [];
function f(element) {
    $item = element.innerHTML;

    $items.push($item);
    console.log($items);

    if (typeof($item) !== "undefined") {
        document.getElementById('addToBasket').innerHTML = 'Add to basket: ' + $items;
    } else {
        var label = document.getElementById('addToBasket');

        label.innerHTML = "undefined ";
    }
}


$addRow = false;
function item() {

//        alert("$item " + $item)
    var t = $('#itemsBasket');
    t.find('tr')
        .eq(1)
        .clone()
        .appendTo(t)
        .find('td:last')
        //            .append('<a class="delRow">Delete</a>')
        .end();
////                .find('input')
////                .val('');
    document.getElementById("itemsBasket").rows[1].cells[0].innerHTML = $item;
    var rowsCount = document.getElementById("itemsBasket").rows.length;
    var lastTd = document.getElementById("itemsBasket").rows[rowsCount - 1].cells[0].innerHTML;
    if (lastTd === '') {
        console.log(true);
        document.getElementById("itemsBasket").rows[rowsCount - 1].remove();
    }
    document.getElementById("bodyBasket").style.visibility = 'visible';
};
