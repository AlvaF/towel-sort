module.exports = function towelSort(matrix) {
  let answ = []
  console.log(matrix)
  if (!matrix) return [];
  if (matrix.length == 0) return [];
  matrix.forEach((el, i) => {
    i % 2 == 0 ? answ.push(el) : answ.push(el.reverse());
  });
  return answ.flat();
}
