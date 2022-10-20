import Djamal from "../../Assets/img/Djamal.png";
import DjamalJyrnyi from "../../Assets/img/DjamalJyrnyi.webp";
import Djamal2 from "../../Assets/img/djamal2.jpg";
import Djamal3 from "../../Assets/img/djamal3.jpg";
import DjamalKras from "../../Assets/img/MegaKrasivyiDjamal.webp";
import markDelievered from "../../Assets/icons/markDelivered.svg";
import markReaded from "../../Assets/icons/markReaded.svg";
import React from "react";

const dataUsers = [
    {
        name: 'Джамал Джамалов',
        img: Djamal,
        lastMes: 'Может встретимся?',
        readed: 2,
        date: '26.07.22',
    },
    {
        name: 'Джамал Жирный',
        img: DjamalJyrnyi,
        lastMes: 'Люблю!',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Джамал 2',
        img: Djamal2,
        lastMes: 'Скоро буду',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Джамал 3',
        img: Djamal3,
        lastMes: 'Куда мне подъезжать?',
        readed: 0,
        date: '26.07.22',
    },
    {
        name: 'Джамал 4',
        lastMes: 'Дай номер телефона',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Джамал 5',
        lastMes: 'Ты где?',
        readed: 2,
        date: '26.07.22',
    },
    {
        name: 'Джамал 6',
        lastMes: 'Как дела?',
        readed: 1,
        date: '26.07.22',
    },
    {
        name: 'Мегакрасивый Джамал',
        lastMes: 'Давай встретимся?',
        readed: 1,
        img: DjamalKras,
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
