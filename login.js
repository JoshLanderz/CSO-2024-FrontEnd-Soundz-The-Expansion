/*//Login & Discussion Data Storing and Functionality
function searchOpen() {
    const defaultSearchEl = document.getElementById("searchEl");
    defaultSearchEl.classList.remove("openSearchEl");
    defaultSearchEl.classList.add("newSearchEl");
  
    const searchIcon = document.getElementById("search-bar-new-icon");
    searchIcon.style.right = "12px";
  }
  
  function showLogin() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("forum-overlay").style.display = "none";
  }
  
  // Function to handle login confirmation (button click)
  function handleLogin(event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    const username = document.getElementById("login-username-input").value;
    const loginError = document.getElementById("login-error-message");
    // Use trim to check for empty input
    if (username.trim() === "") {
        loginError.textContent = "Input must not be empty";
        return false;
    } else {
        loginError.textContent = "";
    }
  
    // Save username in localStorage
    localStorage.setItem("loggedInUsername", username);
  
    const welcomeText = document.getElementById("login-welcome-text");
    welcomeText.textContent = "Welcome, " + username;
  
    const discussionForumProfileName = document.getElementById("profile-name");
    discussionForumProfileName.value = username;
  
    // Switch to avatar selection
    const loginContainer = document.getElementById("login-container");
    loginContainer.style.display = "none";
  
    const commentsWrapper = document.getElementById("discussion-forum-comments-wrapper");
    commentsWrapper.style.display = "block";
    closeModal();
    updateWelcomeText();
  }
  
  
  // Function to update welcome text with stored username
  function updateWelcomeText() {
    const storedUsername = localStorage.getItem("loggedInUsername");
    if (storedUsername) {
        const welcomeText = document.getElementById("login-welcome-text");
        welcomeText.textContent = "Welcome, " + storedUsername;
  
        const discussionForumProfileName = document.getElementById("profile-name");
        discussionForumProfileName.value = storedUsername;
  
        document.getElementById("forum-overlay").style.display = "none";
    }
  }
  
  const loginButton = document.querySelector('.loginFormBtn[type="button"]'); // Change from type="submit" to type="button"
  loginButton.addEventListener('click', handleLogin);
  
  // Check for stored username & avatar on page load
  document.addEventListener('DOMContentLoaded', updateWelcomeText);


  

  /////////////////////////////////
  async function saveComment(commentText) {
    const storedUsername = localStorage.getItem("loggedInUsername");
    
    const response = await fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ profileName: storedUsername, text: commentText })
    });

    if (!response.ok) {
        console.error('Failed to save comment');
        return;
    }

    const newComment = await response.json();
    displayComments(); // Refresh comments display
}

async function displayComments() {
    const commentsWrapper = document.getElementById("discussion-forum-comments-wrapper");
    commentsWrapper.innerHTML = ''; // Clear the existing comments

    const response = await fetch('http://localhost:3000/api/comments');
    if (!response.ok) {
        console.error('Failed to fetch comments');
        return;
    }

    const comments = await response.json();
    //comments.reverse(); // Show most recent comments first

    comments.forEach(comment => {
        const commentBlock = document.createElement("div");
        commentBlock.classList.add("comment-block-wrapper");

        const commentDate = new Date(comment.date);
        const timeSincePostedComment = getTimeAgo(commentDate);

        commentBlock.innerHTML = `
            <div class="comment-block-cards">
                <p class="time-since-posted-label">Sent by
                    <span>${comment.profileName}&nbsp;</span>
                    ${timeSincePostedComment}
                </p>
                <p>${comment.text}</p>
            </div>
        `;

        commentsWrapper.appendChild(commentBlock);
    });
}

        // Function to display the comments

        // Function to calculate the time ago from the comment's date
        function getTimeAgo(date) {
            const now = new Date();
            const diff = Math.floor((now - date) / 1000); // Difference in seconds

            const seconds = diff % 60;
            const minutes = Math.floor(diff / 60) % 60;
            const hours = Math.floor(diff / 3600) % 24;
            const days = Math.floor(diff / 86400);

            if (days > 0) { 
                return `${days} day${days > 1 ? 's' : ''} ago`;
            } else if (hours > 0) {
                return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            } else if (minutes > 0) {
                return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            } else {
                return `${seconds + 1} second${seconds > 1 ? 's' : ''} ago`;
            }
        }

        // Function to handle the comment submission
        function submitComment(event) {
            event.preventDefault(); // Prevent the default form submit behavior

            const commentText = document.getElementById("comment-text-input").value;
            if (commentText.trim()) {
                saveComment(commentText);
                displayComments(); // Re-display comments after adding a new one
                document.getElementById("comment-text-input").value = ''; // Clear the textarea
            } else {
                alert("Please enter a comment.");
            }
        }

        // Event listener for the submit button
        document.getElementById("comment-submit-btn").addEventListener("click", submitComment);

        // Display comments on page load
        window.onload = function() {
            displayComments();
    };*/


