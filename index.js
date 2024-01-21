

async function sayHello(){
    
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript( {
        
        target: {tabId: tab.id},
        func: () => {
            // alert("Hello from the extension");
            chrome.storage.local.get(["name"]).then((result)=>{
                
                console.log(JSON.stringify(result))
                alert(result.name)
              })
        }
    })
}

document.getElementById("my_button").addEventListener("click", sayHello);