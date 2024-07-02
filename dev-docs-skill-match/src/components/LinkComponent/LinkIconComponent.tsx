import React, { CSSProperties, ReactNode, useState } from 'react';
interface LinkIconComponentProps {
    url: string;
    children?: ReactNode;
}

const LinkIconComponent: React.FC<LinkIconComponentProps> = ({ url, children }) => {
    // const [iconVisibility, setIconVisibility] = useState("d-none");
    const childStyle: CSSProperties = {
        marginLeft: '0px',
        color: 'black',
        fontSize: '18px',
    }
    return (
        <a
            className='anchorlink'
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', paddingTop: '0px', paddingBottom: '0px' }}
        >
            {/* <span className="linkhover" onMouseLeave={() => setIconVisibility("d-none")} onMouseEnter={() => setIconVisibility("d-unset")} style={childStyle}>{children}</span> */}
            <span className="linkhover"  style={childStyle}>{children}</span>
            <svg
                style={{
                    fontSize: '30px',
                    color: 'black',
                    marginLeft: '2px',
                    marginBottom: '10px',
                    transition: 'visibility 0.2s',
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_8272_35897)">
                    <path
                        d="M7.75568 4.13691H18.3623C18.5593 4.13674 18.7544 4.17542 18.9364 4.25073C19.1185 4.32604 19.2839 4.43651 19.4232 4.57581C19.5625 4.71511 19.6729 4.88051 19.7482 5.06254C19.8235 5.24458 19.8622 5.43968 19.8621 5.63668L19.8621 16.2433C19.8621 16.641 19.704 17.0225 19.4228 17.3038C19.1415 17.585 18.76 17.7431 18.3623 17.7431C17.9645 17.7431 17.583 17.585 17.3018 17.3038C17.0205 17.0225 16.8625 16.641 16.8625 16.2433V9.25777L6.69502 19.4253C6.41371 19.7066 6.03218 19.8646 5.63436 19.8646C5.23653 19.8646 4.855 19.7066 4.5737 19.4253C4.29239 19.144 4.13436 18.7624 4.13436 18.3646C4.13436 17.9668 4.29239 17.5852 4.5737 17.3039L14.7412 7.13645H7.75568C7.55857 7.13702 7.36329 7.09861 7.18107 7.02344C6.99886 6.94827 6.8333 6.83782 6.69392 6.69844C6.55454 6.55906 6.44409 6.3935 6.36892 6.21128C6.29375 6.02907 6.25534 5.83379 6.25591 5.63668C6.25574 5.43968 6.29442 5.24458 6.36973 5.06254C6.44504 4.88051 6.55551 4.71511 6.69481 4.57581C6.83411 4.43651 6.99951 4.32604 7.18154 4.25073C7.36358 4.17542 7.55868 4.13674 7.75568 4.13691Z"
                        fill="none"
                        className='link-icon-arrow'
                    />
                </g>
                <defs>
                    <clipPath id="clip0_8272_35897">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </a>
    );
};

export default LinkIconComponent;
