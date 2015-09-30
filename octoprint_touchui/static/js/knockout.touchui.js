$(function() {
	var TouchUI = $(document).TouchUI();

	TouchUI.domLoading();

	function touchUIViewModel(viewModels) {
		var self = this;

		TouchUI.koLoading(self, viewModels);

		self.isUIActive = TouchUI.isActive;
		self.isKeyboardActive = ko.observable(TouchUI.isKeyboardActive);
		self.isHidebarActive = ko.observable(TouchUI.isHidebarActive);

		self.toggleTouchUI = function() {
			TouchUI.toggleTouch();
		}
		self.toggleKeyboard = function() {
			if(self.isUIActive) {
				self.isKeyboardActive(TouchUI.toggleKeyboard());
			}
		}
		self.toggleHidebar = function() {
			if(self.isUIActive) {
				self.isHidebarActive(TouchUI.toggleHidebar());
			}
		}

		self.onStartupComplete = function() {
			TouchUI.koReady(self, viewModels);
		}

	}

	OCTOPRINT_VIEWMODELS.push([
		touchUIViewModel,
		["terminalViewModel", "connectionViewModel", "settingsViewModel", "softwareUpdateViewModel", "controlViewModel"],
		"#usersettings_plugin_touchui"
	]);
});