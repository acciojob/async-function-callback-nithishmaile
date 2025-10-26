const url = "https://jsonplaceholder.typicode.com/posts/1";

const button=document.getElementById("btn");
const div=document.getElementById("output");

const getTitle=async ()=>{
	const options={
		method:"GET",
	}

	const response= await fetch(url,options)
	const data=await response.json()
	div.textContent=`${data.title}`
	
}

button.addEventListener("click",getTitle)
//your JS code here. If required.
