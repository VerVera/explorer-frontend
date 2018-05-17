import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { ApiIcon, ChartIcon, DataIcon, StatsIcon, WalletIcon } from '../common/icons/common.icons';

import './sidebar-menu.scss';

interface ISidebarMenuItem {
  props?: NavLinkProps | any;
  icon?: JSX.Element;
  title: string;
  url: string;
}

const SIDEBAR_MENU_ITEMS: ISidebarMenuItem[] = [
  {
    icon: <DataIcon className='bi-sidebar-menu__item-icon g-flex__item-fixed'/>,
    props: {
      isActive: (match: any, path: any) => {
        return (match || path.pathname.match(/^(\/blocks\/|\/page\/)/)
        );
      }
    },
    title: 'components.sidebar-menu.items.data',
    url: '/'
  },
  {
    icon: <ApiIcon className='bi-sidebar-menu__item-icon g-flex__item-fixed'/>,
    title: 'components.sidebar-menu.items.api',
    url: '/api'
  },
  {
    icon: <WalletIcon className='bi-sidebar-menu__item-icon g-flex__item-fixed'/>,
    title: 'components.sidebar-menu.items.wallet',
    url: '/wallet'
  },
  {
    icon: <ChartIcon className='bi-sidebar-menu__item-icon g-flex__item-fixed'/>,
    title: 'components.sidebar-menu.items.charts',
    url: '/charts'
  },
  {
    icon: <StatsIcon className='bi-sidebar-menu__item-icon g-flex__item-fixed'/>,
    title: 'components.sidebar-menu.items.stats',
    url: '/stats'
  }
];

class SidebarMenu extends React.Component {
  props: InjectedIntlProps;
  
  render (): JSX.Element {
    return <div className='bi-sidebar-menu g-flex-column'>
      {
        SIDEBAR_MENU_ITEMS.map((item, index) => {
          return (
            <NavLink className='bi-sidebar-menu__item g-flex-column__item g-flex'
                     activeClassName='bi-sidebar-menu__item--active'
                     to={ item.url }
                     exact={ true }
                     key={ index }
                     { ...item.props }>
              { item.icon }
              
              <span className='bi-sidebar-menu__item-title g-flex__item'>
                { this.props.intl.formatMessage({ id: item.title }) }
              </span>
            </NavLink>
          );
        })
      }
    </div>;
  }
}

export const SidebarMenuComponent = injectIntl(SidebarMenu);
