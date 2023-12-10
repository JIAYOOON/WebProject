const questions = [    {        question: "1. 나는 새로운 사람들과의 만남을 즐긴다.",        options: {            A: "그렇다",            B: "아니다"        }    },    
                       {        question: "2. 나는 사람들과 함께 시간을 보내는 것을 선호한다.",        options: {            A: "그렇다",            B: "아니다"        }    },    
                       {        question: "3. 혼자 시간을 보내는 것이 싫다.",        options: {            A: "그렇다",            B: "아니다"        }    },    
                       {        question: "4. 새로운 아이디어를 생각해 내는 것을 즐긴다.",        options: {            A: "그렇다",            B: "아니다"        }    },    
                       {        question: "5. 실제 경험과 사실에 의존하지 않는다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "6. 나는 미래에 대한 비전을 갖고 있다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "7. 타인의 감정에 민감하게 반응한다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "8. 문제를 해결할 때 감정에 의존하게 된다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "9. 의사 결정 시 객관적인 논리를 중요시한다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "10. 계획 없이 일을 하는 것을 선호한다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "11. 계획을 세우고 구체적인 일정을 따르는 것을 선호한다.",        options: {            A: "그렇다",            B: "아니다"        }    },
                       {        question: "12. 일정을 빠르게 조직하고 결정한다.",        options: {            A: "그렇다",            B: "아니다"        }    }
                  ];

const mbtiTypes = {
    ISTJ: {
        type: "ISTJ",
        desc: "신중하고 규칙적인 성격으로, 집중력이 강하며 책임감이 강합니다.",
    },
    ISTP: {
        type: "ISTP",
        desc: "조용하고 실용적인 성격으로, 문제 해결능력이 뛰어납니다.",
    },
    ISFJ: {
        type: "ISFJ",
        desc: "사려 깊고 책임감이 강한 성격으로, 집단에서의 조화를 중요시합니다.",
    },
    ISFP: {
        type: "ISFP",
        desc: "침착하고 예술적인 감각을 가진 성격으로, 인간관계에 민감합니다.",
    },
    INTJ: {
        type: "INTJ",
        desc: "독창적이고 논리적인 사고를 가진 성격으로, 목적 달성을 위해 계획적으로 움직입니다.",
    },
    INTP: {
        type: "INTP",
        desc: "창의적이고 비판적인 사고를 가진 성격으로, 독립적인 문제 해결 능력을 가지고 있습니다.",
    },
    INFJ: {
        type: "INFJ",
        desc: "이상적인 세상을 추구하고, 동정심이 많은 성격으로, 예술적인 재능을 가지고 있습니다.",
    },
    INFP: {
        type: "INFP",
        desc: "이상적인 세상을 추구하고, 자신의 가치관에 따라 행동하는 성격으로, 예술적 재능을 가지고 있습니다.",
    },
    ESTJ: {
        type: "ESTJ",
        desc: "현실적이고 논리적인 사고를 가진 성격으로, 높은 리더십을 가지고 있습니다.",
    },
    ESTP: {
        type: "ESTP",
        desc: "활동적이고 개방적인 성격으로, 즉흥적으로 문제를 해결합니다.",
    },
    ESFJ: {
        type: "ESFJ",
        desc: "친절하고 협조적인 성격으로, 사람들과 함께 일하는 것을 좋아합니다.",
    },
    ESFP: {
        type: "ESFP",
        desc: "매력적이고 활발한 성격으로, 주변을 즐겁게 만드는 역할을 합니다.",
    },
    ENTJ: {
        type: "ENTJ",
        desc: "논리적이고 지도력이 있는 성격으로, 목적을 달성하기 위해 전략을 세웁니다.",
    },
    ENTP: {
        type: "ENTP",
        desc: "창의적이고 독창적인 사고를 가진 성격으로, 도전적인 상황에서 빛을 발합니다.",
    },
    ENFJ: {
        type: "ENFJ",
        desc: "타인의 성장을 도모하고, 사람들의 신뢰를 받는 성격으로, 친절하고 사교적입니다.",
    },
    ENFP: {
        type: "ENFP",
        desc: "열정적이고 독창적인 사고를 가진 성격으로, 새로운 것에 도전하는 것을 좋아합니다.",
    }
};

let currentQuestion = 0;
let answers = {};

