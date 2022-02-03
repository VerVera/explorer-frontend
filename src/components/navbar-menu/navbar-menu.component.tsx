import React from 'react';
import { NavLinkProps } from 'react-router-dom';
import './navbar-menu.scss';
import {
  ChevronDownIcon,
  LatestBlocksIcon,
  MempoolIcon,
  OraclePoolsIcon,
  ChartsIcon,
  StatsIcon,
  IssuedTokensIcon,
  RichListIcon,
  WalletsIcon,
  ApiIcon,
  MonitorIcon,
  WatchIcon,
  ExternalLinkIcon,
  CloseIcon,
} from '../common/icons/common.icons';
import { EnvironmentSwitcherComponent } from '../common/environment-switcher/environment-switcher.component';

export interface INavbarMenuItem {
  props?: NavLinkProps | any;
  icon?: JSX.Element;
  children?: INavbarMenuItem[];
  title: string;
  url: string;
  component?: any;
  external?: boolean;
}

export interface INavbarMenuProps {
  items: INavbarMenuItem[];
}

export class NavbarMenuComponent extends React.Component<INavbarMenuProps> {
  render(): JSX.Element {
    return (
      <nav className="bi-navbar-menu">
        <ul className="bi-navbar-menu__wrapper g-flex">
          <li className="bi-nav-dropdown">
            <a className="bi-nav-dropdown__link g-flex" href="#">
              Resources
              <ChevronDownIcon className="bi-nav-dropdown__icon" />
            </a>
            <ul className="bi-nav-dropdown__list">
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <LatestBlocksIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Latest Blocks
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <MempoolIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Mempool
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <OraclePoolsIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Oracle Pools
                </a>
              </li>
            </ul>
          </li>
          <li className="bi-nav-dropdown">
            <a className="bi-nav-dropdown__link g-flex" href="#">
              Statistics
              <ChevronDownIcon className="bi-nav-dropdown__icon" />
            </a>
            <ul className="bi-nav-dropdown__list">
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <ChartsIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Charts
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <StatsIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Stats
                </a>
              </li>
            </ul>
          </li>
          <li className="bi-nav-dropdown">
            <a className="bi-nav-dropdown__link g-flex" href="#">
              Tokens
              <ChevronDownIcon className="bi-nav-dropdown__icon" />
            </a>
            <ul className="bi-nav-dropdown__list">
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <IssuedTokensIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Issued Tokens
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <RichListIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Rich List
                </a>
              </li>
            </ul>
          </li>
          <li className="bi-nav-dropdown">
            <a className="bi-nav-dropdown__link g-flex" href="#">
              More
              <ChevronDownIcon className="bi-nav-dropdown__icon" />
            </a>
            <ul className="bi-nav-dropdown__list">
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <WalletsIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Wallets
                  <ExternalLinkIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--external" />
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <ApiIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  API
                  <ExternalLinkIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--external" />
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <MonitorIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Difficulty & Epoch monitor
                  <ExternalLinkIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--external" />
                </a>
              </li>
              <li className="bi-nav-dropdown__item">
                <a href="#">
                  <WatchIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--item" />
                  Ergo Watch
                  <ExternalLinkIcon className="bi-nav-dropdown__icon bi-nav-dropdown__icon--external" />
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="bi-navbar-menu__control">
          <EnvironmentSwitcherComponent />

          <button className="bi-navbar-menu__btn-close bi-btn bi-btn--flat">
            <CloseIcon className="bi-navbar-menu__btn-close-icon" />
          </button>
        </div>
      </nav>
    );
  }
}
