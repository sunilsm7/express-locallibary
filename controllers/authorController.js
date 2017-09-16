var Author = require('../models/author');

// Display list of all Authors
exports.author_list = function(req, res){
    res.send('Not Implemented: Author List');
};

// Display detail page for a specific Author
exports.author_detail = function(req, res){
    res.send('Not Implemented : Author detail: ' + req.params.id);
};

// Display Auhtor create form on GET
exports.author_create_get = function(req, res){
    res.send('Not Implemented: Author create GET');
};

// Handle Author Create on POST
exports.author_create_post = function(req, res){
    res.send('Not Implemented: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res){
    res.send('Not Implemented: Author delete GET');
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res){
    res.send('Not Implemented: Author delete POST');
};

// Display Auhtor update form on GET
exports.author_update_get = function(req, res){
    res.send('Not Implemented: Author update GET');
};

// Display Auhtor update form on POST
exports.author_update_post = function(req, res){
    res.send('Not Implemented: Author update POST');
};