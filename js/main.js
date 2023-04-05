//The user will enter a date. Use that date to get 
// the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', whatHappenedThatDay )
function whatHappenedThatDay() {
  let whatDay = document.querySelector('input').value
const url = (`https://api.nasa.gov/planetary/apod?api_key=bGCyq1wm8NKvZ45QwgeJR95DstfhSWscgrOKuMbg&date=${whatDay}`)

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data)
  document.querySelector('h2').innerText = data.title
  document.querySelector('span').innerText = data.date
  document.querySelector('img').src = data.url
  document.querySelector('h3').innerText = data.explanation
})
.catch(err => {
  console.log(`error ${err}`)
});
}

// console.dir -> seeing objects