export interface SearchPage{
    name: string
    slug: string
    description: string
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
        text?: string
    }
    imagePreview: {
        id:string
        url:string
    }
    image: {
        id:string
        url:string
    }
}