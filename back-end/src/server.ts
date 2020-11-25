import app from './app';
import database from './database';

const port = 3000;

// database.sync({force:true});
database.sync();
console.log('Database running at ' + port);

app.listen(port);
console.log('Server running at ' + port);

