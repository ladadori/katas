//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

export default (dna) => {
    const rna = [];
    const dnaToArray = dna.split('');
    for (const nucleotide of dnaToArray) {
      switch (nucleotide) {
        case 'G':
          rna.push('C');
          break;
        case 'C':
          rna.push('G');
          break;
        case 'T':
          rna.push('A');
          break;
        case 'A':
          rna.push('U');
          break;
        default:
          rna.push('error');
      }
    }
    const resultRna = rna.indexOf('error') === -1 ?
    rna.join('') :
    null;
    return resultRna;
  };