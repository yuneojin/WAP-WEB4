import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "re-password") {
      setRePassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className=" auth-wrapper">
      <form onSubmit={onSubmit} className="box-shape auth-inner">
        <h3>WEB4</h3>
        <div className="mb-3 ">
          <input
            className="write-btn size-full pd-3"
            name="id"
            type="text"
            placeholder="아이디"
            required
            value={id}
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

        <div className="mb-3">
          <input
            className="write-btn size-full pd-3"
            name="re-password"
            type="password"
            placeholder="비밀번호 확인"
            required
            value={rePassword}
            onChange={onChange}
          />
        </div>

        <div className="mb-3 ">
          <input
            className="write-btn size-full pd-3"
            name="name"
            type="text"
            placeholder="이름"
            required
            value={name}
            onChange={onChange}
          />
        </div>

        <div className="mb-3 ">
          <input
            className="write-btn size-full pd-3"
            name="email"
            type="email"
            placeholder="이메일"
            required
            value={email}
            onChange={onChange}
          />
        </div>

        <div>
          <button type="submit" className="btn size-full pd-3">
            로그인
          </button>
        </div>
        <p className="forgot-password">
          <Link to="/sign-in"> 이미 회원이 있으신가요?</Link>
        </p>
      </form>
    </form>
  );
};
export default SignUp;
