import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Categories.css";
import bedroom from "../../../img/other/bedroom.webp";
import kitchen from "../../../img/other/kitchen.avif";
import living from "../../../img/other/living.jpeg";

const Categories = () => {
  const navigate = useNavigate()
  const myData = [
    {
      image: bedroom,
      title: "Bedroom Collection",
      alt: "category1",
    },
    {
      image: kitchen,
      title: "Kitchen Collection",
      alt: "category2",
    },
    {
      image: living,
      title: "Livingroom Collection",
      alt: "category3",
    },
  ];
  const clickhandler = (value) => {
    navigate('/shop', {
      state: {
        category: value
      }
    })
  }
  return (
    <section className="categories">
      {myData.map((card, index) => (
        <div className="Card" key={index} onClick={() => clickhandler(card.title)}>
          <img className="CardImg" src={card.image} alt={card.alt} />
          <div className="Cardtext">
            <h3 >{card.title}</h3>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
