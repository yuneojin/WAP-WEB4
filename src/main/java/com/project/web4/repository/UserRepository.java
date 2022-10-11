package com.project.web4.repository;

import com.project.web4.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    User findById(String id);
    User findByPassword(String password);
    User findByName(String name);
    User findByEmail(String email);
    User findByRole(String role);

    @Query("select u from User u where u.id=:id and u.password=:password")
    User selectUserInfo(@Param("id")String id, @Param("password")String password);
}
