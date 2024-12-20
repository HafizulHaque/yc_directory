import { defineQuery } from "next-sanity"

export const STARTUP_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_createdAt, desc) {
  _id,
  _createdAt,
  title,
  slug,
  description,
  category,
  image,
  author -> {
    _id, name, image
  },
  views
}`)