$(function () {
    $("#Button1").click(function (evt) {
        $.ajax({
            type: "POST",
            url: "/Home/ConvertComplexType",
            data: { Value: $("#TextBox1").val(), Scale: $("#DropDownList1").val() },
            dataType: "json",
            success: function (data) {
                if ($("#DropDownList1").val() === "C") {
                    $("#lblResult").html("Value in Fahrenheit = " + data.value);
                } else {
                    $("#lblResult").html("Value in Celsius = " + data.value);
                }
            },
            error: function (_jqXhr, _status, error) {
                alert(error);
            }
        });
    });
});