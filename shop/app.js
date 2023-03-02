const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3005;

const server = http.createServer((req, res) => {
    // визначаємо шлях до файлу index.html
    const filePath = path.join(__dirname, 'public/index.html');

    // читаємо вміст файлу index.html
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // якщо виникла помилка при читанні файлу
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            // якщо файл успішно прочитано, віддаємо його відповідь на HTTP-запит
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});