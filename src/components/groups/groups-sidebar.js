import React from 'react';
import GroupsSidebarItem from './groups-sidebar-item';

const GroupsSidebar = () => {
    return (
        <div className="w-1/4 bg-slate-200 min-h-full border-slate-200 border-r shadow-lg">
            <div className="flex justify-center mt-4 mb-4">
                <input 
                    type="text" 
                    className="p-4 w-4/5 rounded-lg"
                    placeholder="Rechercher" />
            </div>
            <div className="m-8">
                <h1 className="text-2xl">Mes groupes</h1>
                <GroupsSidebarItem 
                    name="Griffondor"
                    imageSrc="https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
                    />
                
                <GroupsSidebarItem 
                    name="Pouffsoufle"
                    imageSrc="https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
                    />
                
                <GroupsSidebarItem 
                    name="Serpentard"
                    imageSrc="https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
                    />
                
                <GroupsSidebarItem 
                    name="Serdaigle"
                    imageSrc="https://cdn.pixabay.com/photo/2022/05/21/16/00/butterfly-7211806_1280.jpg"
                    />
            </div>
        </div>
    );
};

export default GroupsSidebar;
