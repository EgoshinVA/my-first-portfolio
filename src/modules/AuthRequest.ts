export interface AuthRequest<T>{
    resultCode: number
    messages: string[]
    data: T
}