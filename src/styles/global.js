import { createGlobalStyle } from 'styled-components';

import 'antd/dist/antd.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F3F4F7;
    -webkit-font-smoothing: antialiased;
    font: 16px Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100%;
  }

  .ant-layout-sider-collapsed .ant-layout-sider-children {
    & > div p {
      visibility: hidden;
    }
  }
`;
