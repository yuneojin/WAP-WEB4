import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>아이디</label>
          <input type="text" className="form-control" placeholder="Id" />
        </div>

        <div className="mb-3">
          <label>비밀번호</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <label>비밀번호 확인</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password again"
          />
        </div>

        <div className="mb-3">
          <label>이름</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="mb-3">
          <label>이메일</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>인증번호</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter authentication number"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            회원가입
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-in">이미 계정이 있으신가요?</a>
        </p>
      </form>
    );
  }
}
