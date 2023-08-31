export interface IndexQuery{
    id: string
    name: string
    description: string
    slug: string
    content: string
    longSlug: string
}

export interface MaterialQuery{
    name: string
    id: string
    asset: {
        id:string
        url:string
        preview:string
    }
}

export interface NewsQuery{
    id: string
    title: string
    date: string
    postedDate: string
    slug: string
    description: {
        html: string
        text: string
    }
    content: {
        html: string
        text: string
    }
    imagePreview: {
        id:string
        url:string
    }
}