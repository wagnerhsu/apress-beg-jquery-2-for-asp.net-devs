$(function() {
    $("#Button1").click(function (evt) {
        console.log("Method I");
        $.ajax({
            type: "POST",
            url: "/api/values",
            data: JSON.stringify({ Value: parseFloat($("#TextBox1").val()), Scale: $("#DropDownList1").val() }),
            contentType: "application/json",
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

        console.log("Method II");
        $.ajax({
            type: "POST",
            url: "/api/values/JObject",
            data: JSON.stringify({ Value: parseFloat($("#TextBox1").val()), Scale: $("#DropDownList1").val() }),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if ($("#DropDownList1").val() === "C") {
                    console.log("Value in Fahrenheit = " + data.value);
                } else {
                    console.log("Value in Celsius = " + data.value);
                }
            },
            error: function (_jqXhr, _status, error) {
                console.log("Method II",error);
            }
        });
        console.log("Method III");
        $.ajax({
            type: "POST",
            url: "/api/values/JObject",
            data: JSON.stringify({ Value: $("#TextBox1").val(), Scale: $("#DropDownList1").val() }),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if ($("#DropDownList1").val() === "C") {
                    console.log("Value in Fahrenheit = " + data.value);
                } else {
                    console.log("Value in Celsius = " + data.value);
                }
            },
            error: function (_jqXhr, _status, error) {
                console.log("Method III",error);
            }
        });
    });
});