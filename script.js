// this is where you initialise the wrapper, put in the slug here
// what do i mean by slug: If for example you got to a channel and the link is:
// https://www.are.na/aaryan-pashine/models-of-conversation
// the slug is models-of-conversation
// So go ahead and pass that to the class, you will have to add a / in the end cuz I coded it poorly
let client = new Arena("models-of-conversation/"); //<---

// Now to use it there are a bunch of things you can do with the wrapper
// so if i say client.texts() it will basically get me all the blocks in the channel that are texts, similarly to get all the images i would say client.images() and so on
client.texts().then((response) => {
  console.log(response);
});
// if you go over to the console you can see the results, it will get the all the data for each block show you an array of it.
// There is a then() function here which you might not be familiar with but basically when working with getting data from the web in javascripts we use something called promises, you can search up a coding train video to understand it better, but all you need to work with the wrapper is that:
// whatever you put in your () in .then((res) => {
//   is the data that you can reference and do stuff with, using javascript
// })
// So lets see how we can take all the text blocks it returns and add it to the webpage. Here I named the variable blocks, cuz we can name it anything right and it makes sense to call it blocks cuz we're getting multiple blcks. Yes I know I'm like really smart <3

client.texts().then((blocks) => {
  // we know that blocks is an array right, like you can see in console.log
  // so we can run a for loop and in that each will be a single block
  for (const block of blocks) {
    // so im running a loop here where everytime it runs itll be a one of the blocks in the channel
    // and then I can just sequentially add them to the webpage

    // to do this using jquery all you have to so is reference the dom element using $("") and then use all the functions available to u to do whatever you wanna do. So in our case we will you append to add the p element with the content we get from are.na
    $(".panel").append(block.content_html);

    // you can go in your console and see what all things you can use from the data you get from are.na
  }
});

// Bonus
$(".panel").on("click", () => {
  $(".panel").toggleClass("css-class-i-added-to-transform");
});

// another example comment it in to see what happens
// client.texts().then((blocks) => {
//   for (const block of blocks) {
//     $(".panel").append(`
//       <div>
//         ${block.content}
//         <p style="
//             font-size: 8px;
//             background-color: yellow;
//             width: 100px">
//           Added by ${block.connected_by_username}</p>
//       </div>
//     `);
//   }
// });
