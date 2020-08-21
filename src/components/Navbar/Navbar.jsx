import React from 'react';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
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
				</div>
				<div className="Navbar__footer">Copyright © 2020</div>
			</div>
		);
}

export default Navbar;

