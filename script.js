document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.querySelector(".video-container");
    const chips = document.querySelectorAll(".chip");
    
    // Define hardcoded data
    const hardcodedData = [
        {
            "title":"Xiaomi 14 Ultra vs Samsung Galaxy S24 Ultra.",
            "thumbnail":"https://i.ytimg.com/vi/4QJq2h8tCv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmTt_MT3QR2KqVsFKUFQZ9gIkTCA",
            "channelPicture":"https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            "channelName":"Mrwhosetheboss",
            "category":"tech",
            "duration":"23:56",
            "views":"15,219",
            "uploadedDateTime":"2024-03-27T15:05:10.146Z"
        },
        {
            "title":"I bought the most UNBREAKABLE Tech Ever!",
            "thumbnail":"https://i.ytimg.com/vi/BiZcyJPoDy0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCayA4OMcH05hJerRluzg1B3BhVPw",
            "channelPicture":"https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            "channelName":"Mrwhosetheboss",
            "category":"tech",
            "duration":"23:56",
            "views":"3,943,356",
            "uploadedDateTime":"2024-02-21T18:05:10.146Z"
        },
        {
            "title":"I bought the CHEAPEST Tech in India!",
            "thumbnail":"https://i.ytimg.com/vi/LdlLUogNYMw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSGoYZTxoR_6vForcNZBn0cpOnEw",
            "channelPicture":"https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj",
            "channelName":"Mrwhosetheboss",
            "category":"tech",
            "duration":"37:48",
            "views":"8,753,456",
            "uploadedDateTime":"2024-01-11T18:05:10.146Z"
        },
        {
            "title":"How the Most Expensive Swords in the World Are Made",
            "thumbnail":"https://i.ytimg.com/vi/Tt6WQYtefXA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL1Pq7GYati5BIagiz5Uukag-hFw",
            "channelPicture":"https://yt3.ggpht.com/ytc/AIdro_looi5tB_pSLZrhB7PQs1ovQOaJ0lYap3uA51jhSA=s68-c-k-c0x00ffffff-no-rj",
            "channelName":"Veritasium",
            "category":"tech",
            "duration":"25:34",
            "views":"4,956,457",
            "uploadedDateTime":"2024-03-01T15:05:10.146Z"
        },{
            "title":"Why It Was Almost Impossible to Make the Blue LED",
            "thumbnail":"https://i.ytimg.com/vi/AF8d72mA41M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHLwVnlchInSJ-zCNZFncLfWBBDA",
            "channelPicture":"https://yt3.ggpht.com/ytc/AIdro_looi5tB_pSLZrhB7PQs1ovQOaJ0lYap3uA51jhSA=s68-c-k-c0x00ffffff-no-rj",
            "channelName":"Veritasium",
            "category":"tech",
            "duration":"30:34",
            "views":"59,758,786",
            "uploadedDateTime":"2024-03-09T15:05:10.146Z"
        },
        {
            "title": "The Fastest Maze-Solving Competition On Earth",
            "thumbnail": "https://i.ytimg.com/vi/ZMQbHMgK2rw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZEj12pKAV_MrsSafc1lz_2HCNlg",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_looi5tB_pSLZrhB7PQs1ovQOaJ0lYap3uA51jhSA=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Veritasium",
            "category": "tech",
            "duration": "25:21",
            "views": "17,888,658",
            "uploadedDateTime": "2024-01-19T15:05:10.146Z"
        },
        {
            "title": "Playing in hardcore mode",
            "thumbnail": "https://i.ytimg.com/vi/XoIOlRnwpio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBjtRXIGOoslkwQr-XUAuEjK7PUA",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_noBXoCmJA3QZ1CS71nl2PCYlYU8ihd7DgIrbXtbg=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Viva La Dirt League",
            "category": "gaming",
            "duration": "3:28",
            "views": "138,253",
            "uploadedDateTime": "2024-03-26T15:05:10.146Z"
        },
        {
            "title": "SHROUD REACTS TO ALL THE NEW VALORANT AGENT ABILITIES",
            "thumbnail": "https://i.ytimg.com/vi/9Cqn-QC8rms/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk73HuLWkBQB2rOcmW_Ky2uO-hGg",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_niY5P7XbsaAxlxeBMARgIEsVq6sHNOkZMKFyolrQ=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Shroud",
            "category": "gaming",
            "duration": "32:28",
            "views": "198,987",
            "uploadedDateTime": "2024-02-17T15:05:10.146Z"
        },
        {
            "title": "Shroud Reacts To BattleFailed 2042",
            "thumbnail": "https://i.ytimg.com/vi/OulJoV3CsJE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeMhi8lsBHctnFR2w6WFctp3gsyQ",
            "channelPicture": "https://yt3.ggpht.com/ytc/AIdro_niY5P7XbsaAxlxeBMARgIEsVq6sHNOkZMKFyolrQ=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "Shroud",
            "category": "gaming",
            "duration": "31:28",
            "views": "298,283",
            "uploadedDateTime": "2024-03-20T15:05:10.146Z"
        },
        {
            "title": "Dosi & Aisake - Cruising | Lofi | NCS - Copyright Free Music",
            "thumbnail": "https://i.ytimg.com/vi/qjElWBGZou4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGyJw_3EgwK7SRJ_VsVnQHiAtVow",
            "channelPicture": "https://yt3.ggpht.com/YIBi8NVC87fMfJHfQ2O0dyzjis7tUlO7VqWLhk1lq1fkIOQTrpX_Ip7G6S_u0IJosXYSe_Z9=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "NoCopyrightSounds",
            "category": "music",
            "duration": "2:41",
            "views": "46,283",
            "uploadedDateTime": "2024-03-21T15:05:10.146Z"
        },
        {
            "title": "NCS: The Best Of Dubstep Mix | NCS - Copyright Free Music",
            "thumbnail": "https://i.ytimg.com/vi/T__q1htHmN4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgVIFEofzAP&rs=AOn4CLBaFd1Hz7EsgV0a2hzNcAEKvbQ0hA",
            "channelPicture": "https://yt3.ggpht.com/YIBi8NVC87fMfJHfQ2O0dyzjis7tUlO7VqWLhk1lq1fkIOQTrpX_Ip7G6S_u0IJosXYSe_Z9=s68-c-k-c0x00ffffff-no-rj",
            "channelName": "NoCopyrightSounds",
            "category": "music",
            "duration": "42:35",
            "views": "46,283",
            "uploadedDateTime": "2024-03-22T15:05:10.146Z"
        }];


        function formatRelativeTime(date) {
            const currentDate = new Date();
            const uploadDate = new Date(date);
            const timeDifference = currentDate - uploadDate;
            
            // Convert milliseconds to seconds
            const seconds = Math.floor(timeDifference / 1000);
            
            // Convert seconds to minutes
            const minutes = Math.floor(seconds / 60);
            
            // Convert minutes to hours
            const hours = Math.floor(minutes / 60);
            
            // Convert hours to days
            const days = Math.floor(hours / 24);
            
            if (days > 365) {
                return Math.floor(days / 365) + " year ago";
            } else if (days > 30) {
                return Math.floor(days / 30) + " months ago";
            } else if (days > 0) {
                return days + " days ago";
            } else if (hours > 0) {
                return hours + " hours ago";
            } else if (minutes > 0) {
                return minutes + " minutes ago";
            } else {
                return "Just now";
            }
        };


        function formatViews(views) {
            views = parseInt(views.replace(/,/g, ''));
            if (views >= 1000000) {
                return (views / 1000000).toFixed(1) + "M";
            } else if (views >= 1000) {
                return (views / 1000).toFixed(1) + "K";
            } else {
                return views.toString();
            }
        };
        
        

    
    // Iterate over each hardcoded video data
    hardcodedData.forEach(video => {
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
                        <div class="channel-name">${video.title}</div>
                        <div class="views-upload">
                            <div class="views">${formatViews(video.views)} views .</div>
                            <div class="upload">${formatRelativeTime(video.uploadedDateTime)}</div>
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
});
