import React, {useRef, useState} from 'react';
import './createTask.scss';
import Cost from "../../../Components/Cost";
import Button from "../../../Components/Button";

const CreateTask = () => {
    const role = false

    const [files, setFiles] = useState<any>()
    const [descriptionFiles, setDescriptionFiles] = useState<any>()

    const descriptionInputRef: any = useRef()
    const portfolioInputRef: any = useRef()


    const fileInputHandler = (inputRef: any) => {
        inputRef.current.click()
    }

    const deleteFileHandler = (inputRef: any, idx: number) => {
        const newFileArr = descriptionFiles.filter((file: any, fileId: number) => idx !== fileId)
        let list = new DataTransfer();
        newFileArr.map((file: any) => {
            let newFile = new File([""], `${file.name}`, file);
            list.items.add(newFile);
        })
        inputRef.current.files = list.files
        setDescriptionFiles(newFileArr)
    }

    //drag and drop
    const [drag, setDrag] = useState(false)

    const dragAndDropInputHandler = () => {
        portfolioInputRef.current.click()
    }
    const dragStartHandler = (e: any) => {
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler = (e: any) => {
        e.preventDefault()
        setDrag(false)
    }
    const onDropHandler = (e: any) => {
        e.preventDefault()
        let dragFiles = [...e.dataTransfer.files]
        setFiles(dragFiles)
        setDrag(false)
    }

    return (
        <main className="createTask">
            <div className="container">
                <h1 className="pageTitle">Создать задание</h1>
                <form>
                    <h2 className="createTask__title">Основное</h2>
                    <div className="createTask__part">
                        {role
                            ? <>
                                <h3>Название заказа</h3>
                                <input type="text" placeholder="Введите название"/>
                            </>
                            : ''
                        }
                        {role
                            ? <>
                                <h3>Рубрика</h3>
                                <div className="createTask__part_row">
                                    <select>
                                        <option>Выберите рубрику</option>
                                        <option>Выберите рубрику 2</option>
                                        <option>Выберите рубрику 3</option>
                                    </select>
                                    <select>
                                        <option>Трафик</option>
                                        <option>Трафик 2</option>
                                        <option>Трафик 3</option>
                                    </select>
                                </div>
                            </>
                            : <>
                                <div className="createTask__part_row">
                                    <div className="createTask__part_row-parts">
                                        <h3>Название заказа</h3>
                                        <input type="text" placeholder="Введите название"/>
                                    </div>
                                    <div className="createTask__part_row-parts">
                                        <h3>Рубрика</h3>
                                        <select>
                                            <option>Выберите рубрику</option>
                                            <option>Выберите рубрику 2</option>
                                            <option>Выберите рубрику 3</option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        }
                        <div className="createTask__part_row">
                            <div className="createTask__part_row-parts">
                                <h3>Обложка задания</h3>
                                <div
                                    onDragStart={e => dragStartHandler(e)}
                                    onDragLeave={e => dragLeaveHandler(e)}
                                    onDragOver={e => dragStartHandler(e)}
                                    onDrop={e => onDropHandler(e)}
                                    onClick={dragAndDropInputHandler}
                                    className="createTask__file">
                                    <h5>{drag ? "Отпустите, чтобы загрузить" : "Загрузить обложку"}</h5>
                                    <p>Минимальный размер: 660 х 440 px Вес: 30 кб — 10 Мб Форматы: jpg, jpeg, png</p>
                                </div>
                            </div>
                            {!role &&
                                <div className="createTask__part_row-parts">
                                    <h3>Вложения для фрилансера</h3>
                                    <textarea className="createTask__file" placeholder="Введите описание"/>
                                    <div className="createTask__docs">
                                        <div className="createTask__docs_scroll">
                                            <div className="createTask__docs_scroll-row">
                                                {descriptionFiles &&
                                                    descriptionFiles.map((file: any, idx: number) => (
                                                        <div className="createTask__docs_item">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#4086F4"
                                                                      d="M17.6172 5.27344L13.5156 4.10156L12.3438 0H4.14062C3.1698 0 2.38281 0.786992 2.38281 1.75781V18.2422C2.38281 19.213 3.1698 20 4.14062 20H15.8594C16.8302 20 17.6172 19.213 17.6172 18.2422V5.27344Z"/>
                                                                <path fill="#4175DF"
                                                                      d="M17.6172 5.27344V18.2422C17.6172 19.213 16.8302 20 15.8594 20H10V0H12.3438L13.5156 4.10156L17.6172 5.27344Z"/>
                                                                <path fill="#80AEF8"
                                                                      d="M17.6172 5.27344H13.5156C12.8711 5.27344 12.3438 4.74609 12.3438 4.10156V0C12.4961 0 12.6484 0.0585938 12.7539 0.17582L17.4414 4.86332C17.5586 4.96875 17.6172 5.12109 17.6172 5.27344Z"/>
                                                                <path fill="#FFF5F5"
                                                                      d="M13.5156 9.41406H6.48438C6.16051 9.41406 5.89844 9.15199 5.89844 8.82812C5.89844 8.50426 6.16051 8.24219 6.48438 8.24219H13.5156C13.8395 8.24219 14.1016 8.50426 14.1016 8.82812C14.1016 9.15199 13.8395 9.41406 13.5156 9.41406Z"/>
                                                                <path fill="#FFF5F5"
                                                                      d="M13.5156 11.7578H6.48438C6.16051 11.7578 5.89844 11.4957 5.89844 11.1719C5.89844 10.848 6.16051 10.5859 6.48438 10.5859H13.5156C13.8395 10.5859 14.1016 10.848 14.1016 11.1719C14.1016 11.4957 13.8395 11.7578 13.5156 11.7578Z"/>
                                                                <path fill="#FFF5F5"
                                                                      d="M13.5156 14.1016H6.48438C6.16051 14.1016 5.89844 13.8395 5.89844 13.5156C5.89844 13.1918 6.16051 12.9297 6.48438 12.9297H13.5156C13.8395 12.9297 14.1016 13.1918 14.1016 13.5156C14.1016 13.8395 13.8395 14.1016 13.5156 14.1016Z"/>
                                                                <path fill="#FFF5F5"
                                                                      d="M11.1719 16.4453H6.48438C6.16051 16.4453 5.89844 16.1832 5.89844 15.8594C5.89844 15.5355 6.16051 15.2734 6.48438 15.2734H11.1719C11.4957 15.2734 11.7578 15.5355 11.7578 15.8594C11.7578 16.1832 11.4957 16.4453 11.1719 16.4453Z"/>
                                                                <path fill="#E3E7EA"
                                                                      d="M10 16.4453H11.1719C11.4957 16.4453 11.7578 16.1832 11.7578 15.8594C11.7578 15.5355 11.4957 15.2734 11.1719 15.2734H10V16.4453Z"/>
                                                                <path fill="#E3E7EA"
                                                                      d="M10 14.1016H13.5156C13.8395 14.1016 14.1016 13.8395 14.1016 13.5156C14.1016 13.1918 13.8395 12.9297 13.5156 12.9297H10V14.1016Z"/>
                                                                <path fill="#E3E7EA"
                                                                      d="M10 11.7578H13.5156C13.8395 11.7578 14.1016 11.4957 14.1016 11.1719C14.1016 10.848 13.8395 10.5859 13.5156 10.5859H10V11.7578Z"/>
                                                                <path fill="#E3E7EA"
                                                                      d="M10 9.41406H13.5156C13.8395 9.41406 14.1016 9.15199 14.1016 8.82812C14.1016 8.50426 13.8395 8.24219 13.5156 8.24219H10V9.41406Z"/>
                                                            </svg>
                                                            <p>{file.name.length > 10 ? file.name.slice(0, 10) : file.name}</p>
                                                            <svg
                                                                onClick={() => deleteFileHandler(descriptionInputRef, idx)}
                                                                width="10" height="14" viewBox="0 0 10 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#7F93B1"
                                                                      d="M0.833333 11.9997C0.833333 12.9163 1.58333 13.6663 2.5 13.6663H7.5C8.41667 13.6663 9.16667 12.9163 9.16667 11.9997V3.66634H0.833333V11.9997ZM10 1.16634H7.5L6.66667 0.333008H3.33333L2.5 1.16634H0V2.83301H10V1.16634Z"/>
                                                            </svg>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <input multiple={true}
                                               onChange={(e) => e.target.files ? setDescriptionFiles(Array.from(e?.target?.files)) : ''}
                                               ref={descriptionInputRef} type="file" hidden={true}/>
                                        <button onClick={() => fileInputHandler(descriptionInputRef)} type={"button"}
                                                className="createTask__docs_button">
                                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#7F93B1"
                                                      d="M10.9527 14.4645C10.9527 17.4804 8.5073 19.9209 5.49639 19.9209C2.48548 19.9209 0.0400391 17.4804 0.0400391 14.4645L0.0400391 4.04788C0.0400391 1.85542 1.81583 0.079628 4.00829 0.079628C6.20075 0.079628 7.97655 1.85542 7.97655 4.04788V12.4804C7.97655 13.8495 6.86544 14.9606 5.49639 14.9606C4.12734 14.9606 3.01623 13.8495 3.01623 12.4804L3.01623 5.03995H4.50432V12.4804C4.50432 13.0261 4.94579 13.4725 5.49639 13.4725C6.04698 13.4725 6.48845 13.0261 6.48845 12.4804V4.04788C6.48845 2.67883 5.37734 1.56772 4.00829 1.56772C2.63925 1.56772 1.52813 2.67883 1.52813 4.04788L1.52813 14.4645C1.52813 16.657 3.30393 18.4328 5.49639 18.4328C7.68885 18.4328 9.46464 16.657 9.46464 14.4645V5.03995H10.9527V14.4645Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                        {!role &&
                            <>
                                <h3>Какаие навыки вам нужны от фрилансера?</h3>
                                <textarea className="createTask__textarea" placeholder="Введите текст"/>
                            </>
                        }
                    </div>
                    {role &&
                        <>
                            <h2 className="createTask__title">Описание и файлы</h2>
                            <div className="createTask__part">
                                <h3>Что вы гарантируете</h3>
                                <textarea className="createTask__textarea" placeholder="Введите текст"/>
                                <h3>Какаие материалы вам нужны от клиента</h3>
                                <textarea className="createTask__textarea" placeholder="Введите текст"/>
                                <div className="createTask__row">
                                    <input ref={portfolioInputRef} type="file" hidden={true}/>
                                    <button type={"button"} onClick={() => fileInputHandler(portfolioInputRef)}>
                                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#2B96F1"
                                                  d="M10.9527 14.4643C10.9527 17.4802 8.5073 19.9207 5.49639 19.9207C2.48548 19.9207 0.0400391 17.4802 0.0400391 14.4643L0.0400391 4.04764C0.0400391 1.85518 1.81583 0.0793839 4.00829 0.0793839C6.20075 0.0793839 7.97655 1.85518 7.97655 4.04764V12.4802C7.97655 13.8492 6.86544 14.9603 5.49639 14.9603C4.12734 14.9603 3.01623 13.8492 3.01623 12.4802L3.01623 5.0397H4.50432V12.4802C4.50432 13.0258 4.94579 13.4722 5.49639 13.4722C6.04698 13.4722 6.48845 13.0258 6.48845 12.4802V4.04764C6.48845 2.67859 5.37734 1.56748 4.00829 1.56748C2.63925 1.56748 1.52813 2.67859 1.52813 4.04764L1.52813 14.4643C1.52813 16.6568 3.30393 18.4326 5.49639 18.4326C7.68885 18.4326 9.46464 16.6568 9.46464 14.4643V5.0397H10.9527V14.4643Z"/>
                                        </svg>
                                        Прикрепить работы с портфолио
                                    </button>
                                    <p>До 10 файлов не более 100 мб</p>
                                </div>
                            </div>
                        </>
                    }
                    <h2 className="createTask__title">Стоимость</h2>
                    <div className="createTask__part">
                        <div className="createTask__part_row">
                            <label>
                                <h3>Введите сумму</h3>
                                <input type="text" placeholder="Введите значение"/>
                            </label>
                            <label>
                                <h3>Время</h3>
                                <select>
                                    <option>2 дня</option>
                                    <option>3 дня</option>
                                    <option>4 дня</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="createTask__total">
                        <Cost/>
                        <Button text={"Продолжить"} type={4}/>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CreateTask;