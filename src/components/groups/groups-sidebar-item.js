import React from 'react';

const GroupsSidebarItem = ({ name, imageSrc }) => {
    return (
        <div className="flex mt-4 items-center bg-white hover:bg-slate-100 rounded-lg p-4 shadow-lg">
            <img
                className="w-24 object-fit rounded-lg mr-8" 
                src={imageSrc} />
            <div>
                <b>{name}</b>
            </div>
        </div>
    );
};

export default GroupsSidebarItem;