const apikey='bf5dc0abdf08424e8448ba58c2c64ec3';
    const blogcont=document.getElementById("blog-cont");
    const searchfield=document.getElementById("searchInput");
    const btn=document.getElementById("search-btn");
async function fetchRandomNews(){
        try{
            const apiUrl=`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apikey}`
            const response=await fetch(apiUrl);
            const data=await response.json();
            return data.articles;
        }
        catch(error){
            console.error("Error fetching random news",error);
            return[];
        }
    }
btn.addEventListener("click", async ()=>{
    const query=searchfield.value.trim();
    if(query!==""){
        try{
            const articles=await fetchNewsQuery(query);
            displayBlogs(articles);
        }
        catch(error){
            console.log("Error fetching news by query",error);
        }
    }
});
async function fetchNewsQuery(query){
    try{
            const apiUrl=`https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apikey}`
            const response=await fetch(apiUrl);
            const data=await response.json();
            return data.articles;
        }
        catch(error){
            console.error("Error fetching random news",error);
            return[];
        }
}
    function displayBlogs(articles){
        blogcont.innerHTML="";
        articles.forEach((article)=>{
            const blogcard=document.createElement("div");
            blogcard.classList.add("blog-card");
            const img=document.createElement("img");
            img.src=article.urlToImage;
            img.alt=article.title;
            const title=document.createElement("h2");
            const truncatedTitle=article.title.length>30?article.title.slice(0,30)+".......":article.title;
            const desc=document.createElement("p");
            desc.textContent=article.description;
            blogcard.appendChild(img);
            blogcard.appendChild(title);
            blogcard.appendChild(desc);
            blogcard.addEventListener('click',()=>{
                window.open(article.url,"_blank");
            })
            blogcont.appendChild(blogcard);
        });
    }
(async ()=>{
    try{
        const articles=await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error){
        console.log(error);
    }
})();