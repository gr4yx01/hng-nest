import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    description: string

    @IsNumber()
    price: number
}