import express from 'express';

const app = express();

app.use('/', express.static('./src/client'));

app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),function() {
	console.log('development server started on **http://localhost:'+app.get('port')+'**');
});