import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './navbar-menu.scss';

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
      <div className="bi-navbar-menu g-flex">
        {this.mapLinks(this.props.items)}
      </div>
    );
  }

  private mapLinks(items: INavbarMenuItem[]): any {
    return items.map((item, index) => {
      const Component = item.component || NavLink;

      return (
        <div className="bi-navbar-menu__item g-flex-column__item" key={index}>
          <Component
            className="bi-navbar-menu__item-wrapper g-flex"
            activeClassName="bi-navbar-menu__item-wrapper--active"
            to={item.url}
            exact={true}
            {...item.props}
          >
            {item.icon}

            <span className="bi-navbar-menu__item-title g-flex__item">
              <FormattedMessage id={item.title} />
            </span>
          </Component>
        </div>
      );
    });
  }
}
