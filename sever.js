const express = require("express");
const app = express();
const PORT = 1233;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`sever spinning at the door ${PORT}`);
});

let users = [
  {
    id: 1,
    name: "Artur",
    email: "artur@example.com",
    password: "senha123",
    role: "admin",
  },
  {
    id: 2,
    name: "João",
    email: "joao@example.com",
    password: "123456",
    role: "user",
  },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id == id);

  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).send("User is not found ");
  }
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.status(200).send();
});
