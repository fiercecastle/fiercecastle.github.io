// Define an array of objects, each containing the date and element ID
const timeDifferenceElements = [
  { date: "2023-08-09T23:26:59", id: "time-difference-1" },
  { date: "2023-08-10T11:20:58", id: "time-difference-2" },
  // Add more objects here as needed
];

// Loop through the array and calculate the time differences for each date
timeDifferenceElements.forEach((element) => {
  const givenDate = new Date(element.date);
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - givenDate);
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const timeDifferenceElement = document.getElementById(element.id);

  // Set the innerHTML of the element based on the time difference
  if (seconds < 60) {
    timeDifferenceElement.innerHTML = `${seconds} seconds ago`;
  } else if (minutes < 60) {
    timeDifferenceElement.innerHTML = `${minutes} minutes ago`;
  } else if (hours < 24) {
    timeDifferenceElement.innerHTML = `${hours} hours ago`;
  } else if (days < 7) {
    const remainingHours = hours % 24;
    if (days === 0) {
      timeDifferenceElement.innerHTML = `${remainingHours} hours ago`;
    } else {
      timeDifferenceElement.innerHTML = `${days} days, ${remainingHours} hours ago`;
    }
  } else {
    timeDifferenceElement.innerHTML = `${weeks} weeks ago`;
  }
});
