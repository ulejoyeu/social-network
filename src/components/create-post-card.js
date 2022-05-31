import React, { useState } from 'react';
import CreatePostModalComponent from './create-post-modal';

const CreatePostCardComponent = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="flex border border-slate-200 rounded-lg w-3/4 mt-4 mb-4 p-4 bg-white shadow-lg items-center">
                <img
                    className="rounded-full w-11 h-11"
                    src="https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png"
                />
                <div 
                    type="text" 
                    className="flex-1 rounded-lg p-4 ml-4 bg-slate-100 text-slate-500 hover:bg-slate-200"
                    onClick={() => setShowModal(true)}
                >
                        Créer une publication
                </div>
            </div>

            {
                showModal ?
                    <CreatePostModalComponent setShowModal={setShowModal} />
                : <></>
            }
        </>
    )
};

export default CreatePostCardComponent;