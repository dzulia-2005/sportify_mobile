export const formatPackagePeriod = (startsAtUtc: string, endsAtUtc: string) => {
  const start = new Date(startsAtUtc);
  const end = new Date(endsAtUtc);
  const now = new Date();

  const startText = start.toLocaleString('ka-GE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const endText = end.toLocaleString('ka-GE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const msLeft = end.getTime() - now.getTime();
  const isExpired = msLeft <= 0;

  const totalMinutesLeft = Math.max(0, Math.floor(msLeft / 60000));
  const daysLeft = Math.floor(totalMinutesLeft / (60 * 24));
  const hoursLeft = Math.floor((totalMinutesLeft % (60 * 24)) / 60);

  let leftLabel = '';
  if (!isExpired) {
    if (daysLeft > 0) leftLabel = `left ${daysLeft} day${hoursLeft ? ` ${hoursLeft} Hr.` : ''}`;
    else leftLabel = `left ${hoursLeft} Hr`;
  }

  return { startText, endText, isExpired, leftLabel };
};
