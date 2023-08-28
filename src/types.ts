interface Matrial{
    id: string
    preview: string
    name: string
    asset: string
}

export interface MaterialQuery{
    name: string
    id: string
    assets: {
        id:string
    }
}

interface MaterialsQuery{
    data: {
        material: MaterialQuery[]
    }
}