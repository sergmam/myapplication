define('selectItem', ['jquery'], function ($) {
    $(function () {
        $items = [];
        $('.rowItem').on('click', (function () {
            var id = this.cells[0].id;
            console.log(id);
            var selectedItem = document.getElementById(id).innerHTML;
            console.log(selectedItem);
            $items.push(selectedItem);
            if (typeof(selectedItem) !== "undefined") {
                document.getElementById('addToBasket').innerHTML = 'For adding to basket: ' + $items;
            } else {
                var label = document.getElementById('addToBasket');
                label.innerHTML = "undefined ";
            }
        }));
    });
});