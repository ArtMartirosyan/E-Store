import React from "react";
import { Image, Card } from "antd";
import { useState } from "react";

const About = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Image
          src="https://www.redpoints.com/wp-content/uploads/2019/01/fashion.png"
          width={900}
        />
        <Card
          hoverable
          style={{
            width: 700,
            marginTop: "5px",
            fontSize: "18px",
            fontFamily: "monospace",
            backgroundColor: "pink",
          }}
        >
          <Card.Meta
            title="For over 40 years, we are built on "
            description="the vision of uncompromising quality and timeless design.After all, it was the enduring quality of 75-year-old leather campaign gear that first inspired our founder, Marley Hodgson. This, however, was only the beginning of the story. Since that day, Ghurka’s underlying character has deepened, drawing not just from the gear itself but from who it belonged to: a commander from the Gurkha fighting force.

This legendary brigade is known throughout the world for their bravery, loyalty, and cheerful indifference to all difficulty. It is their spirit of quiet confidence and adventure that lies at the heart of Ghurka"
          />
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgb(54, 77, 121)",
          marginTop: "80px",
        }}
      >
        <Card
          hoverable
          style={{
            width: 600,
            marginTop: "5px",
            fontSize: "18px",
            fontFamily: "monospace",
            backgroundColor: "pink",
          }}
        >
          <Card.Meta
            title="We are more than happy as"
            description="Today, the standards of quality are just as uncompromising as when the brand was founded. Every piece is created by artisans who have dedicated their lives to learning the art of making beautiful and practical leather goods. Through unparalleled craftsmanship, Ghurka is made to last."
          />
        </Card>
        <Image
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          width={800}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgb(54, 77, 121)",
          paddingTop: "80px",
        }}
      >
        <Image
          src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/Best_Baby_Clothes_1296x728.png?w=1155&h=1528"
          width={1000}
        />
        <Card
          hoverable
          style={{
            width: 400,
            marginTop: "5px",
            fontSize: "18px",
            fontFamily: "monospace",
            backgroundColor: "pink",
          }}
        >
          <Card.Meta
            title="Around the world, you’ll find more skilled "
            description=" artisans that we are proud to call our production partners. In the hills of Florence, Italy, a number of women’s handbags and select silhouettes are woven together with our Ghurka heritage look. And in Ubrique, Spain, a town with hundreds of years of leather craftsmanship as its legacy, our wallets and other small leather goods come to life."
          />
        </Card>
      </div>
    </div>
  );
};
export default About;
