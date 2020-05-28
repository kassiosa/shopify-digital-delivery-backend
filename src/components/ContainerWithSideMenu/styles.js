import styled from 'styled-components';
import { Layout as LayoutAntd } from 'antd';

import { ReactComponent as IconHomeSvg } from '../../assets/iconHome.svg';
import { ReactComponent as IconConfigSvg } from '../../assets/iconConfig.svg';

export const IconHome = styled(IconHomeSvg)``;

export const IconConfig = styled(IconConfigSvg)``;

export const Container = styled(LayoutAntd)`
  height: 100%;
  background: none;
`;

export const Header = styled(LayoutAntd.Header)`
  background-color: #008bce;

  button {
    background: none;
    border: none;
    line-height: 0;
  }
`;

export const Sider = styled(LayoutAntd.Sider)`
  background-color: #fff;

  .ant-menu-inline-collapsed > .ant-menu-item span {
    opacity: 0;
    margin: 0;
  }

  .ant-menu-item span {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .ant-menu-inline > .ant-menu-item,
  .ant-menu-vertical > .ant-menu-item {
    height: 56px;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #f7f7f7;

    svg {
      path {
        fill: #e83478;
      }
    }

    span {
      font-weight: 500;
    }
  }

  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: #f7f7f7;
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 4px solid #e83478;
    border-radius: 6px;
  }

  ul {
    margin-top: 15px;
    border-right: none;

    li {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      svg {
        flex-shrink: 0;
      }

      span {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        color: #484848;
      }
    }
  }
`;

export const ContainerAvatar = styled.div`
  height: 64px;
  display: flex;
  align-items: center;

  p {
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #008bce;
    margin-left: 10px;
    margin-bottom: 0;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  background: #c4c4c4;
  border-radius: 5px;
  margin-left: 24px;
`;

export const Content = styled(LayoutAntd.Content)``;
