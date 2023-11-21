"use client";
import { makeResizableDiv } from "@/hooks/resizer";
import React, { useEffect } from "react";
// import style from "./style.module.css";
const Home = () => {
  useEffect(() => {
    for (
      let i = 0;
      i < document.getElementsByClassName("resizable").length;
      i++
    ) {
      const newSize = document.getElementsByClassName("resizable")[i];

      // newSize.addEventListener("click", function (e) {
      //   // console.log(i);
      //   const element = document.querySelector(`.resizable${i}`);
      //   element.style.zIndex = "100";
      //   for (
      //     let j = 0;
      //     j < document.getElementsByClassName("resizable").length;
      //     j++
      //   ) {
      //     if (j !== i) {
      //       const element = document.querySelector(`.resizable${j}`);
      //       element.style.zIndex = "1";
      //     }
      //   }
      // });
      console.log(newSize);
      newSize.addEventListener("mousemove", function (e) {
        // console.log(i);
        makeResizableDiv(`.resizable${i}`, i, ` .resizer${i}`);
      });
    }
  }, []);
  return (
    <div className="container mx-auto mt-5">
      <div className=" flex justify-between space-x-3">
        <div
          className=" resizable resizable0  resizers1  relative h-20   overflow-y-hidden border-green-500  bg-red-300"
          style={{ flex: "30 1 0px", overflow: "hidden" }}>
          <div className="resizers h-full   border-green-500   bg-red-300">
            {/* <div className=" top-left resizer0 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div> */}
            <div className="resizer0 top-right cursor-row-resize absolute top-1/2 -right-0   border-r  border-blue-700 w-4 h-4"></div>
            {/* <div className="resizer0 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer0 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div> */}
          </div>
        </div>
        <div
          className="   resizable resizable1 resizers2   h-20    border-green-500  bg-red-300"
          style={{ flex: "40 100 110px", overflow: "hidden" }}>
          <div className="resizers     border-green-500    relative bg-red-300 border h-20">
            <div className="resizer1 top-right cursor-row-resize absolute top-1/2 -right-0   border-r  border-blue-700 w-4 h-4"></div>
            {/* <div className="resizer1 bottom-right cursor-row-resize absolute bottom-0 right-1/2   border-b  border-blue-700 w-4 h-4"></div> */}
          </div>
        </div>
        <div
          className="  resizable resizable2 resizers3  relative h-20    border-green-500  bg-red-300"
          style={{ flex: "30 1 0px", overflow: "hidden" }}>
          <div className="resizers h-full   border-green-500   bg-red-300">
            {/* <div className=" top-left resizer2 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div> */}
            <div className="resizer2 top-right cursor-row-resize absolute top-1/2 -right-0   border-r  border-blue-700 w-4 h-4"></div>
            {/* <div className="resizer2 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
            <div className="resizer2 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div> */}
          </div>
        </div>
      </div>

      {/* <div
        className=" resizable resizable0 w-32 h-32 border border-green-500 mx-5 relative"
        draggable="true">
        <div className="resizers h-full w-full border-green-500 relative bg-red-300">
          <div className=" top-left resizer0 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div>
          <div className="resizer0 top-right cursor-row-resize absolute top-1/2 -right-0   border-r  border-blue-700 w-4 h-4"></div>
          <div className="resizer0 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
          <div className="resizer0 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div>
        </div>
      </div>
      <div
        className=" resizable resizable1 w-32 h-32 border border-green-500 mx-5 relative"
        draggable="true">
        <div className="resizers h-full w-full border-green-500 relative bg-red-300">
          <div className=" top-left resizer1 cursor-nwse-resize absolute -top-0 -left-0 border-t border-l  border-blue-700 w-4 h-4 "></div>
          <div className="resizer1 top-right cursor-row-resize absolute top-1/2 -right-0   border-r  border-blue-700 w-4 h-4"></div>
          <div className="resizer1 bottom-left cursor-nesw-resize absolute -bottom-0 -left-0 border-b border-l  border-blue-700 w-4 h-4 "></div>
          <div className="resizer1 bottom-right cursor-nwse-resize absolute -bottom-0 -right-0 border-b border-r  border-blue-700 w-4 h-4"></div>
        </div>
      </div> */}
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
