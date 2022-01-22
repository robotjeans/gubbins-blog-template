import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { config } from "@/lib/config";

export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);
