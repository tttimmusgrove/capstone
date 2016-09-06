
module.exports = {
  findPersonId: function(username, list) {
        for (var i = 0; i < list.length; i++) {
          if (username === list[i].username) {
            return list[i].id
          }
        }
    }

}
