const http = require('http');
const student = require('./student3');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <html>
            <head>
                <title> About student</title>
            </head>
            <body>
                <p> My name is ${student.getStudentFullName()}. My Student ID is ${student.getStudentId()}</p>
            </body>
        </html>
    `);
})
    server.listen(PORT, () => {
        console.log(`Server is runnig on ${PORT }`);
    });
