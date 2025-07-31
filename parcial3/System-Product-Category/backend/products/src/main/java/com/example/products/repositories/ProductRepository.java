package com.example.products.repositories;

import com.example.products.models.entities.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository  extends CrudRepository<Product, Long> {
    
    // Additional query methods can be defined here if needed
    // For example, find by name or price range
    // List<Product> findByName(String name);
    // List<Product> findByPriceBetween(Double minPrice, Double maxPrice);  
    
}
