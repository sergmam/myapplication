define('lookItemsInBasket', ['./jquery'], function ($) {
    $(document).ready(function OnLoad() {
        var paramValue = window.location.href.split("?")[1].split("=")[1];
        var singleParam = paramValue.split(",");
        var t = $('#itemsBasket');
        for (var i = 0; i < singleParam.length; i++) {
            document.getElementById("itemsBasket").rows[i + 1].cells[0].innerHTML = singleParam[i].split(",");
            var rowsCount = document.getElementById("itemsBasket").rows.length;
            var lastTd = document.getElementById("itemsBasket").rows[rowsCount - 1].cells[0].innerHTML;
            if (i < singleParam.length - 1) {
                t.find('tr')
                    .eq(1)
                    .clone()
                    .appendTo(t)
                    .find('td:last')
                    .end();
            }
        }
    });
});

