var EditableResume = /** @class */ (function () {
    function EditableResume() {
        this.resumeData = {};
        this.initialize();
    }
    // Initialize the editable fields
    EditableResume.prototype.initialize = function () {
        var _this = this;
        var editableSections = document.querySelectorAll(".editable");
        editableSections.forEach(function (section) {
            var id = section.id;
            _this.resumeData[id] = section.innerHTML;
            section.addEventListener("input", function (event) { return _this.handleEdit(event, id); });
        });
    };
    // Handle edit events
    EditableResume.prototype.handleEdit = function (event, id) {
        var target = event.target;
        this.resumeData[id] = target.innerHTML;
        console.log("".concat(id, " updated: ").concat(this.resumeData[id])); // Debugging output
    };
    return EditableResume;
}());
// Initialize the editable resume
document.addEventListener("DOMContentLoaded", function () {
    new EditableResume();
});
