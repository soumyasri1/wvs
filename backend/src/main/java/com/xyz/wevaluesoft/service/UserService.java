package com.xyz.wevaluesoft.service;

import com.xyz.wevaluesoft.model.User;
import com.xyz.wevaluesoft.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        // Implement password hashing before saving to the database
        // For simplicity, assuming you have a method for password hashing in a utility class
        // e.g., user.setPassword(PasswordUtils.hash(user.getPassword()));
        
        return userRepository.save(user);
    }

    public User getUserById(String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElse(null);
    }

    public User updateUser(String id, User user) {
        // Check if the user with the given id exists
        Optional<User> existingUser = userRepository.findById(id);

        if (existingUser.isPresent()) {
            // Set the existing user's id to the new user
            user.setId(existingUser.get().getId());

            // Implement password hashing before saving to the database
            // For simplicity, assuming you have a method for password hashing in a utility class
            // e.g., user.setPassword(PasswordUtils.hash(user.getPassword()));
            
            return userRepository.save(user);
        } else {
            // Handle the case where the user with the given id does not exist
            return null;
        }
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
