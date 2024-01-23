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

  function OnChangeCompiled(value) {
    setRecordsPerPage(value)
    setCurrentPage(1)
  }

  return (
    <div style={paginationContainer}>
      <Select
        placeholder="Limite por Página"
        withCheckIcon={false}
        rightSection={" "}
        data={["5", "10", "20"]}
        value={recordsPerPage}
        onChange={(value) => OnChangeCompiled(value)}
        allowDeselect={false}
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