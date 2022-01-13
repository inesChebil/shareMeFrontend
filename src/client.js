import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: process.env.React_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-01-12",
  useCdn: true,
  token: process.env.React_APP_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
