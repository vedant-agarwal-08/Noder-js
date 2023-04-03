const EventEmitter=require('events');
var eventEmitter=new EventEmitter();
var g1=(msg)=>{
    console.log("How to use eventemitter:"+msg);
};
var g2=(msg)=>{
    console.log("How to register the event:"+msg);
};
eventEmitter.on('myEvent',g1);
eventEmitter.on('myEvent',g1);
eventEmitter.on('myEvent',g2);
eventEmitter.emit('myEvent',"Event occurred");
console.log("Removing listener g1");
eventEmitter.removeListener('myEvent',g1);
eventEmitter.emit('myEvent', "Event occurred");
console.log("Removing all the listeners to myevent");
eventEmitter.removeAllListeners('myEvent');
eventEmitter.emit('myEvent', "Event occurred");