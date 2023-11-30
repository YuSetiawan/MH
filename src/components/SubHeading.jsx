import React from 'react';

const SubHeading = ({children}) => {
  return (
    <>
      <style jsx>
        {`
          #subhead {
            background-color: #2b2a4c;
          }
        `}
      </style>
      <div className="m-4">
        <div id="subhead" className="border border-secondary rounded">
          <h1 style={{fontSize: 17}} className="m-3 text-light">
            {children}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SubHeading;
