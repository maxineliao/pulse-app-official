import { Outlet } from "react-router";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import PlayerHeader from "../components/Player/PlayerHeader";
import PlayerSideMenu from "../components/Player/PlayerSideMenu";
import PlayerComp from "../components/Player/PlayerComp";


function Player() {
	//愛心變紅色
	document.addEventListener("DOMContentLoaded", function () {
		const heartButtons = document.querySelectorAll(
			".btn-player-listen-heart"
		);
		heartButtons.forEach(function (button) {
			button.addEventListener("click", function () {
				const svgElement = button.querySelector("svg");
				svgElement.classList.toggle("fill-red");
			});
		});
	});

	// 切換播放和暫停圖示
	document.addEventListener("DOMContentLoaded", function () {
		const playButton = document.querySelector(".player-footer-btn-circle");
		playButton.addEventListener("click", function () {
			const iconElement = playButton.querySelector("svg");
			if (iconElement.getAttribute("data-lucide") === "play") {
				iconElement.setAttribute("data-lucide", "pause");
			} else {
				iconElement.setAttribute("data-lucide", "play");
			}
		});
	});

	return (
		<>
			<PlayerHeader />
			<div className="container-fluid">
				<div className="row d-flex flex-lg-row flex-column-reverse">
                    <div className="col-lg-3 col-12 player-scrollbar player-scrollbar-sm">
                        <PlayerSideMenu />
                    </div>    
					<Outlet />
				</div>
			</div>
			<PlayerComp />
		</>
	);
}
export default Player;
