import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "42dlbyyj",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25"
  });
  