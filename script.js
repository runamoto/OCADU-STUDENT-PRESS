let client = new Arena("ocadu-mindful-campus/");
const blocks = $(".panel");

client.allContent().then((content) => setupContent(content));

function setupContent(data) {
  data.map((item) => {
    var div = document.createElement("div");
    // console.log(item);

    if (item.class == "Text") {
      div.classList.add("text");
      div.innerHTML = `
                  ${item.content_html}
              `;
    } else if (item.class == "Link") {
      div.classList.add("link");
      div.innerHTML = `
                  <a href="${item.source.url}">${item.source.url}</a>
              `;
    } else if (item.class == "Image") {
      div.classList.add("image");
      div.innerHTML = `
                  <figure><img class="article-img" src="${item.image.original.url}"/></figure>
                  <caption>${item.content}</caption>
              `;
    } else if (item.class == "Attachment") {
      if (item.attachment.content_type == "video/mp4") {
        div.classList.add("video");
        div.innerHTML = `
                      <video controls>
                          <source src="${item.attachment.url}" type="video/mp4">
                      </video>
                  `;
      }
    }

    if (item.title == "stylesheet") {
      var css = item.content,
        head = document.getElementsByTagName("head")[0],
        style = document.createElement("style");
      console.log(head);

      head.appendChild(style);

      style.type = "text/css";
      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    } else {
      blocks.append(div);
    }
  });
}

$(".panel").on("click", () => {
  $(".panel").toggleClass("out");
});
