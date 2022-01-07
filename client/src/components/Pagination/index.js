import Pagination from "@mui/material/Pagination";

export default function CNPagination({ data, handleChange }) {
  if (!data.pages) {
    return null;
  }

  return (
    <Pagination
      count={data.pages}
      onChange={handleChange}
      page={data.page}
      shape="rounded"
      variant="outlined"
    />
  );
}
