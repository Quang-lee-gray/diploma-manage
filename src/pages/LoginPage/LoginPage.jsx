import { React, useState } from "react";
import "./LoginPage.scss";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import ToastComponent from "../../components/ToastComponent/ToastComponent.jsx";
import { loginApi } from "../../services/axios.js";
const LoginComponent = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  //Lấy thông tin từ giao diện
  const handleRenderDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  //Lấy dữ liệu
  const handleLogin = async () => {
    try {
      let res = await loginApi(username, password);
      console.log(res.data.user); // Bạn có thể hiển thị thông báo cho người dùng tại đây
    } catch (error) {
      console.error("Login failed:", error);
      // Hiển thị thông báo lỗi với ToastComponent
    }
  };
  return (
    <>
      <div className='mt-5 container pt-3 pb-3'>
        <p className='title'>
          CỔNG ĐĂNG NHẬP HỆ THỐNG QUẢN LÝ VĂN BẰNG <br />
          <span>TRƯỜNG ĐẠI HỌC HỒNG ĐỨC</span>
        </p>
        <div className='mt-5 container-fluid h-custom pb-2'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
                className='img-fluid'
                alt='image'
              />
            </div>
            <div className='mt-5 col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
              <form className='form-login'>
                <div data-mdb-input-init className='form-outline mb-4'>
                  <label htmlFor='username' className='mb-2'>
                    Tên đăng nhập
                  </label>
                  <input
                    type='text'
                    value={username}
                    onChange={handleRenderDataChange}
                    name='username'
                    className='form-control form-control-lg'
                    placeholder='Tên đăng nhập'
                  />
                </div>

                <div data-mdb-input-init className='form-outline mb-3'>
                  <label htmlFor='password' className='mb-2'>
                    Mật khẩu
                  </label>
                  <input
                    type={isShowPassword ? "text" : "password"}
                    name='password'
                    value={password}
                    onChange={handleRenderDataChange}
                    className='form-control form-control-lg password'
                    placeholder='Mật khẩu'
                  />
                  {isShowPassword === true ? (
                    <EyeOutlined className='eye' onClick={handleShowPassword} />
                  ) : (
                    <EyeInvisibleOutlined
                      className='hide-eye'
                      onClick={handleShowPassword}
                    />
                  )}
                </div>

                <div className='text-center text-lg-start mt-4 pt-2'>
                  <button
                    type='button'
                    className='btn'
                    onClick={() => handleLogin()}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
