$(function () {
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
                console.log(error);
            }
        });
    });

});

$(function () {
    $("#btnMethod1").on("click",
        function (evt) {
            const value = $("#TextBox1").val();
            const scale = $("#DropDownList1").val();
            const data = {
                value: value,
                scale: scale
            };

            const jqxhr = $.ajax({
                type: "POST",
                url: "/api/values",
                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json"
            });
            jqxhr.done((data) => console.log(data))
                .fail((jqXhr, status, error) => console.log(jqXhr, status, error))
                .always(() => console.log("Post done"));
        });
});
$(function () {
    $("#btnMethod2").on("click",
        function (evt) {
            const value = $("#TextBox1").val();
            const scale = $("#DropDownList1").val();
            const data = {
                value: value,
                scale: scale
            };

            $.ajax({
                type: "POST",
                url: "/api/values",
                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                },
                error: function (jqXhr, status, error) {
                    console.log(jqXhr, status, error);
                },
                complete: function () {
                    console.log("Complete");
                }
            });
        });
});

$(function () {
    $("#btnMethod3").on("click",
        function (evt) {
            const data = JSON.stringify({ Value: "23.1", Scale: "F" });
            console.log(data);
            const jqxhr = $.ajax({
                type: "POST",
                url: "/api/values/anything",
                data: data,
                dataType: "json",
                contentType: "application/json"
            });
            jqxhr.done(function (data) {
                console.log(data);
            }).fail(function (_jqXhr, _status, error) {
                console.log(_status, error);
            }).always(() => console.log("Done"));
        });
});

$(() => {
    $("#btnMethod4").on("click",
        function (evt) {
            console.log("Method 4");
            $.ajax({
                type: "POST",
                url: "/api/values/JObject",
                data: JSON.stringify({ value: parseFloat($("#TextBox1").val()), scale: $("#DropDownList1").val() }),
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
                    console.log("Method II", error);
                }
            });
        });
});
$(() => {
    $("#btnMethod5").on("click",
        function (evt) {
            console.log("Method 5");
            $.ajax({
                type: "POST",
                url: "/api/values/JObject",
                data: JSON.stringify({ value: $("#TextBox1").val(), scale: $("#DropDownList1").val() }),
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
                    console.log("Method II", error);
                }
            });
        });
});