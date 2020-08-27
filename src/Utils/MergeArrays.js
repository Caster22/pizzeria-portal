export const mergeBookingsAndEvents = (events, bookings) => {
  const newArray = [];
  newArray.push(
    ...events.map(event => (
      {...event, type:'event'}
    ))
  );

  newArray.push(
    ...bookings.map(booking => (
      {...booking, type:'booking'}
    ))
  );
  return newArray;
};

export const changeFormatOfTime = value => parseFloat(value.replace(':00', '').replace(':30', '.5'));
