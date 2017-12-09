/**
*
* PageSection
*
*/

import React from "react";

function PageSection(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        {props.children}
      </div>

      <div className="h-divider" />
    </div>

  );
}

export default PageSection;
