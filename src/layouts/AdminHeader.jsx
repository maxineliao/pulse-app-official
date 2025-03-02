import { IdCard, Megaphone, LogOut } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminHeader() {
  return (
    <>
      <div className="d-flex">
        <div className="col-lg-2 d-none d-lg-block">
          <aside className="navbar-adminheader m-5 full-height d-flex flex-column">
            <div className="w-100 d-flex flex-column flex-grow-1">
              <a
                className="py-5 d-flex justify-content-center"
                href="#"
                title="Logo"
              >
                <img
                  src="../src/assets/images/Logo_w.png"
                  alt="logo"
                  width={120}
                />
              </a>
              <ul className="m-0 p-0 flex-grow-1">
                <li className="list-unstyled">
                  <h4 className="py-3 mb-5 mx-5">後台管理</h4>
                </li>
                <li className="list-unstyled list-item-hover">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="AdminInformation"
                  >
                    <h6 className="py-3 mb-5 mx-5">
                      <IdCard className="me-3" style={{ color: "#FFCF31" }} />
                      會員資訊管理
                    </h6>
                  </NavLink>
                </li>
                <li className="list-unstyled list-item-hover">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="AdvertisementInformation"
                  >
                    <h6 className="py-3 mx-5">
                      <Megaphone className="me-3" />
                      廣告資訊管理
                    </h6>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mt-auto list-item-hover mb-5">
              <h6 className="py-3 mx-5">
                <LogOut className="me-3" />
                登出
              </h6>
            </div>
          </aside>
        </div>
        <div className="d-lg-none col-3 col-md-2">
          <aside className="navbar-adminheader m-5 full-height d-flex flex-column">
            <div className="w-100 d-flex flex-column flex-grow-1">
              <a
                className="py-5 d-flex justify-content-center mb-5"
                href="#"
                title="Logo"
              >
                <img
                  src="../src/assets/images/Logo_w.png"
                  alt="logo"
                  width={60}
                />
              </a>
              <ul className="m-0 p-0 flex-grow-1">
                <li className="list-unstyled list-item-hover">
                  <NavLink
                    className="nav-link d-flex justify-content-center mb-5"
                    aria-current="page"
                    to="AdminInformation"
                  >
                    <IdCard
                      style={{ color: "#FFCF31", width: 40, height: 40 }}
                    />
                  </NavLink>
                </li>
                <li className="list-unstyled list-item-hover">
                  <NavLink
                    className="nav-link d-flex justify-content-center "
                    aria-current="page"
                    to="AdvertisementInformation"
                  >
                    <Megaphone style={{ width: 40, height: 40 }} />
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mt-auto list-item-hover mb-5 d-flex justify-content-center">
              <LogOut />
            </div>
          </aside>
        </div>
        <Outlet />
      </div>
    </>
  );
}
