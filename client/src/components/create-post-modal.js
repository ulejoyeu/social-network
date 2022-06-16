import React from "react";

const CreatePostModalComponent = ({ setShowModal }) => {
    return (
        <div 
            aria-hidden="false"
            aria-modal="false"
            className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center" 
        >
            <div
                className="bg-white w-1/3 p-4 rounded-lg border border-slate-200 shadow-lg"
            >
                <h1 className="text-3xl text-center font-bold">Créer une publication</h1>
                <hr className="mt-4 mb-4"/>
                <div className="flex justify-start items-center">
                    <img 
                        className="rounded-full w-11 h-11"
                        src="https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png"                                        
                    />
                    <div className="ml-4 flex flex-col">
                        <div><b>John Doe</b></div>
                        <div>
                            <select>
                                <option value="public">Public</option>
                                <option value="private">Privé</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
                <textarea 
                    className="w-full p-4"
                    rows="8"
                    placeholder="Écrivez votre texte..."
                ></textarea>
                <div className="mt-4 mb-4 m-2 p-4 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-lg">
                    Ajouter une photo
                </div>
                <div className="flex">
                    <button className="w-1/2 bg-green-500 hover:bg-green-600 p-4 rounded-lg text-white m-2">Publier</button>
                    <button className="w-1/2 bg-red-500 hover:bg-red-600 p-4 rounded-lg text-white m-2" onClick={() => setShowModal(false)}>Annuler</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModalComponent;