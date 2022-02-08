const { isExtencionInList, priceCalc, timeCalc, roundedCurDateAndTime, deadlineCalc, deadlineFormating } = require('./countingFunctions');

describe('priceCalc', () => {
    test.each`
    language      |  textLength    |  fileExtention     |  result
    ${"ukr"}      |  ${50}         |  ${undefined}      |  ${50}
    ${"ukr"}      |  ${7777}       |  ${undefined}      |  ${389}
    ${"ukr"}      |  ${1777}       |  ${undefined}      |  ${89}
    ${"ukr_rus"}  |  ${50}         |  ${"docx"}         |  ${50}
    ${"ukr_rus"}  |  ${77777}      |  ${"docx"}         |  ${3889}
    ${"ukr"}      |  ${1777}       |  ${"docx"}         |  ${89}
    ${"ukr"}      |  ${50}         |  ${"zip"}          |  ${60}
    ${"ukr"}      |  ${1777}       |  ${"zip"}          |  ${107}
    ${"eng"}      |  ${50}         |  ${undefined}      |  ${120}
    ${"ukr_eng"}  |  ${1777}       |  ${undefined}      |  ${214}
    ${"ukr_eng"}  |  ${88888}      |  ${undefined}      |  ${10667}
    ${"eng"}      |  ${50}         |  ${"rtf"}          |  ${120}
    ${"eng_ukr"}  |  ${1777}       |  ${"rar"}          |  ${257}
    ${"eng_ukr"}  |  ${7777}       |  ${"rar"}          |  ${1121}
    ${"eng"}      |  ${55555}      |  ${"rar"}          |  ${8001}

    `('priceCalc__table', ({ language, textLength, fileExtention, result }) => {
        expect(priceCalc(language, textLength, fileExtention)).toBe(result);
    });
});

describe('timeCalc', () => {
  test.each`
  language      |  textLength    |  fileExtention     |  result
  ${"ukr"}      |  ${50}         |  ${undefined}      |  ${1}
  ${"ukr"}      |  ${7777}       |  ${undefined}      |  ${6.5}
  ${"ukr"}      |  ${1777}       |  ${undefined}      |  ${2}
  ${"ukr"}      |  ${1333}       |  ${undefined}      |  ${1.5}
  ${"ukr_rus"}  |  ${50}         |  ${"docx"}         |  ${1}
  ${"ukr_rus"}  |  ${77777}      |  ${"docx"}         |  ${59}
  ${"ukr"}      |  ${1777}       |  ${"docx"}         |  ${2}
  ${"ukr"}      |  ${50}         |  ${"zip"}          |  ${1.5}}
  ${"ukr"}      |  ${1777}       |  ${"zip"}          |  ${2.5}
  ${"eng"}      |  ${50}         |  ${undefined}      |  ${1}
  ${"ukr_eng"}  |  ${1777}       |  ${undefined}      |  ${6}
  ${"ukr_eng"}  |  ${88888}      |  ${undefined}      |  ${267.5}
  ${"eng"}      |  ${50}         |  ${"rtf"}          |  ${1}
  ${"eng_ukr"}  |  ${1777}       |  ${"rar"}          |  ${7.5}
  ${"eng_ukr"}  |  ${7777}       |  ${"rar"}          |  ${29}
  ${"eng"}      |  ${55555}      |  ${"rar"}          |  ${201}

  `('timeCalc__table', ({ language, textLength, fileExtention, result }) => {
      expect(timeCalc(language, textLength, fileExtention)).toBe(result);
  });
});
