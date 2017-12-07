  var socket = io.connect('https://hidden-harbor-28571.herokuapp.com/')

  socket.on('connect', function() {
            socket.emit('hello', {data: 'I\'m connected!'});
    });


    var input = document.getElementById("new_message_text");
    var button = document.getElementById("send_new_message");
    var message_list = document.getElementById("message_list");

    button.addEventListener("click", function() {
      var text = input.value;
      socket.emit("new_message", text);
    })


    socket.on("new_message_received", function(new_message){
      // add message to message_list
      var li = document.createElement("li");
      li.innerHTML = new_message;
      message_list.append(li);

    })
