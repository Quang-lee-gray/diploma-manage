import React from "react";
import { Button, notification, Space } from "antd";
const ToastComponent = (msg, des, types) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: msg,
      description: des,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon(types)}>Error</Button>
      </Space>
    </>
  );
};
export default ToastComponent;
