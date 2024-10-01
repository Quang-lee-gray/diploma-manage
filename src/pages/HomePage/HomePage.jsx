import React from "react";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className='search-container'>
      <div className='row header'>
        <div className='col-9'></div>
        <div class='col-3'>
          <a href='/login'>Đăng nhập</a>
        </div>
      </div>
      <div className='body mt-3'>
        <div className='row title mb-5'>
          <div className='col-3'>
            <img
              width={100}
              height={100}
              src='https://cdn-icons-png.flaticon.com/512/5227/5227551.png'
            />
          </div>
          <div className='col-6'>
            <p>
              TRƯỜNG ĐẠI HỌC HỒNG ĐỨC
              <br /> <span>CỔNG XÁC THỰC THÔNG TIN VĂN BẰNG</span>
            </p>
          </div>
        </div>
        <div className='search'>
          <div className='form-input p-4'>
            <form action='search'>
              <h5 className='mb-3'>Tra cứu văn bằng</h5>
              <div className='form-group mb-3'>
                <label htmlFor='cccd' className='mb-1'>
                  CMND/CCCD
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CMND/CCCD'
                  name='cccd'
                />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor='msv' className='mb-1'>
                  Mã sinh viên
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Mã sinh viên'
                  name='msv'
                />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor='svb' className='mb-1'>
                  Số hiệu văn bằng
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Số hiệu văn bằng'
                  name='svb'
                />
              </div>
              <button
                type='submit'
                className='btn'
                style={{ backgroundColor: "#3b5998", color: "#fff" }}>
                Tra cứu
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
