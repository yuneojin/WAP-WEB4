package com.project.web4.controller;

import com.project.web4.domain.User;
import com.project.web4.service.UserAuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

// Swagger >> http://localhost:8080/swagger-ui/index.html#/

@Api(tags = "학식 QR 결제 API")
@RestController
public class UserAuthController {

    @Autowired
    UserAuthService userAuthService;

    @ApiOperation(value = "회원가입 정보 DB에 저장" ,notes = "DB에 회원 정보 추가 성공 / REACT와 연동 필요함")
    @ResponseBody
    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    public User signUp(@RequestParam("id") String id,
                         @RequestParam("password") String password,
                         @RequestParam("re_password") String re_password,
                         @RequestParam("name")String name,
                         @RequestParam("email")String email){
        //전달 받은 데이터를 json형태로 전달 받음.. 저장된 데이터는 db에 넘김
        User user = new User();

        user.setId(id);
        user.setPassword(password);
        user.setName(name);
        user.setEmail(email);

        userAuthService.join(user);

        return user;
    }

    @ApiOperation(value = "로그인 API" ,notes = "사용자 입력 데이터, DB대조 성공 / REACT와 연동 필요함")
    @ResponseBody
    @RequestMapping(value = "/sign-in", method = RequestMethod.POST)
    public User login(User user, Model model){ //<<Model은 html의 특정 칸에 데이터 넣어주는 역할
        System.out.println("user = " + user);

        User userInfoTry = userAuthService.loginUser(user.getId(), user.getPassword());
        //사용자 정보 불일치
        //만약 db에 두 값이 일치하는 내용이 없으면
        if (userInfoTry == null) {
            model.addAttribute("loginMessage", "아이디 혹은 비밀번호가 일치하지 않습니다!");
            System.out.println("login failed");
            return userInfoTry;
        }
        //로그인 성공시
        model.addAttribute("name", userInfoTry.getName());
        System.out.println(userInfoTry.getName() + " login success");
        return userInfoTry;
    }
}
