import React from 'react';
import NavbarComponent from '../../components/navbar';
import ProfilePostsComponent from '../../components/profile/profile-posts';

const ProfilePage = () => {
    return (
        <>
            <NavbarComponent />
            <div className="flex w-full h-full bg-slate-100 flex-col items-center overflow-y-scroll">
                <img
                    className="w-full object-cover h-96 shadow-lg"
                    src="https://www.vie-publique.fr/sites/default/files/styles/large_full/public/en_bref/image_principale/plan_avenir_montagne_417105261_Drupal.jpg?itok=on4mFhu0"
                />

                <div className="flex w-2/3 mt-8">
                    <img
                        className="rounded-full w-48 h-48"
                        src="https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png"
                    />
                    <div className="flex flex-col p-4 ml-4 h-full justify-center">
                        <div className="text-4xl"><b>John Doe</b></div>
                        <div className="text-slate-500">5 amis</div>
                        <div className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-center mt-4">
                            Modifier le profil
                        </div>
                    </div>
                </div>

                <hr/>
                
                <div className="flex w-2/3 mt-8 text-slate-800">
                    <div className="p-4 w-1/4 text-center hover:bg-slate-200 rounded-full m-2 bg-slate-200">A propos</div>
                    <div className="p-4 w-1/4 text-center hover:bg-slate-200 rounded-full m-2">Publications</div>
                    <div className="p-4 w-1/4 text-center hover:bg-slate-200 rounded-full m-2">Amis</div>
                    <div className="p-4 w-1/4 text-center hover:bg-slate-200 rounded-full m-2">Photos</div>
                </div>

                <div className="flex w-2/3 mt-8 mb-8 flex-col">
                    <ProfilePostsComponent />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;