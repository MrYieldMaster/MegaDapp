import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function TableExample(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Day</Th>
          <Th>Deposit</Th>
          <Th>Reward</Th>
          <Th>Wallet</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="text-center">
          <Td>2022-06-16</Td>
          <Td>500$</Td>
          <Td>100$</Td>
          <Td>0x....E43</Td>
        </Tr>
        <Tr className="text-center">
          <Td>2022-06-16</Td>
          <Td>500$</Td>
          <Td>100$</Td>
          <Td>0x....E43</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
