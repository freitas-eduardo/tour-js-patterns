

const dbConnection = uri => Object.freeze({
  uri,
  connect: () => console.log(`DB ${uri} has been connected`),
  disconnect: () => console.log(`DB  connect`)
})

const connection = dbConnection('mongodb://...')
export default connection

//let instance
// class DBConnection {
//   constructor(uri) {
//     if (instance) {
//       throw new Error('Only one connection can exist!');
//     }
//     this.uri = uri;
//     instance = this;
//   }
//     connect() {
//       console.log(`DB ${this.uri} has been connected!`);
//     }
  
//     disconnect() {
//       console.log('DB disconnected');
//     }
//   }
  
//   const connection = new DBConnection('mongodb://...');

//   const singleConnetcion = Object.freeze(connection)

//   export default singleConnetcion
  