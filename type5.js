const type5 = function(afd){
  const dateTime = afd.slice(10,34);
  const typeOperation = afd.slice(34,35);
  const employeeCpf = afd.slice(35,47);
  const employeeName = afd.slice(47,99);
  const employeeData = afd.slice(99,103);
  const responsibleCpf = afd.slice(103,114);
  const crc = afd.slice(114,118);
  console.log('Inclusão, alteração ou exclusão de empregado no REP');
  console.log('Data e hora: ', dateTime);
  switch (typeOperation){
    case 'I':
      console.log('Inclusão');
      break;
    case 'A':
      console.log('Alteração');
      break;
    case 'E':
      console.log('Exclusão');
      break
    default:
      console.log('Operação: ', typeOperation)
  }
  console.log('CPF empregado: ', employeeCpf);
  console.log('Nome empregado: ', employeeName);
  console.log('Dados empregado: ', employeeData);
  console.log('CPF responsável: ', responsibleCpf);
  console.log('CRC-16: ', crc);
}

module.exports = { type5 };