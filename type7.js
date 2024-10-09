const type7 = function(afd){
  const dateTime = afd.slice(10,34);
  const employeeCpf = afd.slice(34,46);
  const dateTimeRegistration = afd.slice(46,70);
  const collectorIdentifier = afd.slice(70,72);
  const status = afd.slice(72,73);
  const hashCode = afd.slice(73,137);
  console.log('Marcação de ponto para REP-P');
  console.log('Data e hora: ', dateTime);
  console.log('CPF empregado: ', employeeCpf);
  console.log('Data e hora da gravação do registro: ',dateTimeRegistration)
  switch (collectorIdentifier){
    case '01':
      console.log('Aplicativo mobile.');
      break;
    case '02':
      console.log('Browser (navegador internet).');
      break;
    case '03':
      console.log('Aplicativo desktop.');
      break
    case '04':
      console.log('Dispositivo eletrônico.');
      break
    case '05':
      console.log('Outro dispositivo eletrônico não especificado acima.');
      break
    default:
      console.log('Coletor não identificado: ', typeOperation)
  }
  if (status === '0'){
    console.log('Marcação on-line.');
  }else {
    console.log('Marcação off-line.');
  }
  console.log('Código hash: ', hashCode);
}

module.exports = { type7 };