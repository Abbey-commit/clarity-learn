class ClarityLearn {
    constructor() {
        this.terms = {};
        this.init();
        this.loadTerms();
    }

    init() {
        this.loadingElement = document.getElementById('loading');
        this.resultContainer = document.getElementById('resultContainer');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchInput = document.getElementById('searchTerm');

        // Bind the searchTerm method to the search button click
        this.searchBtn.addEventListener('click', () => this.searchTerm());
    }

    loadTerms() {
        this.terms = {
            'smart contract': {
                definition: 'A smart contract is like a digital vending machine....',
            },
            'proof of transfer': {
                definition: 'Proof of Transfer (PoX) is Stacks\' unique way...',
            },
            // Add more terms as needed
        };
    }

    searchTerm() {
        const term = this.searchInput.value.trim(); // Corrected to access value

        if (!term) {
            alert('Please enter a term to search for!');
            return;
        }

        // Simulate a search operation (replace this with actual logic)
        const resultContainer = this.resultContainer;
        const termData = this.terms[term.toLowerCase()]; // Get term data

        if (termData) {
            this.showLoading(false);
            resultContainer.innerHTML = `<p>You searched for: <strong>${term}</strong></p>`;
            resultContainer.style.display = 'block'; // Show the result container
            document.getElementById('resultTitle').innerHTML = term;
            document.getElementById('resultContent').innerHTML = termData.definition;
        } else {
            alert('Term not found!');
        }
    }

    showLoading(show) {
        this.loadingElement.style.display = show ? 'block' : 'none';
    }

    hideResult() {
        this.resultContainer.style.display = 'none'; // Hide the result container
    }
}

const clarityLearn = new ClarityLearn();
