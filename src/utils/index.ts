import sanityClient from "@sanity/client";

const projectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const projectToken = process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN;

console.log(projectToken);

export const client = sanityClient({
  projectId: projectID,
  dataset: "production",
  apiVersion: "2021-08-31",
  token: projectToken, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
