import React, { useState } from 'react';
import { Menu } from 'antd';

import IconMenu from '../../assets/iconMenu.svg';

import {
  Container,
  Header,
  IconHome,
  IconConfig,
  Sider,
  ContainerAvatar,
  Avatar,
  Content,
} from './styles';

const ContainerWithSideMenu = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Container>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <ContainerAvatar>
          <Avatar />
          <p>Meu plugin</p>
        </ContainerAvatar>

        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<IconHome />}>
            Minha Loja
          </Menu.Item>

          <Menu.Item key="2" icon={<IconHome />}>
            Produtos
          </Menu.Item>

          <Menu.Item key="3" icon={<IconHome />}>
            Relatórios
          </Menu.Item>

          <Menu.Item key="4" icon={<IconConfig />}>
            Configurações
          </Menu.Item>
        </Menu>
      </Sider>

      <Container>
        <Header>
          <button type="button" onClick={() => setCollapsed(!collapsed)}>
            <img src={IconMenu} alt="Home" />
          </button>
        </Header>

        <Content>{children}</Content>
      </Container>
    </Container>
  );
};

export default ContainerWithSideMenu;
