class EditableResume {
    private resumeData: { [key: string]: string } = {};

    constructor() {
        this.initialize();
    }

    // Initialize the editable fields
    private initialize(): void {
        const editableSections = document.querySelectorAll(".editable");

        editableSections.forEach((section) => {
            const id = section.id;
            this.resumeData[id] = section.innerHTML;

            section.addEventListener("input", (event) => this.handleEdit(event, id));
        });
    }

    // Handle edit events
    private handleEdit(event: Event, id: string): void {
        const target = event.target as HTMLElement;
        this.resumeData[id] = target.innerHTML;
        console.log(`${id} updated: ${this.resumeData[id]}`); // Debugging output
    }
}

// Initialize the editable resume
document.addEventListener("DOMContentLoaded", () => {
    new EditableResume();
});
