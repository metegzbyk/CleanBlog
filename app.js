const express = require('express');
const app = express();

const blog = {
  id: 1,
  title: "Blog title",
  description: "Blog description",
};

app.get('/', (req, res) => {
  res.json(blog);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});