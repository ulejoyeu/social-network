import User from '../models/userModel.js';
import Post from '../models/postModel.js';

import fs from 'fs';
import mime from 'mime-types';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ----------------------------------------------------------------

export const createPost = async (req, res) => {
    const { content } = req.body;

    const newPost = await Post.create({
        creator: res.locals.user._id,
        content,
        image: null
    });

    res.status(201).json({ newPost });
}

export const getUserPosts = async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user === null) {
        return res.status(404).json({ error: 'User not found' });
    }
    const posts = await Post.find({ creator: user._id }).sort({createdAt: -1}).exec();

    res.status(200).json({ posts });
};

export const getPostImage = (req, res) => {
    const { imageName } = req.params;
    // console.log(path.extname(__dirname + '/../data/posts/images/' + imageName));

    fs.readFile(__dirname + '/../data/posts/images/' + imageName, (err, content) => {
        if(err) {
            res.status(404).json({ error: "No image found" });
        } else {
            const mimeType = mime.lookup(imageName);
            // console.log(mimeType);
            res.writeHead(200, { "Content-type": mimeType });
            res.end(content);
        }
    });
};