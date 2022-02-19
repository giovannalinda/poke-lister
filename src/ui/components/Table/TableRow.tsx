type RowData = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

type RowProps = {
  data: RowData
}

export function TableRow({ data }: RowProps) {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.sprites.front_default}</td>
    </tr>
  )
}
