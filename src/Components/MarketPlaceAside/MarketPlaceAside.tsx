import React, {FC} from 'react';
import './MarketAside.scss';

interface IMarketPlaceAside {
    data: any,
    cities: boolean
}

const MarketPlaceAside: FC<IMarketPlaceAside> = ({data, cities}) => {
    return (
        <aside className="MarketAside">
            <h2 className="MarketAside__m0">Цена</h2>
            <label className="MarketAside__fromTo">
                <input placeholder="От" type="number"/>
                <span>-</span>
                <input placeholder="До" type="number"/>
            </label>
            {cities
                ? <>
                    <h2>Город</h2>
                    <select className="MarketAside__select">
                        <option>Астана</option>
                        <option>Бишкек</option>
                        <option>Алмата</option>
                        <option>Ош</option>
                    </select>
                </>
                : ''
            }
            {data && data.map((el: any, idx: number) => (
                <div key={idx} className="MarketAside__radios">
                    <h2>{el.title}</h2>
                    {el.data.map((r: any, idx: number) => (
                        <label key={idx}>
                            <input name="name" type="radio"/>
                            <span className="MarketAside__radios_title">{r}</span>
                        </label>
                    ))
                    }
                </div>
            ))
            }
        </aside>
    );
};

export default MarketPlaceAside;