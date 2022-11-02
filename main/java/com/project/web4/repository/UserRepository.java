package com.project.web4.repository;

import com.project.web4.domain.User1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User1, Long> {
    User1 findById(String id);
    User1 findByPassword(String password);
    User1 findByRole(String role);
    User1 findByEmail(String email);

    @Query("select u from User1 u where u.id=:id and u.password=:password")
    User1 selectUserInfo(@Param("id")String id, @Param("password")String password);
    //DB에서 id pw 가져옴 selectUInfo에는 DB의 id pw가 매핑되어 유저 타입 select변수에 들어감
}
