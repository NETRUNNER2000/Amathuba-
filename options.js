
const userInput = document.getElementById("name_input")
const button = document.getElementById("save")
const display = document.getElementById("display")

button.addEventListener("click", ()=>{
    console.log(userInput.value)
    chrome.storage.local.set({ name: "SETTING" }).then(() => {
        console.log("Value is set");
      });

      chrome.storage.local.get(["name"]).then((result)=>{
        display.textContent = result.name
        console.log(JSON.stringify(result))
      })

})

