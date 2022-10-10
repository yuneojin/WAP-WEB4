import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "id") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className=" auth-wrapper">
      <form onSubmit={onSubmit} className="box-shape auth-inner">
        <h2>WEB4</h2>
        <div className="mb-3 ">
          <input
            className="write-btn size-full pd-3"
            name="id"
            type="text"
            placeholder="아이디"
            required
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="write-btn size-full pd-3"
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange}
          />
        </div>

        <div>
          <button type="submit" className="btn size-full pd-3">
            로그인
          </button>
        </div>
        <p className="forgot-password">
          <Link to="/sign-up"> 회원가입</Link>
        </p>
        <p className="forgot-password">
          <a href="/sign-up">비밀번호를 잊으셨나요?</a>
        </p>
      </form>
    </form>
  );
};
export default SignIn;
