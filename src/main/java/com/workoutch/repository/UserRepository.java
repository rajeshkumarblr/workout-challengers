package com.workoutch.repository;

import com.workoutch.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {


    User findByEmailEquals(String email);

}
