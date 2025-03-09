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
export interface LoginError {
    message: string
    statusText: string
    status: number
}

//User type
export interface Credentials {
    email: string;
    password: string;
}