const showQuestion = () => {
    const questionEl = document.querySelector("#question");
    questionEl.innerHTML = `
        <p>${questions[currentQuestion].question}</p>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question${currentQuestion + 1}" value="A" id="question${currentQuestion + 1}A">
            <label class="form-check-label" for="question${currentQuestion + 1}A">
                ${questions[currentQuestion].options.A}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="question${currentQuestion + 1}" value="B" id="question${currentQuestion + 1}B">
            <label class="form-check-label" for="question${currentQuestion + 1}B">
                ${questions[currentQuestion].options.B}
            </label>
        </div>
        <button id="next-btn" class="btn btn-primary mt-3">다음</button>
    `;
};

const showResult = (mbtiType) => {
    const resultEl = document.querySelector("#result");
    resultEl.classList.remove("d-none");
    const mbtiTypeEl = document.querySelector("#mbti-type");
    const mbtiDescEl = document.querySelector("#mbti-desc");
    mbtiTypeEl.innerText = mbtiType.type;
    mbtiDescEl.innerText = mbtiType.desc;
};

document.addEventListener("DOMContentLoaded", function() {
  showQuestion();

  document.getElementById("question").addEventListener("click", function(event) {
      if (event.target && event.target.id === "next-btn") {
          const answer = document.querySelector(`input[name="question${currentQuestion + 1}"]:checked`);
          if (answer) {
              answers[currentQuestion] = answer.value;
              currentQuestion++;
              if (currentQuestion < questions.length) {
                  showQuestion();
              } else {
                  let typeCounts = {
                      I: 0,
                      E: 0,
                      S: 0,
                      N: 0,
                      T: 0,
                      F: 0,
                      J: 0,
                      P: 0
                  };

                  if (answers[0] === 'A') {
                    typeCounts['E'] += 1; // 'A'일 때 Extraversion(E)에 1점 추가
                } else {
                    typeCounts['I'] += 1; // 'B'일 때 Introversion(I)에 1점 추가
                }

                  if (answers[1] === 'A') {
                  typeCounts['E'] += 1; 
                } else {
                  typeCounts['I'] += 1; 
                }

                  if (answers[2] === 'A') {
                typeCounts['E'] += 1; 
                 }else {
                typeCounts['I'] += 1; 
                } 

                 if (answers[3] === 'A') {
                  typeCounts['N'] += 1; 
                } else {
                 typeCounts['S'] += 1; 
                }

                 if (answers[4] === 'A') {
                  typeCounts['N'] += 1; 
                } else {
                 typeCounts['S'] += 1; 
                }

                 if (answers[5] === 'A') {
                  typeCounts['N'] += 1; 
                } else {
                  typeCounts['S'] += 1; 
                }

                 if (answers[6] === 'A') {
                 typeCounts['F'] += 1; 
                } else {
                 typeCounts['T'] += 1; 
                } 

                 if (answers[7] === 'A') {
                  typeCounts['F'] += 1; 
                } else {
                 typeCounts['T'] += 1; 
                } 

                 if (answers[8] === 'A') {
                 typeCounts['T'] += 1; 
                } else {
                 typeCounts['F'] += 1; 
                }

                 if (answers[9] === 'A') {
                 typeCounts['P'] += 1; 
                } else {
                  typeCounts['J'] += 1; 
                } 

                 if (answers[10] === 'A') {
                 typeCounts['J'] += 1; 
                } else {
                 typeCounts['P'] += 1; 
                }

                 if (answers[11] === 'A') {
                 typeCounts['J'] += 1; 
                } else {
                 typeCounts['P'] += 1; 
                }






                  let mbtiType = '';
                  mbtiType += typeCounts['E'] > typeCounts['I'] ? 'E' : 'I';
                  mbtiType += typeCounts['S'] > typeCounts['N'] ? 'S' : 'N';
                  mbtiType += typeCounts['T'] > typeCounts['F'] ? 'T' : 'F';
                  mbtiType += typeCounts['J'] > typeCounts['P'] ? 'J' : 'P';
                  showResult(mbtiTypes[mbtiType]);
              }
          }
      }
  });

  document.getElementById("result").addEventListener("click", function(event) {
      if (event.target && event.target.id === "restart-btn") {
          restartTest();
      }
  });
});

const restartTest = () => {
  currentQuestion = 0;
  answers = {};
  const resultEl = document.querySelector("#result");
  resultEl.classList.add("d-none");
  showQuestion();
};


    