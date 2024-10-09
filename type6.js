const type6 = function(afd){
  const dateTime = afd.slice(10,34);
  const eventType = afd.slice(34,36);
  console.log('Eventos sensíveis do REP');
  console.log('Data e hora: ', dateTime);
  switch (eventType) {
    case '01':
      console.log('Abertura do REP.');
      break;
    case '02':
      console.log('Retorno de energia.');
      break;
    case '03':
      console.log('Introdução de dispositivo externo de memória na Porta Fiscal.');
      break;
    case '04':
      console.log('Retirada de dispositivo externo de memória na Porta Fiscal.');
      break;
    case '05':
      console.log('Emissão da Relação Instantânea de Marcações.');
      break;
    case '06':
      console.log('Erro de impressão.');
      break;
    case '07':
      console.log('Disponibilidade de serviço.');
      break;
    case '08':
      console.log('Indisponibilidade de serviço.');
      break;
    default:
      console.log('Evento não identificado.');
      break;
  }
}

module.exports = { type6 };