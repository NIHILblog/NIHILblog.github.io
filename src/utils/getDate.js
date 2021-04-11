// 한국 시간을 이용해 변환
export const getKST = (date) => {
  const nowDate = new Date(date);

  const year = nowDate.getFullYear();

  let month = nowDate.getMonth() + 1;
  month = month >= 10 ? month : '0' + month;

  let day = nowDate.getDate();
  day = day >= 10 ? day : '0' + day;

  let hour = nowDate.getHours();
  hour = hour >= 10 ? hour : '0' + hour;

  let minutes = nowDate.getMinutes();
  minutes = minutes >= 10 ? minutes : '0' + minutes;

  return `${year}.${month}.${day}. ${hour}:${minutes}`;
};

// 협정세계시를 이용해 변환
export const getUTC = (date) => {
  const nowDate = new Date(date);
  const UTC = nowDate.getTime();
  const offset = nowDate.getTimezoneOffset();
  const UTCDate = new Date(UTC + (offset * 60000));

  const year = UTCDate.getFullYear();

  let month = UTCDate.getMonth() + 1;
  month = month >= 10 ? month : '0' + month;

  let day = UTCDate.getDate();
  day = day >= 10 ? day : '0' + day;

  let hour = UTCDate.getHours();
  hour = hour >= 10 ? hour : '0' + hour;

  let minutes = UTCDate.getMinutes();
  minutes = minutes >= 10 ? minutes : '0' + minutes;

  return `${year}.${month}.${day}. ${hour}:${minutes}`;
};