// Add your custom CSS styles here
const rainbowStyle = `
.d2l-branding-navigation-background-color {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    /* background-color: #65ff00;
    // animation: rainbow-bg 2.5s linear;
	// animation-iteration-count: infinite;
    // }
    // @keyframes rainbow-bg{
	// 	100%,0%{
	// 		background-color: rgb(255,0,0);
	// 	}
	// 	8%{
	// 		background-color: rgb(255,127,0);
	// 	}
	// 	16%{
	// 		background-color: rgb(255,255,0);
	// 	}
	// 	25%{
	// 		background-color: rgb(127,255,0);
	// 	}
	// 	33%{
	// 		background-color: rgb(0,255,0);
	// 	}
	// 	41%{
	// 		background-color: rgb(0,255,127);
	// 	}
	// 	50%{
	// 		background-color: rgb(0,255,255);
	// 	}
	// 	58%{
	// 		background-color: rgb(0,127,255);
	// 	}
	// 	66%{
	// 		background-color: rgb(0,0,255);
	// 	}
	// 	75%{
	// 		background-color: rgb(127,0,255);
	// 	}
	// 	83%{
	// 		background-color: rgb(255,0,255);
	// 	}
	// 	91%{
	// 		background-color: rgb(255,0,127);
		} */}
}
`;
const transFlagStyle = `
.d2l-branding-navigation-background-color {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    /* background-color: #65ff00;
    // animation: rainbow-bg 2.5s linear;
	// animation-iteration-count: infinite;
    // }
    // @keyframes rainbow-bg{
	// 	100%,0%{
	// 		background-color: rgb(255,0,0);
	// 	}
	// 	8%{
	// 		background-color: rgb(255,127,0);
	// 	}
	// 	16%{
	// 		background-color: rgb(255,255,0);
	// 	}
	// 	25%{
	// 		background-color: rgb(127,255,0);
	// 	}
	// 	33%{
	// 		background-color: rgb(0,255,0);
	// 	}
	// 	41%{
	// 		background-color: rgb(0,255,127);
	// 	}
	// 	50%{
	// 		background-color: rgb(0,255,255);
	// 	}
	// 	58%{
	// 		background-color: rgb(0,127,255);
	// 	}
	// 	66%{
	// 		background-color: rgb(0,0,255);
	// 	}
	// 	75%{
	// 		background-color: rgb(127,0,255);
	// 	}
	// 	83%{
	// 		background-color: rgb(255,0,255);
	// 	}
	// 	91%{
	// 		background-color: rgb(255,0,127);
		} */}
}
`;
const biFlagStyle = `
.d2l-branding-navigation-background-color {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    /* background-color: #65ff00;
    // animation: rainbow-bg 2.5s linear;
	// animation-iteration-count: infinite;
    // }
    // @keyframes rainbow-bg{
	// 	100%,0%{
	// 		background-color: rgb(255,0,0);
	// 	}
	// 	8%{
	// 		background-color: rgb(255,127,0);
	// 	}
	// 	16%{
	// 		background-color: rgb(255,255,0);
	// 	}
	// 	25%{
	// 		background-color: rgb(127,255,0);
	// 	}
	// 	33%{
	// 		background-color: rgb(0,255,0);
	// 	}
	// 	41%{
	// 		background-color: rgb(0,255,127);
	// 	}
	// 	50%{
	// 		background-color: rgb(0,255,255);
	// 	}
	// 	58%{
	// 		background-color: rgb(0,127,255);
	// 	}
	// 	66%{
	// 		background-color: rgb(0,0,255);
	// 	}
	// 	75%{
	// 		background-color: rgb(127,0,255);
	// 	}
	// 	83%{
	// 		background-color: rgb(255,0,255);
	// 	}
	// 	91%{
	// 		background-color: rgb(255,0,127);
		} */}
}
`;

// READ FROM STORAGE

chrome.storage.local.get(["name"]).then((result)=>{
	
	console.log(JSON.stringify(result))
	
  })


// SELECT CORRECT COLOR SCHEME

const styleElement = document.createElement('style');
styleElement.textContent = rainbowStyle;
document.head.appendChild(styleElement);


/*

.d2l-navigation-s {
    background-color: #181818;
}

.d2l-tiles-container {
    background-color: #252525;
}

.d2l-tile {
    background-color: #494949;
}


element.style {
    overflow-y: hidden;
    background-color: rgb(101 101 101);
}

.back, .front {
    background-color: #181818;
}
.d2l-tiles-container {
        background-color: #252525;
    }
*/