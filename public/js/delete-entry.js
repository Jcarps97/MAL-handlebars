const delButtonHandler = async (event) => {
    event.preventDefault();
    const entry_id = document.querySelector('#edit-entry-id').value;

    const response = await fetch(`/api/post/${entry_id}`, {
        method: 'DELETE',
    });

        if (response.ok) {
            window.alert('Entry Deleted!');
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
};

document
    .querySelector('#delete-post-button')
    .addEventListener('click', delButtonHandler);