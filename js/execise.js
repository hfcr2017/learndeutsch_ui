$('.btn-primary').click( function () {
    $.get("htpp://localhost:8080/noun", function (data) {
        console.log(data)
    })
})