import express from "express";
import fs from "fs"; // to read documents.json
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const documents = JSON.parse(fs.readFileSync("documents.json", "utf-8"));

const filterDocuments = (query, fields) => {
  if (query && fields) {
    return {
      error: "Cannot provide both query (q) and fields. Please use one.",
    };
  }

  if (query) {
    return documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  if (fields) {
    return documents.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) => doc[key] && doc[key].toString() === value.toString()
      )
    );
  }

  return documents;
};

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const query = req.query.q;
  const result = filterDocuments(query, null);

  if (result.error) {
    return res.status(400).json(result);
  }

  res.status(200).json(result);
});

app.get("/documents/:id", (req, res) => {
  const documentId = parseInt(req.params.id, 10);
  const document = documents.find((doc) => doc.id === documentId);

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  res.status(200).json(document);
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  const result = filterDocuments(query, fields);

  if (result.error) {
    return res.status(400).json(result);
  }

  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
