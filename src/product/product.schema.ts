import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true, versionKey: false })
export class Product {
    @Prop()
    name: string

    @Prop({ required: true })
    description: string
    
    @Prop({ required: true })
    price: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)