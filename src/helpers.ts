// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};


// session storge on browser
export const isPersistentState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName);

  return sessionState && JSON.parse(sessionState);
};
