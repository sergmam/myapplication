define('addToBasket', ['jquery'], function () {
    $(function () {
        $('#addToBasket').on('click', (function () {
            console.log('Click #addToBasket');
            if (confirm("Do you want to add the items into basket?")) {
                document.location = "/myapp/shop/basket?items=" + $items;
            }
        }));
    });
});
