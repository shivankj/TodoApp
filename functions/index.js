const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllTodos, postOneTodo, deleteTodo, editTodo
} = require('./APIs/todos')

const {
    loginUser, signUpUser, uploadProfilePhoto, getUserDetail, updateUserDetails
} = require('./APIs/users.js')

app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);
app.delete('todo/:todoId', auth, deleteTodo);
app.post('/todo', auth, postOneTodo);
app.get('/todos', auth, getAllTodos);
app.put('/todo/:todoId', auth, editTodo);
app.post('/user/image', auth, uploadProfilePhoto);

exports.api = functions.https.onRequest(app);