import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
});

// Contact writes must go through a server endpoint that owns the Sanity token.
client.create = async (contact) => {
  const response = await fetch("/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact");
  }

  return response.json();
};

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
