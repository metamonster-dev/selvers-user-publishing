export const ddayCount = (endDay: string) => {
  const today = new Date();
  const target = new Date(endDay);
  target.setHours(24, 0, 0, 0);

  // 날짜 차이 계산 (milliseconds)
  const difference = target.getTime() - today.getTime();

  // 밀리초를 일(day)로 변환
  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (daysLeft > 0) {
    return `-${daysLeft}`;
  } else {
    return `+${Math.abs(daysLeft)}`;
  }
};
