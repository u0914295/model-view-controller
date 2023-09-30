async function isLoggedIn() {
    const response = await fetch('/api/users/loggedin', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.status === 200;
}

async function getCommentForm() {
    if(await isLoggedIn()) {
      document.querySelector('.comment-card').style.display = 'block';
    } 
}
  
getCommentForm();

async function newFormHandler(event) {
    event.preventDefault();

    if (!await isLoggedIn()) {
        alert('You must be logged in to leave comments!');
        return;
    }

    const content = document.querySelector('#comment-body').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (content && post_id) {
		const response = await fetch(`/api/comments`, {
			method: 'POST',
			body: JSON.stringify({ content, post_id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	
		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	} else {
		alert('Please provide content for your comment');
	}
}
  
document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);