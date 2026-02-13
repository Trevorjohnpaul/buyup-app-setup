import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    
    <Container className =" bg-white">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        architecto expedita amet tenetur eveniet molestias minima corrupti a
        laudantium, veniam harum repudiandae laboriosam odit voluptates nobis
        voluptatibus ab minus. Eos nihil repellendus eaque error excepturi,
        animi asperiores aliquid, ab odit blanditiis, voluptates doloribus.
        Tempora rem deserunt aliquam iure earum ipsum?
      </p>
      <Button size={"lg"}>Buy Up</Button>
    </Container>
  );
};

export default Home;
