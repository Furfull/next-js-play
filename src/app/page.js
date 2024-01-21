import { Image, MantineProvider } from '@mantine/core';
import React from 'react';
import * as style from "./styles/bar.module.css"
import DataTable from "./dataTable.js"

export default function App() {  
  return (
    <MantineProvider>
        <div className={style.langBar}><img src="/src/app/assets/logoVillemor.png"/></div>
        <DataTable/>
    </MantineProvider>
  );
}