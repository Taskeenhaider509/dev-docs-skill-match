import React from "react";

interface OverviewRowProps {
  headingNumber: number;
  title: string;
  description: string;
  rows:OverviewRowProps[];
}

const OverviewRow: React.FC<OverviewRowProps> = ({
  headingNumber,
  title,
  description,
  rows
}) => {
  return (
    <div className="table-row-component">
      <div className="table-row-left-container">
        <div className="table-row-heading-number">{headingNumber}</div>
        {rows.length === headingNumber ?"":<div className="line"></div>}
      </div>
      <div className="table-row-content">
        <div className="table-row-content-title">{title}</div>
        <div className="table-row-content-description">{description}</div>
      </div>
    </div>
  );
};

interface OverviewComponentProps {
  rows: OverviewRowProps[];
}

const OverviewComponent: React.FC<OverviewComponentProps> = ({ rows }) => {
  return (
    <div className="table-radius">
      {rows.map((row, index) => (
        <OverviewRow
          key={index}
          headingNumber={row.headingNumber}
          title={row.title}
          description={row.description}
          rows={rows}
        />
      ))}
    </div>
  );
};

export default OverviewComponent;
