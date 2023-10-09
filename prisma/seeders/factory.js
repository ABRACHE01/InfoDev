export const seeders = {
    authors : {
        model: "author",
        data : [
            {
                fullName: "John Doe",
                photo: "https://example.com/johndoe.jpg",
                email: "john.doe@example.com",
                password: "securepassword1"
            },
            {
                fullName: "Jane Smith",
                photo: "https://example.com/janesmith.jpg",
                email: "jane.smith@example.com",
                password: "strongpassword2"
            },
            {
                fullName: "Alice Johnson",
                photo: "https://example.com/alicejohnson.jpg",
                email: "alice.johnson@example.com",
                password: "password123"
            },
            {
                fullName: "Bob Johnson",
                photo: "https://example.com/bobjohnson.jpg",
                email: "bob.johnson@example.com",
                password: "mypassword456"
            },
            {
                fullName: "Emily Davis",
                photo: "https://example.com/emilydavis.jpg",
                email: "emily.davis@example.com",
                password: "securepass789"
            },
            {
                fullName: "Michael Brown",
                photo: "https://example.com/michaelbrown.jpg",
                email: "michael.brown@example.com",
                password: "p@ssw0rd!"
            },
            {
                fullName: "Sophia Lee",
                photo: "https://example.com/sophialeee.jpg",
                email: "sophia.lee@example.com",
                password: "mysecret321"
            },
            {
                fullName: "David Wilson",
                photo: "https://example.com/davidwilson.jpg",
                email: "david.wilson@example.com",
                password: "strongPass123"
            }
        ]
    },
    articles : {
        model : "article",
        data : [
            {
                title: "Introduction to JavaScript",
                content: "JavaScript is a versatile programming language...",
                photo: "https://example.com/johndoe.jpg",
                authorId: 1
            },
            {
                title: "Getting Started with React",
                content: "React is a popular JavaScript library for building user interfaces...",
                photo: "https://example.com/johndoe.jpg",
                authorId: 2
            },
            {
                title: "Node.js Fundamentals",
                content: "Node.js is a runtime environment that allows you to run JavaScript on the server...",
                photo: "https://example.com/johndoe.jpg",
                authorId: 3
            },
            {
                title: "Python Programming Basics",
                content: "Python is a high-level, interpreted programming language...",
                photo: "https://example.com/johndoe.jpg",
                authorId: 4
            },
            {
                title: "Data Science with Python",
                content: "Data science involves analyzing and interpreting data using Python...",               photo: "https://example.com/johndoe.jpg",
                photo: "https://example.com/johndoe.jpg",
                authorId: 5
            },
            {
                title: "Machine Learning Algorithms",
                content: "Machine learning is a subset of artificial intelligence...",
                photo: "https://example.com/johndoe.jpg",
                authorId: 6
            },
            {
                title: "Web Development with Ruby on Rails",
                content: "Ruby on Rails is a web application framework written in Ruby...",
                photo: "https://example.com/johndoe.jpg",
                authorId: 7
            }
        ]
    },
    comments : {
        model : "comment",
        data : [
            {
                content: "JavaScript is a versatile programming language...",
                authorId: 1,
                articleId: 2
            },
            {
                content: "React is a popular JavaScript library for building user interfaces...",
                authorId: 2,
                articleId: 3
            },
            {
                content: "Node.js is a runtime environment that allows you to run JavaScript on the server...",
                authorId: 3,
                articleId: 4
            },
            {
                content: "Python is a high-level, interpreted programming language...",
                authorId: 4,
                articleId: 5
            },
            {
                content: "Data science involves analyzing and interpreting data using Python...",
                authorId: 5,
                articleId: 6
            },
            {
                content: "Machine learning is a subset of artificial intelligence...",
                authorId: 6,
                articleId: 7
            },
            {
                content: "Ruby on Rails is a web application framework written in Ruby...",
                authorId: 7,
                articleId: 1
            }
        ]
    }
}