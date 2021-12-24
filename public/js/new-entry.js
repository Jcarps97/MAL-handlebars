const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const progress = document.querySelector('#progress').value.trim();
    const episodes_seen = document.querySelector('#episodes').value.trim();
    const rating = document.querySelector('#rating').value.trim();

    const response = await fetch(`/api/entry`, {
        method: `POST`,
        body: JSON.stringify({
            title,
            progress,
            episodes_seen,
            rating,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    console.log(response)
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
      alert('failed to create entry');
    }
}

document.querySelector('#new-entry-form').addEventListener('submit', newPostFormHandler);