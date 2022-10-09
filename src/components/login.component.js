import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>WEB4</h3>

        <div className="mb-3">
          <label>아이디</label>
          <input type="text" className="form-control" placeholder="Enter id" />
        </div>

        <div className="mb-3">
          <label>비밀번호</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            로그인
          </button>
        </div>
        <p className="forgot-password text-right">
          <div>
            <a href="/sign-up">회원가입</a>
          </div>
          <div className="mt-2">
            <a href="#">비밀번호을 잊으셨나요?</a>
          </div>
        </p>
      </form>
    );
  }
}
