function addMessage() {
    $.post(
        "/add-message",
        {
            author: $("#author").val(),
            text: $("#text").val()
        },
        function(data){
            $("#text").val("");
        }
    );
}

function getMessages() {
    $.get(
        "/get-messages",
        function(data) {
            var messages = JSON.parse(data);
            $("#messages").empty();
            for (var i in messages) {
                var elem = $("<div>").text(messages[i].author + ": " + messages[i].text);
                $("#messages").append(elem);
            }
        }
    );
}

setInterval(getMessages, 1000);