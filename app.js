const quiz = [
  {
    question: '東北地方にあるのはどれ？',
    answers: [ '青森県', '群馬県', '神奈川県', '大阪府'],
    correct: '青森県'
  }, {
    question: '鳥類はどれ？',
    answers: [ 'あざらし', 'ペンギン', 'シロクマ', 'とびうお'],
    correct: 'ペンギン'
  }, {
    question: '現在の内閣総理大臣はどれ？',
    answers: [ '菅義偉', '安倍晋三', '伊藤博文', '麻生太郎'],
    correct: '菅義偉'
  }, {
    question: '関東地方ではないのはどれ？',
    answers: [ '東京都', '栃木県', '千葉県', '愛知県'],
    correct: '愛知県'
  }, {
    question: '新幹線が開通していない県はどれ？',
    answers: [ '神奈川県', '静岡県', '千葉県', '栃木県'],
    correct: '千葉県'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}