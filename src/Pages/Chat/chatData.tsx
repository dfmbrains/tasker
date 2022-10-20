import Djamal from "../../Assets/img/Djamal.png";
import DjamalJyrnyi from "../../Assets/img/DjamalJyrnyi.webp";
import Djamal2 from "../../Assets/img/djamal2.jpg";
import Djamal3 from "../../Assets/img/djamal3.jpg";
import markDelievered from "../../Assets/icons/markDelivered.svg";
import markReaded from "../../Assets/icons/markReaded.svg";
import React from "react";

const dataUsers = [
    {
        name: 'Djamal Djamalov',
        img: Djamal,
        lastMes: 'Вы успеваете?',
        readed: 2,
        date: '26.07.22',
    },
    {
        name: 'Djamal Jyrnyi',
        img: DjamalJyrnyi,
        lastMes: 'Вы успеваете?',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Djamal 2',
        img: Djamal2,
        lastMes: 'Вы успеваете?',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Djamal 3',
        img: Djamal3,
        lastMes: 'Вы успеваете?',
        readed: 0,
        date: '26.07.22',
    },
    {
        name: 'Djamal 4',
        lastMes: 'Вы успеваете?',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Djamal 4',
        lastMes: 'Вы успеваете?',
        readed: 2,
        date: '26.07.22',
    },
    {
        name: 'Shamal 4',
        lastMes: 'Вы успеваете?',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Djamal 4',
        lastMes: 'Вы успеваете?',
        readed: 1,
        date: '26.07.22',
    }
]

export default dataUsers


export const readedOrNot = (type: number) => {
    switch (type) {
        case 0:
            return <img src="" alt=""/>
        case 1:
            return <img src={markDelievered} alt=""/>
        case 2:
            return <img src={markReaded} alt=''/>
    }
}
