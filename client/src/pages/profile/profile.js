import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarComponent from '../../components/navbar';
import ProfileFriendsComponent from '../../components/profile/profile-friends.js';
import ProfilePhotosComponent from '../../components/profile/profile-photos';
import ProfilePostsComponent from '../../components/profile/profile-posts';
import { UserContext, useSession } from '../../context/user-context';

const ProfilePage = () => {
    const { user } = useSession();

    let params = useParams();
    let contentComponent = null;

    console.log(params.tab);

    if (params.tab === undefined) {
        contentComponent = <ProfilePostsComponent />
    }
    else if(params.tab === "posts") {
        contentComponent = <ProfilePostsComponent />
    } else if(params.tab === "about") {
        contentComponent = <p>About</p>
    } else if(params.tab === "photos") {
        contentComponent = <ProfilePhotosComponent />
    } else if(params.tab === "friends") {
        contentComponent = <ProfileFriendsComponent />
    }

    const styleTab = "p-4 w-1/4 text-center hover:bg-slate-200 rounded-full m-2"
    const styleActiveTab = "p-4 w-1/4 text-center hover:bg-slate-200 rounded-full m-2 bg-slate-200"

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
                        <div className="text-4xl"><b>{user.firstName} {user.lastName}</b></div>
                        <div className="text-slate-500">5 amis</div>
                        <div className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-center mt-4">
                            Modifier le profil
                        </div>
                    </div>
                </div>

                <hr/>
                
                <div className="flex w-2/3 mt-8 text-slate-800">
                    <Link className={params.tab === undefined || params.tab === "posts" ? styleActiveTab : styleTab} to="/profile/posts">Publications</Link>
                    <Link className={params.tab === "about" ? styleActiveTab : styleTab} to="/profile/about">A propos</Link>
                    <Link className={params.tab === "friends" ? styleActiveTab : styleTab} to="/profile/friends">Amis</Link>
                    <Link className={params.tab === "photos" ? styleActiveTab : styleTab} to="/profile/photos">Photos</Link>
                </div>

                <div className="flex w-2/3 mt-8 mb-8 flex-col">
                    {contentComponent}
                </div>
            </div>
        </>
    );
};

export default ProfilePage;