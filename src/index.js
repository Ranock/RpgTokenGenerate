const App = require('./config/App')

const app = App

app.listen(process.env.PORT || 3000, () =>{console.log('escutando')})