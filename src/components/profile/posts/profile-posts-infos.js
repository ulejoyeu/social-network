import React from 'react';

const ProfilePostsInfosComponent = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg border-slate-200 p-4">
            <h1 className="text-2xl">Informations</h1>
            <hr className="mt-2" />
            <ul className="mt-4">
                <li><b>Âge :</b> 21 ans</li>
                <li><b>Genre :</b> Homme</li>
                <li><b>Habite à :</b> Paris</li>
            </ul>
        </div>
    )
}

export default ProfilePostsInfosComponent;