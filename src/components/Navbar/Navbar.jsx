import React from 'react';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';
// import SidebarContainer from './../Sidebar/SidebarContainer';
// import LoginBlockContainer from '../common/LoginBlock/LoginBlockContainer';
import cn from 'classnames';

const Navbar = (props) => {
	// return props.menuShown;
	return ( 
			<div className="Navbar">
				<div className="Navbar__content">
					<nav className="">
						<NavLink to="/terminals" className="Navbar__link" activeClassName="">
							<div className="">
								Терминалы
							</div>
						</NavLink>
						<NavLink to="/buyers" className="Navbar__link" activeClassName="">
							<div className="">
								Покупатели 
							</div>
						</NavLink>
						{/*<NavLink to="/buyers/id" activeClassName={styles.activeLink}>
							<div className={cn(styles.item, styles.item_news)}>
								Покупатель
							</div>
						</NavLink>*/}
					</nav>
					{/*<SidebarContainer />*/}
					<div className="">
						{/*<LoginBlockContainer />*/}
					</div>
				</div>
				<div className="Navbar__footer">Copyright © 2020</div>
			</div>
		);
}

export default Navbar;

