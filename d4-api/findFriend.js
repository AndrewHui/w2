const findFriend = function(contactObj, name, contactInfo) {
  let objectResult = {};
  let count = 0;
  for (let par of contactObj) {
    if (name === par.name) {
      objectResult.name = par.friends[0]
      count ++
    }
  }

  for (let i of contactObj) {
    if (objectResult.name === i.name) {
      if (i[contactInfo] == null) {
        return "Not found"
      }
      objectResult[contactInfo] = i[contactInfo];
      count ++
    }
  }
  if (count === 2) {
    return objectResult;
  }
  return "Not found"
}


// findFriend(contacts, "Abbott", "phone") should return { name: "Costello", phone: "767 676 7676" }

// driver data

const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

console.log(findFriend(contacts, "Abbott", "phone"));