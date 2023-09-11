export interface IndexQuery {
  id: string;
  name: string;
  description: string;
  slug: string;
  content: string;
  longSlug: string;
}

export interface MaterialQuery {
  id: string;
  attributes: {
    name: string
    asset: {
      data: {
        id: string
        attributes: {
          url: string
        }
      }
    }
    preview: {
      data: {
        id: string
        attributes: {
          url: string
        }
      }
    }
  }
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
