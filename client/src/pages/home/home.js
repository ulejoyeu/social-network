import React from 'react';
import CreatePostCardComponent from '../../components/create-post-card.js';
import HomeSidebar from '../../components/home/home-sidebar.js';
import NavbarComponent from '../../components/navbar';
import PostComponent from '../../components/post.js';

const HomePage = () => {
    return (
        <>
            <NavbarComponent />
            <div className="flex w-full h-full bg-slate-100">
                <HomeSidebar />
                <div className="w-3/4 flex items-center flex-col overflow-y-scroll pt-8 mb-4">
                    <div className="w-3/4">
                        <CreatePostCardComponent />
                        {/* <PostComponent imageSource="https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg" />
                        <PostComponent imageSource="https://cdn.pixabay.com/photo/2022/05/20/13/29/dogs-7209506_1280.jpg" />
                        <PostComponent imageSource="https://cdn.pixabay.com/photo/2022/04/26/20/37/coffee-7159137_1280.jpg" /> */}
                    </div>

                </div>
            </div>
        </>
    )
};

export default HomePage;