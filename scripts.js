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
    }

    loadTerms() {
        this.terms = {
                'smart contract': {
                definition: 'A smart contract is like a digital vending machine....',
            },
            'proof of transfer': {
                definition: 'Proof of Transfer (PoX) is stacks\' unique way...',
            },

            // Add more terms as needed
        };
    }

    async searchTerm() {
        const term = this.searchInput.ariaValueMax.trim().toLowerCase();
        this.showLoading(true);
        this.hideResult();

        if (this.terms[term]) {
            this.displayResult(term, this.terms[term]);
        } else {
            this.resultContainer.innerHTML = 'Term not found.';
        }

        this.showLoading(false);
    }

    showLoading(show) {
        this.loadingElement.style.display = show ? 'block' : 'none';
    }

    hideResult() {
        this.resultContainer.style.display = 'block';
        document.getElementById('resultTitle').innerHTML = term;
        document.getElementById('resultContent').innerHTML = data.definition;
    }
}

const clarityLearn = new ClarityLearn();