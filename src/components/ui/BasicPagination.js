import React from "react";
import { Pagination, Stack } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

function BasicPagination({ setPage }) {
  const posts = useSelector((state) => state.post.posts);
  return (
    <div className="flex justify-center m-10 ">
      <Stack spacing={2}>
        <Pagination
          onChange={(_, num) => setPage(num)}
          count={posts?.length}
          renderItem={(item) => (
            <PaginationItem
            style={{fontSize:"20px"}}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
}

export default BasicPagination;
