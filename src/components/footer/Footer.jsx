import React from "react";
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.phone}>
                <h2>
                    +7(996) 337 29 41
                </h2>
            </div>
            <div className={s.instLogo}>
                <div>
                    <img src={'https://www.pikpng.com/pngl/b/481-4815508_vkontakte-logo-png-vk-png-clipart.png'} alt={'vk'}/>
                </div>
                <div>
                    <img src={'https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png'} alt={'insta'}/>
                </div>
                <div>
                    <img src={'http://pngimg.com/uploads/telegram/telegram_PNG35.png'} alt={'tg'}/>
                </div>
                <div>
                    <img src={'http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png'} alt={'fb'}/>
                </div>
            </div>
            <div className={s.divA}>
                <h6 className={s.footerInfo}>О нас</h6>
            </div>
            <div className={s.divA}>
                <h6 className={s.footerBuss}>Корпоративным клиентам</h6>
            </div>
            <div className={s.divA}>
                <h6 className={s.footerFeedBack}>Обратная связь</h6>
            </div>
            <div className={s.divA}>
                <h6 className={s.footerFAQ}>Политика обработки персональных данных</h6>
            </div>
            <h6 className={s.footerName}>
                Copyright © Semen bullShit 2020.
            </h6>
        </div>
    )
}

export default Footer;