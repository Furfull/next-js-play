import { Image, MantineProvider } from '@mantine/core';
import React from 'react';
import DataTable from "./dataTable.js"

export default function App() {  
  return (
    <MantineProvider>
        <main>
        <Image src="https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2022__SL__03__SL__31__SL__b9902ea1-a18e-4b52-beb7-a080582ad4e1.png._PROC_CP65.png" width={350} height={"100%"}/>
        <DataTable/>
        </main>
    </MantineProvider>
  );
}