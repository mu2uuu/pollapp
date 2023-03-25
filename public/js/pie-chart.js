const ctx = document.getElementById('chart');
const $chart = document.querySelector('#chart');
let chose = $chart.dataset.chose;
let agree = $chart.dataset.agree;

// 配列で渡しても文字列で受け取ってしまっているので、配列に格納する
chose = chose.split(',');
agree = agree.split(',');

const data = {
  labels: chose,
  datasets: [{
    data: agree,
    hoverOffset: 4
  }]
};

new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    plugins: {
      colorschemes: {
        scheme: 'tableau.Tableau20'
      }
    }
  }
})