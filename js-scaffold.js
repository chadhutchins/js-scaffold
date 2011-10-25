var Resource = function(controller) {
    // controller param required
    var controller = controller ? controller : false;
    if (!controller) { console.log("controller parameter required for resource"); return false; }
    
    this.controller = controller;
};
Resource.prototype = {
    index: function(callback) { 
        var type = "GET";
        var url = "/"+this.controller+".json";
        this.call(type,url,null,callback);
    },
    show: function(id,callback) {
        // id param required
        var id = id ? id : false;
        if (!id) return false;
        
        var type = "GET";
        var url = "/"+this.controller+"/"+id+".json";
        this.call(type,url,null,callback);
    },
    new: function(callback) {
        var type = "GET";
        var url = "/"+this.controller+"/new.json";
        this.call(type,url,null,callback);
    },
    edit: function(callback) {
        // this one doesn't make so much since as there isn't a default resource/:id/edit.json method
        // thoughts?
        callback(null);
    },
    create: function(data,callback) { 
        // data param required
        var data = data ? data : false;
        if (!data) return false;
        
        var type = "POST";
        var url = "/"+this.controller+".json";
        this.call(type,url,data,callback);
    },
    update: function(id,data,callback) {
        // id and data params required
        var id = id ? id : false;
        var data = data ? data : false;
        if (!id || !data) return false;
        
        var type = "PUT";
        var url = "/"+this.controller+"/"+id+".json";
        this.call(type,url,data,callback);
    },
    destroy: function(id,callback) {
        // id param required
        var id = id ? id : false;
        if (!id) return false;
        
        var type = "DELETE";
        var url = "/"+this.controller+"/"+id+".json";
        this.call(type,url,null,callback);
    },
    call: function(type,url,data,callback) {
        // type and url params required
        var type = type ? type : false;
        var url = url ? url : false;
        if (!type || !url) return false;

        // jquery currently required
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: function(data){
                callback(data);
            }
        });
    }
};

var member = new Resource('members');
