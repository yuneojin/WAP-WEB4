package com.project.web4.service;

import com.project.web4.domain.User;
import com.project.web4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuthService {

    @Autowired
    UserRepository userRepository;

    public void join(User user){
        user.setRole("USER");
        userRepository.save(user);
    }

    public User loginUser(String id, String pw){
        User userInfo = userRepository.selectUserInfo(id, pw);
        return userInfo;
    }
}
