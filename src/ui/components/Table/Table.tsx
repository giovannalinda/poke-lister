import MaterialTable from 'material-table'
import { TableRow } from './TableRow'

type RowData = {
  name: string
  image: number
}

export function Table() {
  const data = [
    { name: 'Giovanna', image: 18 },
    { name: 'John', image: 2 },
  ]

  const columns = [
    {
      title: 'Image',
      field: 'image',
    },
    {
      title: 'Name',
      field: 'name',
    },
  ]

  return (
    <>
      <MaterialTable<RowData>
        title='Pokémons'
        style={{ boxShadow: 'none', background: 'transparent' }}
        data={data}
        columns={columns}
        components={{
          Row: TableRow,
        }}
      />
    </>
  )
}
