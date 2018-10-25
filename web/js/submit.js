define('submit', ['jquery'], function ($) {
    $(function () {
        $("#basketButton").click(function () {
            var serializedData = $('#itemsBasket tr').serialize();
            $.ajax({
                type: "POST",
                url: "/myapp/buyService",
                async: "false",
                data: serializedData,
                contentType: "charset=UTF-8",
                success: function (response, status, xhr) {
                    console.log("Success", +response, +status, +xhr);
                },
                statusCode: {
                    201: function () {
                        var url = "/myapp/shop/success";
                        $(location).attr('href', url);
                    }
                },
                error: function (e) {
                    console.log("Server error - " + e);
                }
            });
        });
    });
});
