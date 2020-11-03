let qform = document.getElementById("qform"),
  qs = [
    document.getElementById("q1"),
    document.getElementById("q2"),
    document.getElementById("q3"),
  ],
  ans = [4, 2550, 4958],
  grade = document.getElementById("grade");
qform.addEventListener(
  "submit",
  function (event) {
    let num_correct = 0,
      num_questions = qs.length,
      grade_HTML = "";
    event.preventDefault();
    for (let i = 0; i < num_questions; i++) {
      if (+qs[i].value === ans[i]) {
        num_correct += 1;
      }
    }

    grade_HTML = `<meter min="0" max="${num_questions}"`;
    grade_HTML += `value="${num_correct}">`;
    grade_HTML += `${num_correct} </meter>`;
    grade_HTML += `<span>${num_correct} / 3 Correct</span>`;
    grade.innerHTML = grade_HTML;
  },
  false
);
