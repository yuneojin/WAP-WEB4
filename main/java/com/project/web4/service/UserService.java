package com.project.web4.service;

import com.project.web4.domain.User1;
import com.project.web4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void join(User1 user1){
        user1.setRole("USER");
        userRepository.save(user1);
    }

    public User1 loginUser(String id, String pw){
        User1 user1Info = userRepository.selectUserInfo(id,pw);
        return user1Info;
    }
}
