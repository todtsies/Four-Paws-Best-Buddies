import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    dogsName: String,
    message: String,
    name: String,
    service: String,
    breed: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;