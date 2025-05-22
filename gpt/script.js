function handleSend() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatArea");
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = "You: " + text;
  chat.appendChild(userMsg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "message bot";
    reply.innerText = "Troll GPT: Ăn học mấy chục năm rồi hở cái là hỏi AI, hãy tự nghiên cứu + suy nghĩ + học hỏi và tự tìm câu trả lời nha";
    chat.appendChild(reply);
    chat.scrollTop = chat.scrollHeight;
  }, 1000);
}

// Gửi bằng phím Enter
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSend();
  }
});