// chatbot.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('input-form');
    const inputField = document.getElementById('input-field');
    const conversation = document.getElementById('conversation');
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const userMessage = inputField.value.trim();
  
        if (userMessage !== '') {
            displayUserMessage(userMessage);
            respondToUserMessage(userMessage);
            inputField.value = '';
        }
    });
  
    function displayUserMessage(message) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerHTML = <p class="user-text">${message}</p>;
        conversation.appendChild(userMessageDiv);
    }
  
    function displayChatbotMessage(message) {
        const chatbotMessageDiv = document.createElement('div');
        chatbotMessageDiv.classList.add('chatbot-message');
        chatbotMessageDiv.innerHTML = <p class="chatbot-text">${message}</p>;
        conversation.appendChild(chatbotMessageDiv);
    }
  
    function respondToUserMessage(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
  
        if (lowerCaseMessage.includes('hi')) {
            displayChatbotMessage('hello');
        } else if (lowerCaseMessage.includes('question 2')) {
            displayChatbotMessage('Answer 2');
        } else {
            displayChatbotMessage('I\'m sorry, I don\'t understand that question.');
        }
    }
  });