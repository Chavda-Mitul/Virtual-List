# Virtual-List

[![Video Demo]](./react-performance.mp4)


## Overview

This repository contains the code for a virtual list implementation. The virtual list technique is used to efficiently render large lists of data by only rendering the items that are visible on the screen.

## Main Logic

The main logic of the virtual list is implemented in JavaScript. Here's an overview of the code:

```javascript
const listHeight = 30;
const container = document.getElementById("list-container");

function render() {
  const start = Math.floor(container.scrollTop / listHeight);
  const end = start + listHeight;
  const visibleData = listData.slice(start, end);
  console.log(visibleData);
  const content = document.getElementById("list-content");
  content.innerHTML = visibleData
    .map(
      (item, index) =>
        `<div class="item" style="top: ${
          (start + index) * listHeight
        }px;">${item}</div>`
    )
    .join("");
}

const listContent = document.getElementById("list-content");
listContent.style.height = `${listData.length * listHeight}px`;

render();
container.addEventListener("scroll", render);
```
