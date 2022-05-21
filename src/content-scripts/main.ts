const addVideoControl = () => {
  document
    .querySelectorAll('[data-testid="videoPlayer"]')
    .forEach((videoPlayer) => {
      const video = videoPlayer.querySelector("video");
      const control = videoPlayer.querySelector<HTMLElement>('[tabindex="0"]');
      video?.setAttribute("controls", "");

      if (control) {
        control.style.pointerEvents = "none";
      }
    });
};

new PerformanceObserver(() => {
  addVideoControl();
}).observe({
  type: "longtask",
  buffered: true,
});

document.addEventListener("scroll", () => {
  addVideoControl();
});
