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
    <section className="grid grid-cols-3 grid-rows-1 gap-100 grow container flex justify-between items-center gap-10 w-screen  " style={{ padding: 50    }}>

        <div className="grid col-start-1 col-span-2">
            <h2 style={{ color: "blueviolet", fontSize: 20 }}>
      Embark on a Journey of Flavor, Mindfulness, and Sustainability
      </h2>
      <p style={{}}>
        
      Join the experience that harmonizes diverse tastes, inner serenity, and eco-conscious choices, guiding you towards a more flavorful, mindful, and sustainable way of living.
      Explore a World of Delectable Vegetarian Creations, Cultivate Inner Peace, and Embrace Ethical Living.
       
      </p>
    </div>

    <div className="flex-shrink-0">
           
                <div className="grid col-start-3 col-span-1">
        {images.map((imageObj, index) => (
            <div key={index} className="relative">
                <Image                    
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
                 

              style={{
                  //objectFit: "cover",
                  objectFit: "fill",
              //   width: '200%',
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
