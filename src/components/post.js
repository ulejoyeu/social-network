import React from 'react';
import PostCommentComponent from './post-comment';

const PostComponent = ({ imageSource }) => {
    return (
        <div className="border border-slate-800 rounded-lg w-3/4 mt-4 mb-4 bg-white shadow-lg">
            <div className="border-b border-black flex">
                <div className="w-48 flex justify-center items-center">
                    PHOTO
                </div>
                <div className="w-full p-4">
                    <p><b>John Doe</b></p>
                    <p className="text-slate-500">Il y a une heure</p>
                </div>
            </div>

            <div>
                <div className="w-full">
                    <img className="object-cover" src={imageSource} />
                </div>
                <div className="p-4">
                    <p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>
                </div>
            </div>

            <div>
                <div className="w-full p-4 flex justify-between">
                    <div className="text-slate-500 hover:underline">3 personnes aiment ça</div>
                    <div className="text-slate-500">
                        <span className="hover:underline">17 commentaires</span>&nbsp;
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
            <div>
                <PostCommentComponent />
                <PostCommentComponent />
                <PostCommentComponent />
            </div>
        </div>
    );
};

export default PostComponent;