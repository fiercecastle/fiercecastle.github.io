/*// Define an array of objects, each containing the date and element ID
const timeDifferenceElements = [
  { date: "2023-09-06T19:54:25", id: "time-difference-1" },
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
*/
const timeDifferenceElements = [
  { date: "2023-10-19T18:31:45", id: "time-difference-1" },
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
  const months = Math.floor(weeks / 4); // Assuming a month has approximately 4 weeks
  const timeDifferenceElement = document.getElementById(element.id);

  // Set the innerHTML of the element based on the time difference
  if (seconds < 60) {
    if (seconds === 1) {
      timeDifferenceElement.innerHTML = `${seconds} second ago`;
    } else {
      timeDifferenceElement.innerHTML = `${seconds} seconds ago`;
    }
  } else if (minutes < 60) {
    const remainingSeconds = seconds % 60;
    if (minutes === 1) {
      if (remainingSeconds === 1) {
        timeDifferenceElement.innerHTML = `${minutes} minute, ${remainingSeconds} second ago`;
      } else {
        timeDifferenceElement.innerHTML = `${minutes} minute, ${remainingSeconds} seconds ago`;
      }
    } else {
      if (remainingSeconds === 1) {
        timeDifferenceElement.innerHTML = `${minutes} minutes, ${remainingSeconds} second ago`;
      } else {
        timeDifferenceElement.innerHTML = `${minutes} minutes, ${remainingSeconds} seconds ago`;
      }
    }
  } else if (hours < 24) {
    const remainingMinutes = minutes % 60;
    if (hours === 1) {
      if (remainingMinutes === 1) {
        timeDifferenceElement.innerHTML = `${hours} hour, ${remainingMinutes} minute ago`;
      } else {
        timeDifferenceElement.innerHTML = `${hours} hour, ${remainingMinutes} minutes ago`;
      }
    } else {
      if (remainingMinutes === 1) {
        timeDifferenceElement.innerHTML = `${hours} hours, ${remainingMinutes} minute ago`;
      } else {
        timeDifferenceElement.innerHTML = `${hours} hours, ${remainingMinutes} minutes ago`;
      }
    }
  } else if (days < 7) {
    const remainingHours = hours % 24;
    if (days === 0) {
      if (remainingHours === 1) {
        timeDifferenceElement.innerHTML = `${remainingHours} hour ago`;
      } else {
        timeDifferenceElement.innerHTML = `${remainingHours} hours ago`;
      }
    } else {
      if (days === 1) {
        timeDifferenceElement.innerHTML = `${days} day, ${remainingHours} hours ago`;
      } else {
        timeDifferenceElement.innerHTML = `${days} days, ${remainingHours} hours ago`;
      }
    }
  } else if (weeks < 4) {
    if (weeks === 1) {
      timeDifferenceElement.innerHTML = `${weeks} week, ${days % 7} days ago`;
    } else {
      timeDifferenceElement.innerHTML = `${weeks} weeks, ${days % 7} days ago`;
    }
  } else {
    if (months === 1) {
      timeDifferenceElement.innerHTML = `${months} month, ${days % 30} days ago`; // Approximate months with 30 days
    } else {
      timeDifferenceElement.innerHTML = `${months} months, ${days % 30} days ago`; // Approximate months with 30 days
    }
  }
});