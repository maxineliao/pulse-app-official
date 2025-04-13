import { useEffect, useState } from "react";
const { VITE_SECRET_KEY } = import.meta.env;
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function Welcome() {
    const navigate = useNavigate();
	const [userData, setUserData] = useState({});
	const isAuth = useSelector((state) => state.auth.isAuth);
	useEffect(() => {
		const storedUserData = localStorage.getItem("user");
		if (storedUserData) {
			const bytes = CryptoJS.AES.decrypt(storedUserData, VITE_SECRET_KEY);
			const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

			if (decryptedText) {
				try {
					const parsedUser = JSON.parse(decryptedText);
					setUserData(parsedUser);
				} catch (err) {
					console.error("解析 JSON 錯誤", err);
				}
			}
			setTimeout(()=> {
				navigate("/member_center")
			},2800)
		}
	}, []);
	useEffect(()=> {
		if(!isAuth) {
			navigate("/")
		}
	},[isAuth])
	return (
		<div
			className="d-flex align-items-center justify-content-center text-center flex-column"
			style={{ width: "100dvw", height: "100dvh" }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="100"
				viewBox="-1 -6 26 36"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<g>
					<g transform="translate(2, 0)">
						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								values="1,1;1,1.1;1,1"
								dur="1s"
								repeatCount="indefinite"
								begin="0s"
							/>
							<animate
								attributeName="opacity"
								values="1;0.7;1"
								dur="1s"
								repeatCount="indefinite"
								begin="0s"
							/>
							<path d="M0 10v3" />
						</g>
					</g>
					<g transform="translate(6, 0)">
						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								values="1,1;1,1.15;1,1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.1s"
							/>
							<animate
								attributeName="opacity"
								values="1;0.6;1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.1s"
							/>
							<path d="M0 6v11" />
						</g>
					</g>
					<g transform="translate(10, 0)">
						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								values="1,1;1,1.2;1,1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.2s"
							/>
							<animate
								attributeName="opacity"
								values="1;0.5;1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.2s"
							/>
							<path d="M0 3v18" />
						</g>
					</g>
					<g transform="translate(14, 0)">
						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								values="1,1;1,1.12;1,1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.3s"
							/>
							<animate
								attributeName="opacity"
								values="1;0.65;1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.3s"
							/>
							<path d="M0 8v7" />
						</g>
					</g>
					<g transform="translate(18, 0)">
						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								values="1,1;1,1.18;1,1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.4s"
							/>
							<animate
								attributeName="opacity"
								values="1;0.55;1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.4s"
							/>
							<path d="M0 5v13" />
						</g>
					</g>
					<g transform="translate(22, 0)">
						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								values="1,1;1,1.1;1,1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.5s"
							/>
							<animate
								attributeName="opacity"
								values="1;0.75;1"
								dur="1s"
								repeatCount="indefinite"
								begin="0.5s"
							/>
							<path d="M0 10v3" />
						</g>
					</g>
				</g>
			</svg>

			<h3>
				Hi {userData.username}
				<br />
				歡迎回到 PULSE
			</h3>
		</div>
	);
}
