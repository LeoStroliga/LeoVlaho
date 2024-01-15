import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

//import {
//    CommonNode,
//    documentToReactComponents,
//} from "@contentful/rich-text-react-renderer";
//import { BLOCKS } from "@contentful/rich-text-types";
//
//import hljs from "highlight.js/lib/core";
//import javascript from "highlight.js/lib/languages/javascript";
//import python from "highlight.js/lib/languages/python";
//import "highlight.js/styles/github-dark.css";
//import { RichTextLinksFragment } from "@/marketing-web/app/gql/graphql";
import { HeroImage } from "../page";
import contentfulService from "@/lib/contentfulClient";
console.log("page");

type Params = {
    productId: string;
};


const ProductPage = async ({ params }: { params: Params }) => {
    
    const product = await contentfulService.getProductById(params.productId);
    
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <main className="container flex flex-col items-center gap-10 mb-10">
            <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
                {product?.name}
            </h1>
             <div className="grid grid-cols-2 gap-4 w-3/4 relative">
              { /*  <Badge className="absolute top-4 left-4 z-40" variant="entertainment">
                    {product.currencyCode && currencySymbolMapping[product.currencyCode]}
                    {product.price}
                </Badge>*/}
                <HeroImage
                    image={product?.bannerImage}
                    productName={product.name}
                    className="w-full h-[400px]"
                />
                   <div className="flex flex-col gap-4 justify-between">
                      <div className="grid grid-cols-2 gap-2">
                    
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2">{product.description}</div>
                        <Button variant="emph">+ Add to cart </Button>
                    </div>
                </div>
            </div>
            {/* <div    // line 57 <Button variant="emph">+ Add to cart </Button> line 57
        className="mt-10 prose prose-h1:text-brand-purple-800"
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(product?.richTextDescription?.json),
        }}
         78           <div className="flex flex-col gap-4 justify-between">
        line 78 <div className="grid grid-cols-2 gap-2">
        line 78             {product.images?.map((image) => (
        line 78                 <div key={image} className="relative w-full h-32">
        line 78                     <Image
        line 78                         fill
        line 78                         style={{ objectFit: "cover" }}
        line 78                         className="rounded-md"
        line 78                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        line 78                         src={image as string}
        line 78                         alt={product.name as string}
        line 78                     />
        line 78                 </div>
         78                        </div>
         78                         ))
         78                     }
         78                    </div>
      /> */}
            {/* 48 {product.images?.map((image) => (
                     <div key={image} className="relative w-full h-32">
                         <Image
                             fill
                             style={{ objectFit: "cover" }}
                             className="rounded-md"
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             src={image as string}
                             alt={product.name as string}
                         />
                     </div>
                 ))}
            */}
            
        </main>
    );
};

export default ProductPage;