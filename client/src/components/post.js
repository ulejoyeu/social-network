import React, { useEffect, useState } from 'react';
import PostCommentComponent from './post-comment';

const PostComponent = ({ post }) => {
    // const [creator, setCreator] = useState(null);
    const [showComments, setShowComments] = useState(false);

    // TODO
    const getCreator = async () => {
    }

    // useEffect(() => {}, []);

    const clickCommentHandler = () => {
        setShowComments(!showComments);
    }

    return (
        <div className="border border-slate-200 rounded-lg mt-4 mb-4 bg-white shadow-lg">
            <div className="border-b border-black flex">
                <div className="w-48 flex justify-center items-center">
                    PHOTO
                </div>
                <div className="w-full p-4">
                    <p><b>Créateur du post</b></p>
                    <p className="text-slate-500">{ post.createdAt }</p>
                </div>
            </div>

            <div>
                {
                    post.image ? (
                        <div className="w-full">
                            <img className="object-cover" src={`http://localhost:5000/posts/getPostImage/${post.image}`} />
                        </div>
                    ) : <></>
                }
                <div className="p-4">
                    <p>{post.content}</p>
                </div>
            </div>

            <div>
                <div className="w-full p-4 flex justify-between">
                    <div className="text-slate-500 hover:underline">3 personnes aiment ça</div>
                    <div className="text-slate-500">
                        <span className="hover:underline" onClick={clickCommentHandler}>17 commentaires</span>&nbsp;
                        <span className="hover:underline">5 partages</span>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <div className="w-full flex">
                    <div className="w-1/3 p-4 rounded-bl-lg text-center hover:bg-slate-100">J'AIME</div>
                    <div className="w-1/3 p-4 text-center hover:bg-slate-100">COMMENTER</div>
                    <div className="w-1/3 p-4 rounded-br-lg text-center hover:bg-slate-100">PARTAGER</div>
                </div>
            </div>
            {
                showComments ?
                (
                    <div>
                        <PostCommentComponent />
                        <PostCommentComponent />
                        <PostCommentComponent />
                    </div>
                ) : <></>
            }
        </div>
    );
};

export default PostComponent;