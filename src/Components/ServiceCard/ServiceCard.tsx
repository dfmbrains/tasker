import React from 'react';

interface Interface {
    obj: {
        image: string,
        from: number,
        to: number,
        user: string,
        desc: string,
        rate: number
    }
}

const ServiceCard: React.FC<Interface> = ({obj}) => {
    return (
        <div className="ServiceCard">

        </div>
    );
};

export default ServiceCard;