import Image, { StaticImageData } from "next/image";
import './HeroSection.css'

import heroImage1 from "@/public/hero/vege1.jpg";
import heroImage2 from "@/public/hero/vege2.jpg";
import heroImage4 from "@/public/hero/vege3.jpg";
import heroImage3 from "@/public/hero/vege4.jpg";

type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: "20% 0 0 0" },
  { image: heroImage2, borderRadius: "0 20% 0 0" },
  { image: heroImage3, borderRadius: "0 0 0 20%" },
  { image: heroImage4, borderRadius: "0 0 20% 0" },
];

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h1>Embark on a Journey of Flavor, Mindfulness, and Sustainability</h1>
      <p>
        Join the experience that harmonizes diverse tastes, inner serenity, and eco-conscious choices, 
        guiding you towards a more flavorful, mindful, and sustainable way of living.
        Explore a World of Delectable Vegetarian Creations, Cultivate Inner Peace, and Embrace Ethical Living.
      </p>
    </div>
    <div className="hero-images">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {images.map((imageObj, index) => (
          <div key={index} className="relative h-52 w-52">
            <Image
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              style={{
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