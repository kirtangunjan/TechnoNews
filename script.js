
fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
.then(response=>response.json())
.then(data=>{
    const newslist=document.getElementById('Newslist')
    data.items.forEach(element => {
        console.log(data)
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const h5=document.createElement('h5');
        const h6=document.createElement('h6');
        const img = document.createElement('img');
        const a = document.createElement('a');
  
        const descriptionWithoutTags = element.description.replace(/(<([^>]+)>)/gi, "");
        


        h2.textContent=element.title;
        h5.textContent='Author : '+element.author;
        h6.textContent='ReleaseDate : '+element.pubDate;
        img.src = element.image; // Assuming the image URL is in the "enclosure" field
        img.alt = element.title;
        a.textContent='ReadMore';
        a.href=element.link
        a.target='_blank'
        li.appendChild(h2);
        li.appendChild(h5);
        li.appendChild(h6);

        li.appendChild(document.createTextNode(descriptionWithoutTags));
        li.appendChild(a);
        newslist.appendChild(li);
    });
})
