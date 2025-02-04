// case-study-3cursor.js

(function () {
    // 1. Hide the default browser cursor on all elements
    document.body.style.cursor = "none";
    document.querySelectorAll("*").forEach((el) => {
      el.style.cursor = "none";
    });
  
    // 2. Create an <img> for our custom cursor
    const cursorImg = document.createElement("img");
    cursorImg.src = "cursorimg.png";   // The PNG you want as the cursor
  
    // 3. Base styles (default 40×40, fully opaque)
    cursorImg.style.position = "fixed";
    cursorImg.style.zIndex = "9999";
    cursorImg.style.pointerEvents = "none";
    cursorImg.style.width = "40px";
    cursorImg.style.height = "40px";
    cursorImg.style.transform = "translate(-50%, -50%)";
    cursorImg.style.opacity = "1.0";
  
    // 4. Add to <body>
    document.body.appendChild(cursorImg);
  
    // 5. Move the image to follow mouse position
    document.addEventListener("mousemove", (e) => {
      cursorImg.style.left = `${e.clientX}px`;
      cursorImg.style.top = `${e.clientY}px`;
    });
  
    // 6. Enlarge & dim to 50% opacity on ALL clickable elements
    //    (nav links, footer links, etc.)
    //
    // Here we include: a, button, .navlink, .navlinktext, .contact-link
    // Add more classes as needed.
    const clickableEls = document.querySelectorAll(
      "a, button, .navlink, .navlinktext, .contact-link"
    );
  
    clickableEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        // Grows to 60×60, half opacity
        cursorImg.style.width = "60px";
        cursorImg.style.height = "60px";
        cursorImg.style.opacity = "0.5";
      });
  
      el.addEventListener("mouseleave", () => {
        // Revert to 40×40, fully opaque
        cursorImg.style.width = "40px";
        cursorImg.style.height = "40px";
        cursorImg.style.opacity = "1.0";
      });
    });
  
    // 7. Force "cursor: none" on all mouse events in capture phase
    //    Ensures default pointer won't reappear at any time.
    [
      "mouseover",
      "mouseenter",
      "mousemove",
      "pointerover",
      "pointermove"
    ].forEach((evtName) => {
      document.addEventListener(
        evtName,
        (e) => {
          e.target.style.cursor = "none";
        },
        true
      );
    });
  })();
  