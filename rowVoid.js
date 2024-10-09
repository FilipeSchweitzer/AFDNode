const columns = [
  {
    getter: "idMatricula",
    headerName: "Matrícula",
    isVisible: true,
    isSortable: true,
    align: "left",
  },
  {
    getter: "name",
    headerName: "Nome",
    isVisible: true,
    isSortable: true,
    align: "left",
  },
  {
    getter: "pis",
    headerName: "Pis",
    isVisible: true,
    isSortable: true,
    align: "left",
  },
  {
    getter: "cpf",
    headerName: "CPF",
    isVisible: true,
    isSortable: true,
    align: "left",
  },
  {
    getter: "biometria",
    headerName: "Biometria",
    isVisible: true,
    isSortable: true,
    align: "center",
  },
  {
    getter: "barcode",
    headerName: "Código de barras",
    isVisible: true,
    isSortable: true,
    align: "center",
  },
  {
    getter: "mifare",
    headerName: "Cartão Mifare",
    isVisible: true,
    isSortable: true,
    align: "center",
  },
  {
    getter: "action",
    headerName: "Ações",
    isVisible: true,
    isSortable: false,
    align: "right",
  },
];

const rowVoid = (col) => {
  let row = "[{ "
  for (i in col){
    if (i > 0) {row = row + ", "} 
    row = row + `"${col[i].getter}": ""`
  }
  row = row + "}]"

  return row
}

console.log(JSON.parse(rowVoid(columns)))