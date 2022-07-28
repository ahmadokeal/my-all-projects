function filtering(filters, as, fun) {
  filters.forEach((element) => {
    element.addEventListener("click", () => {
      filters.forEach((ele) => {
        ele.classList.remove("active");
      });
      element.classList.add("active");
      as.forEach((a) => {
        a.classList.remove("active");
      });
      fun(element, as);
    });
  });
}
let a = 5;
let arrTest = [9, 7, 2, 4];
function some() {
  return "something";
}
export { a, arrTest, some };
