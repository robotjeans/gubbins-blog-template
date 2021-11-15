const Article = {
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Featured Image",
      name: "featured_image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Published Date",
      name: "published_date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default Article;
