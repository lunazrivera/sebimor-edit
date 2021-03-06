import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Action from './Action';

import logo from '../../static/images/sebimor-nombre.png';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer">
              <Link to="/"><img class="center" src={logo} /></Link>
              <div className="inner-header">
                <div className="site-header-inside">
                  {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (<React.Fragment>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu" aria-hidden="true" /></button>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span className="icon-close" aria-hidden="true" /></button>
                      <ul className="menu">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action, action_idx) => {
                            let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                            let actionUrl = _.trim(_.get(action, 'url', null), '/');
                            return (
                              <li key={action_idx} className={classNames('menu-item', {'current-menu-item': pageUrl === actionUrl, 'menu-button': _.get(action, 'style', null) !== 'link'})}>
                                <Action {...this.props} action={action} />
                              </li>
                            )
                        })}
                      </ul>
                    </div>
                  </nav>
                  </React.Fragment>)}
                </div>
              </div>
            </header>
        );
    }
}
