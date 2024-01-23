"use client";

import React from "react";
import { Select, Pagination } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const PaginationSection = ({
  recordsPerPage,
  setRecordsPerPage,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div style={paginationContainer}>
      <Select
        placeholder="Limite por Página"
        withCheckIcon={false}
        rightSection={" "}
        data={["5", "10", "15"]}
        value={recordsPerPage}
        onChange={setRecordsPerPage}
      />

      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={setCurrentPage}
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      />
    </div>
  );
};

const paginationContainer = {
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'white',
  };

export default PaginationSection;