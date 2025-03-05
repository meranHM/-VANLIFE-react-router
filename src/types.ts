//Van type
export interface Van {
    description: string
    id: string
    imageUrl: string
    name: string
    price: number
    type: string
}


//Error type
export interface ErrorType {
    message?: string
    statusText?: string
    status?: number
}
