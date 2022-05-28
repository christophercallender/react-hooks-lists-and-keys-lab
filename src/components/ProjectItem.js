import React from 'react';

function ProjectItem({ name, about, technologies }) {
   const techMap = technologies.map((technology) => (
      <span key={technology}>{technology}</span>
   ));
   return (
      <div className="project-item">
         <h3>{name}</h3>
         <p>{about}</p>
         <div className="technologies">{techMap}</div>
      </div>
   );
}

//or
// function ProjectItem({ name, about, technologies }) {
//    return (
//       <div className="project-item">
//          <h3>{name}</h3>
//          <p>{about}</p>
//          <div className="technologies">
//             {technologies.map((technology) => (
//                <span key={technology}>{technology}</span>
//             ))}
//          </div>
//       </div>
//    );
// }

export default ProjectItem;
