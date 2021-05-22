// let btnRed = document.querySelector('button');

// btnRed.addEventListener('click', () => {
//     window.history.back();
// });

let menu = document.querySelector("#menu");
let isdown = false;
menu.addEventListener("click", () => {
  isdown = !isdown;
  if (isdown) {
    menu.src = "/assets/svg/menu-red.svg";
  } else {
    menu.src = "/assets/svg/menu-black.svg";
  }

  let invisible = document.querySelector("#invisible");
  invisible.classList.toggle("visible");
});

$(function () {
  $("body#work-page").mousewheel(function (event, delta) {
    // event.preventDefault();
    let menu_box = document.querySelector(".menu-box-container");
    menu_box.scrollLeft -= delta * 1;
  });
});

// BACKGROUND NOISE
// BACKGROUND NOISE

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;

  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }

    noiseData.push(idata);
  };

  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }

    ctx.putImageData(noiseData[frame], 0, 0);
  };

  // Loop
  const loop = () => {
    paintNoise(frame);

    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  };

  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;

    canvas.width = wWidth;
    canvas.height = wHeight;

    for (let i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  };

  // Reset
  let resizeThrottle;
  const reset = () => {
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeThrottle);

        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      },
      false
    );
  };

  // Init
  const init = (() => {
    canvas = document.getElementById("noise");
    ctx = canvas.getContext("2d");

    setup();
  })();
};

noise();

/* SCROLL BUTTON -------------------- */
/* SCROLL BUTTON -------------------- */

// $(function () {
//   $("a[href*=#]").on("click", function (e) {
//     e.preventDefault();
//     $("html, body").animate(
//       { scrollTop: $($(this).attr("href")).offset().top },
//       500,
//       "linear"
//     );
//   });
// });
