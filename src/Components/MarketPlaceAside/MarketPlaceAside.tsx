import React, {FC} from 'react';
import './MarketAside.scss';

interface IMarketPlaceAside {
    data: any
}

const MarketPlaceAside: FC<IMarketPlaceAside> = ({data}) => {
    return (
        <aside className="MarketAside">
            <h2 className="MarketAside__price">Цена</h2>
            <label className="MarketAside__fromTo">
                <input placeholder="От" type="number"/>
                <span>-</span>
                <input placeholder="До" type="number"/>
            </label>
            {data && data.map((el: any) => (
                <div className="MarketAside__time">
                    <h2>{el.title}</h2>
                    {el.data.map((r: any) => (
                        <label>
                            <input name="name" type="radio"/>
                            <span>{r}</span>
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