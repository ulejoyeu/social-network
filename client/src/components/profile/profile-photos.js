import React from 'react';

const ProfilePhotosComponent = () => {
    const photos = [
        "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/20/13/29/dogs-7209506_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/20/13/29/dogs-7209506_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg",
    ];

    return (
        <div className="mt-4 mb-4 rounded-lg shadow-lg bg-white p-4">
            <h1 className="text-2xl m-4">Photos</h1>
            <div className="flex mt-8 m-4">
                <a className="text-center mr-8 text-blue-600 hover:text-blue-600 font-bold">Photos où j'apparais</a>
                <a className="text-center mr-8 text-blue-500 hover:text-blue-600 hover:font-bold">Mes photos</a>
                <a className="text-center mr-8 text-blue-500 hover:text-blue-600 hover:font-bold">Albums</a>
            </div>
            <div className="mt-8 mb-8 p-4 grid grid-cols-5">
                {
                    photos.map(photoSrc => (
                        <div className="p-2">
                            <img className="rounded-lg" src={photoSrc}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProfilePhotosComponent;