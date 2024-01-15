
import {
    TypeProductDetailItem,
    TypeProductListItem,
} from "@/app/(contentful)/types/TypeProduct";

const gqlAllProductsQuery = `query gqlAllProductsQuery{
  webshopCollection{
    items{
      id
      name
      bannerImage{
        url
      }
      categories
    }
  }
}`;
/*
const getAllCategoriesQuery = `query {
  categoryCollection {
    items {
      label
      }
    }
  }`;
  */
/*
interface CategoryCollectionResponse {
    categoryCollection: {
        items: TypeCategory[];
    };
}*/
/*
interface DetailProductResponse {
  product: {
    name: string;
    imagesCollection: {
      items: {
        url: string;
      }[];
    };
    richTextDescription: {
      json: any;
      links: any;
    };
    price: number;
    currencyCode: "CHF" | "EUR" | "GBP" | "USD";
    listed: boolean;
    categories: {
      label: TypeCategory["label"];
    }[];
    description: string;
    heroImage: {
      url: string;
    };
    categoriesCollection: {
      items: {
        label: TypeCategory["label"];
      }[];
    };
  };
}
*/

 //kasnije
const gqlProductByIdQuery = `query getProductById($productId: Int){
  webshopCollection(where:{id: $productId}){
    items{
      name
      description
      bannerImage{
        url
      }
      categories
    }
  }
}
`;

interface ProductCollectionResponse {
    webshopCollection: {
        items: ProductItem[];
    };
}

interface ProductItem {

    id: string;
    name: string;
    description: string;
    bannerImage: {
        url: string;
    };
    categories: string[];
};


interface DetailProductResponse {
    webshopCollection: {
        items: {
            name: string;
            bannerImage: {
                url: string;
            };
            //  richTextDescription: {
            //      json: any;
            //      links: any;
            //    };
            // price: number;
            //  currencyCode: "CHF" | "EUR" | "GBP" | "USD";
            // listed: boolean;
            //  categories: {
            //      label: TypeCategory["label"];
            //  }[];
            description: string;
            //  heroImage: {
            //      url: string;
            //  };
            //   categoriesCollection: {
            //      items: {
            //           label: TypeCategory["label"];
            //       }[];
            //  };
            categories: string[];
        };
    }
}

//const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const contentfulId = "xyjzgo2p4exd";
const contentfulKey = "y-OCLtGsLtufvyP7LD_lXPAx5HKi8OEAwWGS-68HaUs";
const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${contentfulId}/environments/master`;

const getAllProducts = async (): Promise<TypeProductListItem[]> => {
    try {
        console.log("prduct");
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                Authorization: `Bearer ${contentfulKey}`,
            },
            body: JSON.stringify({ query: gqlAllProductsQuery }),
        });

        // Get the response as JSON, cast as ProductCollectionResponse
        const body = (await response.json()) as {
            data: ProductCollectionResponse;
        };
       
        // Map the response to the format we want
        /* const products: TypeProductListItem[] =
           body.data.productCollection.items.map((item) => ({
             id: item.sys.id,
             name: item.name,
             description: item.description,
             heroImage: item.heroImage.url,
             categories: item.categoriesCollection.items.map((category) => category),
           }));*/

        const products: TypeProductListItem[] =
            body.data.webshopCollection.items.map((item) => ({
                id: item.id,
                name: item.name,
                description: item.description,
                bannerImage: item.bannerImage.url,
                categories: item.categories,
            }));

        return products;
    } catch (error) {
        console.log(error);


        return [];
    }
};
/*
const getAllCategories = async (): Promise<TypeCategory[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        Authorization: `Bearer ${contentfulKey}`,
      },
      body: JSON.stringify({ query: getAllCategoriesQuery }),
    });
    const body = (await response.json()) as {
      data: CategoryCollectionResponse;
    };

    const categories: TypeCategory[] = body.data.categoryCollection.items.map(
      (item) => ({
        label: item.label,
      })
    );

    return categories;
  } catch (error) {
    console.log(error);

    return [];
  }
};*/


const getProductById = async (
    id: string
    
): Promise<TypeProductDetailItem | null> => {
    var product: TypeProductDetailItem | null = null;
    try {

        const a = parseInt(id);
        console.log(a);
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                Authorization: `Bearer ${contentfulKey}`,
            },
            body: JSON.stringify({
                query: gqlProductByIdQuery,
                variables: { productId :a},
            }),
        });
        const body = (await response.json()) as {
            data: DetailProductResponse;
        };
    const responseProduct = body.data.webshopCollection.items;
        

      
        // const responseProduct = body.data.product;
     
        console.log(body.data == null);
      //  console.log(body.data.webshopCollection.items);
      //  console.log(body.data.webshopCollection.items.name);
       
       
        if (Array.isArray(responseProduct)) {
            // Iterate over each item in the array
            responseProduct.forEach((product: ProductItem) => {
                console.log(product.name);
            });

            // Assuming you want the name property of the first item in the array
            const firstName = responseProduct[0].name;
            console.log(firstName);
            product = {
                /*    id: id,
                    name: responseProduct.name,
                    images: responseProduct.imagesCollection.items.map((item) => item.url),
                    richTextDescription: responseProduct.richTextDescription,
                    price: responseProduct.price,
                    currencyCode: responseProduct.currencyCode,
                    listed: responseProduct.listed,
                    description: responseProduct.description,
                    categories: responseProduct.categoriesCollection.items.map((c) => c),
                      heroImage: responseProduct.heroImage.url,
              */
                id: id,
                name: responseProduct[0].name,
                bannerImage: responseProduct[0].bannerImage.url,

                //   richTextDescription: responseProduct.richTextDescription,
                //    price: responseProduct.price,

                //images: responseProduct.imagesCollection.items.map((item) => item.url),

                description: responseProduct[0].description,
                categories: responseProduct[0].categories.map((c: any) => c),

            };
        } else {
            console.error('responseProduct is not an array');
        }
      
        console.log(responseProduct.hasOwnProperty('name'));
       
     //  const product: TypeProductDetailItem = {
     //      /*    id: id,
     //          name: responseProduct.name,
     //          images: responseProduct.imagesCollection.items.map((item) => item.url),
     //          richTextDescription: responseProduct.richTextDescription,
     //          price: responseProduct.price,
     //          currencyCode: responseProduct.currencyCode,
     //          listed: responseProduct.listed,
     //          description: responseProduct.description,
     //          categories: responseProduct.categoriesCollection.items.map((c) => c),
     //            heroImage: responseProduct.heroImage.url,
     //    */
     //      id: id,
     //      name: responseProduct.name,
     //     bannerImage: responseProduct.bannerImage.url,
     //     
     //      //   richTextDescription: responseProduct.richTextDescription,
     //      //    price: responseProduct.price,
     //
     //      //images: responseProduct.imagesCollection.items.map((item) => item.url),
     //
     //      description: responseProduct.description,
     //      categories: responseProduct.categories.map((c)=>c),
     //
     //  };
        
        return product;
    } catch (error) {
        console.log(error);

        return null;
    }
};

const contentfulService = {
    getAllProducts,
    //getAllCategories,
    getProductById,
};

export default contentfulService;
