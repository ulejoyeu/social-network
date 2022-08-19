import React, { useContext } from 'react';
import { UserContext } from '../../../context/user-context';

const ProfilePostsInfosComponent = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bg-white rounded-lg shadow-lg border-slate-200 p-4">
            <h1 className="text-2xl">Informations</h1>
            <hr className="mt-2" />
            <ul className="mt-4">
                <li><b>Âge :</b> {user.age} ans</li>
                <li><b>Genre :</b> {user.gender == 'male' ? 'Homme' : 'Femme'}</li>
                <li><b>Habite à :</b> {user.city}, {user.country}</li>
            </ul>
        </div>
    )
}

export default ProfilePostsInfosComponent;