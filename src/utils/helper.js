import url from "./URL";

//
export function flattenProducts(data) {
  return data.map((item) => {
    const image = item.image.url;
    //for local server no cloudnry and remove plugin.js from server files
    // const image = `${url}${item.image.url}`;

    return { ...item, image };
  });
}

export function featuredProducts(data) {
  return data.filter((item) => item.featured === true);
}
