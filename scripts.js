import termsData from './terms.json' with { type: 'json' };

class ClarityLearn {
    constructor() {
        this.terms = termsData;
        this.init();
    }

    init() {
        // Corrected variable names to match HTML
        this.loadingElement = document.getElementById('loading');
        this.resultContainer = document.getElementById('resultContainer');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchInput = document.getElementById('searchTerm');

        // Add event listeners
        this.searchBtn.addEventListener('click', () => this.searchTerm());
        document.querySelectorAll('.example-card').forEach(card => {
            card.addEventListener('click', (event) => this.quickSearch(event.target.textContent));
        });
    }

    searchTerm() {
        const term = this.searchInput.value.trim().toLowerCase();

        if (!term) {
            alert('Please enter a term to search for!');
            return;
        }

        this.showLoading(true);
        // Corrected lookup to use the normalized term
        const termData = this.terms[term];

        if (termData) {
            this.resultContainer.style.display = 'block';
            document.getElementById('resultTitle').innerHTML = termData.title || term.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
            document.getElementById('resultContent').innerHTML = termData.definition;
        } else {
            document.getElementById('resultContainer').style.display = 'none';
            alert('Term not found!');
        }

        this.showLoading(false);
    }

    showLoading(show) {
        this.loadingElement.style.display = show ? 'block' : 'none';
    }

    quickSearch(term) {
        this.searchInput.value = term;
        this.searchTerm();
    }

    // Function for the Copy Link button (MVP)
    copyLink() {
        alert("Copy link functionality is not yet implemented in this MVP.");
    }

    // Function for the Suggest Improvement button (MVP)
    suggestImprovement() {
        alert("Thank you for your suggestion! We'll use this feedback to improve ClarityLearn's AI-powered explanations in the future.");
    }
}

// Ensure the class is instantiated to run the code
const clarityLearn = new ClarityLearn();
