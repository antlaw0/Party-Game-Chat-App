from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)

socketio = SocketIO(app)


@app.route('/')
def home_page():
    return render_template("index.html")


@socketio.on('new_message')
def handle_new_message(message):
    print("New message recieved: "+ str(request.sid)+ " " + message)
    # Broadcast the messsage to all connected clients.
    emit("new_message_received", str(request.sid)+" "+message, broadcast=True, room=request.sid)

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', room=room)

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', room=room)
	
if __name__ == '__main__':
    socketio.run(app)
