document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.querySelector(".video-container");
    const searchForm = document.querySelector(".search-container form");
    const searchInput = document.querySelector(".search-container input");
    const chips = document.querySelectorAll(".chip");
    let videoDataArray = []; 
    let GamingArray = [];
    let MusicArray = [];
    let TechArray = [];

    
    function renderVideoContent(videos) {
        videoContainer.innerHTML = ''; 

        videos.forEach(video => {
            
            const videoBox = document.createElement("div");
            videoBox.classList.add("video-content-cover");
            
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
                            <div class="channel-name">${video.channelName}</div>
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
         
            videoBox.innerHTML = videoContentHTML;
         
            videoContainer.appendChild(videoBox);
        });
    }

    // Event listener for chips
    chips.forEach(chip => {
        chip.addEventListener("click", function() {
            
            chips.forEach(c => c.classList.remove("selected"));
        
            this.classList.add("selected");
        
            const category = this.dataset.category;
       
            switch(category) {
                case 'all':
                    renderVideoContent(videoDataArray);
                    break;
                case 'gaming':
                    renderVideoContent(GamingArray);
                    break;
                case 'music':
                    renderVideoContent(MusicArray);
                    break;
                case 'tech':
                    renderVideoContent(TechArray);
                    break;
                default:
                   
                    break;
            }
        });
    });

    
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const searchQuery = searchInput.value.trim().toLowerCase();
     
        const searchResults = videoDataArray.filter(video =>
            video.title.toLowerCase().includes(searchQuery)
        );
  
        renderVideoContent(searchResults);
    });

    
    fetch("https://ypapi.formz.in/api/public/videos")
      .then(response => response.json())
      .then(data => {
        
        videoDataArray = data;
        console.log(videoDataArray);

        renderVideoContent(videoDataArray);
        
        videoDataArray.forEach(video => {
            switch(video.category) {
                case 'tech':
                    TechArray.push(video);
                    break;
                case 'gaming':
                    GamingArray.push(video);
                    break;
                case 'music':
                    MusicArray.push(video);
                    break;
                default:
                    break;
            }
        });
        console.log(GamingArray);
        console.log(MusicArray);
        console.log(TechArray);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
});
