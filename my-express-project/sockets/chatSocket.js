module.exports = function(io) {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on('chatMessage', (message) => {
        io.emit('message', message); // Broadcast message to all connected clients
      });
      
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  