console.log('news website')

newsAccordion = document.getElementById('newsAccordion');

let apiKey = 'bc55defa9a46cbf2578986de4bb027cc';

//create a get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=bc55defa9a46cbf2578986de4bb027cc&lang=en&q=corona&country=in`, true);

//what to do when response is ready
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHTML = ""
    articles.forEach(function (element, index) {
      let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
  <h2 class="mb-0">
    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">

      ${element['title']}
    </button>
  </h2>
</div>

<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
  <div class="card-body">
    ${element['content']}
    <a href="${element['url']}" target="_blank">Read more</a>
  </div>
</div>
</div>`
      newsHTML += news
    });
    newsAccordion.innerHTML = newsHTML;
  }
  
  else {
    console.log('some error occurred')
  }
}
xhr.send()

