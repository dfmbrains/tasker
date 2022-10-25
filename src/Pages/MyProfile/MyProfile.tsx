import React from 'react';
import MyProfileFreelancer from "../Freelancer/MyProfile/MyProfile";
import MyProfileBayer from "../Bayer/MyProfile";

const MyProfile = () => {

    const user = {
        name: 'Erbol',
        role: 'bayer',
    }

    const RolesType = (role: string) => {
        switch (role) {
            case 'freelancer':
                return <MyProfileFreelancer/>
            case 'bayer':
                return <MyProfileBayer/>
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