const type3 = function(afd) {
  const dateTime = afd.slice(10,34);
  const employeeCpf = afd.slice(34,46);
  const crc = afd.slice(47,50);
  console.log('Marcação de ponto para REP-C e REP-A');
  console.log('Data e hora: ', dateTime);
  console.log('CPF empregado: ', employeeCpf);
  console.log('CRC-16: ', crc);
}

module.exports = { type3 }