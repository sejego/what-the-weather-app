const ErrorCodes = {
  LocationNotFound: 1,
  LocationSearchEmpty: 2,
};

const error = document.getElementById("error");

function displayError(code) {
  switch (code) {
    case ErrorCodes.LocationNotFound:
      error.style.height = "40px";
      error.textContent = "Location not found";
      break;
    case ErrorCodes.LocationSearchEmpty:
      error.style.height = "40px";
      error.textContent = "Cannot be empty!";
      break;
  }
}

function hideError() {
  //error.style.visibility = "hidden";
  error.style.height = "0px";
  error.textContent = "";
}

export { ErrorCodes, displayError, hideError };
