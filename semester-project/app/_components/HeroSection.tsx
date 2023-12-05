import Image, { StaticImageData } from "next/image";

import heroImage1 from "@/public/hero/how-to-become-an-online-business-manager.jpg";


type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: "5% 5% 5% 5%" },

];

const HeroSection = () => (
  <section className="container flex justify-between items-center gap-10 w-screen">
    <div className="flex flex-col justify-start gap-5 max-w-xl">
      <h2 style={{color:"blueviolet"}}>
      Embark on a Journey of Flavor, Mindfulness, and Sustainability
      </h2>
      <p style={{}}>
        
      Join the experience that harmonizes diverse tastes, inner serenity, and eco-conscious choices, guiding you towards a more flavorful, mindful, and sustainable way of living.
      Explore a World of Delectable Vegetarian Creations, Cultivate Inner Peace, and Embrace Ethical Living.
       
      </p>
    </div>
    <div className="flex-shrink-0">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 grow">
        {images.map((imageObj, index) => (
          <div key={index} className="relative h-52 w-52">
            <Image
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
                borderRadius: `${imageObj.borderRadius}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
