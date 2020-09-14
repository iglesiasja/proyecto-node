const mongoose= require('mongoose');//para esquema
const Schema= mongoose.Schema;

const TaskSchema= new Schema({//esta es una tarea que defino los esquemas de dicha tarea 
    title: String,
    description:String,
    status:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('tasks',TaskSchema);