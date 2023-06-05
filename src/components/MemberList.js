import React from "react";
import { getRandomName, getRandomColor } from "../utils/utils";
import "../styles/MemberList.css";

/*Komponent prikazuje listu članova.Komponenta prima members prop koji sadrži
informacije o članovima, a zatim prikazuje imena članova i dodjeljuje im boju
teksta prema clientData objektu člana.*/

function MemberList({ members }) {
  // Check the received members
  console.log("Value of members prop:", members);

  /* Definirane varijable randomName i randomColor da izbjegnem dosadna upozorenja.
  Varijable se inicijaliziraju s vrijednostima koje se dobiju pozivanjem funkcija 
  getRandomName i getRandomColor */

  const randomName = getRandomName();
  console.log("Random Name:", randomName);
  const randomColor = getRandomColor();
  console.log("Random Color:", randomColor);
  
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
