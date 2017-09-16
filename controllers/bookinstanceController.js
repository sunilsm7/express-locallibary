var BookInstance = require('../models/bookinstance');

// Display list of all BookInstance
exports.bookinstance_list = function(req, res){
    res.send('Not Implemented: BookInstance list');
};

// Display detail of  BookInstance
exports.bookinstance_detail = function(req, res){
    res.send('Not Implemented: BookInstance detail:' + req.params.id);
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = function(req, res){
    res.send('Not Implemented: BookInstance create GET');
};

// Display BookInstance create form on POST
exports.bookinstance_create_post = function(req, res){
    res.send('Not Implemented: BookInstance create POST');
};

// Display BookInstance delete form on GET
exports.bookinstance_delete_get = function(req, res){
    res.send('Not Implemented: BookInstance delete GET');
};

// Display BookInstance delete form on POST
exports.bookinstance_delete_post = function(req, res){
    res.send('Not Implemented: BookInstance delete POST');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};