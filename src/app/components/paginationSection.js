"use client";

import React from "react";
import { NativeSelect , Pagination } from "@mantine/core";
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
      <NativeSelect 
        label="Limite por Página"
        rightSection={" "}
        data={["5", "10", "20"]}
        value={recordsPerPage}
        onChange={(event) => OnChangeCompiled(event.currentTarget.value)}
        style={{width:150}}
      />
      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={setCurrentPage}
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        style={paginationCompo}
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

const paginationCompo = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
}

export default PaginationSection;