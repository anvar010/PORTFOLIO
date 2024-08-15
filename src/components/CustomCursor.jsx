// components/CustomCursor.js
import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    // const colors = [
    //   "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
    //   "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    //   "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
    //   "#680060", "#60005f", "#48005f", "#3d005e"
    // ];
    const colors = [
      "#6ce7ef"
    ];
    
    
    for (let i = 0; i < 20; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.backgroundColor = colors[i % colors.length];
      document.body.appendChild(circle);
    }

    const circles = document.querySelectorAll(".circle");
    
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      document.querySelectorAll(".circle").forEach(circle => circle.remove());
    };
  }, []);

  return null; 
};

export default CustomCursor;
