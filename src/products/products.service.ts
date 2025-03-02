import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid} from 'uuid';

@Injectable()
export class ProductsService {

  private products: CreateProductDto[] = [
    {
      productId: uuid(),
      product_name: 'Sabritas',
      price: 29,
      countSeal: 3,
      provider: uuid()
    },
    {
      productId: uuid(),
      product_name: 'Coca Cola 600ml',
      price: 25,
      countSeal: 3,
      provider: uuid()
    },
    {
      productId: uuid(),
      product_name: 'Pepsi 600ml',
      price: 24,
      countSeal: 2,
      provider: uuid() 
    }
  ];
  create(createProductDto: CreateProductDto) {
    createProductDto.productId = uuid();
    this.products.push(createProductDto);
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.filter((product) => product.productId === id)[0];
      if (!product) throw new NotFoundException();
    return product;
  }
  
  findByProvider(provider: string) {
    const productFound = this.products.filter((product) => product.provider === provider);
    if (productFound.length === 0) throw new NotFoundException();
    return productFound;
  }
  update(id: string, updateProductDto: UpdateProductDto) {
    let productToUpdate = this.findOne(id);
    productToUpdate = {
      ... productToUpdate,
      ... updateProductDto
    }
    if (productToUpdate) throw new NotFoundException();
    this.products = this.products.map((product) => {
      if (product.productId === id) {
        product = productToUpdate;
      }
      return product;
    })
    return productToUpdate;
  }

  remove(id: string) {
    const { productId } = this.findOne(id);
    this.products = this.products.filter((product) => product.productId !== id);
    return this.products;
  }
}
