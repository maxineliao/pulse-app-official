import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
const { VITE_SECRET_KEY } = import.meta.env;
import CryptoJS from "crypto-js";
import axios from "axios";

function SubscriptionPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const plan = params.get("plan");
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState({});
  const isAuth = useSelector((state) => state.auth.isAuth);

  const getData = async () => {
    try {
      const url = `https://pulse-web-player.onrender.com/subscriptions/${plan}`;
      const response = await axios.get(url);
      //   console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComfirm = async () => {
    try {
      const response = await axios.patch(
        `https://pulse-web-player.onrender.com/users/${userData.id}`,
        {
          plan: data.category + "-" + data.description, // 例如：Premium-4人
          price: data.price,
        }
      );
      navigate("/member_center");
    } catch (error) {
      console.error("更新失敗", err);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate(`login?plan=${plan}`);
    } else {
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
      }
    }
    getData();
  }, [isAuth]);

  return (
    <main className="index">
      {/* <!-- 訂閱方案 --> */}
      <section className="py-9 py-lg-10">
        <div className="container">
          <p className="h1 mb-4 text-center">確認方案</p>
          <div className="row gy-5 justify-content-center">
            <div className="col-md-9 col-lg-6">
              <div className="card card-detailed card-dark h-100">
                {data && (
                  <div className="card-body p-0 d-flex flex-column gap-4">
                    <h3 className="card-title mb-0">{data.category}</h3>
                    <h2 className="card-title mb-0">NT${data.price}／月</h2>
                    <h5>{data.description}</h5>
                    <ul className="card-text mt-3 mt-md-5">
                      {data.features.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-6 mt-md-8">
            <a
              onClick={handleComfirm}
              className="btn-customize-padding bg-white-opacity btn btn-lg btn-outline-third rounded-pill w-auto text-white d-flex align-items-center me-lg-5 order-lg-1"
            >
              確認付款
              <span className="btn-arrow rounded-pill bg-white px-3 px-lg-5 py-1 py-lg-2 ms-5 d-flex align-items-center justify-content-center">
                <ArrowUpRight className="text-dark btn-icon"></ArrowUpRight>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SubscriptionPayment;
