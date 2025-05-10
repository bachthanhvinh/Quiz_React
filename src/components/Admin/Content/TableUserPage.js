import { useEffect, useState } from "react";
import { getAllUser, getUserWithPaginate } from "../../../services/apiServices";
import ReactPaginate from "react-paginate";

const TableUserPage = (props) => {
  let LIMIT_USER = 7;
  const {
    isUserAdded,
    handleClickBtnUpdate,
    handleClickBtnView,
    handleClickBtnDelete,
    setCurrentPage,
    currentPage,
  } = props;
  const [listUsers, setListUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  //componentDidMount
  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1);
    fetchPaginationUser(+event.selected + 1);
    // console.log(`User requested page number ${event.selected}`);
  };

  useEffect(() => {
    // axiosApi();
    fetchPaginationUser(currentPage);
  }, [isUserAdded]);
  //   const axiosApi = async () => {
  //     const res = await getAllUser();
  //     if (res.EC === 0) {
  //       setListUsers(res.DT);
  //     }
  //   };
  const fetchPaginationUser = async (page) => {
    const res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  return (
    <>
      <table className="table table-hover table-bordered  ">
        <thead className="table-primary text-center  ">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleClickBtnView(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        handleClickBtnUpdate(item);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"5"}> Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-5">
        {pageCount > 0 && (
          <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={Math.min(currentPage - 1, pageCount - 1)}
          />
        )}
      </div>
    </>
  );
};

export default TableUserPage;
