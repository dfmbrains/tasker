import React from 'react';
import MyProfileFreelancer from "../MyProfileFreelancer/MyProfileFreelancer";

const MyProfile = () => {

    const user = {
        name: 'Erbol',
        role: 'freelancer',
    }

    const RolesType = (role: string)=>{
        switch (role) {
            case 'freelancer':
                return <MyProfileFreelancer/>
            case 'recruiter':
                return ''
            default:
                return ''
        }
    }

    return (
        <>
            {
                RolesType(user.role)
            }
        </>
    );
};

export default MyProfile;