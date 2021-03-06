const isExtencionInList = (fileExtention) => {
  const extensionsList = ['doc', 'docx', 'rtf'];
  return extensionsList.includes(fileExtention);
};

const priceCalc = (language, textLength, fileExtention) => {
  const pricePerChar = language.includes('eng') ? 0.12 : 0.05;

  let finalPrice = Math.ceil(textLength * pricePerChar);

  if (pricePerChar === 0.12 && finalPrice < 120) {
    finalPrice = 120;
  } else if (pricePerChar === 0.05 && finalPrice < 50) {
    finalPrice = 50;
  }

  if (fileExtention && !isExtencionInList(fileExtention)) {
    finalPrice = Math.ceil(finalPrice + (finalPrice * 0.2));
  }
  
  return finalPrice;
};

const timeCalc = (language, textLength, fileExtention) => {
  const charsPerHour = language.includes('eng') ? 333 : 1333;

  let totalTime = ((0.5 + Math.ceil(2 * (textLength / charsPerHour)) / 2));

  if (textLength < charsPerHour) {
    totalTime = 1;
  }

  if (fileExtention && !isExtencionInList(fileExtention)) {
    totalTime = totalTime + Math.ceil(2 * (totalTime * 0.2)) / 2;
  }
  
  return totalTime;
};

const roundedCurDateAndTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dd = date.getDate();
  const hh = date.getMinutes() > 30 ? date.getHours() + 1 : date.getHours();
  const mm = (date.getMinutes() >= 1 && date.getMinutes() <= 30) ? 30 : 0;

  return new Date(year, month, dd, hh, mm);
};

const deadlineCalc = (time, startDate) => {
  const timeNeededForWork = time;
  const workingHours = 9;
  let hoursToAdd;
  let minutesToAdd;
  let businessDaysToAdd = Math.floor(timeNeededForWork / workingHours);;
  let businessWeeksToAdd = 0;

  if (businessDaysToAdd >= 5) {
    businessWeeksToAdd = Math.floor(businessDaysToAdd / 5);
    businessDaysToAdd = businessDaysToAdd % 5;
  }

  if (timeNeededForWork === Math.round(timeNeededForWork)) {
    hoursToAdd = timeNeededForWork;
    minutesToAdd = 0;
  } else {
    hoursToAdd = Math.floor(timeNeededForWork);
    minutesToAdd = 30;
  }

  hoursToAdd = Math.floor(timeNeededForWork % workingHours);

  let date = roundedCurDateAndTime(startDate);
  let thisDay = date.getDay();

  //If task comes before 10:00 and after 19:00
  date.getHours() <10 && date.setHours(10) && date.setMinutes(0);

  if (date.getHours() >= 19) {
    date.setDate(date.getDate() + 1);
    date.setHours(10);
    date.setMinutes(0);
    thisDay += 1;
    if (thisDay === 7) thisDay = 0;
  } 

  //If task comes on weekend
  thisDay === 0 && date.setDate(date.getDate() + 1) && date.setHours(10) && date.setMinutes(0);
  thisDay === 6 && date.setDate(date.getDate() + 2) && date.setHours(10) && date.setMinutes(0);
  thisDay === 5 && date.getHours() >= 19 && date.setDate(date.getDate() + 3) && date.setHours(10) && date.setMinutes(0);

  const businessDaysToAddWithWeekend = thisDay + businessDaysToAdd >= 7 ? businessDaysToAdd + 2 : businessDaysToAdd;
  date.setDate(date.getDate() + (businessWeeksToAdd * 7) + businessDaysToAddWithWeekend);
  
  if ((date.getHours() + hoursToAdd) <= 19) {

    date.setHours(date.getHours() + hoursToAdd);
    date.setMinutes(date.getMinutes() + minutesToAdd);

    if (date.getHours() === 19 && date.getMinutes() === 30) {
      date.setDate(date.getDate() + 1);
      date.setHours(10);
      date.setMinutes(30);
    }

    if (date.getHours() === 20) {
      date.setDate(date.getDate() + 1);
      date.setHours(11);
      date.setMinutes(0);
    }

  } else if (((date.getHours() + hoursToAdd) > 19) && ((date.getHours() + hoursToAdd) < 24)) {
    date.setDate(date.getDate() + 1);
    date.setHours(10 + (date.getHours() + hoursToAdd - 19));
    date.setMinutes(date.getMinutes() + minutesToAdd);
  }
  
  date.getDay() === 6 && date.setDate(date.getDate() + 2);

  return date;
};

const deadlineFormating = (time, startDate) => {
  const currentDateAndTime = roundedCurDateAndTime(startDate);
  const deadlineDateAndTime = deadlineCalc(time, startDate);

  const timeDifference = (deadlineDateAndTime - currentDateAndTime) / 60 / 60 / 1000;

  if (currentDateAndTime.getHours() >= 10 && ((currentDateAndTime.getHours() + timeDifference) <= 19 && timeDifference <= 3)) {
    if (timeDifference === 1) {
      return '?????????? ????: ???????? ????????????';
    }else if (timeDifference > 1 && timeDifference <= 1.5) {
      return '?????????? ????: ?????????????? ????????????';
    } else if (timeDifference > 1.5 && timeDifference <= 2) {
      return '?????????? ????: ?????? ????????????';
    } else if (timeDifference > 2 && timeDifference <= 2.5) {
      return '?????????? ????: ?????? ?? ?????????????????? ????????????';
    } else if (timeDifference > 2.5 && timeDifference <= 3) {
      return '?????????? ????: ?????? ????????????';
    }
  } else {
    const dd = deadlineDateAndTime.getDate() < 10 ? `0${deadlineDateAndTime.getDate()}` : deadlineDateAndTime.getDate();
    const mm = deadlineDateAndTime.getMonth() + 1 < 10 ? `0${deadlineDateAndTime.getMonth() + 1}` : deadlineDateAndTime.getMonth() + 1;
    const yy = `${deadlineDateAndTime.getFullYear()}`.slice(-2);
    const h = deadlineDateAndTime.getHours();
    const m = deadlineDateAndTime.getMinutes() === 0 ? '00' : '30';

    return `???????????? ????????????????: ${dd}.${mm}.${yy} ?? ${h}:${m}`;
  }
};

export { isExtencionInList, priceCalc, timeCalc, roundedCurDateAndTime, deadlineCalc, deadlineFormating }
