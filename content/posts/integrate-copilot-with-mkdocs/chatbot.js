// Open & Close button
function openChatbot() {
    var chatbotIframe = document.getElementById("container");
    chatbotIframe.style.display = "block"; // Show the chatbot iframe
    document.getElementById("open_button").style.display = "none"; // Hide the open button
}

function closeChatbot() {
    var chatbotIframe = document.getElementById("container");
    chatbotIframe.style.display = "none"; // Hide the chatbot iframe
    document.getElementById("open_button").style.display = "block"; // Show the open button
}

// Get the container and resize handler elements
const container = document.getElementById("container");
const resizeHandler = document.getElementById("resize-handler");

// Function to handle resizing based on mouse movement
function resizeContainer(event) {

  // Calculate the new width and height based on mouse movement
  const newWidth = container.offsetLeft + container.offsetWidth - event.clientX;
  const newHeight = container.offsetTop + container.offsetHeight - event.clientY;

  // Update container width and height
  container.style.width = newWidth + "px";
  container.style.height = newHeight + "px";
}

// Event listener for mouse down on resize handler
resizeHandler.addEventListener("mousedown", function(event) {

  // Prevent default behavior of the resize handler
  event.preventDefault();

  // Add event listeners for mousemove and mouseup events
  document.addEventListener("mousemove", resizeContainer);
  document.addEventListener("mouseup", function() {
    // Remove event listeners when mouse button is released
    document.removeEventListener("mousemove", resizeContainer);
  });
});