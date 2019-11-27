## 调用MVC的Action方法
- ajax示例
```js
$.ajax({
    type: "POST",```
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

> 注意：
> 1. data中传入的是一个object来模拟一个FormData数据
> 2. 尽管后端过来的数据为TemperatureData,转换成js格式后属性为value而不是Value
> 3. 如果是调用webapi的话，一般都是标准的json格式

- 如果是传json数据，`{"value":"12","scale":"C"}`和`value=12&scale=C`是不同的，因此要使用JSON.stringify来格式化一个JavaScript对象

## Reference
- jQuery ajax api [>>](https://api.jquery.com/jquery.ajax/#jQuery-ajax-url-settings)