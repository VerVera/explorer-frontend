import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';
import { bindActionCreators } from 'redux';

import { AppState } from '../../store/app.store';

import { SettingsActions } from '../../actions/settings.actions';
import { SettingsState } from '../../reducers/settings.reducer';

import { EnvironmentSwitcherComponent } from '../common/environment-switcher/environment-switcher.component';
import { LanguageSwitcherComponent } from '../common/language-switcher/language-switcher.component';
import {
  INavbarMenuItem,
  NavbarMenuComponent,
} from '../navbar-menu/navbar-menu.component';

import './navbar.scss';

import { BurgerIcon, LogoIcon } from '../common/icons/common.icons';

const NAVBAR_MENU_ITEMS: INavbarMenuItem[] = [
  {
    title: 'resources',
    url:'',
    children:[
      {

        props: {
          isActive: (match: any, path: any) => {
            return (match || path.pathname.match(/^(\/blocks\/|\/addresses\/|\/transactions\/)/)
        );
      },
    },
    title: 'components.sidebar-menu.items.data',
    url: '/',
  }]
  },
  {
    props: {
      exact: false,
    },
    title: 'components.sidebar-menu.items.unconfirmed',
    url: '/mempool',
  },
  {
    props: {
      exact: false,
    },
    title: 'components.sidebar-menu.items.issued-tokens',
    url: '/issued-tokens',
  },
  {
    props: {
      exact: false,
    },
    title: 'Rich List',
    url: '/rich-list',
  },
  {
    props: {
      exact: false,
    },
    title: 'components.sidebar-menu.items.oraclePools',
    url: '/oracle-pools-list',
  },
  {
    props: {
      exact: false,
    },
    title: 'components.sidebar-menu.items.charts',
    url: '/charts',
  },
  {
    title: 'components.sidebar-menu.items.stats',
    url: '/stats',
  },
  {
    external: true,
    title: 'components.sidebar-menu.items.api',
    url: 'https://api.ergoplatform.com/api/v1/docs/',
  },
  {
    external: true,
    title: 'components.sidebar-menu.items.wallet',
    url: 'https://ergoplatform.org/en/wallets/',
  },
];

interface NavbarState {
  isClient: boolean;
}

type INavbarProps = SettingsActions & { settings: SettingsState };

class Navbar extends React.Component<INavbarProps, NavbarState> {
  state: NavbarState = {
    isClient: false,
  };

  constructor(props: INavbarProps) {
    super(props);
    this.showSidebar = this.showSidebar.bind(this);
  }
  componentDidMount(): void {
    this.setState({
      isClient: true,
    });
  }

  hideSidebar(): void {
    this.props.setSidebarDisplayStatus(false);
  }

  render(): JSX.Element | null {
    return (
      <div className="bi-navbar g-flex__item-fixed">
        <div className="bi-navbar__body g-flex g-space-between g-flex-column__item-fixed">
          <button
            className="bi-header-v2__toggle bi-btn bi-btn--flat"
            onClick={this.showSidebar}
          >
            <BurgerIcon className="bi-header-v2__toggle-icon" />
          </button>

          <Link className="bi-navbar-v2__logo" to={'/'}>
            <LogoIcon className="bi-sidebar__logo-icon" />
          </Link>
          <NavbarMenuComponent items={NAVBAR_MENU_ITEMS} />

          <div className="bi-navbar__right">
            <EnvironmentSwitcherComponent />

            <LanguageSwitcherComponent />
          </div>
        </div>
      </div>
    );
  }

  private showSidebar(): void {
    this.props.setSidebarDisplayStatus(true);
  }
}

function mapStateToProps(state: AppState): { settings: SettingsState } {
  return { settings: state.settings };
}

function mapDispatchToProps(dispatch: any): any {
  return bindActionCreators({ ...SettingsActions } as any, dispatch);
}

export const NavbarComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Navbar);
