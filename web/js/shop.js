$(document).ready(function () {
    $('#block1').load('/myapp/shop/items');
    // $('#blockBasket').load('/myapp/shop/basket');
});

function go() {
    if (confirm("Do you want to add the items into basket?")) {
        document.location = "/myapp/shop/basket?items=" + $items;
    }
};