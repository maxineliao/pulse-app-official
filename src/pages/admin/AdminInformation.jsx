import { Search } from "lucide-react";

export default function AdminInformation() {
  return (
    <>
      <div className="col-lg-10">
        <div className="navbar-information my-5 me-5 full-height d-flex flex-column">
          <div className="m-5">
            <h1>會員資訊管理</h1>
            <form
              className="d-flex information-search align-items-center  mt-4"
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
            <table className="mt-5 col-12 ">
              <thead>
                <tr>
                  <th className="p-3" scope="col">
                    使用者名稱
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">ID</th>
                  <th scope="col">地區</th>
                  <th scope="col">地區</th>
                  <th scope="col">動作 </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-secondary py-6">
                    #1
                  </th>
                  <td className="text-secondary py-6">Emir Wicks</td>
                  <td className="text-secondary py-6">emir.wicks@mail.com</td>
                  <td className="text-secondary py-6">Yes</td>
                  <td className="text-secondary py-6">台中</td>
                  <td className="py-6">
                    <button
                      type="button"
                      className="btn icon p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdit"
                    >
                      <span className="material-symbols-outlined"> edit </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-secondary py-6">
                    #2
                  </th>
                  <td className="text-secondary py-6">Zaina Goldsmith</td>
                  <td className="text-secondary py-6">
                    zaina.goldsmith@mail.com
                  </td>
                  <td className="text-secondary py-6">Yes</td>
                  <td className="text-secondary py-6">台中</td>
                  <td className="py-6">
                    <button
                      type="button"
                      className="btn icon p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdit"
                    >
                      <span className="material-symbols-outlined"> edit </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-secondary py-6">
                    #3
                  </th>
                  <td className="text-secondary py-6">Mahima Lopez</td>
                  <td className="text-secondary py-6">mahima.lopez@mail.com</td>
                  <td className="text-secondary py-6">Yes</td>
                  <td className="text-secondary py-6">台中</td>
                  <td className="py-6">
                    <button
                      type="button"
                      className="btn icon p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdit"
                    >
                      <span className="material-symbols-outlined"> edit </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-secondary py-6">
                    #4
                  </th>
                  <td className="text-secondary py-6">Pharrell Murray</td>
                  <td className="text-secondary py-6">
                    pharrell.murray@mail.com
                  </td>
                  <td className="text-secondary py-6">Yes</td>
                  <td className="text-secondary py-6">台中</td>
                  <td className="py-6">
                    <button
                      type="button"
                      className="btn icon p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdit"
                    >
                      <span className="material-symbols-outlined"> edit </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-secondary py-6">
                    #5
                  </th>
                  <td className="text-secondary py-6">Annika Mcbride</td>
                  <td className="text-secondary py-6">
                    annika.mcbride@mail.com
                  </td>
                  <td className="text-secondary py-6">Yes</td>
                  <td className="text-secondary py-6">台中</td>
                  <td className="py-6">
                    <button
                      type="button"
                      className="btn icon p-0"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdit"
                    >
                      <span className="material-symbols-outlined"> edit </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade "
        id="modalEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="modalEditLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content navbar-information">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalEditLabel">
                編輯使用者資料
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-success px-8 py-2"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button type="button" className="btn btn-success px-8 py-2">
                儲存
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
