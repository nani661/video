const wrapper = document.querySelector(".wrapper");

function main() {
  wrapper.innerHTML = `
  <h1>Are you ready??<h1>  
  <button>I'm ready !!</button>`;
}
main();
const button = document.querySelector("button");
button.onclick = function () {
  wrapper.innerHTML = `<video width="120%" height="120%">
  <source
    src="access/84190790710-7156988723907857698-dy-video-godownloader.com.mp4"
    type="video/mp4"
  />
</video>`;
  const video = document.querySelector("video");
  video.play();
};
