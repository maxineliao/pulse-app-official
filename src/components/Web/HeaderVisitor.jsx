import { NavLink } from "react-router";
import Images from "../../Images";

export default function HeaderVisitor() {
	return (
		<nav className="header-visitor container fixed-top">
			<div className="navbar navbar-dark navbar-expand-lg rounded-4 justify-content-between">
				<NavLink className="navbar-brand py-0 me-auto" to="">
					<img
						src={Images.Logo_w}
						alt="Pulse"
						width="40"
						height="40"
					/>
				</NavLink>
				<button className="nav-btn btn btn-outline-primary rounded-3 me-2 pe-lg-2 order-lg-3">
					免費試用
				</button>
				<button
					className="navbar-toggler order-lg-2 border-0"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-lg-end"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link me-2" to="/player">
								PULSE Web Player
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link me-2"
                                to="/subscription_plans"
							>
								訂閱方案
							</NavLink>
						</li>
						<li className="nav-item">
							<a className="nav-link me-2" href="register.html">
								註冊
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link me-2" href="login.html">
								登入
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
