import profilePicture from '/profile_picture_1.png'

function Profile(){

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-[100%] flex justify-center py-10">
                    <div className="w-25 h-25 rounded-full">
                        <img className='rounded-full h-[100%] w-[100%] object-cover object-top' src={profilePicture} alt="" />
                    </div>
                </div>
                <h1>Hey, I'm <span className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent pt-10'>Daniel Ciciliani</span></h1>
                <div className=" w-10/12 flex flex-col pt-5 text-[1.3rem]/[2rem] text-center">
                    <p>I'm a frontend developer with +3 years of experience</p>
                    <p>I'm lucky that coding brings together the most I like: 
                    tech, logic, problem-solving and making things look good.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Profile;