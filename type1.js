const type1 = function(afd) {
  const employerType = afd.slice(10,11);
  const employerIdentifier = afd.slice(11,25);
  const cnoCaepf = afd.slice(25,39);
  const employerName = afd.slice(39,189);
  const serial = afd.slice(189, 206);
  const beginDate = afd.slice(206, 216);
  const endDate = afd.slice(216, 226);
  const dateGen = afd.slice(226, 250);
  const afdVersion = afd.slice(250,253);
  const manufacturerType = afd.slice(253,254);
  const CnpjCpf = afd.slice(254,268);
  const model = afd.slice(268,298);
  const crc = afd.slice(298,302);
  // Print
  console.log('Cabeçalho');
  if (employerType === '1'){
    console.log('CNPJ: ', employerIdentifier)
    console.log('CNO: ', cnoCaepf)
  } else {
    console.log('CPF: ', employerIdentifier)
    console.log('CAEPF: ', cnoCaepf);
  }
  console.log('Nome Empregador: ', employerName);
  console.log('Serial: ', serial);
  console.log('Inicio registro: ', beginDate);
  console.log('Fim do registro: ', endDate);
  console.log('Arquivo gerado em: ', dateGen),
  console.log('Varsão AFD: ', afdVersion);
  manufacturerType === '1'?console.log('CNPJ: ',CnpjCpf):console.log('CPF: ',CnpjCpf);
  console.log('Modelo: ', model);
  console.log('CRC-16: ', crc);
};

module.exports = { type1 };