"use strict";
const blogHeading = document.getElementById("blog-heading");
const blogText = document.getElementById("blog-text");
const addBlog = document.querySelector(".add-blog-btn");
const prevBlogContainer = document.querySelector(".container-1");

console.log(prevBlogContainer);
const blogArr = [];

addBlog.addEventListener("click", (event) => {
  event.preventDefault();
  blogCard = createBlogCard(blogHeading.value, blogText.value);
  addBlogCard(blogArr);
});

const createBlogCard = function (blogHeading, blogText) {
  return `<div class="prev prev4" >
        <h2>${blogHeading}</h2>
        <p>${blogText}</p>
    </div>
  `;
};
const addBlogCard = function (blogCard) {
  if (blogArr.length > 4) {
    blogArr.shift();
  } else {
    blogArr.push(blogCard);
    blogArr.push(prevBlogContainer.insertAdjacentHTML("beforeend", blogCard));
  }
};

prevBlogContainer.insertAdjacentHTML("beforeend");
