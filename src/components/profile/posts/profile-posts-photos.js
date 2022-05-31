import React from 'react';

const ProfilePostsPhotoComponent = () => {
    const firstPhotosSrc = [
        "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/20/13/29/dogs-7209506_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/20/13/29/dogs-7209506_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg",
    ];

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 mt-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Photos</h1>
                <div className="text-blue-500 hover:text-blue-600 hover:underline">Toutes les photos</div>
            </div>
            <div className="grid grid-cols-2">
                {
                    firstPhotosSrc.map(photoSrc => (
                        <div className="p-2">
                            <img className="rounded-lg" src={photoSrc} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProfilePostsPhotoComponent;