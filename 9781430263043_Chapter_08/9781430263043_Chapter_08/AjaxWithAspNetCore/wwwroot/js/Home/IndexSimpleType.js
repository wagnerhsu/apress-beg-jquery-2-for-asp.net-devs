$(function () {
    $("#Button1").click(function (evt) {
        $.ajax({
            type: "POST",
            url: "/Home/ConvertSimpleType",
            data: { t: $('#TextBox1').val(), scale: $('#DropDownList1').val() },
            dataType: "json",
            success: function (data) {
                if ($("#DropDownList1").val() === "C") {
                    $("#lblResult").html("Value in Fahrenheit = " + data);
                } else {
                    $("#lblResult").html("Value in Celsius = " + data);
                }
            },
            error: function (_jqXHR, _status, error) {
                alert(error);
            }
        });
    });
});

$(() => {
    $("#btnMethod1").click(function (evt) {
        location.href = "/home/index";
    });
});


$(() => {
    $("#btnMethod2").click(function (evt) {
        $.ajax({
            type: "POST",
            url: "/Home/Index",
            success: function (data) {
                location.href = "/home/index";
            },
            error: function (_jqXHR, _status, error) {
                console.log(error);
            }
        });
    });
});