var BookInstance = require('../models/bookinstance');

// Display list of all BookInstance
exports.bookinstance_list = function(req, res, next){
    BookInstance.find()
    .populate('book')
    .exec(function(err, list_bookinstances){
        if(err) { return next(err)};
        // Successfull, so render
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances});
    
    });
};

// Display detail of  BookInstance
exports.bookinstance_detail = function(req, res, next){
    BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function (err, bookinstance){
        if(err) { return next(err); }
        // Successful, so render
        res.render('bookinstance_detail', {title:'Book:', bookinstance: bookinstance});
    });
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