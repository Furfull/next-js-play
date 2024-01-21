"use client";

import {React, useState} from "react";
import * as obj from "./assets/hearings.json";
import { Select, Table, Pagination } from '@mantine/core';
import {
    IconArrowLeft,
    IconArrowRight,
  } from '@tabler/icons-react';

export default function DataTable() {
    const fixedJsonString = JSON.stringify(obj);
    const jsonArray = JSON.parse(fixedJsonString);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setrecordsPerPage] = useState(5);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = jsonArray.default.slice(firstIndex, lastIndex)
    const npage = Math.ceil(jsonArray.default.length / recordsPerPage)
  
    const rows = records.map((element) => (
      <Table.Tr key={element.processNumber}>
        <Table.Td style={cellStyle}>{element.processNumber}</Table.Td>
        <Table.Td style={cellStyle}>{element.date}</Table.Td>
        <Table.Td style={cellStyle}>{element.court}</Table.Td>
        <Table.Td style={cellStyle}>{element.correspondent}</Table.Td>
      </Table.Tr>
    ));
  
    return ( <div>
      <Table style={tableStyle}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={headerStyle}>Process Number</Table.Th>
            <Table.Th style={headerStyle}>Date</Table.Th>
            <Table.Th style={headerStyle}>Court</Table.Th>
            <Table.Th style={headerStyle}>Correspondent</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      
      <div style={paginationContainer}>

        <Select
        placeholder="Limite por Página"
        withCheckIcon={false}
        rightSection={" "}
        data={["5","10","15"]} 
        value={recordsPerPage} 
        onChange={setrecordsPerPage} />;

        <Pagination total={npage} value={currentPage} onChange={setCurrentPage} mt="sm"
                nextIcon={IconArrowRight}
                previousIcon={IconArrowLeft}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width:"100%"}}/>
        </div>
      </div>
    );
}

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd', 
  };
  
  const headerStyle = {
    backgroundColor: '#f2f2f2', 
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };
  
  const cellStyle = {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

const paginationContainer = {
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
    alignItems: "center",
  }