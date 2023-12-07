package com.xyz.wevaluesoft.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.xyz.wevaluesoft.model.User;

public interface UserRepository extends MongoRepository<User, String> {
}
