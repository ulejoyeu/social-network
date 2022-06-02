import React from 'react';
import ProfileFriendsFriendCardComponent from './friends/profile-friends-friend-card';

const ProfileFriendsComponent = () => {
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
            <h1 className="text-2xl m-4">Amis</h1>
            <div className="grid grid-cols-2">
                {
                    photos.map(photoSrc => (
                        <ProfileFriendsFriendCardComponent photoSrc={photoSrc} firstName="John" lastName="Doe" />
                    ))
                }
            </div>
        </div>
    );
};

export default ProfileFriendsComponent;