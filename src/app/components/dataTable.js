"use client";

import { React, useState } from "react";
import { ScrollArea, Table } from '@mantine/core';
import hearingsData from "../assets/hearings.json";
import PaginationSection from './paginationSection.js';

const DataTable = () => {
  const fixedJsonString = JSON.stringify(hearingsData);
  const jsonArray = JSON.parse(fixedJsonString);

  const transformedData = jsonArray.map(item => {
    const [date, hour] = item.date.split(' ');
    return {...item, date, hour
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = transformedData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(transformedData.length / recordsPerPage);

  const renderRows = records.map((element) => (
    <Table.Tr key={element.processNumber}>
      <Table.Td style={cellStyle}>{element.processNumber}</Table.Td>
      <Table.Td style={cellStyle}>{element.date}</Table.Td>
      <Table.Td style={cellStyle}>{element.hour}</Table.Td>
      <Table.Td style={cellStyle}>{element.court}</Table.Td>
      <Table.Td style={cellStyle}>{element.correspondent}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
    <ScrollArea style={{ maxHeight: '400px', overflowY: 'auto'}}>
      <div>
      <Table style={tableStyle}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={headerStyle}>Process Number</Table.Th>
            <Table.Th style={headerStyle}>Date</Table.Th>
            <Table.Th style={headerStyle}>Hour</Table.Th>
            <Table.Th style={headerStyle}>Court</Table.Th>
            <Table.Th style={headerStyle}>Correspondent</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{renderRows}</Table.Tbody>
      </Table>
      </div>
    </ScrollArea>
      <PaginationSection
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={setRecordsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  border: '1px solid #ddd',
  backgroundColor: 'white',
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

export default DataTable;
