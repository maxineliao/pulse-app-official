import Images from "../Images";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => {
		// console.log(data);
	};
	
	return (
		<div
			className="login-bg"
			style={{
                backgroundImage: `url(${Images.linear})`,
				backgroundPosition: "40% 70%"
            }}
		>
			<div className="container py-8" style={{minHeight: "100dvh"}}>
				<div className="row d-flex justify-content-center">
					<div className="col-lg-6">
						<Link to="/" className="d-flex align-items-center mb-4 text-decoration-none">
							<ChevronLeft width={16}/>
							<p className="mb-0 fs-7">回首頁</p>
						</Link>
						<div className="d-flex justify-content-between mb-3">
							<h5 className="mb-0">歡迎回到PULSE</h5>
							<Link
								to="/register"
								className="text-decoration-none"
							>
								<h6>沒有帳戶？立即註冊</h6>
							</Link>
						</div>
						<h1 className="font-shadow">登入</h1>
						<form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="email" className="form-label mb-2 mt-6">
								帳號 *
							</label>
							<input
								type="email"
								className="form-control py-4 px-5 input-border-third mb-1"
								id="email"
								placeholder="請輸入電子信箱"
								{...register("email",{
									required: "電子信箱為必填",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "請輸入有效的電子信箱格式",
									}
								})}
							/>
							<span className="mb-5 d-block">{errors.email ? errors.email.message : ""}</span>
							<label htmlFor="password" className="form-label mb-2">
								密碼 *
							</label>
							<input
								type="password"
								className="form-control py-4 px-5 mb-1 input-border-third"
								id="password"
								placeholder="請輸入密碼"
								{...register("password", {
									required:"密碼為必填",
								})}
							/>
							<div className="d-flex justify-content-between mb-5">
								<span className="d-block">{errors.password ? errors.password.message : ""}</span>
								<a href="#" className="text-decoration-none">
									<h6 className="d-flex justify-content-end mb-6">
										忘記密碼
									</h6>
								</a>
							</div>
							<button
								className="btn btn-primary w-100 p-3"
								type="submit"
								id="loginButton"
							>
								登入
							</button>
						</form>
						{/* <h6 className="d-flex justify-content-center my-4">OR</h6>
						<button className="btn w-100 p-3 btn-google" type="button">
							<img
								src={Images.ic_google}
								width={24}
								height={24}
								alt="ic_google"
							/>
							以 Google 帳號登入
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
