const express = require("express");
const { Router } = express;
const Event = require("./model");
const router = new Router();

router.post("/event", (request, response, next) => {
  Event.create(request.body)
    .then(event => response.send(event))
    .catch(next);
});

router.get("/event", (request, response, next) => {
  Event.findAll()
    .then(events => response.send(events))
    .catch(next);
});
router.put("/event/:id", (request, response, next) => {
  Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next);
});

router.delete("/event/:id", (request, response, next) => {
  Event.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next);
});
module.exports = router;
