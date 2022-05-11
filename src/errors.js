const ErrorCodes = {
  LocationNotFound: 1,
  LocationSearchEmpty: 2,
};

const error = document.querySelector("span.error");

function displayError(code) {
  switch (code) {
    case ErrorCodes.LocationNotFound:
      error.textContent = "Location not found";
      break;
    case ErrorCodes.LocationSearchEmpty:
      error.textContent = "Cannot be empty!";
      break;
  }
}

function hideError() {
  error.textContent = "";
}

export { ErrorCodes, displayError, hideError };
