import React, {FC} from 'react';
import '../../MyProfile/myProfile.scss'

interface IMyProfileFreelancer {
    data: any
}

const MyProfileFreelancer: FC<IMyProfileFreelancer> = ({data}) => {

    return (
        <>
            <h2 className="myProfile__profile_right-role">
                UI/UX Design
            </h2>
            <div className="myProfile__profile_right-desc myProfile__profile_box">
                {data.desc.split('/tr').map((item: any) => (
                    <span>{item}<br/></span>
                ))}
            </div>
        </>
    );
};

export default MyProfileFreelancer;