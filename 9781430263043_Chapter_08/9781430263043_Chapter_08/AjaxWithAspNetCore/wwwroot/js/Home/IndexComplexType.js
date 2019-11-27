$(function () {
    $("#Button1").click(function (evt) {
        $.ajax({
            type: "POST",
            url: "/Home/ConvertComplexType",
            data: { value: $("#TextBox1").val(), scale: $("#DropDownList1").val() },
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType:"json",
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

$(function () {
    $("#btnMethod1").click(function (evt) {
        $.ajax({
            type: "POST",
            url: "/Home/ConvertToString",
            data: { data: JSON.stringify({ value: $("#TextBox1").val(), scale: $("#DropDownList1").val() }) },
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
$(function () {
    $("#btnMethod2").click(function (evt) {
        $.ajax({
            type: "POST",
            url: "/Home/ConvertComplexTypeFromBody",
            data: ({ value: $("#TextBox1").val(), scale: $("#DropDownList1").val() }),
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
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