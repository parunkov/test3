import React from 'react';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';

const Navbar = ({isLogined, avatarUrl, logout}) => {
	return ( 
			<div className="Navbar">
				{isLogined && <div className="Navbar__header">
					<img className="Navbar__avatar" src={avatarUrl} alt="avatar"/>
					<button onClick={() => logout()}>Выйти</button>
				</div>}
				<div className="Navbar__content">
					<nav>
						<NavLink to="/terminals" className="Navbar__link" activeClassName="Navbar__link_active">
							<div>
								Терминалы
							</div>
						</NavLink>
						<NavLink to="/buyers" className="Navbar__link" activeClassName="Navbar__link_active">
							<div>
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

