const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const commentSchema = new mongoose.Schema({
    profileName: String,
    text: String,
    date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

exports.handler = async function(event, context) {
    if (event.httpMethod === 'GET') {
        try {
            const comments = await Comment.find().sort({ date: -1 });
            return {
                statusCode: 200,
                body: JSON.stringify(comments)
            };
        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: err.message })
            };
        }
    }

    if (event.httpMethod === 'POST') {
        const { profileName, text } = JSON.parse(event.body);
        const newComment = new Comment({ profileName, text });

        try {
            const savedComment = await newComment.save();
            return {
                statusCode: 201,
                body: JSON.stringify(savedComment)
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: err.message })
            };
        }
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' })
    };
};
