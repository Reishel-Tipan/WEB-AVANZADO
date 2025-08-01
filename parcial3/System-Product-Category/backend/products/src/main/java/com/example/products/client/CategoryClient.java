package com.example.products.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "categoria-service", url = "http://categoria-service:8082")
public interface CategoryClient {
    @GetMapping("/api/categories/{id}")
    CategoryDTO getCategory(@PathVariable("id") Long id);

    
}
