  var socket = io.connect('https://hidden-harbor-28571.herokuapp.com/')
//var socket = io.connect('http://localhost:5000')

  
  socket.on('connect', function() {
            socket.emit('hello', {data: 'I\'m connected!'});
    });


    var nameinput = document.getElementById("name");
    var button = document.getElementById("sendname");
    //var clearButton = document.getElementById("clear_message_list_button")
	var message_list = document.getElementById("message_list");

    button.addEventListener("click", function() {
      var text = nameinput.value;
      socket.emit("new_message", text);
    })


    socket.on("new_message_received", function(new_message){
      // add message to message_list
      var li = document.createElement("li");
      li.innerHTML = new_message;
      message_list.append(li);

    })

	clearButton.addEventListener("click", function(){
	message_list.innerHTML=""
	
})

