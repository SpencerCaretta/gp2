module.exports = function (sequelize, DataTypes) {
  var Leaderboard = sequelize.define("leaderboard", {
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1, 50]

<<<<<<< HEAD
      }
    },
    score: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false,
      }
    },
    order: [
      ["score", "DESC"]
    ]
  });
  return Leaderboard;
};
=======
            }
        },
        score: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        order: [
            ['score', 'DESC']
        ]
    });
    return Leaderboard;
}
>>>>>>> ebd7dbeec5ec109aafe58611cddf4de087df025a
