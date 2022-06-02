import React from 'react';

const ProfileFriendsFriendCardComponent = ({ photoSrc, firstName, lastName }) => {
    return (
        <div className="flex border bg-slate-50 hover:bg-slate-100 border-slate-100 rounded-lg m-4 p-4">
            <div className="m-2">
                <img src={photoSrc} className="h-24 object-fit rounded-lg" />
            </div>
            <div className="flex flex-col justify-center pl-4">
                <div><b>{firstName} {lastName}</b></div>
                <div className="text-slate-500">3 amis en commun</div>
            </div>
        </div>
    )
};

export default ProfileFriendsFriendCardComponent;