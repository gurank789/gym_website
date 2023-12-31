import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import styles from './TrainingProgram.module.css'

export default function TrainingProgram() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productData = [
    {
      id: 1,
      image: "https://tse1.mm.bing.net/th?id=OIP.vI_yCkSaAhgzRnnaalDp5wHaEo&pid=Api&P=0&h=180",
      heading: "Bodybuilding",
    },
    {
      id: 2,
      image: "https://tse4.mm.bing.net/th?id=OIP.O5hq_VZ9oRAHSKdmBkPkrgHaE8&pid=Api&P=0&h=180",
      heading: "Yoga",
    },
    {
      id: 3,
      image: "https://c4.wallpaperflare.com/wallpaper/1017/46/488/group-fitness-class-located-step-wallpaper-preview.jpg",
      heading: "Aerobic",
    },
    {
      id: 4,
      image: "https://c1.wallpaperflare.com/preview/327/472/938/stretch-exercise-leggings-woman.jpg",
      heading: "Flexiblity",
    },
    {
      id: 5,
      image: "https://tse2.mm.bing.net/th?id=OIP.9UDdRx-SWut2IO548H7UdAHaE5&pid=Api&P=0&h=180",
      heading: "Zumba Dance",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      heading: "Weight Liffting",
    }
  ];

  const data = productData.map((item,index) => (
    <Card key={item.id} index={index} image={item.image} heading={item.heading} />
  ));

  return (
    <div id="Program">
      <h1 className={styles.cardsHeading}>Training Program</h1>
      <Carousel  showDots={true} responsive={responsive}>{data}</Carousel>
    </div>
  );
}
