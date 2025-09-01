// script.js
import termsData from './terms.json' with { type: 'json' };

class ClarityLearn {
    constructor() {
        // Assign the imported data directly to the terms object
        this.terms = termsData;
        this.init();
    }

    init() {
        this.loadingElement = document.getElementById('loading');
        this.resultContainer = document.getElementById('resultContainer');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchInput = document.getElementById('searchTerm');

        this.searchBtn.addEventListener('click', () => this.searchTerm());

        // Add event listeners for your example cards
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
        const termData = this.terms[term];

        if (termData) {
            this.resultContainer.style.display = 'block';
            document.getElementById('resultTitle').innerHTML = termData.title || term;
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

    // Function to handle the example cards
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

const clarityLearn = new ClarityLearn();
