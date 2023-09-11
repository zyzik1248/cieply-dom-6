export interface IndexQuery {
  id: string;
  name: string;
  description: string;
  slug: string;
  content: string;
  longSlug: string;
}

export interface MaterialQuery {
  name: string;
  id: string;
  asset: {
    id: string;
    url: string;
    preview: string;
  };
}

export interface NewsQuery {
  id: string;
  title: string;
  date: string;
  postedDate: string;
  slug: string;
  description: {
    html: string;
    text: string;
  };
  content: {
    html: string;
    text: string;
  };
  imagePreview: {
    id: string;
    url: string;
  };
}

export interface MaterialPostQuery {
  name: string;
  id: string;
  count: string;
  email: string;
}

export interface ArticleQuery {
  id: string;
  attributes: {
    title: string;
    date: string;
    datePosted: string;
    slug: string;
    content: string;
    description: string;
    cover: {
      data: {
        id: string;
        attributes: {
          url: string;
        };
      };
    };
  };
}
