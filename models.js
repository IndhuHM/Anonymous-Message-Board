const mongoose= require('mongoose');
const {Schema}=mongoose;

const date=new Date();

const replySchema = new mongoose.Schema({
    text: {type: String},
    delete_password: {type: String},
    created_on: {type: Date, default:date},
    bumped_on: {type: Date, default:date},
    reported: {type:Boolean, default: false}
});

const Reply=mongoose.model('Reply', replySchema);

const threadSchema = new mongoose.Schema({
    text: {type: String},
    delete_password: {type: String},
    reported: {type:Boolean, default: false},
    created_on: {type: Date, default:date},
    bumped_on: {type: Date, default:date},
    replies: [replySchema]
});

const Thread=mongoose.model('Thread', threadSchema);

const boardSchema = new mongoose.Schema({
    name: {type: String},
    threads: [threadSchema]
});

const Board=mongoose.model('Board', boardSchema);

exports.Reply = Reply;
exports.Thread = Thread;
exports.Board = Board;