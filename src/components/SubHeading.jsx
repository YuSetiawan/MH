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
      <div className="mx-4">
        <div id="subhead" className="border border-secondary rounded">
          <p className="m-3 text-light">{children}</p>
        </div>
      </div>
    </>
  );
};

export default SubHeading;
