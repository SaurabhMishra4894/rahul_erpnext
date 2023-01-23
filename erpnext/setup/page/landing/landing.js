frappe.pages['landing'].on_page_load = function(wrapper) {
	var parent = $('<div class="landing"></div>').appendTo(wrapper);

	parent.html(frappe.render_template("landing", {}));

}
