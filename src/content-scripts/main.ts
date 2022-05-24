const addVideoControl = () => {
  document
    .querySelectorAll('[data-testid="videoPlayer"]')
    .forEach((videoPlayer) => {
      const video = videoPlayer.querySelector("video");
      if (!video) return;

      // not gif
      if (/^blob/.test(video.src)) return;

      video.setAttribute("controls", "");

      // disable video front layer
      const videoFrontArea =
        videoPlayer.querySelector<HTMLElement>('[tabindex="0"]');

      if (!videoFrontArea) return;
      videoFrontArea.style.pointerEvents = "none";
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
