import React from 'react';

const ProfilePostsFriendsComponent = () => {
    const firstFriends = [
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "photoSrc": "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
        },
        {
            "firstName": "Ron",
            "lastName": "Weasley",
            "photoSrc": "https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg"
        },
        {
            "firstName": "Hermione",
            "lastName": "Granger",
            "photoSrc": "Https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
        },
        {
            "firstName": "Neville",
            "lastName": "Longbottom",
            "photoSrc": "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
        },
        {
            "firstName": "Luna",
            "lastName": "Lovegood",
            "photoSrc": "https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg"
        },
        {
            "firstName": "Ginnie",
            "lastName": "Weasley",
            "photoSrc": "https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
        }
    ]

    return (
        <div className="bg-white rounded-lg border-slate-200 p-4 mt-4">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1 className="text-2xl">Amis</h1>
                        <p className="text-slate-500">217 amis</p>
                    </div>
                </div>
                <div className="text-blue-500 hover:text-blue-500 hover:underline">Tous les amis</div>
            </div>
            <div className="grid grid-cols-2 mt-2">
                {
                    firstFriends.map(
                        ({firstName, lastName, photoSrc}) => (
                            <div className="p-2">
                                <img className="rounded-lg" src={photoSrc} />
                                <p className="text-xs font-bold">{firstName} {lastName}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default ProfilePostsFriendsComponent;