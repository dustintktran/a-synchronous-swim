const messages = []; // the storage unit for messages
const background = '';

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  console.log(JSON.stringify(messages))
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};
module.exports.messages = messages;