import React from 'react';

interface OverviewRowProps {
    headingNumber: number;
    title: string;
    description: string;
}

const OverviewRow: React.FC<OverviewRowProps> = ({ headingNumber, title, description }) => {
    return (
        <div className='table-row-component'>
            <div className='table-row-heading-number'>
                {headingNumber}
            </div>
            <div className='table-row-content'>
                <div className='table-row-content-title'>{title}</div>
                <div className='table-row-content-description'>{description}</div>
            </div>
        </div>
    );
};

interface OverviewComponentProps {
    rows: OverviewRowProps[];
}

const OverviewComponent: React.FC<OverviewComponentProps> = ({ rows }) => {
    return (
        <div className='table-radius'>
            {rows.map((row, index) => (
                <OverviewRow
                    key={index}
                    headingNumber={row.headingNumber}
                    title={row.title}
                    description={row.description}
                />
            ))}
        </div>
    );
};

export default OverviewComponent;
