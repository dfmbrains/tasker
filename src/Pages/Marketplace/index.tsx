import React, {useState} from 'react';
import './MarketPlace.scss';

const MarketPlace = () => {

    const [filterState, setFilterState] = useState(false)

    return (
        <section className="MarketPlace">
            <div className="container">
                {
                    filterState
                        ? <aside></aside>
                        : ''
                }
                <div className="MarketPlace__main">

                </div>
            </div>
        </section>
    );
};

export default MarketPlace;