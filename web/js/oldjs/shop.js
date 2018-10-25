define(['jquery'], function ($) {

    $(document).ready(function () {
        $('#block1').load('/myapp/shop/items');
        // $("#block1").click(function () {
        //     alert(document.getElementById('block1') + " got to click");
        // })
        // $('#blockBasket').load('/myapp/shop/basket');
    });

    require(
        $(function () {
            $("#addToBasket").click(function () {
                if (confirm("Do you want to add the items into basket?")) {
                    document.location = "/myapp/shop/basket?items=" + $items;
                }
            })
        })
    );

});

