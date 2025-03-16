import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Images from "../../Images";
import { logout } from "../../slice/authSlice";

export default function WebHeader() {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const signOut = () => {dispatch(logout())};
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
				{isAuth ? (
					<NavLink
						to="/member_center"
						className="nav-btn btn btn-outline-primary rounded-3 me-2 pe-lg-2 order-lg-3"
					>
						Benson
					</NavLink>
				) : (
					<NavLink to="/register" className="nav-btn btn btn-outline-primary rounded-3 me-2 pe-lg-2 order-lg-3">
						免費試用
					</NavLink>
				)}
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
							<NavLink className="nav-link me-2" to="/player/index">
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
						{isAuth ? (
							<li className="nav-item">
								<a className="nav-link me-2" onClick={signOut} style={{
									cursor: "pointer"
								}}>
									登出
								</a>
							</li>
						) : (
							<>
								<li className="nav-item">
									<NavLink
										className="nav-link me-2"
										to="/register"
									>
										註冊
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link me-2"
										to="/login"
									>
										登入
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
