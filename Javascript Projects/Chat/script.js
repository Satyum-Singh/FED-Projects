const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const handleChat = () => {
  userMessage = chatInput.value.trim();
  console.log(userMessage);

  if (userMessage !== "") {
    // create a div element
    const newChat = document.createElement("div");
    newChat.classList.add("chat-bubble");
    newChat.classList.add("user");

    // create a p element
    const newChatText = document.createElement("p");
    newChatText.classList.add("chat-message");
    newChatText.innerText = userMessage;

    // append p element to div element
    newChat.appendChild(newChatText);

    // append div element to chat window
    const chatWindow = document.querySelector(".chat-window");
    chatWindow.appendChild(newChat);

    // clear chat input
    chatInput.value = "";
  } else {
    return;
  }
};

sendChatBtn.addEventListener("click", handleChat);
