export interface IndexQuery {
  id: string
  attributes :{
    name: string
    slug: string
    description: string
    longSlug: string
    content: string
  }
}

export interface IndexAtributtes {
  name: string
  slug: string
  description: string
  longSlug: string
  content: string
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
