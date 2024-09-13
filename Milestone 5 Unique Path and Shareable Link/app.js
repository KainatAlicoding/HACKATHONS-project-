var EditableResume = /** @class */ (function () {
    function EditableResume() {
        this.resumeData = {};
        this.initialize();
        this.setupControls();
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
    // Set up control buttons
    EditableResume.prototype.setupControls = function () {
        var _this = this;
        var shareButton = document.getElementById("share-btn");
        var downloadButton = document.getElementById("download-btn");
        shareButton === null || shareButton === void 0 ? void 0 : shareButton.addEventListener("click", function () { return _this.shareResume(); });
        downloadButton === null || downloadButton === void 0 ? void 0 : downloadButton.addEventListener("click", function () { return _this.downloadResume(); });
    };
    // Share resume function
    EditableResume.prototype.shareResume = function () {
        var username = this.getUsername();
        var uniqueUrl = "https://".concat(username, ".vercel.app/resume");
        // Copy the URL to clipboard
        navigator.clipboard.writeText(uniqueUrl).then(function () {
            alert("Resume link copied to clipboard: ".concat(uniqueUrl));
        }).catch(function (error) {
            console.error('Failed to copy the link: ', error);
        });
    };
    // Download resume as PDF function
    EditableResume.prototype.downloadResume = function () {
        var resumeElement = document.querySelector('.resume-container');
        if (resumeElement) {
            Promise.resolve().then(function () { return require('html2pdf.js'); }).then(function (html2pdf) {
                html2pdf.default().from(resumeElement).save('resume.pdf');
            }).catch(function (error) {
                console.error('Failed to download resume as PDF: ', error);
            });
        }
    };
    // Get the username for generating the unique URL
    EditableResume.prototype.getUsername = function () {
        // Simulate fetching the username (replace with actual logic to fetch user info)
        return 'john_doe'; // Replace with dynamic username
    };
    return EditableResume;
}());
// Initialize the editable resume
document.addEventListener("DOMContentLoaded", function () {
    new EditableResume();
});
