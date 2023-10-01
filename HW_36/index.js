const idInput = document.getElementById('idInput');
const search = document.getElementById('search');
const container = document.getElementById('container');
search.addEventListener('click', () => {
    const postId = parseInt(idInput.value);

    if (isNaN(postId) || postId < 1 || postId > 100) {
        alert('Некоректний ID. Введіть число від 1 до 100.');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка запиту до сервера');
            }
            return response.json();
        })
        .then(post => {
            container.innerHTML = `
                        <h2>Пост № ${post.id}</h2>
                        <p>Заголовок: ${post.title}</p>
                        <p>Текст: ${post.body}</p>
                        <button id="comments">Отримати коментарі</button>
                    `;

            const comments = document.getElementById('comments');
            comments.addEventListener('click', () => {
                // Виконання запиту до API для отримання коментарів
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Помилка запиту до сервера');
                        }
                        return response.json();
                    })
                    .then(comments => {
                        const commentsList = document.createElement('ul');
                        comments.forEach(comment => {
                            const commentItem = document.createElement('li');
                            commentItem.innerHTML = `${comment.name}: ${comment.body}`;
                            commentsList.appendChild(commentItem);
                        });
                        container.appendChild(commentsList);
                    })
                    .catch(error => {
                        alert(`Помилка: ${error.message}`);
                    });
            });
        })
        .catch(error => {
            alert(`Помилка: ${error.message}`);
        });
});