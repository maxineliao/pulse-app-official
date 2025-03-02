import { useState } from "react";
import { Search, X, Pen } from "lucide-react";
import Swal from "sweetalert2";

export default function AdminInformation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: "",
    plan: "",
    area: "",
  });

  const [activeUserId, setActiveUserId] = useState(null);
  const [pageInfo, setPageInfo] = useState({
    current_page: 1,
    total_pages: 1,
    has_pre: false,
    has_next: false,
  });

  const itemsPerPage = 8; // 每頁顯示的項目數量

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleEditClick = (user) => {
    setFormData(user);
    setActiveUserId(user.id);
  };

  const handleCloseModal = () => {
    setActiveUserId(null);
  };

  const handleSave = () => {
    Swal.fire({
      icon: "success",
      title: "會員資料儲存成功",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: "swal-popup",
        title: "swal-title",
      },
    });
    handleCloseModal();
  };

  const handleClick = (e, page) => {
    e.preventDefault();
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      current_page: page,
      has_pre: page > 1,
      has_next: page < prevPageInfo.total_pages,
    }));
  };

  const users = [
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Zaina Goldsmith",
      email: "zaina.goldsmith@mail.com",
      id: "44444",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Mahima Lopez",
      email: "mahima.lopez@mail.com",
      id: "95248",
      plan: "Free",
      area: "台中",
    },
    {
      name: "Pharrell Murray",
      email: "pharrell.murray@mail.com",
      id: "995556",
      plan: "Premium",
      area: "台中",
    },
    {
      name: "Annika Mcbride",
      email: "annika.mcbride@mail.com",
      id: "2526262",
      plan: "Premium",
      area: "台中",
    },
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
    {
      name: "Emir Wicks",
      email: "emir.wicks@mail.com",
      id: "123123",
      plan: "Student",
      area: "台中",
    },
  ];

  // 計算總頁數
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // 獲取當前頁面顯示的資料
  const currentPageData = users.slice(
    (pageInfo.current_page - 1) * itemsPerPage,
    pageInfo.current_page * itemsPerPage
  );

  return (
    <>
      <div className="col-9 col-md-10">
        <div className="navbar-information my-5 me-5 d-flex flex-column">
          <div className="m-5">
            <h1 className="pb-5 admin-name-bottom">會員資訊管理</h1>
            <form
              className="d-flex information-search align-items-center mt-4"
              role="search"
            >
              <input
                type="search"
                placeholder="輸入關鍵字"
                className="form-control"
                aria-label="Search"
              />
              <button
                className="information-icon-search information-icon-btn"
                type="submit"
              >
                <Search />
              </button>
            </form>
            <div className="overflow-x-auto admin-scrollbar">
              <table className="mt-5 col-12">
                <thead>
                  <tr>
                    <th className="p-3 text-nowrap" scope="col">
                      使用者名稱
                    </th>
                    <th className="p-3 text-nowrap" scope="col">
                      Email
                    </th>
                    <th className="p-3 text-nowrap" scope="col">
                      ID
                    </th>
                    <th className="p-3 text-nowrap" scope="col">
                      身份
                    </th>
                    <th className="p-3 text-nowrap" scope="col">
                      地區
                    </th>
                    <th className="p-3 text-nowrap" scope="col">
                      動作
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPageData.map((user, index) => (
                    <tr key={index}>
                      <th
                        scope="row"
                        className="text-secondary p-3 text-nowrap"
                      >
                        {user.name}
                      </th>
                      <td className="text-secondary p-3 text-nowrap">
                        {user.email}
                      </td>
                      <td className="text-secondary p-3 text-nowrap">
                        {user.id}
                      </td>
                      <td className="text-secondary p-3 text-nowrap">
                        {user.plan}
                      </td>
                      <td className="text-secondary p-3 text-nowrap">
                        {user.area}
                      </td>
                      <td className="p-3">
                        <button
                          type="button"
                          className="btn icon p-0"
                          data-bs-toggle="modal"
                          data-bs-target="#modalEdit"
                          onClick={() => handleEditClick(user)}
                        >
                          <Pen
                            style={{
                              color:
                                activeUserId === user.id ? "yellow" : "white",
                            }}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${!pageInfo.has_pre && "disabled"}`}
                  >
                    <a
                      onClick={(e) => handleClick(e, pageInfo.current_page - 1)}
                      className="page-link"
                      href="#"
                    >
                      上一頁
                    </a>
                  </li>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        pageInfo.current_page === index + 1 && "active"
                      }`}
                    >
                      <a
                        onClick={(e) => handleClick(e, index + 1)}
                        className="page-link"
                        href="#"
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`page-item ${!pageInfo.has_next && "disabled"}`}
                  >
                    <a
                      onClick={(e) => handleClick(e, pageInfo.current_page + 1)}
                      className="page-link"
                      href="#"
                    >
                      下一頁
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="modalEditLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content navbar-information">
            <div className="modal-header d-flex justify-content-between border-0">
              <h3 className="modal-title" id="modalEditLabel">
                編輯使用者資料
              </h3>
              <button
                type="button"
                className="btn-edit-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <X />
              </button>
            </div>
            <div className="modal-body admin-modal-scrollbar">
              <div className="my-3">
                <label htmlFor="name" className="form-label">
                  使用者名稱
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  ID
                </label>
                <input
                  className="form-control"
                  id="id"
                  type="text"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="plan" className="form-label">
                  身份
                </label>
                <select
                  className="form-control"
                  id="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>
                    請選擇身份
                  </option>
                  <option value="Premium">Premium</option>
                  <option value="Free">Free</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="area" className="form-label">
                  地區
                </label>
                <input
                  className="form-control"
                  id="area"
                  type="text"
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn px-5 py-2"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                取消
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={handleSave}
                className="btn btn-warning px-5 py-2"
              >
                儲存
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
