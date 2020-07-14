import React from 'react';

import logoOrokonui from '../assets/img/communityGroups/orokonui.png';

const CommunityGroup = ({ name, shortName, logo, region, databaseLink, websiteLink, children }) => (
  <div className="CommunityGroup col-md-6 col-lg-4">
    <div className="card">
      {logo && <img src={logo} alt={`Logo of ${name}`} className="card-img-top" />}
      <div className="card-body">
        <h3 className="card-title h4">{name}</h3>
        <h4 className="card-subtitle mb-2 text-muted h5">{region}</h4>
        <div className="card-text">{children}</div>
        <div className="m-n2">
          <a href={databaseLink} className="btn btn-primary m-2">
            View kākā
          </a>
          <a href={websiteLink} className="btn btn-light m-2">
            {shortName}'s website
          </a>
        </div>
      </div>
    </div>
  </div>
);

const CommunityGroups = () => (
  <div className="CommunityGroups">
    <div className="row">
      <CommunityGroup
        name="Orokonui Ecosanctuary"
        shortName="Orokonui"
        logo={logoOrokonui}
        region="Lower South Island"
        databaseLink="https://kakadatabase.orokonui.nz"
        websiteLink="http://orokonui.nz"
      >
        <p>
          Orokonui Ecosanctuary, situated near Dunedin, features 307 hectares of forest protected by
          a predator fence.
        </p>
        <p>
          It is a project of the charitable Otago Natural History Trust, who partner with the
          Department of Conservation, University of Otago, Ministry of Education and Kāti Huirapa
          Rūnaka ki Puketeraki.
        </p>
      </CommunityGroup>
    </div>
  </div>
);

export default CommunityGroups;
