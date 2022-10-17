import React from 'react';
import ContactImg from './img/contactImg.png';
import Button from "../../Components/Button";

const Details = () => {
    return (
        <main className="details">
            <div className="container">
                <h1 className="pageTitle">Уникальный логотип. Разработка логотипа</h1>
                <div className="details__row">
                    <div className="details__contact">
                        <div className="details__contact_top">
                            <div className="details__contact_img">
                                <img src={ContactImg} alt=""/>
                            </div>
                            <h3 className="details__subtitle">Dedvoid</h3>
                        </div>
                        <div className="details__contact_info">
                            <div className="details__contact_info-item">
                                <p className="details__subtitle_small">Репутация:</p>
                                <p className="details__subtitle_small">
                                    <svg width="101" height="20" viewBox="0 0 101 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.56712 7.90983L7.02832 7.90983C7.89477 7.90983 8.66268 7.35191 8.93043 6.52786L10 3.23607L11.0696 6.52786C11.3373 7.35191 12.1052 7.90983 12.9717 7.90983H16.4329L13.6327 9.94427C12.9317 10.4536 12.6384 11.3563 12.9062 12.1803L13.9757 15.4721L11.1756 13.4377C10.4746 12.9284 9.5254 12.9284 8.82443 13.4377L6.02426 15.4721L7.09383 12.1803C7.36158 11.3563 7.06826 10.4536 6.36729 9.94427L3.56712 7.90983ZM3.56712 7.90983V6.90983L3.56712 7.90983L2.97933 8.71885L3.56712 7.90983Z"
                                            fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                                        <path
                                            d="M24.5671 7.90983L28.0283 7.90983C28.8948 7.90983 29.6627 7.35191 29.9304 6.52786L31 3.23607L32.0696 6.52786C32.3373 7.35191 33.1052 7.90983 33.9717 7.90983H37.4329L34.6327 9.94427C33.9317 10.4536 33.6384 11.3563 33.9062 12.1803L34.9757 15.4721L32.1756 13.4377C31.4746 12.9284 30.5254 12.9284 29.8244 13.4377L27.0243 15.4721L28.0938 12.1803C28.3616 11.3563 28.0683 10.4536 27.3673 9.94427L24.5671 7.90983ZM24.5671 7.90983V6.90983L24.5671 7.90983L23.9793 8.71885L24.5671 7.90983Z"
                                            fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                                        <path
                                            d="M44.5671 7.90983L48.0283 7.90983C48.8948 7.90983 49.6627 7.35191 49.9304 6.52786L51 3.23607L52.0696 6.52786C52.3373 7.35191 53.1052 7.90983 53.9717 7.90983H57.4329L54.6327 9.94427C53.9317 10.4536 53.6384 11.3563 53.9062 12.1803L54.9757 15.4721L52.1756 13.4377C51.4746 12.9284 50.5254 12.9284 49.8244 13.4377L47.0243 15.4721L48.0938 12.1803C48.3616 11.3563 48.0683 10.4536 47.3673 9.94427L44.5671 7.90983ZM44.5671 7.90983V6.90983L44.5671 7.90983L43.9793 8.71885L44.5671 7.90983Z"
                                            fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                                        <path
                                            d="M64.5671 7.90983L68.0283 7.90983C68.8948 7.90983 69.6627 7.35191 69.9304 6.52786L71 3.23607L72.0696 6.52786C72.3373 7.35191 73.1052 7.90983 73.9717 7.90983H77.4329L74.6327 9.94427C73.9317 10.4536 73.6384 11.3563 73.9062 12.1803L74.9757 15.4721L72.1756 13.4377C71.4746 12.9284 70.5254 12.9284 69.8244 13.4377L67.0243 15.4721L68.0938 12.1803C68.3616 11.3563 68.0683 10.4536 67.3673 9.94427L64.5671 7.90983ZM64.5671 7.90983V6.90983L64.5671 7.90983L63.9793 8.71885L64.5671 7.90983Z"
                                            fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                                        <path
                                            d="M84.5671 7.90983L88.0283 7.90983C88.8948 7.90983 89.6627 7.35191 89.9304 6.52786L91 3.23607L92.0696 6.52786C92.3373 7.35191 93.1052 7.90983 93.9717 7.90983H97.4329L94.6327 9.94427C93.9317 10.4536 93.6384 11.3563 93.9062 12.1803L94.9757 15.4721L92.1756 13.4377C91.4746 12.9284 90.5254 12.9284 89.8244 13.4377L87.0243 15.4721L88.0938 12.1803C88.3616 11.3563 88.0683 10.4536 87.3673 9.94427L84.5671 7.90983ZM84.5671 7.90983V6.90983L84.5671 7.90983L83.9793 8.71885L84.5671 7.90983Z"
                                            fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                                    </svg>
                                </p>
                            </div>
                            <div className="details__contact_info-item">
                                <p className="details__subtitle_small">Выполнено заказов:</p>
                                <p className="details__subtitle_small">152</p>
                            </div>
                            <div className="details__contact_info-item">
                                <p className="details__subtitle_small">Город:</p>
                                <p className="details__subtitle_small">Алматы</p>
                            </div>
                        </div>
                        <div className="details__contact_button">
                            <Button type={4} text={"Связаться с продавцом"}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_18_1573)">
                                        <path
                                            d="M17.5003 4.99996H15.8337V12.5H5.00033V14.1666C5.00033 14.625 5.37533 15 5.83366 15H15.0003L18.3337 18.3333V5.83329C18.3337 5.37496 17.9587 4.99996 17.5003 4.99996ZM14.167 9.99996V2.49996C14.167 2.04163 13.792 1.66663 13.3337 1.66663H2.50033C2.04199 1.66663 1.66699 2.04163 1.66699 2.49996V14.1666L5.00033 10.8333H13.3337C13.792 10.8333 14.167 10.4583 14.167 9.99996Z"
                                            fill="#FFB800"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18_1573">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="details__description"></div>
                    <div className="details__start"></div>
                </div>
            </div>
        </main>
    );
};

export default Details;