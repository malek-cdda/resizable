"use client";
import React, { useEffect } from "react";

const ResizableParent = () => {
  useEffect(() => {
    makeResizableParent("parentDiv", "childDiv");
  }, []);

  const makeResizableParent = (parentDivId, childDivClass) => {
    const parentDiv = document.getElementById(parentDivId);
    const childDivs = document.querySelectorAll("." + childDivClass);
    const resizers = document.querySelectorAll(
      "." + childDivClass + "-resizer"
    );
    const minimum_size = 20;

    let original_width = 0;
    let original_height = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    resizers.forEach((currentResizer) => {
      currentResizer.addEventListener("mousedown", function (e) {
        e.preventDefault();
        original_width = parentDiv.clientWidth;
        original_height = parentDiv.clientHeight;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
      });

      function resize(e: any) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y);

        // Ensure the parent div does not exceed minimum size
        if (width > minimum_size) {
          parentDiv.style.width = width + "px";
        }

        if (height > minimum_size) {
          parentDiv.style.height = height + "px";
        }

        childDivs.forEach((childDiv) => {
          // Ensure child divs don't go outside the parent div
          const childWidth = parseFloat(
            getComputedStyle(childDiv, null)
              .getPropertyValue("width")
              .replace("px", "")
          );
          const childHeight = parseFloat(
            getComputedStyle(childDiv, null)
              .getPropertyValue("height")
              .replace("px", "")
          );

          if (childDiv.offsetLeft + childWidth > parentDiv.clientWidth) {
            childDiv.style.width =
              parentDiv.clientWidth - childDiv.offsetLeft + "px";
          }

          if (childDiv.offsetTop + childHeight > parentDiv.clientHeight) {
            childDiv.style.height =
              parentDiv.clientHeight - childDiv.offsetTop + "px";
          }
        });
      }

      function stopResize() {
        window.removeEventListener("mousemove", resize);
      }
    });
  };

  return (
    <div id="parentDiv" className="resizable-parent">
      <div className="childDiv childDiv-resizer"></div>
      <div className="childDiv childDiv-resizer"></div>
      {/* Add more child divs as needed */}
    </div>
  );
};

export default ResizableParent;
