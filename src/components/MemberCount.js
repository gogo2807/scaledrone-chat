import React from 'react';
import "../styles/MemberCount.css";

/*ova komponenta prikazuje broj članova u sobi*/

function MemberCount({ count }) {
  return <div className="members-count">{count} korisnika u sobi:</div>;
}

export default MemberCount;
