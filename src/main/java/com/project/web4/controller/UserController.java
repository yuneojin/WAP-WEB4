package com.project.web4.controller;

import com.project.web4.domain.User1;
import com.project.web4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {
    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/sign-up")
    public String signUp(){
        return "signUp";
    }

    @Autowired
    UserService userService;

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    public String signUp(User1 user1){
        userService.join(user1);
        return "index";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(User1 user1, Model model){
        System.out.println("user1 = " + user1);
        User1 user1Info = userService.loginUser(user1.getId(), user1.getPassword());
        //사용자 정보 불일치
        if (user1Info == null) {
            model.addAttribute("loginMessage", "아이디 혹은 비밀번호가 일치하지 않습니다!");
            return "login";
        }
        model.addAttribute("name", user1Info.getName());
        return "main";
    }
}