//Login & Discussion Data Storing and Functionality
function searchOpen() {
    const defaultSearchEl = document.getElementById("searchEl");
    defaultSearchEl.classList.remove("openSearchEl");
    defaultSearchEl.classList.add("newSearchEl");
  
    const searchIcon = document.getElementById("search-bar-new-icon");
    searchIcon.style.right = "12px";
  }
 //Login & Discussion Data Storing and Functionality
function showLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("forum-overlay").style.display = "none";
}

// Function to handle login confirmation (button click)
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("login-username-input").value;
    const loginError = document.getElementById("login-error-message");
    if (username.trim() === "") {
        loginError.textContent = "Input must not be empty";
        return false;
    } else {
        loginError.textContent = "";
    }

    localStorage.setItem("loggedInUsername", username);

    const welcomeText = document.getElementById("login-welcome-text");
    welcomeText.textContent = "Welcome, " + username;

    const discussionForumProfileName = document.getElementById("profile-name");
    discussionForumProfileName.value = username;

    closeModal();
    updateWelcomeText();
}

function updateWelcomeText() {
    const storedUsername = localStorage.getItem("loggedInUsername");
    if (storedUsername) {
        const welcomeText = document.getElementById("login-welcome-text");
        welcomeText.textContent = "Welcome, " + storedUsername;

        const discussionForumProfileName = document.getElementById("profile-name");
        discussionForumProfileName.value = storedUsername;

        document.getElementById("forum-overlay").style.display = "none";
    }
}

const loginButton = document.querySelector('.loginFormBtn[type="button"]');
loginButton.addEventListener('click', handleLogin);

document.addEventListener('DOMContentLoaded', updateWelcomeText);

// Comment functionality
async function saveComment(commentText) {
    const storedUsername = localStorage.getItem("loggedInUsername");

    try {
        const response = await fetch('/api/comments', { // Update URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ profileName: storedUsername, text: commentText })
        });

        if (!response.ok) {
            console.error('Failed to save comment');
            return;
        }

        await response.json();
        displayComments(); // Refresh comments display
    } catch (error) {
        console.error('Error saving comment:', error);
    }
}

async function displayComments() {
    const commentsWrapper = document.getElementById("discussion-forum-comments-wrapper");
    commentsWrapper.innerHTML = ''; // Clear the existing comments

    try {
        const response = await fetch('/api/comments'); // Update URL
        if (!response.ok) {
            console.error('Failed to fetch comments');
            return;
        }

        const comments = await response.json();
        comments.reverse(); // Show most recent comments first

        comments.forEach(comment => {
            const commentBlock = document.createElement("div");
            commentBlock.classList.add("comment-block-wrapper");

            const commentDate = new Date(comment.date);
            const timeSincePostedComment = getTimeAgo(commentDate);

            commentBlock.innerHTML = `
                <div class="comment-block-cards">
                    <p class="time-since-posted-label">Sent by
                        <span>${comment.profileName}&nbsp;</span>
                        ${timeSincePostedComment}
                    </p>
                    <p>${comment.text}</p>
                </div>
            `;

            commentsWrapper.appendChild(commentBlock);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

function getTimeAgo(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // Difference in seconds

    const seconds = diff % 60;
    const minutes = Math.floor(diff / 60) % 60;
    const hours = Math.floor(diff / 3600) % 24;
    const days = Math.floor(diff / 86400);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds + 1} second${seconds > 1 ? 's' : ''} ago`;
    }
}

function submitComment(event) {
    event.preventDefault();
    const commentText = document.getElementById("comment-text-input").value;
    if (commentText.trim()) {
        saveComment(commentText);
        displayComments(); // Re-display comments after adding a new one
        document.getElementById("comment-text-input").value = ''; // Clear the textarea
    } else {
        alert("Please enter a comment.");
    }
}

document.getElementById("comment-submit-btn").addEventListener("click", submitComment);

window.onload = function() {
    displayComments();
};

