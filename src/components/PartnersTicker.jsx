import React from 'react';
import './PartnersTicker.css';
import asvaPreparedLogo from '../../assets/ASVA_prepared.png';
import besaPreparedLogo from '../../assets/BESA_prepared.png';
import aesaPreparedLogo from '../../assets/AESA_prepared_brand.png';

const TICKER_ITEMS = [
    { type: 'label', text: 'Partnering With' },
    { type: 'name', text: 'COMSSA' },
    {
        type: 'name-with-logo',
        text: 'BESA',
        src: besaPreparedLogo,
        alt: 'BESA logo',
        logoClass: 'ticker-logo-besa',
    },
    { type: 'logo', src: asvaPreparedLogo, alt: 'ASVA logo' },
    {
        type: 'name-with-logo',
        text: 'AESA',
        src: aesaPreparedLogo,
        alt: 'AESA logo',
        logoClass: 'ticker-logo-aesa',
    },
];

const PartnersTicker = () => {
    // Two identical copies: translateX(-50%) resets invisibly to the start
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="ticker-wrapper" aria-label="Partners ticker">
            <div className="ticker-track">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.type === 'label' && (
                            <span className="ticker-label">{item.text}</span>
                        )}
                        {item.type === 'name' && (
                            <span className="ticker-name">{item.text}</span>
                        )}
                        {item.type === 'logo' && (
                            <span className="ticker-logo-item">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="ticker-logo ticker-logo-asva"
                                    loading="lazy"
                                />
                            </span>
                        )}
                        {item.type === 'name-with-logo' && (
                            <span className="ticker-name ticker-name-with-logo">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className={`ticker-logo ${item.logoClass || ''}`.trim()}
                                    loading="lazy"
                                />
                                <span>{item.text}</span>
                            </span>
                        )}
                        <span className="ticker-dot" aria-hidden="true">•</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default PartnersTicker;
