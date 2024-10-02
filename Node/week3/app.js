import knex from "knex";

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");
  const allowedFields = ["first_name", "last_name"];
  const sortOrder = ["asc", "desc"];

  if ("sort" in req.query) {
    const sortParams = req.query.sort.toString().split(" ");
    let sortField = sortParams[0];
    let sortDirection = sortParams[1] ? sortParams[1].toLowerCase() : "asc";

    if (
      allowedFields.includes(sortField) &&
      sortOrder.includes(sortDirection)
    ) {
      query = query.orderBy(sortField, sortDirection);
    } else {
      return res.status(400).json({ error: "Invalid sort parameters" });
    }
  }
  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
