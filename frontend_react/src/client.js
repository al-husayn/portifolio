import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "7xggontm",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "sk97Gj9G43SPlqqSHe4upakl9200OQu292yIApD9yufn4TKQFgZRCcD80a0qW72sQeUKf0Ohi2Z5e0h4qAQWQJTYZnZLcmWUO2q0t5PlP1vMmr10lRKncov4DEYgv5ej46gKaSfBxALQSwOd9fVFxhYvAZe2CPJOnQRoavsgzvy3IetTLmX3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
