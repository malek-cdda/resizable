"use client";
import React, { useEffect } from "react";
// import style from "./style.module.css";
const Home = () => {
  function makeResizableDiv(div: any, div1: any) {
    // console.log(window.innerWidth, window.innerHeight);
    const mainDiv = document.getElementById("main-div");
    const element = document.querySelector(div);
    const resizers = document.querySelectorAll(div + div1);
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0; i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener("mousedown", function (e) {
        e.preventDefault();
        original_width = parseFloat(
          getComputedStyle(element, null)
            .getPropertyValue("width")
            .replace("px", "")
        );
        original_height = parseFloat(
          getComputedStyle(element, null)
            .getPropertyValue("height")
            .replace("px", "")
        );
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
      });

      function resize(e) {
        if (currentResizer.classList.contains("bottom-right")) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height + (e.pageY - original_mouse_y);
          if (width > minimum_size) {
            element.style.width = width + "px";
          }
          if (height > minimum_size) {
            element.style.height = height + "px";
          }
        } else if (currentResizer.classList.contains("bottom-left")) {
          const height = original_height + (e.pageY - original_mouse_y);
          const width = original_width - (e.pageX - original_mouse_x);
          if (height > minimum_size) {
            element.style.height = height + "px";
          }
          if (width > minimum_size) {
            element.style.width = width + "px";
            element.style.left =
              original_x + (e.pageX - original_mouse_x) + "px";
          }
        } else if (currentResizer.classList.contains("top-right")) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height - (e.pageY - original_mouse_y);
          if (width > minimum_size) {
            element.style.width = width + "px";
          }
          if (height > minimum_size) {
            element.style.height = height + "px";
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + "px";
          }
        } else {
          const width = original_width - (e.pageX - original_mouse_x);
          const height = original_height - (e.pageY - original_mouse_y);
          if (width > minimum_size) {
            element.style.width = width + "px";
            element.style.left =
              original_x + (e.pageX - original_mouse_x) + "px";
          }
          if (height > minimum_size) {
            element.style.height = height + "px";
            element.style.top =
              original_y + (e.pageY - original_mouse_y) + "px";
          }
        }
      }

      function stopResize() {
        window.removeEventListener("mousemove", resize);
      }
    }
  }

  useEffect(() => {
    for (
      let i = 0;
      i < document.getElementsByClassName("resizable").length;
      i++
    ) {
      const newSize = document.getElementsByClassName("resizable")[i];
      newSize.addEventListener("mousemove", function (e) {
        console.log(i);
        makeResizableDiv(`.resizable${i}`, ` .resizer${i}`);
      });
    }
  }, []);
  return (
    <div className="container mx-auto">
      <div
        className=" left-72 top-72 main-div relative w-96 h-96 border border-green-500"
        id="main-div">
        <div className=" resizable resizable0 w-32 h-32 border border-green-500 mx-5 absolute ">
          <div className="resizers h-full w-full border-green-500 relative">
            <div className=" top-left resizer0 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer0 top-right cursor-nesw-resize absolute -top-0 -right-0 border-t border-r  border-blue-700 w-4 h-4"></div>
            <div className="resizer0 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer0 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div>
          </div>
        </div>
        <div className="resizable resizable1   border w-32 h-32 my-5 absolute ">
          <div className="resizers h-full w-full border-green-500">
            <div className=" top-left resizer1 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer1 top-right cursor-nesw-resize absolute -top-0 -right-0 border-t border-r  border-blue-700 w-4 h-4"></div>
            <div className="resizer1 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer1 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div>
          </div>
        </div>
        <div className="resizable resizable2  border w-32 h-32 mx-5 absolute">
          <div className="resizers h-full w-full border-green-500">
            <div className=" top-left resizer2 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer2 top-right cursor-nesw-resize absolute -top-0 -right-0 border-t border-r  border-blue-700 w-4 h-4"></div>
            <div className="resizer2 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer2 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// function makeResizableDiv(div: any) {
//   const element = document.querySelector(div);
//   const resizers = document.querySelectorAll(div + " .resizer");
//   const minimum_size = 20;
//   let original_width = 0;
//   let original_height = 0;
//   let original_x = 0;
//   let original_y = 0;
//   let original_mouse_x = 0;
//   let original_mouse_y = 0;
//   for (let i = 0; i < resizers.length; i++) {
//     const currentResizer = resizers[i];
//     currentResizer.addEventListener("mousedown", function (e) {
//       e.preventDefault();
//       original_width = parseFloat(
//         getComputedStyle(element, null)
//           .getPropertyValue("width")
//           .replace("px", "")
//       );
//       original_height = parseFloat(
//         getComputedStyle(element, null)
//           .getPropertyValue("height")
//           .replace("px", "")
//       );
//       original_x = element.getBoundingClientRect().left;
//       original_y = element.getBoundingClientRect().top;
//       original_mouse_x = e.pageX;
//       original_mouse_y = e.pageY;
//       window.addEventListener("mousemove", resize);
//       window.addEventListener("mouseup", stopResize);
//     });

//     function resize(e) {
//       if (currentResizer.classList.contains("bottom-right")) {
//         const width = original_width + (e.pageX - original_mouse_x);
//         const height = original_height + (e.pageY - original_mouse_y);
//         if (width > minimum_size) {
//           element.style.width = width + "px";
//         }
//         if (height > minimum_size) {
//           element.style.height = height + "px";
//         }
//       } else if (currentResizer.classList.contains("bottom-left")) {
//         const height = original_height + (e.pageY - original_mouse_y);
//         const width = original_width - (e.pageX - original_mouse_x);
//         if (height > minimum_size) {
//           element.style.height = height + "px";
//         }
//         if (width > minimum_size) {
//           element.style.width = width + "px";
//           element.style.left =
//             original_x + (e.pageX - original_mouse_x) + "px";
//         }
//       } else if (currentResizer.classList.contains("top-right")) {
//         const width = original_width + (e.pageX - original_mouse_x);
//         const height = original_height - (e.pageY - original_mouse_y);
//         if (width > minimum_size) {
//           element.style.width = width + "px";
//         }
//         if (height > minimum_size) {
//           element.style.height = height + "px";
//           element.style.top =
//             original_y + (e.pageY - original_mouse_y) + "px";
//         }
//       } else {
//         const width = original_width - (e.pageX - original_mouse_x);
//         const height = original_height - (e.pageY - original_mouse_y);
//         if (width > minimum_size) {
//           element.style.width = width + "px";
//           element.style.left =
//             original_x + (e.pageX - original_mouse_x) + "px";
//         }
//         if (height > minimum_size) {
//           element.style.height = height + "px";
//           element.style.top =
//             original_y + (e.pageY - original_mouse_y) + "px";
//         }
//       }
//     }

//     function stopResize() {
//       window.removeEventListener("mousemove", resize);
//     }
//   }
// }

// useEffect(() => {
//   makeResizableDiv(".resizable");
// }, []);
