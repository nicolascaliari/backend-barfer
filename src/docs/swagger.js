const swaggerJSDoc = require("swagger-jsdoc");


const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion de mi API",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            users: {
                type: "object",
                required: ["username", "email", "password", "role"],
                properties: {
                    username: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                    role: {
                        type: "string",
                    },
                },
            },
            products: {
                type: "object",
                required: ["name", "description", "price_fivekg", "price_tenkg", "image", "idCategory"],
                properties: {
                    name: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    price_fivekg: {
                        type: "integer",
                    },
                    price_tenkg: {
                        type: "integer",
                    },
                    image: {
                        type: "string",
                    },
                    idCategory: {
                        type: "integer",
                    },
                },
            },
            categories: {
                type: "object",
                required: ["name"],
                properties: {
                    name: {
                        type: "string",
                    },
                },
            },
            authLogin: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                },
            },
            authRegister: {
                type: "object",
                required: ["username", "email", "password", "role"],
                properties: {
                    username: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                    role: {
                        type: "string",
                    },
                },
            },
        },
    },
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./src/routes/*.js"],
    schemes: ["http"],
};

module.exports = swaggerJSDoc(swaggerOptions);