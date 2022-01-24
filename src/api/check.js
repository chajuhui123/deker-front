export function isEmail(asValue) {
  var regExp =
    // eslint-disable-next-line no-useless-escape
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export function isPassword(asValue) {
  var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //  8자 이상 영문, 숫자, 특문 조합
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export const calculateRemainingTime = (expirationTime) => {
  if (!!expirationTime) {
    const currentTime = new Date().getTime(); // 현재 타임스탬프가 찍히고, getTime에 의해 밀리초 단위로 변환된다.
    const yyyy = expirationTime.substring(0, 4);
    const MM = expirationTime.substring(4, 6);
    const dd = expirationTime.substring(6, 8);
    const hh = expirationTime.substring(8, 10);
    const mm = expirationTime.substring(10, 12);
    const ss = expirationTime.substring(12, 14);
    console.log(yyyy, MM, dd, hh, mm, ss);
    const adjExpirationTime = new Date(yyyy, MM, dd, hh, mm, ss).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    console.log("현재시간", currentTime);
    console.log("만료시간", adjExpirationTime);
    console.log("유효시간", remainingDuration);
    return remainingDuration;
  }
};
