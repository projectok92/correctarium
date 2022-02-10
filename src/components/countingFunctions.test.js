const { isExtencionInList, priceCalc, timeCalc, roundedCurDateAndTime, deadlineCalc, deadlineFormating } = require('./countingFunctions');

describe('isExtencionInList', () => {
  test.each`
  fileExtention   |  result
  ${"doc"}        |  ${true}
  ${"rtf"}        |  ${true}
  ${"docx"}       |  ${true}
  ${"zip"}        |  ${false}
  ${"pdf"}        |  ${false}
  ${undefined}    |  ${false}

  `('isExtencionInList__table', ({ fileExtention, result }) => {
      expect(isExtencionInList(fileExtention)).toBe(result);
  });
});

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

describe('roundedCurDateAndTime', () => {
  test.each`
  date                                        |  result
  ${new Date("Sun, 1992-09-20, 09:50")}       |  ${new Date(1992, 8, 20, 10, 0)}
  ${new Date("Wed, 2022-02-09, 11:22")}       |  ${new Date(2022, 1, 9, 11, 30)}
  ${new Date("Wed, 2022-02-09, 23:53")}       |  ${new Date(2022, 1, 10, 0, 0)}

  `('roundedCurDateAndTime__table', ({ date, result }) => {
      expect(roundedCurDateAndTime(date)).toStrictEqual(result);
  });
});

describe('deadlineCalc', () => {
  test.each`
  time        | startDate                                  |  result
  ${1}        | ${new Date("Sut, 2022-01-01, 11:11")}      |  ${new Date("Mon, 2022-01-03, 11:00")}
  ${1}        | ${new Date("Wed, 2022-02-09, 11:11")}      |  ${new Date("Wed, 2022-02-09, 12:30")}
  ${55}       | ${new Date("Wed, 2022-02-09, 15:15")}      |  ${new Date("Thu, 2022-02-17, 16:30")}
  ${55.5}     | ${new Date("Wed, 2022-02-09, 15:15")}      |  ${new Date("Thu, 2022-02-17, 17:00")}
  ${1}        | ${new Date("Wed, 2022-02-09, 17:56")}      |  ${new Date("Wed, 2022-02-09, 19:00")}
  ${2.5}      | ${new Date("Wed, 2022-02-09, 17:56")}      |  ${new Date("Thu, 2022-02-10, 11:30")}
  ${5.5}      | ${new Date("Wed, 2022-02-09, 10:55")}      |  ${new Date("Wed, 2022-02-09, 16:30")}
  ${5.5}      | ${new Date("Wed, 2022-02-09, 18:22")}      |  ${new Date("Thu, 2022-02-10, 15:00")}

  `('deadlineCalc__table', ({ time, startDate, result }) => {
      expect(deadlineCalc(time, startDate)).toStrictEqual(result);
  });
});

describe('deadlineFormating', () => {
  test.each`
  time        | startDate                                  |  result
  ${1}        | ${new Date("Sut, 2022-01-01, 11:11")}      |  ${"Термін здавання: 03.01.22 о 11:00"}
  ${1}        | ${new Date("Wed, 2022-02-09, 11:11")}      |  ${"Здамо за: одну годину"}
  ${55}       | ${new Date("Wed, 2022-02-09, 15:15")}      |  ${"Термін здавання: 17.02.22 о 16:30"}
  ${55.5}     | ${new Date("Wed, 2022-02-09, 15:15")}      |  ${"Термін здавання: 17.02.22 о 17:00"}
  ${1}        | ${new Date("Wed, 2022-02-09, 17:56")}      |  ${"Здамо за: одну годину"}
  ${2}        | ${new Date("Wed, 2022-02-09, 13:56")}      |  ${"Здамо за: дві години"}
  ${3}        | ${new Date("Wed, 2022-02-09, 10:10")}      |  ${"Здамо за: три години"}
  ${2.5}      | ${new Date("Wed, 2022-02-09, 17:56")}      |  ${"Термін здавання: 10.02.22 о 11:30"}
  ${5.5}      | ${new Date("Wed, 2022-02-09, 10:55")}      |  ${"Термін здавання: 09.02.22 о 16:30"}
  ${5.5}      | ${new Date("Wed, 2022-02-09, 18:22")}      |  ${"Термін здавання: 10.02.22 о 15:00"}
  ${3}        | ${new Date("Thu, 2022-02-10, 19:55")}      |  ${"Термін здавання: 11.02.22 о 13:00"}
  ${1}        | ${new Date("Thu, 2022-02-10, 22:55")}      |  ${"Термін здавання: 11.02.22 о 11:00"}

  `('deadlineFormating__table', ({ time, startDate, result }) => {
      expect(deadlineFormating(time, startDate)).toStrictEqual(result);
  });
});
