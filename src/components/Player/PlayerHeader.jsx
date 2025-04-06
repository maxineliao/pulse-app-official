import { List, Search, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import PlayerImages from "../../Images";
import CryptoJS from "crypto-js";
const { VITE_SECRET_KEY } = import.meta.env;
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

export default function PlayerHeader() {
	const navigate = useNavigate();
	const [desktopSearchInput, setDesktopSearchInput] = useState("");
	const [mobileSearchInput, setMobileSearchInput] = useState("");
	const [isMobile, setIsMobile] = useState(window.innerWidth < 992)
	const isAuth = useSelector((state) => state.auth.isAuth);
	const offcanvasRef = useRef(null);
	const handleSearch = (event) => {
		// console.log("desktopSearchInput", desktopSearchInput);
		event.preventDefault(); // 防止表單預設提交行為
		const keyword = isMobile ? mobileSearchInput : desktopSearchInput;
		if (keyword.trim()) {
			if(offcanvasRef.current.classList.contains("show")) {
				const instance = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
				instance?.hide();
				// 手動清除 backdrop
				document.querySelectorAll(".offcanvas-backdrop").forEach((el)=> {
					el.style.opacity = '0';
					el.style.pointerEvents = "none";
				});
				setTimeout(()=> {
					navigate(`/player/result?query=${encodeURIComponent(keyword)}`); // 跳轉並傳遞查詢參數
				},200)
			} else{
				navigate(`/player/result?query=${encodeURIComponent(keyword)}`); // 跳轉並傳遞查詢參數
			}
		}
	};
	useEffect(()=> {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 992)
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	},[])
	
	//解密
	const userData = localStorage.getItem("user");
	const decryptedUser = userData
		? JSON.parse(
				CryptoJS.AES.decrypt(userData, VITE_SECRET_KEY).toString(
					CryptoJS.enc.Utf8
				)
		  )
		: null;
	return (
		<header className="container-fluid fixed-top z-2">
			<div className="navbar navbar-player navbar-dark navbar-expand-lg rounded-4 justify-content-between pe-3">
				<NavLink className="navbar-brand py-0" to="/player">
					<img
						src={PlayerImages.Logo_w}
						alt="Pulse"
						width="40"
						height="40"
					/>
				</NavLink>
				<div className="d-lg-flex d-none">
					{!isMobile && <form
						className="d-flex player-search"
						role="search"
						onSubmit={handleSearch}
					>
						<input
							className="form-control me-2"
							type="search"
							placeholder="無損音質感受音樂的脈動"
							aria-label="Search"
							value={desktopSearchInput}
							onChange={(e) => setDesktopSearchInput(e.target.value)}
						/>
						<button
							className="player-icon-search player-icon-btn"
							type="submit"
						>
							<Search />
						</button>
					</form>}
					
					{/* <NavLink
						className="player-icon-list btn btn-outline-primary rounded-2"
						to="/player/categories"
					>
						<List />
					</NavLink> */}
				</div>
				{isAuth ? (
					<NavLink
						to="/member_center"
						className="text-decoration-none"
					>
						<button className="nav-btn btn btn-outline-primary rounded-3 me-2 pe-lg-2 order-lg-3 d-none d-lg-block">
							<img
								className="rounded-circle object-fit-cover me-1"
								src={PlayerImages.memberDefaultImg_sm}
								alt={decryptedUser.username}
								width="24"
								height="24"
							/>
							{decryptedUser.username}
						</button>
					</NavLink>
				) : (
					<NavLink className="text-decoration-none" onClick={()=>window.open('#/login', '_blank')}>
						<button className="nav-btn btn btn-outline-primary rounded-3 me-2 pe-lg-2 order-lg-3 d-none d-lg-block">
							尚未登入
						</button>
					</NavLink>
				)}
				<div className="d-lg-none">
					<div className="container-fluid">
						<button
							className="btn rounded-2 player-icon-btn"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasDarkNavbar"
							aria-controls="offcanvasDarkNavbar"
							aria-label="Toggle navigation"
						>
							<Search />
						</button>
						{/* <button
							className="btn rounded-2 player-icon-btn"
							type="button"
						>
							<List />
						</button> */}
						<NavLink
							to="/member_center"
							className="text-decoration-none"
						>
							<button
								className="btn rounded-2 player-icon-btn"
								type="button"
							>
								<User />
							</button>
						</NavLink>
					</div>
				</div>
			</div>
			<div
				className="offcanvas offcanvas-end w-100"
				tabIndex="-1"
				id="offcanvasDarkNavbar"
				aria-labelledby="offcanvasDarkNavbarLabel"
				ref={offcanvasRef}
			>
				<div className="offcanvas-header">
					<div className="search-container w-100">
						{isMobile && <form
							className="d-flex player-search w-100"
							role="search"
							onSubmit={handleSearch}
						>
							<input
								className="search-input p-0"
								type="search"
								placeholder="無損音質感受音樂的脈動"
								aria-label="Search"
								value={mobileSearchInput}
								onChange={(e) => setMobileSearchInput(e.target.value)}
							/>
							<button
								className="player-icon-btn btn"
								type="submit"
							>
								<Search />
							</button>
						</form>}
						<div className="separator"></div>
						<button
							type="button"
							className="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
				</div>
				<div className="offcanvas-body"></div>
			</div>
		</header>
	);
}
