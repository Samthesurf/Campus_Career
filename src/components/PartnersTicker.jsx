import React from 'react';
import './PartnersTicker.css';

const TICKER_ITEMS = [
    'Partnering with',
    'COMSSA',
    'BESA',
    'ASVA',
    'AESA',
];

const PartnersTicker = () => {
    // Two identical copies: translateX(-50%) resets invisibly to the start
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="ticker-wrapper" aria-label="Partners ticker">
            <div className="ticker-track">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <span
                            className={
                                item === 'Partnering with'
                                    ? 'ticker-label'
                                    : 'ticker-name'
                            }
                        >
                            {item}
                        </span>
                        <span className="ticker-dot" aria-hidden="true">•</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default PartnersTicker;
