const express = require("express");
const app = express();
const userController = require("./src/controllers/userController");
const cors = require("cors");

const main = async () => {
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

  app.use(express.json());

  // Rota para testar a conexão com o banco de dados
  app.get("/test-database", async (req, res) => {
    try {
      // Consulta simples para verificar a conexão com o banco de dados
      const result = await prisma.$queryRaw`SELECT 1`;
      res.status(200).json({ message: "Database connection successful" });
    } catch (error) {
      console.error("Error connecting to the database:", error);
      res.status(500).json({ error: "Database connection failed" });
    }
  });

  // Rotas do usuário
  app.post("/login", userController.login);
  app.post("/register", userController.register);

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
  });
};

main();
