import { createClient } from '@sanity/client'

export default createClient ({
     apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
     dataset: process.env.REACT_APP_SANITY_DATASET,
     projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
     useCdn: false,
})