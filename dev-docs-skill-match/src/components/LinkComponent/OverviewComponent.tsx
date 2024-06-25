import React from 'react';

interface OverviewRowProps {
    headingNumber: number;
    title: string;
    description: string;
}

const OverviewRow: React.FC<OverviewRowProps> = ({ headingNumber, title, description }) => {
    return (
        <div style={{ display: 'flex', gap: '10px',  marginBottom: '10px', borderRadius: "5px", }}>
            <div style={{
                minWidth: '30px',
                minHeight: '30px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                color: 'white',
                backgroundColor: 'green',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px',
                background: '#367167',
                fontWeight: '10px',
                padding: "0px",
                fontSize: "12px",
                lineHeight:"1"
            }}>
                {headingNumber}
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <div style={{ fontWeight: 'bold', fontSize: '15px', width:"100px",                lineHeight:"1", display:"flex", justifyContent:"start", alignItems: "center" }}>{title}</div>
                <div style={{lineHeight:'1',display:"flex", justifyContent:"start", alignItems: "center" }}>{description}</div>
            </div>
        </div>
    );
};

interface OverviewComponentProps {
    rows: OverviewRowProps[];
}

const OverviewComponent: React.FC<OverviewComponentProps> = ({ rows }) => {
    return (
        <div className='table-radius' style={{display:"flex", flexDirection: "column",gap:"13px", justifyItems: "center", padding: '20px', borderRadius: '10px', marginBottom: '20px'}}>
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
