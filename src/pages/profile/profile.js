import React from 'react';
import NavbarComponent from '../../components/navbar';

const ProfilePage = () => {
    return (
        <>
            <NavbarComponent />
            <div className="flex w-full h-full bg-slate-100">
                <img
                    className="w-full object-cover h-96"
                    src="https://www.vie-publique.fr/sites/default/files/styles/large_full/public/en_bref/image_principale/plan_avenir_montagne_417105261_Drupal.jpg?itok=on4mFhu0"
                />
            </div>
        </>
    );
};

export default ProfilePage;