import { useEffect, useState } from "react"
import { users as data } from "./data"
import { tableStyle, tdStyle, thStyle, paginationStyle, paginationCtaStyle, activeCtaStyle } from "./DataTable.style"

const Table = () => {
  const [pageSize, setPageSize] = useState("5")
  const [users, setUsers] = useState(data)
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setUsers(data.slice(0, parseInt(pageSize)))
    setPages(Math.ceil(data.length / parseInt(pageSize)))
  }, [pageSize])

  const onPreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      const start = (currentPage - 1) * parseInt(pageSize)
      setUsers(data.slice(start, start + parseInt(pageSize)))
    }
  }

  const onNextClick = () => {
    if (currentPage < pages - 1) {
      setCurrentPage(currentPage + 1)
      const start = (currentPage + 1) * parseInt(pageSize)
      setUsers(data.slice(start, start + parseInt(pageSize)))
    }
  }

  const onPageCtaClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    const start = pageNumber * parseInt(pageSize)
    setUsers(data.slice(start, start + parseInt(pageSize)))
  }

  const isActive = (index: number) => currentPage === index
  
  return (
    <div>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th css={thStyle}>ID</th>
            <th css={thStyle}>Name</th>
            <th css={thStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* Assuming users is an array of objects with id, name, and age properties */}
          {users.map((user) => (
            <tr key={user.id}>
              <td css={tdStyle}>{user.id}</td>
              <td css={tdStyle}>{user.name}</td>
              <td css={tdStyle}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Users {users.length} of {data.length}</p>
      <select name="page-size" id="page-size" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <div css={paginationStyle}>
        <button css={paginationCtaStyle} disabled={currentPage === 0} onClick={onPreviousClick}>Previous</button>
        {Array.from({ length: pages }, (_, index) => (
          <button css={[paginationCtaStyle, isActive(index) ? activeCtaStyle : undefined]} onClick={() => onPageCtaClick(index)}>{index + 1}</button>
        ))}
        <button css={paginationCtaStyle} disabled={currentPage === pages - 1} onClick={onNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Table