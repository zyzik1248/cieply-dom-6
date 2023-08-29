interface Matrial{
    id: string
    preview: string
    name: string
    asset: string
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

interface MaterialsQuery{
    data: {
        material: MaterialQuery[]
    }
}