document.addEventListener("DOMContentLoaded", function () {
    const dropdownLink = document.getElementById("dropdownLink");
    const countryDropdown = document.getElementById("countryDropdown");
    const reflect = document.getElementById("result-text");

    dropdownLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      countryDropdown.classList.toggle("hidden");

    });

    countryDropdown.addEventListener("change", function () {
      const selectedCountry = countryDropdown.value;
      reflect.textContent = ` ${selectedCountry}`;
      countryDropdown.classList.add("hidden");
    });
  });