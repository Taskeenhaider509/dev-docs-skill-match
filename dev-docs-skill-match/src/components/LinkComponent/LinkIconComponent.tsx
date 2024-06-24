import React, { useState } from 'react';
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

interface LinkIconComponentProps {
    url: string;
    text: string;
}

const LinkIconComponent: React.FC<LinkIconComponentProps> = ({ url, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={{fontWeight: 'bold', color: '#356F66'}}>{text}</span>
            <LiaExternalLinkSquareAltSolid
                style={{
                    fontSize: '20px',
                    color: '#356F66',
                    marginLeft: '2px',
                    visibility: isHovered ? 'visible' : 'hidden',
                    transition: 'visibility 0.2s'
                }}
            />
        </a>
    );
};

export default LinkIconComponent;
