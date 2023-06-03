import React from "react";
import { getRandomName, getRandomColor } from "../utils/utils";

function MemberList({ members }) {
  // Check the received members
  console.log("Value of members prop:", members);

  return (
    <div className="members-list">
      {members.length > 0 &&
        members.map((member) => (
          <div
            key={member.id}
            className="member"
            style={{ color: member?.clientData?.color }}
          >
            {member?.clientData?.name}
          </div>
        ))}
    </div>
  );
}

export default MemberList;
