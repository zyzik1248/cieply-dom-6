export interface IndexQuery{
    name: string
    description: string
    slug: string
    content: string
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

export interface MaterialPostQuery{
    name: string
    id: string
    count: string
    email: string
}