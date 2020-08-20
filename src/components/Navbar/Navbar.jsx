import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
// import SidebarContainer from './../Sidebar/SidebarContainer';
// import LoginBlockContainer from '../common/LoginBlock/LoginBlockContainer';
import cn from 'classnames';

const Navbar = (props) => {
	// return props.menuShown;
	return ( 
			<div>
				<div>
					<nav className={styles.nav}>
						<NavLink to="/terminals" activeClassName={styles.activeLink}>
							<div className={cn(styles.item, styles.item_profile)}>
								Терминалы
							</div>
						</NavLink>
						<NavLink to="/buyers" activeClassName={styles.activeLink}>
							<div className={cn(styles.item, styles.item_messages)}>
								Покупатели 
							</div>
						</NavLink>
						<NavLink to="/buyers/id" activeClassName={styles.activeLink}>
							<div className={cn(styles.item, styles.item_news)}>
								Покупатель
							</div>
						</NavLink>
					</nav>
					{/*<SidebarContainer />*/}
					<div className={styles.login}>
						{/*<LoginBlockContainer />*/}
					</div>
				</div>
			</div>
		);
}

export default Navbar;

