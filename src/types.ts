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