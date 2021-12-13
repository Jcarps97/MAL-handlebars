const delButtonHandler = async (event) => {
    event.preventDefault();
    const entry_id = document.querySelector('#delete-entry-id').value;

    const response = await fetch(`/api/entry/${entry_id}`, {
        method: 'DELETE',
    });

        if (response.ok) {
            window.alert('Entry Deleted!');
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete entry');
        }
};

document
    .querySelector('#delete-entry-button')
    .addEventListener('click', delButtonHandler);