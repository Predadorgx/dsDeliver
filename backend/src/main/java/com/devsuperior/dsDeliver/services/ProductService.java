package com.devsuperior.dsDeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsDeliver.dto.ProductDTO;
import com.devsuperior.dsDeliver.entities.Product;
import com.devsuperior.dsDeliver.repositories.ProductRepository;


@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}
