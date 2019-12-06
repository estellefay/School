// in controllers/stuff.js

const Formation = require('../models/formation');

/**
 * Obtenir toutes les formations
 */
exports.getAllFormation = (req, res, next) => {
  Formation.find().then(
    (formations) => {
      res.status(200).json(formations);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

/**
 * Créer une formation
 */
exports.createFormation = (req, res, next) => {
    const formation = new Formation({
      name: req.body.name,
      level: req.body.level,
      price: req.body.price,
    });
    formation.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};


/**
 * Update une formation
 */
exports.updateFormation = (req, res, next) => {
    const formation = new Formation({
        _id: req.params.id,
        name: req.body.name,
        level: req.body.level,
        price: req.body.price,
    });
    Formation.updateOne({_id: req.params.id}, formation).then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

/**
 * Supprimer une formation
 */
exports.deleteFormation = (req, res, next) => {
    Formation.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(201).json({
                message: 'Post delete successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneFormation = (req, res, next) => {
    Formation.findOne({_id: req.params.id}).then(
        (formation) => {
            res.status(201).json({
                formation
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneThing = (req, res, next) => {
    Thing.findOne({
      _id: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
