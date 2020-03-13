const router = require("express").Router();

const Projects = require("../helpers/projectModel");

//CRUD ops

router.get("/", (req, res) => {
  Projects.get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not retrieve projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.get(id)
    .then(project => {
      if (project === null) {
        res.status(404).json({ errorMessage: "Could not find project" });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not retrieve project" });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Error creating new project" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Error deleting post" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedProject = req.body;
  Projects.update(id, updatedProject)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Error updating project" });
    });
});

//Export
module.exports = router;
