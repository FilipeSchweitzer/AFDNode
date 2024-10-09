const type4 = function(afd){
  const dateTime = afd.slice(10,34);
  const adjustedDateTime = afd.slice(34,58);
  const responsibleCpf = afd.slice(58,69);
  const crc = afd.slice(69,73);
  console.log('Ajuste do relógio');
  console.log('Data e hora: ', dateTime);
  console.log('Data e hora ajustada: ', adjustedDateTime);
  console.log('CPF responsável: ', responsibleCpf);
  console.log('CRC-16: ', crc);
}

module.exports = { type4 };