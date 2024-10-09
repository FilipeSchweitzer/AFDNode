const type2 = function(afd){
  const dateTime = afd.slice(10,34);
  const responsibleCpf = afd.slice(34,48);
  const employerType = afd.slice(48,49);
  const employerCnpjCpf = afd.slice(49,63);
  const cnoCaepf = afd.slice(64,77);
  const employerName = afd.slice(77, 227);
  const placeServices = afd.slice(227, 327);
  const crc = afd.slice(327,331);
  console.log('Inclusão ou alteração da identificação da empresa no REP');
  console.log('Data e hora: ', dateTime);
  console.log('CPF responsável: ', responsibleCpf);
  if(employerType === '1') {
    console.log('CNPJ: ', employerCnpjCpf);
    console.log('CNO: ', cnoCaepf);
  }else{
    console.log('CPF: ', employerCnpjCpf);
    console.log('CAEPF: ', cnoCaepf);
  }
  console.log('Nome empregador: ', employerName);
  console.log('Local serviço: ', placeServices);
  console.log('CRC-16: ', crc);
}

module.exports = { type2 };