import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    async createProduct(product: Product) {
        const newProduct = await this.productModel.create(product)

        return newProduct.save()
    }

    async getAllProducts() {
        console.log('INSIDE SERVICE')
        const products = await this.productModel.find()

        return products
    }
}
