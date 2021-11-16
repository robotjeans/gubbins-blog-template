export const articlesQuery = `*\[_type == "article"] | order(date desc, _createdAt desc) {
  _id,
  title,
  excerpt,
  featured,
  slug,
  author -> {
    name,
    avatar {
      asset ->
    }
  },
  featured_image {
    asset -> {
      _id,
      url
    }
  },
  category,
  published_date,
  content,
}`;

export const articleQuery = `*\[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  featured,
  slug,
  author -> {
    name,
    avatar {
      asset ->
    }
  },
  featured_image {
    asset -> {
      _id,
      url
    }
  },
  category,
  published_date,
  content,
}`;
