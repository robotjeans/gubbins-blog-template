const Author = {
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Biography",
      name: "biography",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Avatar",
      name: "avatar",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default Author;
