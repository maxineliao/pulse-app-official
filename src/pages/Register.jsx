import Images from "../Images";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

function Register() {
	const [passwordComfirmed, setPasswordComfirmed] = useState(true);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			chkpassword: "",
		},
	});
	const onSubmit = (data) => {
		// console.log(data);
	};
	const watchForm = useWatch({
		control,
	});
	useEffect(() => {
		if (watchForm.password && watchForm.chkpassword) {
			if (watchForm.password === watchForm.chkpassword) {
				setPasswordComfirmed(true);
			} else {
				setPasswordComfirmed(false);
			}
		} else {
			setPasswordComfirmed(true);
		}
	}, [watchForm]);
	return (
		<div
			className="login-bg"
			style={{
				backgroundImage: `url(${Images.linear})`,
			}}
		>
			<div className="container py-8" style={{minHeight: "100dvh"}}>
				<div className="row d-flex justify-content-center">
					<div className="col-lg-6">
						<Link
							to="/"
							className="d-flex align-items-center mb-4 text-decoration-none"
						>
							<ChevronLeft width={16} />
							<p className="mb-0 fs-7">回首頁</p>
						</Link>
						<div className="d-flex justify-content-between mb-3">
							<h5 className="mb-0">歡迎來到PULSE</h5>
							<Link to="/login" className="text-decoration-none">
								<h6>已經是會員？立即登入</h6>
							</Link>
						</div>
						<h1 className="font-shadow">註冊</h1>
						<form
							id="registerForm"
							onSubmit={handleSubmit(onSubmit)}
						>
							<label
								htmlFor="email"
								className="form-label mb-2 mt-6"
							>
								您的電子信箱 *
							</label>
							<input
								type="email"
								className="form-control mb-1 py-4 px-5 input-border-third"
								id="email"
								placeholder="請輸入電子信箱"
								{...register("email", {
									required: "電子信箱為必填",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "請輸入有效的電子信箱格式",
									},
								})}
							/>
							<span className="mb-5 d-block">
								{errors.email ? errors.email.message : ""}
							</span>
							<label
								htmlFor="password"
								className="form-label mb-2"
							>
								密碼 *
							</label>
							<input
								type="password"
								className="form-control py-4 px-5 mb-1 input-border-third"
								id="password"
								placeholder="請輸入密碼"
								{...register("password", {
									required: "密碼為必填",
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
										message:
											"密碼需超過8個字元，含大小寫英文字母及數字",
									},
								})}
							/>
							<span className="d-block mb-5">
								{errors.password ? errors.password.message : ""}
							</span>
							<label
								htmlFor="chkPassword"
								className="form-label mb-2"
							>
								確認密碼 *
							</label>
							<input
								type="password"
								className="form-control py-4 px-5 mb-1 input-border-third"
								id="chkPassword"
								placeholder="請再次輸入密碼"
								{...register("chkpassword", {
									required: "此欄位為必填",
								})}
							/>
							<span className="d-block mb-6">
								{errors.chkpassword
									? errors.chkpassword.message
									: !passwordComfirmed
									? "密碼不相符"
									: ""}
							</span>
							<button
								className="btn btn-primary w-100 p-3"
								type="submit"
								id="registerButton"
							>
								註冊
							</button>
						</form>
						{/* <h6 className="d-flex justify-content-center my-4">
							OR
						</h6>
						<button
							className="btn w-100 p-3 btn-google"
							type="button"
						>
							<img
								src={Images.ic_google}
								width={24}
								height={24}
								alt="ic_google"
							/>
							以 Google 帳號註冊
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
