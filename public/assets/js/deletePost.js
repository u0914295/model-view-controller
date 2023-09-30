const deleteButtonNodes = document.querySelectorAll('.delete');

for (let i = 0; i < deleteButtonNodes.length; i++) {
    deleteButtonNodes[i].addEventListener('click', async (event) => {
        event.preventDefault();

        // Get the ID of the post
        const id = event.currentTarget.getAttribute('data-id');

        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        // If the DELETE request is successful, reload the dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    });
}