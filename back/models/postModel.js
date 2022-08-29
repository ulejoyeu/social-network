import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	creator: {
		type: mongoose.ObjectId,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	}
}, {
	timestamps: true
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;