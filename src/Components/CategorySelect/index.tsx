import React, {FC, useEffect, useRef, useState} from 'react';
import './categorySelect.scss';

interface ICategorySelect {
    category: {
        title: string,
        categories: string[]
    }
}

interface ICategoryCheckbox {
    title: string,
    checkedAll: boolean
}

const CategoryCheckbox: FC<ICategoryCheckbox> = ({title, checkedAll}) => {
    const [status, setStatus] = useState<boolean>(false)

    useEffect(() => {
        setStatus(checkedAll)
    }, [checkedAll])

    return (
        <label className="categorySelect__list_item">
            <input onClick={() => setStatus(!status)} checked={status} type="checkbox"/>
            {title}
        </label>
    )
}

const CategorySelect: FC<ICategorySelect> = ({category}) => {
    const [accordionStatus, setAccordionStatus] = useState<boolean>(false)
    const [checkedAll, setCheckedAll] = useState<boolean>(false)

    const selectListRef: any = useRef()

    const accordionHandler = () => {
        selectListRef.current.style.display = accordionStatus ? 'none' : 'flex'
        setAccordionStatus(!accordionStatus)
    }

    return (
        <div className="categorySelect">
            <div className="categorySelect__main">
                <div style={{transform: `${accordionStatus ? 'rotate(0)' : 'rotate(-90deg)'}`}}
                     onClick={accordionHandler} className="categorySelect__open">
                    <svg width="12" height="6" viewBox="0 0 14 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.65083 0L7 4.94673L12.3492 0L14 1.52664L7 8L0 1.52664L1.65083 0Z" fill="#555555"/>
                    </svg>
                </div>
                <label className="categorySelect__title">
                    <input onChange={(e: any) => setCheckedAll(e.target.checked)} type="checkbox"/>
                    {category.title}
                </label>
            </div>
            <div ref={selectListRef} className="categorySelect__list">
                {category.categories
                    ? category.categories.map((c) => (
                        <CategoryCheckbox title={c} checkedAll={checkedAll}/>
                    ))
                    : ''
                }
            </div>
        </div>
    );
};

export default CategorySelect;