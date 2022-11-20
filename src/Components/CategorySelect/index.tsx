import React, {FC} from 'react';
import './categorySelect.scss';

interface ICategorySelect {
    category: {
        title: string,
        categories: string[]
    }
}

const CategorySelect: FC<ICategorySelect> = ({category}) => {
    return (
        <div className="categorySelect">
            <label className="categorySelect__title">
                <input type="checkbox"/>
                {category.title}
            </label>
            <div className="categorySelect__list">
                {category.categories
                    ? category.categories.map((c) => (
                        <label>
                            <input type="checkbox"/>
                            {c}
                        </label>
                    ))
                    : ''
                }
            </div>
        </div>
    );
};

export default CategorySelect;