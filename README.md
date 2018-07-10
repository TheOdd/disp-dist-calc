## Distance & Displacement Calculator

### What is it?
This app is a simple tool that allows for you to insert up to four different values, one for each direction. From that information, the total distance traveled, displacement, angle, and a dynamically-rendered right triangle are calculated.

---

### Why?
At the time of making this, I was taking physics and we were reviewing word problems that asked for this kind of information. I gave myself a little challenge to create a web app to calculate it based on just directional inputs. The dynamically-rendered right triangle was just something that I thought would be cool to try, and wasn't part of the original idea.

---

### How does it work?

#### *Distance*
    north + south + east + west

#### *Displacement*
This part gets the absolute value of `north - south` and `east - west`. From there, the "up and down" value is counted as `a`, and the "left and right" value is counted as `b`. Then, to get the displacement, it uses the native `Math.hypot(a, b)` function. This just measures the distance from the starting point to the end point in a straight line.

#### *Angle*
The absolute values of `north - south` and `east - west` mentioned in the displacement explanation are compared. Whichever value is lower is counted as the **base** of the right triangle and the other value is counted as the **height** of the right triangle. After that, the angle is calculated like this:

    Math.asin(base / displacement) * 180/Math.PI

#### *Rendered Right Triangle*
I used the `canvas` HTML element to create it at first, but in order to have it work well with React re-rendering, I switched to using [React-Konva][1]. The high-level summary of how it works is that it proportionately scales the input to always fit the canvas. It then draws three lines to three different points based on the input to create the triangle. This re-renders on input change. You can look at the full source code [here][2] if you want to see how it works more in-depth.

---

### Where can I find it?
The app is currently hosted on my website in the playground section, which is for personal projects. You can find it [here][3].

---

### Other info

#### Feedback
Feel free to suggest new features, ways to clean up my code or better implementations of current features. I'm always open to feedback and becoming a better programmer. Pull requests are always welcome.

#### Name of the project
I know that it calculates more than just distance and displacement. Originally, that's all it was going to do, but I added more over time. If I just append the rest of the calculations to the end of the title, it would be way too long. And more importantly, I'm too lazy to change all the names (especially the repo and links).

[1]: https://github.com/lavrton/react-konva
[2]: https://github.com/TheOdd/disp-dist-calc/blob/master/frontend/components/RenderTriangle.js
[3]: https://owenhines.me/disp-dist-calc/
