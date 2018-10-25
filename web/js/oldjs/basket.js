$(function () {
    $("#basketButton").click(function () {
        var serializedData = $('#itemsBasket tr').serialize();
//            alert(serializedData);

        //Attempt to use PROMISES

        $.ajax({
            type: "POST",
            url: "/myapp/buyService",
            async: "false",
            data: serializedData,
            contentType: "charset=UTF-8",
            success: function (response, status, xhr) {

                console.log("Success", + response, + status, + xhr);
                alert('Success ' + response);
            },
            statusCode: {

                201: function () {

                    var url = "/myapp/shop/success";
                    $(location).attr('href', url);
                    //
                    //                            var xhr = new XMLHttpRequest();
                    //
                    //                            xhr.open('GET', '/myapp/buyService', true);
                    //
                    //                            xhr.send();
                    //
                    //                            xhr.onreadystatechange = function() {
                    //                                if (this.readyState != 4) return;
                    //
                    //                                // по окончании запроса доступны:
                    //                                // status, statusText
                    //                                // responseText, responseXML (при content-type: text/xml)
                    //
                    //                                if (this.status != 200) {
                    //                                    // обработать ошибку
                    //                                    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                    //                                    return;
                    //                                }
                    //
                    //                                alert(this.responseXML);
                    //                                // получить результат из this.responseText или this.responseXML
                    //                            }
                }
            },
            error: function (e) {
                console.log("Server error - " + e);
            }
        });
    });
});

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


function delRow(r) {
    var rowsCount = document.getElementById("itemsBasket").rows.length;
    alert(rowsCount);
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("itemsBasket").deleteRow(i);
}
