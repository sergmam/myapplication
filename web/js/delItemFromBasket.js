define('delItemFromBasket', ['jquery'], function ($) {
    $('.delRow').on('click', function () {
        console.log("Click Delete");
        var i = this.parentNode.parentNode.rowIndex;
        document.getElementById("itemsBasket").deleteRow(i);
    });
});