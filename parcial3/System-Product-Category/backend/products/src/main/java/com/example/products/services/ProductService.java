package com.example.products.services;

import java.util.List;
import java.util.Optional;

import com.example.products.models.entities.Product;


public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product createProduct(Product product);
    Product updateProduct(Long id, Product product);
    void deleteProduct(Long id);

}
