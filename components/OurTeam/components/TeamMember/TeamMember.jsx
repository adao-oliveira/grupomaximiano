import React from "react";
import Image from 'next/image';

export default function TeamMember({ name, designation, image, sobre }) {
  return (
    <div className="hover-team">
      <div className="our-team">
        <Image src={image} alt={name} width="3456" height="5184"/>
        <div className="team-content">
          <h3 className="title">{name}</h3>
          <span className="post">{designation}</span>
        </div>
        <ul className="social">
          <li>
            <a href="#" className="fab fa-facebook"></a>
          </li>
          <li>
            <a href="#" className="fab fa-whatsapp"></a>
          </li>
          <li>
            <a href="#" className="fas fa-envelope"></a>
          </li>
        </ul>
        <div className="icon">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
      <div className="team-description">
        <p>{sobre}</p>
      </div>
      <hr className="my-0" />
    </div>
  );
}
