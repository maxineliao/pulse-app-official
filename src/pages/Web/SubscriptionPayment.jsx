import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
const { VITE_SECRET_KEY } = import.meta.env;
import CryptoJS from "crypto-js";
import axios from "axios";
import { Loading } from "../../components/loading";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SubscriptionPayment() {
	const navigate = useNavigate();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const plan = params.get("plan");

	const [data, setData] = useState(null);
	const [userData, setUserData] = useState({});
	const isAuth = useSelector((state) => state.auth.isAuth);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		try {
			const url = `https://pulse-web-player.onrender.com/subscriptions/${plan}`;
			const response = await axios.get(url);
			//   console.log(response.data);
			setData(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleComfirm = async () => {
		setIsLoading(true);
		try {
			await axios.patch(
				`https://pulse-web-player.onrender.com/users/${userData.id}`,
				{
					plan: data.category + "-" + data.description, // Premium-4人
					price: data.price,
				}
			);
			// 更新 local userData
			const updatedUser = {
				...userData,
				plan: data.category + "-" + data.description,
				price: data.price,
			};
			// 加密並儲存
			const encryptedUser = CryptoJS.AES.encrypt(
				JSON.stringify(updatedUser),
				VITE_SECRET_KEY
			).toString();
			localStorage.setItem("user", encryptedUser);

			navigate("/welcome");
		} catch (error) {
			console.error("更新失敗", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!plan) return navigate("/");
		if (!isAuth) {
			navigate(`/login?plan=${plan}`);
		} else {
			const storedUserData = localStorage.getItem("user");
			if (storedUserData) {
				const bytes = CryptoJS.AES.decrypt(
					storedUserData,
					VITE_SECRET_KEY
				);
				const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

				if (decryptedText) {
					try {
						const parsedUser = JSON.parse(decryptedText);
						setUserData(parsedUser);
					} catch (err) {
						console.error("解析 JSON 錯誤", err);
					}
				}
			}
		}
		getData();
	}, [isAuth, plan]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className="index">
			{isLoading && <Loading />}
			{/* <!-- 訂閱方案 --> */}
			<section className="py-10">
				<div className="container">
					<p className="h1 mb-4 text-center">確認方案</p>
					<div className="row gy-5 justify-content-center">
						<div className="col-md-9 col-lg-6">
							<div className="card card-detailed card-dark h-100">
								<SkeletonTheme
									baseColor="#313131"
									highlightColor="#525252"
								>
									<div className="card-body p-0 d-flex flex-column gap-4">
										<h3 className="card-title mb-0">
											{!isLoading && data ? (
												data.category
											) : (
												<Skeleton />
											)}
										</h3>
										<h2 className="card-title mb-0 d-flex">
											NT$
											{!isLoading && data ? (
												data.price
											) : (
												<Skeleton width={100} />
											)}
											／月
										</h2>
										<h5>
											{!isLoading && data ? (
												data.description
											) : (
												<Skeleton />
											)}
										</h5>
										<ul className="card-text mt-3 mt-md-5">
											{!isLoading && data ? (
												data.features.map(
													(item, index) => (
														<li key={index}>
															{item}
														</li>
													)
												)
											) : (
												<>
													<li>
														<Skeleton />
													</li>
													<li>
														<Skeleton />
													</li>
													<li>
														<Skeleton />
													</li>
												</>
											)}
										</ul>
									</div>
								</SkeletonTheme>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center mt-6 mt-md-8">
						<a
							onClick={handleComfirm}
							className="btn-customize-padding bg-white-opacity btn btn-lg btn-outline-third rounded-pill w-auto text-white d-flex align-items-center me-0 order-lg-1"
						>
							確認更換方案
							<span className="btn-arrow rounded-pill bg-white px-3 px-lg-5 py-1 py-lg-2 ms-5 d-flex align-items-center justify-content-center">
								<ArrowUpRight className="text-dark btn-icon"></ArrowUpRight>
							</span>
						</a>
					</div>
					<h6 className="fw-light text-center mt-3">
						將使用您的預設付款方式付款
					</h6>
				</div>
			</section>
		</main>
	);
}

export default SubscriptionPayment;
