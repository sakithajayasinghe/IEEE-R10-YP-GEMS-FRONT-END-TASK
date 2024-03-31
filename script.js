document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.querySelector(".video-container");
  
    // Fetch data from API
    fetch("https://ypapi.formz.in/api/public/videos")
      .then(response => response.json())
      .then(data => {
        // Iterate over each video in the response
        data.forEach(video => {
          // Create a div element for each video
          const videoBox = document.createElement("div");
          videoBox.classList.add("video-content-cover");
          // Create HTML content for video details
          const videoContentHTML = `
            <div class="video-content">
              <a href="#" class="video-box">
                <img src="${video.thumbnail}" alt="${video.title}">
              </a>
              <div class="video-details">
                <div class="channel-logo">
                  <img src="${video.channelPicture}" alt="${video.channelName}">
                </div>
                <div class="detail">
                  <h3 class="title">${video.title}</h3>
                  <div class="channel-name">${video.thumbnail}</div>
                  <div class="views-upload">
                    <div class="views">${video.views} views .</div>
                    <div class="upload">${video.uploadedDateTime}</div>
                  </div>
                </div>
              </div>
              <div class="hidden-content">
                <div class="btn"><i class="ri-time-line"></i>Watch later</div>
                <div class="btn"><i class="ri-play-list-2-line"></i>Add to queue</div>
              </div>
            </div>
          `;
  
          // Set the HTML content of the video box
          videoBox.innerHTML = videoContentHTML;
  
          // Append the video box to the container
          videoContainer.appendChild(videoBox);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });
  