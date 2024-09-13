class EditableResume {
    private resumeData: { [key: string]: string } = {};

    constructor() {
        this.initialize();
        this.setupControls();
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

    // Set up control buttons
    private setupControls(): void {
        const shareButton = document.getElementById("share-btn");
        const downloadButton = document.getElementById("download-btn");

        shareButton?.addEventListener("click", () => this.shareResume());
        downloadButton?.addEventListener("click", () => this.downloadResume());
    }

    // Share resume function
    private shareResume(): void {
        const username = this.getUsername();
        const uniqueUrl = `https://${username}.vercel.app/resume`;

        // Copy the URL to clipboard
        navigator.clipboard.writeText(uniqueUrl).then(() => {
            alert(`Resume link copied to clipboard: ${uniqueUrl}`);
        }).catch((error) => {
            console.error('Failed to copy the link: ', error);
        });
    }

    // Download resume as PDF function
    private downloadResume(): void {
        const resumeElement = document.querySelector('.resume-container');
        if (resumeElement) {
            import('html2pdf.js').then(html2pdf => {
                html2pdf.default().from(resumeElement).save('resume.pdf');
            }).catch((error) => {
                console.error('Failed to download resume as PDF: ', error);
            });
        }
    }

    // Get the username for generating the unique URL
    private getUsername(): string {
        // Simulate fetching the username (replace with actual logic to fetch user info)
        return 'john_doe';  // Replace with dynamic username
    }
}

// Initialize the editable resume
document.addEventListener("DOMContentLoaded", () => {
    new EditableResume();
});
