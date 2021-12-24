const updateEntryHandler = async (event) => {
    event.preventDefault();

    const entry_id = document.querySelector('#edit-entry-id').value;
    const progress = document.querySelector('#edited-progress').value.trim();
    const episodes_seen = document.querySelector('#edited-episodes').value.trim();
    const rating = document.querySelector('#edited-rating').value.trim();
    const title = document.querySelector('#edited-title').value.trim();


    if (episodes_seen && rating && title) {
        const response = await fetch(`/api/entry/${entry_id}`, {
            method: 'PUT',
            body: JSON.stringify({title, progress, episodes_seen, rating}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.alert('Entry info updated!');
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update entry');
        }
    }
}

document
    .querySelector('#edit-entry-button')
    .addEventListener('click', updateEntryHandler);