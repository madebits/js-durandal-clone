define(function (require) {
	var ko = require('knockout');
	var $ = require('jquery');

	function koIsBound(element) {
		return (!!ko.dataFor(element));   
	};
	
	function showView(viewHostId, viewUrl, koModel){
		var viewHost = $('#' + viewHostId);
		$.ajax({
            url : viewUrl,
            dataType: 'text',
            success : function (data) {
                viewHost.html(data);
				if(koModel) {
					if(koIsBound(viewHost[0])){
						ko.cleanNode(viewHost[0]);
					}
					ko.applyBindings(koModel, viewHost[0]);
				}
            }
        });
	}
	
	function showViewByConvention(viewHostId, viewName){
		var modelName = 'models/' + viewName;
		require([modelName], function(model){
			showView(viewHostId, 'app/views/' + viewName + '.html', model.model);
		});
	}
	
    return {
        showView: showView,
		showViewByConvention : showViewByConvention
    };
});