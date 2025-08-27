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
        const term = this.searchInput.value.trim();

        if (!term) {
            alert('Please enter a term to search for!');
            return;
        }

        this.showLoading(true);
        const termData = this.terms[term.toLowerCase()];

        if (termData) {
            this.resultContainer.style.display = 'block';
            document.getElementById('resultTitle').innerHTML = term;
            document.getElementById('resultContent').innerHTML = termData.definition;
        } else {
            alert('Term not found!');
        }

        this.showLoading(false);
    }

    showLoading(show) {
        this.loadingElement.style.display = show ? 'block' : 'none';
    }
}

const clarityLearn = new ClarityLearn();
