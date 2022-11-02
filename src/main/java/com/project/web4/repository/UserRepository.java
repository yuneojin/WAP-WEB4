package com.project.web4.repository;

import com.project.web4.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findById(String id);
    User findByPassword(String password);
    User findByRole(String role);
    User findByEmail(String email);

    @Query("select u from User u where u.id=:id and u.password=:password")
    User selectUserInfo(@Param("id")String id, @Param("password")String password);
    //DB에서 id pw 가져옴 selectUInfo에는 DB의 id pw가 매핑되어 유저 타입 select변수에 들어감
}
