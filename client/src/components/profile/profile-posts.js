import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import CreatePostCardComponent from '../create-post-card';
import PostComponent from '../post';
import ProfilePostsFriendsComponent from './posts/profile-posts-friends';
import ProfilePostsInfosComponent from './posts/profile-posts-infos';
import ProfilePostsPhotoComponent from './posts/profile-posts-photos';

const ProfilePostsComponent = () => {
    return (
        <div className="flex w-full">
            <div className="w-1/3">
                <ProfilePostsInfosComponent />
                <ProfilePostsPhotoComponent />
                <ProfilePostsFriendsComponent />
            </div>
            <div className="w-2/3 ml-4">
                <CreatePostCardComponent />
                
                <PostComponent imageSource="https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg" />
                <PostComponent imageSource="https://cdn.pixabay.com/photo/2022/05/20/13/29/dogs-7209506_1280.jpg" />
                <PostComponent imageSource="https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg" />
            </div>
        </div>
    );
};

export default ProfilePostsComponent;