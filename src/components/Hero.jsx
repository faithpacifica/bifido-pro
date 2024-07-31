import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className=' hero-bg'>
            <div className="container">
                <div className="flex flex-col hero-left">
                    <h2>{t('heroTitle')}</h2>
                </div>
                <div className="hero-right"></div>
            </div>

        </section>
    )
}
