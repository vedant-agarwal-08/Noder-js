const EventEmitter=require('events');
var eventEmitter=new EventEmitter();
eventEmitter.on('myEvent',(msg)=>{
    console.log(msg);
})
eventEmitter.emit('myEvent','How to use eventEmitter');