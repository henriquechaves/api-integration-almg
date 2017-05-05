import React from 'react';
import '../../css/table.css';
import { Accordion, Panel, Table } from 'react-bootstrap';
import _ from 'underscore';

const tableBody = ({ ...props }, key) => {
  const contentTable = props.data
  return <Accordion>
    <Panel
      header={`Contrato: ${contentTable.seqDocumentoContrato} --- Fornecedor: ${contentTable.nomeFornecedor}`}
      eventKey={key}
      bsStyle="info">
      <Table
        className="table"
        responsive
        fill
        condensed>
        <thead>
          <tr>
            {
              _.map(contentTable, (body, key) => {
                return <th key={key}>{key}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            {_.map(contentTable, (body, key) => {
              return <td key={key}>{
                _.isObject(body)
                  ? body.$
                  : body
              }</td>
            })}
          </tr>
        </tbody>
      </Table>
    </Panel>
  </Accordion>
}

export default tableBody

