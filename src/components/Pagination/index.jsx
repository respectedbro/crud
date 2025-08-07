const Pagination = ({pagination, currentPage, changePage}) => {
    return (
        <>
            <h2>Pagination</h2>
            <div className="pagination">
                {pagination.map((page, index) => (
                    <div key={index} onClick={() => changePage(page)}
                         className={`pagination-item${currentPage === page ? ' active' : ''}`}>{page}</div>
                ))}
            </div>
        </>
    )
}

export default Pagination